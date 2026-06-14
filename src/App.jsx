import { useCallback, useEffect, useMemo, useState } from 'react'
import Atmosphere from './components/Atmosphere.jsx'
import OptionsView from './components/OptionsView.jsx'
import AdminView from './components/AdminView.jsx'
import FactView from './components/FactView.jsx'
import { getDailySelection, dateKey } from './lib/daily.js'
import { getFactById } from './data/facts.js'
import { getCategory } from './data/categories.js'

// Admin mode is a hidden review gallery, gated behind ?admin (or #admin) and
// toggleable with Shift+A. It isn't real authentication — it just unlocks
// browsing the full corpus of (public) facts.
function readAdmin() {
  if (typeof window === 'undefined') return false
  const params = new URLSearchParams(window.location.search)
  return params.has('admin') || window.location.hash.replace('#', '') === 'admin'
}

function syncAdminUrl(on) {
  const url = new URL(window.location.href)
  if (on) {
    url.searchParams.set('admin', '1')
  } else {
    url.searchParams.delete('admin')
    if (url.hash === '#admin') url.hash = ''
  }
  window.history.replaceState({}, '', url)
}

export default function App() {
  const [selection, setSelection] = useState(() => getDailySelection())
  const [selectedId, setSelectedId] = useState(null)
  const [admin, setAdmin] = useState(readAdmin)

  // Refresh the daily trio automatically when the local calendar day rolls
  // over while the app is left open.
  useEffect(() => {
    const tick = setInterval(() => {
      if (dateKey() !== selection.key) {
        setSelection(getDailySelection())
        setSelectedId(null)
      }
    }, 60_000)
    return () => clearInterval(tick)
  }, [selection.key])

  const toggleAdmin = useCallback(() => {
    setSelectedId(null)
    setAdmin((prev) => {
      const next = !prev
      syncAdminUrl(next)
      window.scrollTo(0, 0)
      return next
    })
  }, [])

  // Shift+A toggles the admin gallery from anywhere.
  useEffect(() => {
    const onKey = (e) => {
      if (e.code === 'KeyA' && e.shiftKey && !e.ctrlKey && !e.metaKey && !e.altKey) {
        e.preventDefault()
        toggleAdmin()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [toggleAdmin])

  const selected = useMemo(() => {
    if (!selectedId) return null
    const fact = getFactById(selectedId)
    if (!fact) return null
    return { fact, category: getCategory(fact.category) }
  }, [selectedId])

  return (
    <div className="grain vignette relative min-h-screen overflow-x-hidden">
      <Atmosphere />

      {selected ? (
        <FactView
          key={selected.fact.id}
          fact={selected.fact}
          category={selected.category}
          onBack={() => setSelectedId(null)}
          backLabel={admin ? 'All facts' : 'Choose another'}
        />
      ) : admin ? (
        <AdminView onSelect={setSelectedId} onExit={toggleAdmin} />
      ) : (
        <OptionsView selection={selection} onSelect={setSelectedId} />
      )}
    </div>
  )
}
