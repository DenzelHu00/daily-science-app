import { useReducedMotion } from 'framer-motion'

// Deterministic faint starfield for the global backdrop.
function mulberry32(seed) {
  let a = seed >>> 0
  return () => {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const STARS = (() => {
  const rng = mulberry32(2718281)
  return Array.from({ length: 110 }, () => ({
    x: rng() * 100,
    y: rng() * 100,
    r: 0.3 + rng() * 1.3,
    o: 0.15 + rng() * 0.6,
    delay: rng() * 6,
  }))
})()

/**
 * Atmosphere — the fixed, living backdrop behind the whole app: a deep-space
 * base, drifting nebula clouds, and a faint twinkling starfield.
 */
export default function Atmosphere() {
  const reduce = useReducedMotion()
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-ink-900">
      {/* nebula clouds */}
      <div
        className={`absolute -left-[15%] -top-[20%] h-[75vmax] w-[75vmax] rounded-full blur-3xl ${
          reduce ? '' : 'animate-drift-slow'
        }`}
        style={{ background: 'radial-gradient(circle, rgba(86,74,210,0.20), transparent 60%)' }}
      />
      <div
        className={`absolute -right-[18%] top-[25%] h-[65vmax] w-[65vmax] rounded-full blur-3xl ${
          reduce ? '' : 'animate-drift'
        }`}
        style={{ background: 'radial-gradient(circle, rgba(40,178,200,0.16), transparent 60%)' }}
      />
      <div
        className={`absolute left-[25%] bottom-[-20%] h-[55vmax] w-[55vmax] rounded-full blur-3xl ${
          reduce ? '' : 'animate-drift-slow'
        }`}
        style={{ background: 'radial-gradient(circle, rgba(200,96,160,0.12), transparent 60%)' }}
      />

      {/* starfield */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        {STARS.map((s, i) => (
          <circle
            key={i}
            cx={s.x}
            cy={s.y}
            r={s.r / 10}
            fill="#e9ecf5"
            opacity={s.o}
            className={reduce ? '' : 'animate-twinkle'}
            style={reduce ? undefined : { animationDelay: `${s.delay}s` }}
          />
        ))}
      </svg>
    </div>
  )
}
