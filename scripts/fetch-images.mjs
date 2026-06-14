// Fetches a freely-licensed, on-topic photo for each fact from Wikimedia,
// downloads a sized JPEG into src/assets/facts/<id>.jpg, and records
// attribution into src/data/imageCredits.json.
//
// Usage:  node scripts/fetch-images.mjs [factId ...]
// (pass specific fact ids to refetch just those; omit to fetch all)

import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')
const OUT_DIR = path.join(ROOT, 'src/assets/facts')
const CREDITS = path.join(ROOT, 'src/data/imageCredits.json')
const WIDTH = Number(process.env.IMG_WIDTH) || 1400
const UA = { 'User-Agent': 'DailyScienceApp/1.0 (educational project; denzelhu@gmail.com)' }

// fact id -> source spec. { wiki } pulls an article's lead image; { file }
// targets a specific Commons file; { search } takes the top Commons photo.
const MAP = {
  // astronomy
  'astro-venus': { wiki: 'Venus' },
  'astro-neutron': { wiki: 'Neutron star' },
  'astro-stars-sand': { wiki: 'Milky Way' },
  'astro-sun-mass': { wiki: 'Sun' },
  'astro-footprints': { file: 'File:Apollo 11 bootprint.jpg' },
  'astro-saturn-float': { wiki: 'Saturn' },
  // physics
  'phys-sunlight': { wiki: 'Crepuscular rays' },
  'phys-photon': { wiki: 'Solar prominence' },
  'phys-timehead': { wiki: 'NIST-F1' },
  'phys-quantum-tunnel': { wiki: 'Scanning tunneling microscope' },
  'phys-absolute-zero': { wiki: 'Liquid nitrogen' },
  'phys-superfluid': { wiki: 'Superfluidity' },
  // biology
  'bio-microbiome': { wiki: 'Escherichia coli' },
  'bio-octopus': { wiki: 'Octopus' },
  'bio-dna-length': { wiki: 'DNA' },
  'bio-tardigrade': { wiki: 'Tardigrade' },
  'bio-trees-network': { wiki: 'Forest' },
  'bio-banana-dna': { wiki: 'Banana' },
  // chemistry
  'chem-glass': { wiki: 'Glassblowing' },
  'chem-carbon': { wiki: 'Diamond' },
  'chem-ice-floats': { wiki: 'Iceberg' },
  'chem-gallium': { wiki: 'Gallium' },
  'chem-mpemba': { wiki: 'Ice' },
  // medicine
  'med-stomach': { wiki: 'Stomach' },
  'med-heartbeats': { wiki: 'Heart' },
  'med-cornea': { wiki: 'Human eye' },
  'med-bone': { wiki: 'Bone' },
  'med-fever': { wiki: 'Thermometer' },
  // neuroscience
  'neuro-energy': { wiki: 'Human brain' },
  'neuro-speed': { wiki: 'Pyramidal cell' },
  'neuro-gut': { wiki: 'Gastrointestinal tract' },
  'neuro-memory': { wiki: 'Hippocampus' },
  'neuro-tickle': { wiki: 'Tickling' },
}

const stripHtml = (s = '') =>
  s.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim()

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

// fetch with polite backoff on rate-limiting / transient errors
async function fetchRetry(url, tries = 5) {
  for (let i = 0; i < tries; i++) {
    const r = await fetch(url, { headers: UA })
    if (r.ok) return r
    if ((r.status === 429 || r.status >= 500) && i < tries - 1) {
      await sleep(1500 * 2 ** i)
      continue
    }
    throw new Error(`${r.status}`)
  }
}

async function jget(url) {
  const r = await fetchRetry(url)
  return r.json()
}

function fileTitleFromUploadUrl(url) {
  // Works for both /commons/x/xx/Name.jpg and /commons/thumb/x/xx/Name.jpg/...px-Name.jpg
  const m = url.match(/\/(?:commons|en)\/(?:thumb\/)?\w\/\w{2}\/([^/]+?\.\w{3,4})(?:\/|$)/i)
  if (!m) return null
  return 'File:' + decodeURIComponent(m[1])
}

async function resolveFileTitle(spec) {
  if (spec.file) return spec.file
  if (spec.search) {
    const j = await jget(
      `https://commons.wikimedia.org/w/api.php?action=query&format=json&list=search&srnamespace=6&srlimit=1&srsearch=${encodeURIComponent(
        spec.search,
      )}`,
    )
    return j?.query?.search?.[0]?.title || null
  }
  // spec.wiki -> article lead image
  const s = await jget(
    `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(spec.wiki)}`,
  )
  const src = s?.originalimage?.source || s?.thumbnail?.source
  return src ? fileTitleFromUploadUrl(src) : null
}

async function imageInfo(title) {
  const j = await jget(
    `https://commons.wikimedia.org/w/api.php?action=query&format=json&titles=${encodeURIComponent(
      title,
    )}&prop=imageinfo&iiprop=url|extmetadata|mime&iiurlwidth=${WIDTH}`,
  )
  const pages = j?.query?.pages || {}
  const page = Object.values(pages)[0]
  const info = page?.imageinfo?.[0]
  if (!info) return null
  const ex = info.extmetadata || {}
  return {
    thumburl: info.thumburl || info.url,
    mime: info.mime,
    artist: stripHtml(ex.Artist?.value) || 'Unknown',
    license: stripHtml(ex.LicenseShortName?.value) || '',
    licenseUrl: ex.LicenseUrl?.value || '',
    descUrl: info.descriptionurl || `https://commons.wikimedia.org/wiki/${encodeURIComponent(title)}`,
    title: title.replace(/^File:/, ''),
  }
}

async function download(url, dest) {
  const r = await fetchRetry(url)
  const buf = Buffer.from(await r.arrayBuffer())
  await fs.writeFile(dest, buf)
  return buf.length
}

async function main() {
  await fs.mkdir(OUT_DIR, { recursive: true })
  const only = process.argv.slice(2)
  const ids = only.length ? only : Object.keys(MAP)

  let credits = {}
  try {
    credits = JSON.parse(await fs.readFile(CREDITS, 'utf8'))
  } catch {}

  for (const id of ids) {
    const spec = MAP[id]
    if (!spec) {
      console.log(`SKIP ${id} (no mapping)`)
      continue
    }
    try {
      const title = await resolveFileTitle(spec)
      if (!title) throw new Error('no file title resolved')
      const info = await imageInfo(title)
      if (!info?.thumburl) throw new Error('no thumburl')
      if (info.mime && !/^image\/(jpeg|png|webp)/.test(info.mime)) {
        // skip SVG/diagrams etc.
        throw new Error('non-photo mime ' + info.mime)
      }
      const bytes = await download(info.thumburl, path.join(OUT_DIR, `${id}.jpg`))
      credits[id] = {
        title: info.title,
        artist: info.artist,
        license: info.license,
        licenseUrl: info.licenseUrl,
        source: info.descUrl,
      }
      console.log(
        `OK   ${id.padEnd(20)} ${(bytes / 1024).toFixed(0).padStart(4)}KB  ${info.title.slice(0, 42)}  [${info.license}]`,
      )
    } catch (e) {
      console.log(`FAIL ${id.padEnd(20)} ${e.message}`)
    }
    await sleep(500) // be polite to the API
  }

  await fs.writeFile(CREDITS, JSON.stringify(credits, null, 2) + '\n')
  console.log(`\nCredits written for ${Object.keys(credits).length} images -> ${path.relative(ROOT, CREDITS)}`)
}

main()
