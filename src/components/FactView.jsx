import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Figure from './Figure.jsx'
import ReadMore from './ReadMore.jsx'
import { getImageCredit } from '../data/factImages.js'

const EASE = [0.22, 0.61, 0.36, 1]

/**
 * FactView — the revealed fact of the day. Full-bleed cinematic hero with the
 * explanation anchored to the lower third and a "read more" deep-dive sheet.
 */
export default function FactView({
  category,
  fact,
  onBack,
  backLabel = 'Choose another',
  bookmarked = false,
  onToggleBookmark,
}) {
  const [readMore, setReadMore] = useState(false)
  const credit = getImageCredit(fact.id)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape' && !readMore) onBack()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onBack, readMore])

  return (
    <div className="vignette relative min-h-screen w-full">
      {/* full-bleed background — static so scrims are fully in place on open */}
      <div className="fixed inset-0">
        <Figure category={category} fact={fact} className="h-full w-full" />
      </div>

      {/* legibility scrims — outside the morphing Figure so they're immediate */}
      <div className="pointer-events-none fixed inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/15" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(110%_80%_at_50%_0%,transparent_40%,oklch(0_0_0/0.50)_100%)]" />

      {/* content */}
      <div className="relative mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-between px-5 py-8 sm:px-8 sm:py-10">
        {/* top bar */}
        <motion.div
          className="flex items-center justify-between"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22, duration: 0.55, ease: EASE }}
        >
          <button
            type="button"
            onClick={onBack}
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-medium text-white/70 backdrop-blur-sm transition-colors hover:bg-white/[0.10]"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M19 12H5M11 6l-6 6 6 6"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {backLabel}
          </button>

          <div className="flex items-center gap-3">
            <span className="label-cat hidden text-white/40 sm:block">Fact of the day</span>
            <button
              type="button"
              onClick={() => onToggleBookmark?.(fact.id)}
              aria-pressed={bookmarked}
              aria-label={bookmarked ? 'Remove bookmark' : 'Bookmark this fact'}
              className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white/70 backdrop-blur-sm transition-colors hover:bg-white/[0.10]"
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill={bookmarked ? 'currentColor' : 'none'}
                aria-hidden="true"
                style={{ color: bookmarked ? category.accentSoft : undefined }}
              >
                <path
                  d="M6 3.5h12a1 1 0 0 1 1 1V21l-7-4.2L5 21V4.5a1 1 0 0 1 1-1Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </motion.div>

        {/* fact — anchored to the lower third */}
        <motion.article
          className="mb-2 max-w-3xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.32, duration: 0.65, ease: EASE }}
        >
          <div
            className="label-cat mb-4 flex items-center gap-2"
            style={{ color: category.accentSoft }}
          >
            <span className="text-[15px] leading-none opacity-70" aria-hidden="true">
              {category.glyph}
            </span>
            {category.label}
          </div>

          <h1 className="font-display font-black leading-[1.0] tracking-[-0.025em] text-white drop-shadow-[0_2px_32px_rgba(0,0,0,0.8)]" style={{ fontSize: 'clamp(2.6rem, 6vw, 5rem)' }}>
            {fact.title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/82 sm:text-xl">
            {fact.fact}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => setReadMore(true)}
              className="inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03] active:scale-95"
              style={{
                background: category.accent,
                boxShadow: `0 4px 20px -6px ${category.accent}90`,
              }}
            >
              Read more
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M12 5v14M5 12l7 7 7-7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <span className="text-sm text-white/40">A deeper dive for the curious</span>
          </div>

          {credit && (
            <p className="mt-8 text-[10px] leading-tight text-white/28">
              Photo: {credit.author || credit.artist || 'Unknown'}
              {credit.license ? `, ${credit.license}` : ''}
              {' · '}
              {credit.sourceName || 'Wikimedia Commons'}
            </p>
          )}
        </motion.article>
      </div>

      <ReadMore
        open={readMore}
        fact={fact}
        category={category}
        onClose={() => setReadMore(false)}
      />
    </div>
  )
}
