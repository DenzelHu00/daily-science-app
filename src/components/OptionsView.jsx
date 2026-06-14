import { motion } from 'framer-motion'
import CategoryBar from './CategoryBar.jsx'
import OptionCard from './OptionCard.jsx'

const EASE = [0.22, 0.61, 0.36, 1]

/**
 * OptionsView — the daily landing: the masthead, the category band, and the
 * three doors to choose from.
 */
export default function OptionsView({ selection, onSelect }) {
  return (
    <motion.div
      key="options"
      className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-5 py-10 sm:px-8 sm:py-14"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.985, filter: 'blur(6px)' }}
      transition={{ duration: 0.6, ease: EASE }}
    >
      {/* masthead */}
      <motion.header
        className="text-center"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        <div className="kicker text-gradient-gold">Lumen · Daily Science</div>
        <p className="mt-3 text-xs uppercase tracking-[0.3em] text-white/40">
          {selection.dateLabel}
        </p>
        <h1 className="mx-auto mt-5 max-w-3xl font-display text-4xl leading-[1.1] text-white sm:text-6xl">
          Today, science offers you{' '}
          <span className="text-gradient-gold">three doors.</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base text-white/55">
          One fascinating fact waits behind each. Choose a field to reveal its
          fact of the day.
        </p>
      </motion.header>

      {/* category band */}
      <motion.div
        className="mt-9"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.7, ease: EASE }}
      >
        <CategoryBar activeIds={selection.categories} />
      </motion.div>

      {/* the three doors */}
      <div className="mt-10 grid flex-1 grid-cols-1 content-center gap-5 sm:mt-12 sm:grid-cols-3 sm:gap-6">
        {selection.options.map((option, i) => (
          <OptionCard key={option.fact.id} option={option} index={i} onSelect={onSelect} />
        ))}
      </div>

      <motion.p
        className="mt-10 text-center text-xs tracking-wide text-white/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        A new trio of discoveries arrives every day.
      </motion.p>
    </motion.div>
  )
}
