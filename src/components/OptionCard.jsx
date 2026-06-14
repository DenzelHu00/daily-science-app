import { motion } from 'framer-motion'
import Figure from './Figure.jsx'

const EASE = [0.22, 0.61, 0.36, 1]

/**
 * OptionCard — one of the three daily "doors". Shows a teaser (no spoiler) over
 * the category's scene. The inner figure carries a shared layoutId so that, on
 * selection, it morphs seamlessly into the full-bleed fact hero.
 */
export default function OptionCard({ option, index, onSelect }) {
  const { category, fact } = option

  return (
    <motion.button
      type="button"
      onClick={() => onSelect(fact.id)}
      className="group relative aspect-[3/4] w-full overflow-hidden rounded-[1.75rem] text-left outline-none transition-shadow duration-500 focus-visible:ring-2 focus-visible:ring-white/60 sm:aspect-auto sm:h-[clamp(22rem,46vh,34rem)]"
      initial={{ opacity: 0, y: 42 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.12 * index + 0.1, duration: 0.7, ease: EASE }}
      whileHover={{ y: -10 }}
      whileTap={{ scale: 0.985 }}
      style={{
        '--accent': category.accent,
        '--accent-soft': category.accentSoft,
        boxShadow: '0 18px 50px -28px rgba(0,0,0,0.9)',
      }}
    >
      {/* morphing image surface */}
      <motion.div
        layoutId={`fig-${fact.id}`}
        className="absolute inset-0"
        transition={{ type: 'spring', stiffness: 170, damping: 26 }}
      >
        <Figure category={category} scene={fact.scene} className="h-full w-full" />
      </motion.div>

      {/* legibility scrim */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/45 to-transparent" />

      {/* hover ring + accent glow */}
      <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] ring-1 ring-white/10 transition-all duration-500 group-hover:ring-2 group-hover:ring-white/25 group-hover:shadow-[0_40px_90px_-30px_var(--accent)]" />

      {/* content */}
      <div className="relative flex h-full flex-col justify-between p-6 sm:p-7">
        <div className="flex items-center gap-2" style={{ color: category.accentSoft }}>
          <span className="text-lg leading-none" aria-hidden="true">
            {category.glyph}
          </span>
          <span className="kicker">{category.label}</span>
        </div>

        <div>
          <p className="font-display text-[1.6rem] leading-snug text-white/95 sm:text-[1.75rem]">
            {fact.teaser}
          </p>
          <span
            className="mt-5 inline-flex items-center gap-2 text-sm font-medium transition-transform duration-300 group-hover:gap-3"
            style={{ color: category.accentSoft }}
          >
            Reveal today&rsquo;s fact
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
    </motion.button>
  )
}
