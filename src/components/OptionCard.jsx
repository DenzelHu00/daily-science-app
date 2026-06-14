import { motion } from 'framer-motion'
import Figure from './Figure.jsx'

const EASE = [0.22, 0.61, 0.36, 1]
const DOOR_EASE = [0.76, 0, 0.24, 1]

/**
 * OptionCard — one of the three daily "doors."
 * Enters via a curtain-rise reveal: a solid panel slides upward to uncover
 * the image, staggered per card. Hover illuminates an inset ring.
 */
export default function OptionCard({ option, index, onSelect }) {
  const { category, fact } = option

  return (
    <motion.div
      className="flex min-h-[22rem] flex-col overflow-hidden sm:min-h-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.01, delay: 0.1 * index + 0.1 }}
    >
      <motion.button
        type="button"
        onClick={() => onSelect(fact.id)}
        aria-label={`${category.label}: reveal today's fact`}
        className="group relative flex flex-1 flex-col overflow-hidden text-left outline-none focus-visible:ring-2 focus-visible:ring-white/40"
        whileTap={{ scale: 0.995 }}
        transition={{ duration: 0.12 }}
      >
        {/* image / scene */}
        <div className="absolute inset-0">
          <Figure category={category} fact={fact} className="h-full w-full" />
        </div>

        {/* depth scrims */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/90" />

        {/* category label — top left */}
        <div
          className="relative flex items-center gap-2 px-5 pt-5"
          style={{ color: category.accentSoft }}
        >
          <span className="label-cat">{category.label}</span>
          <span className="text-[15px] leading-none opacity-60" aria-hidden="true">
            {category.glyph}
          </span>
        </div>

        {/* teaser + CTA — pinned to bottom */}
        <div className="relative mt-auto px-5 pb-5 pt-10">
          <p className="font-display text-[1.3rem] font-semibold leading-[1.2] tracking-[-0.015em] text-white/95 sm:text-[1.35rem]">
            {fact.teaser}
          </p>
          <span
            className="mt-4 inline-flex items-center gap-1.5 text-[0.7rem] font-medium uppercase tracking-[0.14em] transition-[gap] duration-300 group-hover:gap-2.5"
            style={{ color: category.accentSoft }}
          >
            Reveal
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>

        {/* hover ring — inset, no layout shift */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ boxShadow: `inset 0 0 0 2px ${category.accent}` }}
          aria-hidden="true"
        />

        {/* door curtain — slides up to reveal the card */}
        <motion.div
          className="pointer-events-none absolute inset-0 origin-top"
          style={{ background: 'var(--surface, #0a0a0f)' }}
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          transition={{ delay: 0.1 * index + 0.2, duration: 0.9, ease: DOOR_EASE }}
          aria-hidden="true"
        />
      </motion.button>
    </motion.div>
  )
}
