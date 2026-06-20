// Bookmarked facts persist to localStorage as a plain array of fact ids.
const STORAGE_KEY = 'lumen-bookmarks'

export function loadBookmarks() {
  if (typeof window === 'undefined') return new Set()
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return new Set()
    return new Set(JSON.parse(raw))
  } catch {
    return new Set()
  }
}

export function saveBookmarks(ids) {
  if (typeof window === 'undefined') return
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify([...ids]))
}
