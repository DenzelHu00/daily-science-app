import { motion } from 'framer-motion'
import Figure from './Figure.jsx'
import { FACTS } from '../data/facts.js'
import { getCategory } from '../data/categories.js'

const EASE = [0.22, 0.61, 0.36, 1]

/**
 * BookmarksView — the facts a visitor has starred, in one place.
 */
export default function BookmarksView({ bookmarkedIds, onSelect, onExit }) {
  const facts = FACTS.filter((f) => bookmarkedIds.has(f.id))

  return (
    <motion.div
      key="bookmarks"
      className="relative mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 sm:py-14"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(4px)' }}
      transition={{ duration: 0.5, ease: EASE }}
    >
      <header className="flex flex-wrap items-end justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <span className="label-cat" style={{ color: 'var(--amber)' }}>
            Lumen · Bookmarks
          </span>
          <h1 className="mt-3 font-display text-4xl text-white sm:text-5xl">Saved facts</h1>
          <p className="mt-2 text-sm text-white/50">
            {facts.length === 0
              ? 'Nothing saved yet — tap the bookmark icon on a fact to keep it here.'
              : `${facts.length} fact${facts.length === 1 ? '' : 's'} saved`}
          </p>
        </div>
        <button
          type="button"
          onClick={onExit}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-md transition-colors hover:bg-white/10"
        >
          Back
        </button>
      </header>

      {facts.length > 0 && (
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {facts.map((fact) => {
            const category = getCategory(fact.category)
            return (
              <motion.button
                key={fact.id}
                type="button"
                onClick={() => onSelect(fact.id)}
                className="group relative aspect-[4/5] w-full overflow-hidden rounded-2xl text-left outline-none ring-1 ring-white/10 transition-shadow duration-300 hover:ring-2 hover:ring-white/25 focus-visible:ring-2 focus-visible:ring-white/60"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: EASE }}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0">
                  <Figure category={category} fact={fact} className="h-full w-full" />
                </div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent" />
                <div className="relative flex h-full flex-col justify-end p-4">
                  <div
                    className="kicker mb-1.5 text-[0.6rem]"
                    style={{ color: category.accentSoft }}
                  >
                    {category.label}
                  </div>
                  <p className="font-display text-[1.05rem] leading-tight text-white/95">
                    {fact.title}
                  </p>
                </div>
              </motion.button>
            )
          })}
        </div>
      )}
    </motion.div>
  )
}
