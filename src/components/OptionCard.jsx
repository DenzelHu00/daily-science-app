import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Figure from './Figure.jsx'
import { keepGpuLayer } from '../lib/motion.js'

const EASE = [0.22, 0.61, 0.36, 1]
const SPLIT_EASE = [0.9, 0, 0.1, 1]

export default function OptionCard({ option, index, onSelect, initiallyRevealed, onReveal }) {
  const { category, fact } = option
  const [phase, setPhase] = useState(initiallyRevealed ? 'open' : 'closed')

  function handleClick() {
    if (phase === 'open') {
      onSelect(fact.id)
      return
    }
    if (phase !== 'closed') return
    setPhase('cracking')
    setTimeout(() => {
      setPhase('open')
      onReveal?.(fact.id)
    }, 220)
  }

  return (
    <motion.div
      className="flex min-h-[22rem] flex-col overflow-hidden sm:min-h-0"
      style={{ outline: '1.5px solid var(--border)', outlineOffset: '-1px' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.08 * index + 0.15, ease: EASE }}
    >
      <motion.button
        type="button"
        onClick={handleClick}
        aria-label={`${category.label}: reveal today's fact`}
        className="group relative flex flex-1 flex-col overflow-hidden text-left outline-none focus-visible:ring-2 focus-visible:ring-white/40"
        whileTap={phase === 'closed' ? { scale: 0.99 } : {}}
        transition={{ duration: 0.12 }}
      >
        {/* ── Image + scrims ────────────────────────────────────── */}
        <div className="absolute inset-0">
          <Figure category={category} fact={fact} className="h-full w-full" priority />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/90" />

        {/* ── Teaser + CTA (behind door panels, z 10) ──────────── */}
        <div className="relative mt-auto px-5 pb-5 pt-10" style={{ zIndex: 10 }}>
          <p className="font-display text-[1.3rem] font-semibold leading-[1.2] tracking-[-0.015em] text-white/95 sm:text-[1.35rem]">
            {fact.teaser}
          </p>
          <span
            className="mt-4 inline-flex items-center gap-1.5 text-[0.7rem] font-medium uppercase tracking-[0.14em]"
            style={{ color: category.accentSoft }}
          >
            Reveal
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>

        {/* ── Door panels (z 20) ───────────────────────────────── */}
        <motion.div
          className="pointer-events-none absolute inset-y-0 left-0 w-1/2"
          style={{ background: '#06060c', zIndex: 20 }}
          animate={phase === 'open' ? { x: '-100%' } : { x: 0 }}
          transition={{ duration: 0.62, ease: SPLIT_EASE }}
          aria-hidden="true"
        />
        <motion.div
          className="pointer-events-none absolute inset-y-0 right-0 w-1/2"
          style={{ background: '#06060c', zIndex: 20 }}
          animate={phase === 'open' ? { x: '100%' } : { x: 0 }}
          transition={{ duration: 0.62, ease: SPLIT_EASE }}
          aria-hidden="true"
        />

        {/* ── Accent glow — light pooling at the base of each door (z 21) ── */}
        {/* Outer wrapper: CSS hover intensification. Inner: Framer open-fade. */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 opacity-60 transition-opacity duration-700 group-hover:opacity-100"
          style={{ height: '70%', zIndex: 21 }}
          aria-hidden="true"
        >
          <motion.div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(ellipse 75% 90% at 50% 100%, ${category.accent}38 0%, transparent 65%)`,
            }}
            animate={phase === 'open' ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.45 }}
          />
        </div>

        {/* ── Centre closed-state identity (z 25) ──────────────── */}
        {/* Large glyph + category label centred in the door.     */}
        <AnimatePresence>
          {phase === 'closed' && (
            <motion.div
              key="centre-id"
              className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-4"
              style={{ zIndex: 25 }}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6, scale: 0.94 }}
              transition={{ duration: 0.25, ease: EASE }}
              transformTemplate={keepGpuLayer}
              aria-hidden="true"
            >
              <span
                style={{
                  fontFamily: 'inherit',
                  fontSize: '3rem',
                  lineHeight: 1,
                  color: category.accentSoft,
                  opacity: 0.85,
                  filter: `drop-shadow(0 0 18px ${category.accent}80)`,
                }}
              >
                {category.glyph}
              </span>
              <span
                className="label-cat"
                style={{ color: category.accentSoft, letterSpacing: '0.22em', opacity: 0.9 }}
              >
                {category.label}
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── CRACK (z 30) ─────────────────────────────────────── */}
        <AnimatePresence>
          {(phase === 'cracking' || phase === 'open') && (
            <motion.div
              key="crack"
              className="pointer-events-none absolute inset-y-0 left-1/2 w-[2px] -translate-x-px"
              style={{
                zIndex: 30,
                background: `linear-gradient(to bottom, transparent 0%, ${category.accent} 20%, white 50%, ${category.accent} 80%, transparent 100%)`,
                boxShadow: `0 0 6px 2px ${category.accent}, 0 0 22px 8px ${category.accent}88`,
              }}
              initial={{ scaleY: 0, opacity: 0 }}
              animate={phase === 'open' ? { scaleY: 0, opacity: 0 } : { scaleY: 1, opacity: 1 }}
              exit={{ scaleY: 0, opacity: 0 }}
              transition={
                phase === 'cracking'
                  ? { duration: 0.15, ease: [0.2, 0, 0.8, 1] }
                  : { duration: 0.18, ease: EASE }
              }
              aria-hidden="true"
            />
          )}
        </AnimatePresence>

        {/* ── Top-left category label — fades in once open (z 30) ─ */}
        <motion.div
          className="absolute left-0 top-0 flex items-center gap-2 px-5 pt-5"
          style={{ color: category.accentSoft, zIndex: 30 }}
          animate={phase === 'open' ? { opacity: 1 } : { opacity: 0 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.35, delay: phase === 'open' ? 0.42 : 0 }}
          aria-hidden="true"
        >
          <span className="label-cat">{category.label}</span>
          <span className="text-[15px] leading-none opacity-60">{category.glyph}</span>
        </motion.div>

        {/* ── Hover ring (z 40) ────────────────────────────────── */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ boxShadow: `inset 0 0 0 2px ${category.accent}`, zIndex: 40 }}
          aria-hidden="true"
        />
      </motion.button>
    </motion.div>
  )
}
