import { motion } from 'framer-motion'
import Figure from './Figure.jsx'
import { FACTS } from '../data/facts.js'
import { CATEGORY_ORDER, getCategory } from '../data/categories.js'
import { getFactImage } from '../data/factImages.js'

const EASE = [0.22, 0.61, 0.36, 1]

/**
 * AdminView — a hidden review gallery of every fact, grouped by field. Lets an
 * admin scroll through the whole corpus and click any card to preview exactly
 * what a visitor sees. Each card flags whether it uses a photo or a scene.
 */
export default function AdminView({ onSelect, onExit }) {
  const photoCount = FACTS.filter((f) => getFactImage(f.id)).length

  return (
    <div className="relative mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 sm:py-14">
      <header className="flex flex-wrap items-end justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="kicker text-gradient-gold">Lumen · Admin</div>
          <h1 className="mt-3 font-display text-4xl text-white sm:text-5xl">All facts</h1>
          <p className="mt-2 text-sm text-white/50">
            {FACTS.length} facts across {CATEGORY_ORDER.length} fields ·{' '}
            {photoCount} photos, {FACTS.length - photoCount} scenes · click any to
            preview
          </p>
        </div>
        <button
          type="button"
          onClick={onExit}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-md transition-colors hover:bg-white/10"
        >
          Exit admin
        </button>
      </header>

      {CATEGORY_ORDER.map((catId) => {
        const category = getCategory(catId)
        const facts = FACTS.filter((f) => f.category === catId)
        return (
          <section key={catId} className="mt-12">
            <div className="mb-5 flex items-baseline gap-3">
              <span
                className="text-lg leading-none"
                style={{ color: category.accentSoft }}
                aria-hidden="true"
              >
                {category.glyph}
              </span>
              <h2 className="font-display text-2xl text-white">{category.label}</h2>
              <span className="text-sm text-white/35">{facts.length}</span>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {facts.map((fact) => (
                <AdminCard key={fact.id} category={category} fact={fact} onSelect={onSelect} />
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}

function AdminCard({ category, fact, onSelect }) {
  const hasPhoto = !!getFactImage(fact.id)
  return (
    <motion.button
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

      {/* admin badge: photo vs procedural scene */}
      <span
        className="absolute right-2.5 top-2.5 rounded-full px-2 py-0.5 text-[10px] font-medium tracking-wide backdrop-blur-md"
        style={{
          color: hasPhoto ? '#0b0b10' : category.accentSoft,
          background: hasPhoto ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.08)',
          border: hasPhoto ? 'none' : `1px solid ${category.accent}55`,
        }}
      >
        {hasPhoto ? 'photo' : 'scene'}
      </span>

      <div className="relative flex h-full flex-col justify-end p-4">
        <div className="kicker mb-1.5 text-[0.6rem]" style={{ color: category.accentSoft }}>
          {fact.id}
        </div>
        <p className="font-display text-[1.05rem] leading-tight text-white/95">{fact.title}</p>
      </div>
    </motion.button>
  )
}
