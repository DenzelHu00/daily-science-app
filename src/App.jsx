import { useEffect, useMemo, useState } from 'react'
import { LayoutGroup } from 'framer-motion'
import Atmosphere from './components/Atmosphere.jsx'
import OptionsView from './components/OptionsView.jsx'
import FactView from './components/FactView.jsx'
import { getDailySelection, dateKey } from './lib/daily.js'
import { getFactById } from './data/facts.js'
import { getCategory } from './data/categories.js'

export default function App() {
  const [selection, setSelection] = useState(() => getDailySelection())
  const [selectedId, setSelectedId] = useState(null)

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

  const selected = useMemo(() => {
    if (!selectedId) return null
    const fact = getFactById(selectedId)
    if (!fact) return null
    return { fact, category: getCategory(fact.category) }
  }, [selectedId])

  return (
    <div className="grain vignette relative min-h-screen overflow-hidden">
      <Atmosphere />

      <LayoutGroup>
        {selected ? (
          <FactView
            key={selected.fact.id}
            fact={selected.fact}
            category={selected.category}
            onBack={() => setSelectedId(null)}
          />
        ) : (
          <OptionsView selection={selection} onSelect={setSelectedId} />
        )}
      </LayoutGroup>
    </div>
  )
}
