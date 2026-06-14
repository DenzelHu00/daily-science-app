// Fetches an on-topic photo for each fact from Pixabay, downloads it into
// src/assets/facts/<id>.jpg, and records attribution into imageCredits.json.
//
// Requires a free Pixabay API key (https://pixabay.com/api/docs/):
//   export PIXABAY_API_KEY=xxxxxxxx
//
// Usage:  node scripts/fetch-images.mjs [factId ...]
//   (pass specific fact ids to refetch just those; omit to fetch all)
//
// Facts not listed in MAP — or whose search returns nothing suitable — have no
// photo and fall back to the app's procedural <Scene>.

import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')
const OUT_DIR = path.join(ROOT, 'src/assets/facts')
const CREDITS = path.join(ROOT, 'src/data/imageCredits.json')
const MIN_WIDTH = 1200
const KEY = process.env.PIXABAY_API_KEY

// fact id -> Pixabay search query (tuned for a relevant, cinematic result).
const MAP = {
  // astronomy
  'astro-venus': 'venus planet',
  'astro-neutron': 'nebula space',
  'astro-stars-sand': 'milky way galaxy stars',
  'astro-sun-mass': 'sun sky',
  'astro-footprints': 'astronaut moon',
  'astro-saturn-float': 'saturn planet',
  // physics
  'phys-sunlight': 'sun rays sky',
  'phys-photon': 'sun solar',
  'phys-timehead': 'clock time',
  'phys-quantum-tunnel': 'quantum physics abstract',
  'phys-absolute-zero': 'frost ice blue',
  'phys-superfluid': 'blue liquid splash',
  // biology
  'bio-microbiome': 'bacteria microbiology',
  'bio-octopus': 'octopus',
  'bio-dna-length': 'dna helix',
  'bio-tardigrade': 'microscope organism',
  'bio-trees-network': 'forest trees',
  'bio-banana-dna': 'bananas',
  // chemistry
  'chem-glass': 'molten glass blowing',
  'chem-carbon': 'diamond',
  'chem-ice-floats': 'iceberg',
  'chem-gallium': 'liquid metal',
  'chem-mpemba': 'ice cubes',
  // medicine
  'med-stomach': 'stomach anatomy',
  'med-heartbeats': 'human heart anatomy',
  'med-cornea': 'human eye macro',
  'med-bone': 'skeleton bones',
  'med-fever': 'thermometer fever',
  // neuroscience
  'neuro-energy': 'human brain',
  'neuro-speed': 'neuron nerve cells',
  'neuro-gut': 'intestine anatomy',
  'neuro-memory': 'brain mind abstract',
  'neuro-tickle': 'feather',
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

async function fetchRetry(url, tries = 5) {
  for (let i = 0; i < tries; i++) {
    const r = await fetch(url, { headers: { 'User-Agent': 'DailyScienceApp/1.0' } })
    if (r.ok) return r
    if ((r.status === 429 || r.status >= 500) && i < tries - 1) {
      await sleep(2000 * 2 ** i)
      continue
    }
    throw new Error(`${r.status}`)
  }
}

async function search(query) {
  const url =
    `https://pixabay.com/api/?key=${KEY}` +
    `&q=${encodeURIComponent(query)}` +
    `&image_type=photo&orientation=horizontal&safesearch=true&order=popular&per_page=30`
  const j = await (await fetchRetry(url)).json()
  const hits = j.hits || []
  // Prefer a sufficiently large image; otherwise take the most popular hit.
  return hits.find((h) => h.imageWidth >= MIN_WIDTH) || hits[0] || null
}

async function download(url, dest) {
  const r = await fetchRetry(url)
  const buf = Buffer.from(await r.arrayBuffer())
  await fs.writeFile(dest, buf)
  return buf.length
}

async function main() {
  if (!KEY) {
    console.error('Missing PIXABAY_API_KEY. Get one at https://pixabay.com/api/docs/')
    process.exit(1)
  }
  await fs.mkdir(OUT_DIR, { recursive: true })
  const only = process.argv.slice(2)
  const ids = only.length ? only : Object.keys(MAP)

  let credits = {}
  try {
    credits = JSON.parse(await fs.readFile(CREDITS, 'utf8'))
  } catch {}

  for (const id of ids) {
    const query = MAP[id]
    if (!query) {
      console.log(`SKIP ${id} (no mapping)`)
      continue
    }
    try {
      const hit = await search(query)
      if (!hit) throw new Error('no results')
      const bytes = await download(hit.largeImageURL, path.join(OUT_DIR, `${id}.jpg`))
      credits[id] = {
        author: hit.user,
        sourceName: 'Pixabay',
        sourceUrl: hit.pageURL,
        license: 'Pixabay License',
        query,
      }
      console.log(
        `OK   ${id.padEnd(20)} ${(bytes / 1024).toFixed(0).padStart(4)}KB  ${hit.imageWidth}px  by ${hit.user}  («${query}»)`,
      )
    } catch (e) {
      console.log(`FAIL ${id.padEnd(20)} ${e.message}  («${query}»)`)
    }
    await sleep(350) // be polite to the API
  }

  await fs.writeFile(CREDITS, JSON.stringify(credits, null, 2) + '\n')
  console.log(`\nCredits written for ${Object.keys(credits).length} images -> ${path.relative(ROOT, CREDITS)}`)
}

main()
