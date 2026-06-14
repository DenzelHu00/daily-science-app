import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * ReadMore — the "deeper dive" sheet for a fact. Slides up as a focused,
 * scrollable overlay with the key points and the longer explanation.
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
          transition={{ duration: 0.3 }}
        >
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* sheet */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`More about: ${fact.title}`}
            className="glass scroll-fade relative max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl px-6 pb-10 pt-6 sm:rounded-3xl sm:px-10 sm:py-9"
            initial={{ y: 60, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 60, opacity: 0, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 260, damping: 30 }}
          >
            {/* grab handle (mobile) */}
            <div className="mx-auto mb-6 h-1.5 w-12 rounded-full bg-white/20 sm:hidden" />

            <div
              className="kicker mb-3 flex items-center gap-2"
              style={{ color: category.accentSoft }}
            >
              <span className="text-base" aria-hidden="true">
                {category.glyph}
              </span>
              {category.label} · The deeper dive
            </div>

            <h2 className="font-display text-3xl leading-tight text-white sm:text-4xl">
              {fact.title}
            </h2>

            {/* key points */}
            <ul className="mt-7 grid gap-3">
              {fact.keyPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full text-xs font-semibold"
                    style={{
                      color: category.accentSoft,
                      background: 'rgba(255,255,255,0.06)',
                      border: `1px solid ${category.accent}55`,
                    }}
                  >
                    {i + 1}
                  </span>
                  <span className="text-[0.95rem] leading-relaxed text-white/80">{point}</span>
                </li>
              ))}
            </ul>

            {/* long-form */}
            <div className="mt-8 space-y-4 border-t border-white/10 pt-7">
              {fact.readMore.split('\n\n').map((para, i) => (
                <p key={i} className="text-[1.02rem] leading-relaxed text-white/75">
                  {para}
                </p>
              ))}
            </div>

            <button
              type="button"
              onClick={onClose}
              className="mt-9 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-ink-900 transition-transform hover:scale-[1.03] active:scale-95"
              style={{ background: category.accentSoft }}
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
