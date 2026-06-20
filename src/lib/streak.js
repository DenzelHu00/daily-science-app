// Daily streak tracking — counts consecutive calendar days on which the
// visitor revealed at least one fact. Persists to localStorage, mirroring
// the bookmarks store.
import { dateKey } from './daily.js'

const STORAGE_KEY = 'lumen-streak'

function yesterdayKey(date) {
  const d = new Date(date)
  d.setDate(d.getDate() - 1)
  return dateKey(d)
}

export function loadStreak() {
  if (typeof window === 'undefined') return { count: 0, lastDateKey: null }
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return { count: 0, lastDateKey: null }
    const parsed = JSON.parse(raw)
    return { count: parsed.count ?? 0, lastDateKey: parsed.lastDateKey ?? null }
  } catch {
    return { count: 0, lastDateKey: null }
  }
}

function saveStreak(streak) {
  if (typeof window === 'undefined') return
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(streak))
}

// Call the first time a visitor reveals a fact on a given day. No-ops (and
// returns the unchanged streak) on any later reveal that same day.
export function recordActivity(date = new Date()) {
  const today = dateKey(date)
  const current = loadStreak()
  if (current.lastDateKey === today) return current

  const count = current.lastDateKey === yesterdayKey(date) ? current.count + 1 : 1
  const next = { count, lastDateKey: today }
  saveStreak(next)
  return next
}
