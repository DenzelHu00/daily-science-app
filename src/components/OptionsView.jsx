import { motion } from 'framer-motion'
import OptionCard from './OptionCard.jsx'

const EASE = [0.22, 0.61, 0.36, 1]

/**
 * OptionsView — the daily landing: a minimal masthead, a headline, and three
 * joined panels — one per science field — that together form the "three doors."
 */
export default function OptionsView({ selection, onSelect }) {
  return (
    <motion.div
      key="options"
      className="vignette mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-8 sm:px-6 sm:py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(4px)' }}
      transition={{ duration: 0.5, ease: EASE }}
    >
      {/* top bar */}
      <motion.header
        className="mb-8 flex items-baseline justify-between sm:mb-10"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: EASE }}
      >
        <span className="label-cat" style={{ color: 'var(--cobalt)' }}>
          Lumen
        </span>
        <span
          className="label-cat"
          style={{ color: 'var(--ink-muted)', letterSpacing: '0.12em' }}
        >
          {selection.dateLabel}
        </span>
      </motion.header>

      {/* headline */}
      <motion.div
        className="mb-8 sm:mb-10"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.07, duration: 0.6, ease: EASE }}
      >
        <h1
          className="font-display text-[2.5rem] font-bold leading-none tracking-[-0.02em] sm:text-[3.4rem]"
          style={{ color: 'var(--ink)' }}
        >
          Three doors.
        </h1>
        <p
          className="mt-3 max-w-xs text-sm leading-relaxed sm:text-base"
          style={{ color: 'var(--ink-muted)' }}
        >
          One fact waits behind each field. Choose to reveal it.
        </p>
      </motion.div>

      {/* the three door panels — joined with a hair-thin separator */}
      <div
        className="grid min-h-[18rem] flex-1 grid-cols-1 overflow-hidden rounded-xl sm:min-h-0 sm:grid-cols-3"
        style={{ gap: '1.5px', background: 'var(--border-subtle)' }}
      >
        {selection.options.map((option, i) => (
          <OptionCard
            key={option.fact.id}
            option={option}
            index={i}
            onSelect={onSelect}
          />
        ))}
      </div>

      {/* footer */}
      <motion.p
        className="mt-6 text-center text-[10px] uppercase tracking-[0.16em]"
        style={{ color: 'var(--ink-faint)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.55, duration: 0.8 }}
      >
        A new trio arrives every day
      </motion.p>
    </motion.div>
  )
}
