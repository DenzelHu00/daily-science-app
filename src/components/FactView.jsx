import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Figure from './Figure.jsx'
import ReadMore from './ReadMore.jsx'
import { getImageCredit } from '../data/factImages.js'

const EASE = [0.22, 0.61, 0.36, 1]

/**
 * FactView — the revealed fact of the day. A full-bleed cinematic hero (the
 * morph target of the chosen card) with the short explanation anchored below,
 * plus the "read more" deep-dive sheet.
 */
export default function FactView({ category, fact, onBack, backLabel = 'Choose another' }) {
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
    <div className="relative min-h-screen w-full">
      {/* full-bleed morphing hero */}
      <motion.div
        layoutId={`fig-${fact.id}`}
        className="fixed inset-0"
        transition={{ type: 'spring', stiffness: 170, damping: 26 }}
      >
        <Figure category={category} fact={fact} kenburns className="h-full w-full" />
      </motion.div>

      {/*
        Legibility is handled inside <Figure> now: the darkening shader is baked
        into the shared-layout element, so it is already applied while the fact is
        presented and morphs in with the hero — rather than fading in over the
        photo after the fact is opened. (Edge framing comes from the global
        .vignette in index.css.)
      */}

      {/* content */}
      <div className="relative mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-between px-5 py-8 sm:px-8 sm:py-10">
        {/* top bar */}
        <motion.div
          className="flex items-center justify-between"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6, ease: EASE }}
        >
          <button
            type="button"
            onClick={onBack}
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-md transition-colors hover:bg-white/10"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
          <div className="kicker hidden text-white/45 sm:block">Fact of the day</div>
        </motion.div>

        {/* the fact, anchored to the lower third */}
        <motion.article
          className="mb-2 max-w-3xl"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7, ease: EASE }}
        >
          <div
            className="kicker mb-4 flex items-center gap-2"
            style={{ color: category.accentSoft }}
          >
            <span className="text-base" aria-hidden="true">
              {category.glyph}
            </span>
            {category.label}
          </div>

          <h1 className="font-display text-4xl leading-[1.08] text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.6)] sm:text-6xl">
            {fact.title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
            {fact.fact}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => setReadMore(true)}
              className="inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-sm font-semibold text-ink-900 shadow-lg transition-transform hover:scale-[1.03] active:scale-95"
              style={{
                background: `linear-gradient(180deg, ${category.accentSoft}, ${category.accent})`,
                boxShadow: `0 18px 50px -18px ${category.accent}`,
              }}
            >
              Read more
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M12 5v14M5 12l7 7 7-7"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <span className="text-sm text-white/45">A deeper dive for the curious</span>
          </div>

          {credit && (
            <p className="mt-7 text-[11px] leading-tight text-white/30">
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
