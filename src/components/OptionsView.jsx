import { motion } from 'framer-motion'
import OptionCard from './OptionCard.jsx'
import { keepGpuLayer } from '../lib/motion.js'

const EASE = [0.22, 0.61, 0.36, 1]

/**
 * OptionsView — the daily landing: a minimal masthead, a headline, and three
 * joined panels — one per science field — that together form the "three doors."
 */
export default function OptionsView({
  selection,
  onSelect,
  revealedIds,
  onReveal,
  onOpenBookmarks,
  bookmarkCount = 0,
}) {
  return (
    <motion.div
      key="options"
      className="vignette mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-8 sm:px-6 sm:py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(4px)' }}
      transition={{ duration: 0.5, ease: EASE }}
      transformTemplate={keepGpuLayer}
    >
      {/* top bar */}
      <motion.header
        className="mb-8 flex items-baseline justify-between sm:mb-10"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: EASE }}
        transformTemplate={keepGpuLayer}
      >
        <span className="label-cat" style={{ color: 'var(--cobalt)' }}>
          Lumen
        </span>
        <div className="flex items-center gap-4">
          <span
            className="label-cat"
            style={{ color: 'var(--ink-muted)', letterSpacing: '0.12em' }}
          >
            {selection.dateLabel}
          </span>
          <button
            type="button"
            onClick={onOpenBookmarks}
            aria-label="Saved facts"
            className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors"
            style={{
              borderColor: 'var(--border)',
              color: 'var(--ink-muted)',
              background: 'var(--surface)',
            }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M6 3.5h12a1 1 0 0 1 1 1V21l-7-4.2L5 21V4.5a1 1 0 0 1 1-1Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
            </svg>
            {bookmarkCount > 0 ? bookmarkCount : 'Saved'}
          </button>
        </div>
      </motion.header>

      {/* headline */}
      <motion.div
        className="mb-8 sm:mb-10"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.07, duration: 0.6, ease: EASE }}
        transformTemplate={keepGpuLayer}
      >
        <h1
          className="font-display font-black leading-[0.95] tracking-[-0.02em]"
          style={{
            color: 'var(--ink)',
            fontSize: 'clamp(3rem, 8vw, 5.5rem)',
          }}
        >
          Three doors.
        </h1>
        <p
          className="mt-4 max-w-xs text-sm font-light leading-relaxed sm:text-base"
          style={{ color: 'var(--ink-muted)' }}
        >
          One fact waits behind each field. Choose to reveal it.
        </p>
      </motion.div>

      {/* the three door panels — joined with a hair-thin separator */}
      <div
        className="grid min-h-[18rem] flex-1 grid-cols-1 overflow-hidden rounded-xl sm:min-h-0 sm:grid-cols-3"
        style={{ gap: '2px', background: 'var(--border)' }}
      >
        {selection.options.map((option, i) => (
          <OptionCard
            key={option.fact.id}
            option={option}
            index={i}
            onSelect={onSelect}
            initiallyRevealed={revealedIds?.has(option.fact.id)}
            onReveal={onReveal}
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
        transformTemplate={keepGpuLayer}
      >
        A new trio arrives every day
      </motion.p>
    </motion.div>
  )
}
