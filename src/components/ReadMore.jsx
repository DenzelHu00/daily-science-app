import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * ReadMore — the deeper-dive sheet. Slides up as a focused, scrollable overlay.
 * Clean reading layout with numbered key points and long-form paragraphs.
 */
export default function ReadMore({ open, fact, category, onClose }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && fact && (
        <motion.div
          className="fixed inset-0 z-40 flex items-end justify-center sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* sheet */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`More about: ${fact.title}`}
            className="glass scroll-fade relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-t-2xl px-6 pb-10 pt-6 sm:rounded-2xl sm:px-10 sm:py-9"
            initial={{ y: 48, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 48, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 320, damping: 34 }}
          >
            {/* grab handle (mobile) */}
            <div className="mx-auto mb-6 h-[3px] w-10 rounded-full bg-white/15 sm:hidden" />

            {/* category */}
            <div
              className="label-cat mb-3 flex items-center gap-2"
              style={{ color: category.accentSoft }}
            >
              <span className="text-[15px] leading-none opacity-70" aria-hidden="true">
                {category.glyph}
              </span>
              {category.label}
            </div>

            <h2 className="font-display text-2xl font-bold leading-tight tracking-[-0.015em] text-white sm:text-3xl">
              {fact.title}
            </h2>

            {/* key points */}
            <ul className="mt-7 grid gap-4">
              {fact.keyPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3.5">
                  <span
                    className="mt-0.5 text-[0.7rem] font-bold tabular-nums"
                    style={{ color: category.accent, minWidth: '1.4rem', lineHeight: 1.6 }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[0.93rem] leading-relaxed text-white/78">{point}</span>
                </li>
              ))}
            </ul>

            {/* long-form */}
            <div
              className="mt-8 space-y-4 pt-7"
              style={{ borderTop: '1px solid oklch(1 0 0 / 0.08)' }}
            >
              {fact.readMore.split('\n\n').map((para, i) => (
                <p key={i} className="text-[0.98rem] leading-[1.75] text-white/72">
                  {para}
                </p>
              ))}
            </div>

            <button
              type="button"
              onClick={onClose}
              className="mt-9 text-sm font-medium transition-opacity hover:opacity-60"
              style={{ color: 'var(--ink-muted)' }}
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
