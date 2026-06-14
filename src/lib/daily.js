// Deterministic "fact of the day" engine.
//
// The whole app refreshes once per calendar day. Given a date we derive a
// stable seed, then use it to (a) choose three distinct science categories and
// (b) choose one fact within each. Because everything flows from the date,
// every visitor sees the same three options on the same day, and the set
// rotates automatically at local midnight — no backend required.

import { CATEGORY_ORDER } from '../data/categories.js'
import { FACTS_BY_CATEGORY } from '../data/facts.js'

const NUM_OPTIONS = 3

// Build an integer key like 20260614 from a Date's local Y/M/D.
export function dateKey(date = new Date()) {
  const y = date.getFullYear()
  const m = date.getMonth() + 1
  const d = date.getDate()
  return y * 10000 + m * 100 + d
}

// mulberry32 — a tiny, fast, well-distributed seeded PRNG.
function mulberry32(seed) {
  let a = seed >>> 0
  return function () {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

// In-place-safe Fisher–Yates shuffle driven by a seeded rng.
function seededShuffle(input, rng) {
  const arr = [...input]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

// A pleasant, human "Saturday, 14 June 2026" style label.
export function formatDate(date = new Date()) {
  return date.toLocaleDateString(undefined, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

/**
 * Returns the daily selection for a given date:
 *   {
 *     key,            // 20260614
 *     dateLabel,      // "Saturday, 14 June 2026"
 *     categories,     // [catId, catId, catId] (today's highlighted trio)
 *     options: [ { category, fact }, ... ]   // the three choosable doors
 *   }
 */
export function getDailySelection(date = new Date()) {
  const key = dateKey(date)
  const rng = mulberry32(key)

  // Pick three distinct categories for today.
  const chosenCategories = seededShuffle(CATEGORY_ORDER, rng).slice(0, NUM_OPTIONS)

  // For each chosen category, deterministically pick one fact for today.
  const options = chosenCategories.map((category) => {
    const pool = FACTS_BY_CATEGORY[category] || []
    const fact = pool[Math.floor(rng() * pool.length)]
    return { category, fact }
  })

  // Shuffle the *display order* of the doors so the same category isn't
  // always in the same slot day to day.
  const displayOrder = seededShuffle(options, rng)

  return {
    key,
    dateLabel: formatDate(date),
    categories: chosenCategories,
    options: displayOrder,
  }
}
