import { useId } from 'react'
import { useReducedMotion } from 'framer-motion'

/**
 * Scene — bespoke, procedural SVG artwork for each fact.
 *
 * Every scene is drawn in luminous strokes over the category's gradient
 * (provided by the parent container), so it always loads, is always relevant,
 * and stays visually cohesive. Colours are driven by the category accent.
 */

// ----- deterministic scatter so points don't jump on re-render -------------
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

function buildStars(n, seed, { rMin = 0.4, rMax = 1.9 } = {}) {
  const rng = mulberry32(seed)
  return Array.from({ length: n }, () => ({
    x: rng() * 800,
    y: rng() * 600,
    r: rMin + rng() * (rMax - rMin),
    o: 0.25 + rng() * 0.75,
    delay: rng() * 5,
  }))
}

const STARS = buildStars(90, 20260614)
const DUST = buildStars(34, 7, { rMin: 0.6, rMax: 2.6 })

function sinePath(w, base, amp, wl, phase) {
  let d = `M 0 ${base.toFixed(1)}`
  for (let x = 0; x <= w; x += 8) {
    const y = base + amp * Math.sin((x / wl) * Math.PI * 2 + phase)
    d += ` L ${x.toFixed(1)} ${y.toFixed(1)}`
  }
  return d
}

function ecgPath(w, base) {
  let d = `M 0 ${base}`
  let x = 0
  const seg = 200
  while (x < w + seg) {
    d += ` h 24 l 10 -12 l 10 12 h 16 l 7 8 l 7 -58 l 7 78 l 7 -28 h 16 q 16 -26 32 0 h 24`
    x += seg
  }
  return d
}

export default function Scene({ scene, accent = '#8b7bf0', accentSoft = '#cbb6f8', className = '' }) {
  const reduce = useReducedMotion()
  const uid = useId().replace(/:/g, '')
  const p = { accent, accentSoft, reduce, uid }

  return (
    <svg
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <radialGradient id={`${uid}-glow`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={accentSoft} stopOpacity="0.9" />
          <stop offset="45%" stopColor={accent} stopOpacity="0.35" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${uid}-vert`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="55%" stopColor={accentSoft} stopOpacity="0.95" />
          <stop offset="100%" stopColor={accent} stopOpacity="0.9" />
        </linearGradient>
        <filter id={`${uid}-blur`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="9" />
        </filter>
      </defs>
      {renderScene(scene, p)}
    </svg>
  )
}

function renderScene(scene, p) {
  switch (scene) {
    case 'radiance':
      return <Radiance {...p} />
    case 'orbits':
      return <Orbits {...p} />
    case 'starfield':
      return <Starfield {...p} />
    case 'waves':
      return <Waves {...p} />
    case 'lattice':
      return <Lattice {...p} />
    case 'hexagons':
      return <Hexagons {...p} />
    case 'cells':
      return <Cells {...p} />
    case 'network':
      return <Network {...p} />
    case 'helix':
      return <Helix {...p} />
    case 'snowflake':
      return <Snowflake {...p} />
    case 'heartbeat':
      return <Heartbeat {...p} />
    case 'iris':
      return <Iris {...p} />
    case 'ring-pulse':
    default:
      return <RingPulse {...p} />
  }
}

/* --------------------------------- scenes -------------------------------- */

function Stars({ subset = STARS, accentSoft, reduce }) {
  return (
    <g fill={accentSoft}>
      {subset.map((s, i) => (
        <circle
          key={i}
          cx={s.x}
          cy={s.y}
          r={s.r}
          opacity={s.o}
          className={reduce ? '' : 'animate-twinkle'}
          style={reduce ? undefined : { animationDelay: `${s.delay}s` }}
        />
      ))}
    </g>
  )
}

function Radiance({ accent, accentSoft, reduce, uid }) {
  const rays = Array.from({ length: 48 }, (_, i) => (i * 360) / 48)
  return (
    <g>
      <rect x="0" y="0" width="800" height="600" fill={`url(#${uid}-glow)`} opacity="0.7" />
      <Stars subset={DUST} accentSoft={accentSoft} reduce={reduce} />
      <g transform="translate(400 300)">
        <g>
          {!reduce && (
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0"
              to="360"
              dur="90s"
              repeatCount="indefinite"
            />
          )}
          {rays.map((a, i) => (
            <line
              key={i}
              x1="0"
              y1="0"
              x2={150 * Math.cos((a * Math.PI) / 180)}
              y2={150 * Math.sin((a * Math.PI) / 180)}
              stroke={accentSoft}
              strokeWidth={i % 2 ? 1 : 2.2}
              opacity={i % 2 ? 0.18 : 0.32}
            />
          ))}
        </g>
        <circle r="120" fill={accent} opacity="0.25" filter={`url(#${uid}-blur)`} />
        <circle r="78" fill={`url(#${uid}-vert)`} />
        <circle r="78" fill="none" stroke="#ffffff" strokeOpacity="0.5" strokeWidth="1.5" />
        <circle r="30" cx="-22" cy="-24" fill="#ffffff" opacity="0.5" filter={`url(#${uid}-blur)`} />
      </g>
    </g>
  )
}

function Orbits({ accent, accentSoft, reduce, uid }) {
  const rings = [
    { rx: 330, ry: 120, rot: -18, dur: 70, dotA: 20 },
    { rx: 250, ry: 88, rot: -18, dur: 48, dotA: 200 },
    { rx: 170, ry: 60, rot: -18, dur: 32, dotA: 110 },
  ]
  return (
    <g>
      <rect x="0" y="0" width="800" height="600" fill={`url(#${uid}-glow)`} opacity="0.4" />
      <Stars subset={DUST} accentSoft={accentSoft} reduce={reduce} />
      <g transform="translate(400 300)">
        {rings.map((r, i) => (
          <g key={i} transform={`rotate(${r.rot})`}>
            <ellipse rx={r.rx} ry={r.ry} fill="none" stroke={accentSoft} strokeOpacity="0.28" strokeWidth="1.3" />
            <g>
              {!reduce && (
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0"
                  to="360"
                  dur={`${r.dur}s`}
                  repeatCount="indefinite"
                />
              )}
              <circle
                cx={r.rx * Math.cos((r.dotA * Math.PI) / 180)}
                cy={r.ry * Math.sin((r.dotA * Math.PI) / 180)}
                r={6 - i}
                fill={accentSoft}
              />
            </g>
          </g>
        ))}
        {/* central planet with a tilted ring */}
        <circle r="66" fill={`url(#${uid}-vert)`} />
        <circle r="66" fill="none" stroke="#ffffff" strokeOpacity="0.35" strokeWidth="1.2" />
        <ellipse rx="118" ry="30" fill="none" stroke={accentSoft} strokeWidth="9" strokeOpacity="0.5" transform="rotate(-18)" />
        <ellipse rx="118" ry="30" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.4" transform="rotate(-18)" />
      </g>
    </g>
  )
}

function Starfield({ accent, accentSoft, reduce, uid }) {
  return (
    <g>
      <ellipse cx="280" cy="240" rx="260" ry="170" fill={accent} opacity="0.22" filter={`url(#${uid}-blur)`} />
      <ellipse cx="540" cy="380" rx="220" ry="150" fill={accentSoft} opacity="0.16" filter={`url(#${uid}-blur)`} />
      <Stars accentSoft={accentSoft} reduce={reduce} />
      <Stars subset={DUST} accentSoft="#ffffff" reduce={reduce} />
    </g>
  )
}

function Waves({ accent, accentSoft, reduce, uid }) {
  const lines = [
    { base: 300, amp: 70, wl: 320, phase: 0, o: 0.7, w: 2.4 },
    { base: 300, amp: 54, wl: 240, phase: 1.1, o: 0.45, w: 1.8 },
    { base: 300, amp: 96, wl: 460, phase: 2.2, o: 0.3, w: 1.4 },
    { base: 300, amp: 36, wl: 180, phase: 0.6, o: 0.25, w: 1.2 },
  ]
  return (
    <g>
      <rect x="0" y="0" width="800" height="600" fill={`url(#${uid}-glow)`} opacity="0.35" />
      <Stars subset={DUST} accentSoft={accentSoft} reduce={reduce} />
      {lines.map((l, i) => (
        <path
          key={i}
          d={sinePath(800, l.base, l.amp, l.wl, l.phase)}
          fill="none"
          stroke={i === 0 ? '#ffffff' : accentSoft}
          strokeOpacity={l.o}
          strokeWidth={l.w}
          className={reduce ? '' : 'animate-drift'}
          style={reduce ? undefined : { animationDelay: `${i * 1.4}s` }}
        />
      ))}
    </g>
  )
}

function Lattice({ accent, accentSoft, reduce, uid }) {
  const cols = 9
  const rows = 7
  const gx = 800 / (cols + 1)
  const gy = 600 / (rows + 1)
  const rng = mulberry32(42)
  const nodes = []
  for (let r = 1; r <= rows; r++) {
    for (let c = 1; c <= cols; c++) {
      nodes.push({ x: c * gx + (rng() - 0.5) * 14, y: r * gy + (rng() - 0.5) * 14, c, r })
    }
  }
  const at = (c, r) => nodes.find((n) => n.c === c && n.r === r)
  return (
    <g>
      <rect x="0" y="0" width="800" height="600" fill={`url(#${uid}-glow)`} opacity="0.3" />
      <g stroke={accentSoft} strokeOpacity="0.25" strokeWidth="1">
        {nodes.map((n, i) => {
          const right = at(n.c + 1, n.r)
          const down = at(n.c, n.r + 1)
          return (
            <g key={i}>
              {right && <line x1={n.x} y1={n.y} x2={right.x} y2={right.y} />}
              {down && <line x1={n.x} y1={n.y} x2={down.x} y2={down.y} />}
            </g>
          )
        })}
      </g>
      {nodes.map((n, i) => (
        <circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={(i % 5 === 0 ? 4.5 : 2.6)}
          fill={i % 5 === 0 ? '#ffffff' : accentSoft}
          opacity={i % 5 === 0 ? 0.9 : 0.5}
          className={reduce || i % 5 !== 0 ? '' : 'animate-twinkle'}
          style={reduce ? undefined : { animationDelay: `${(i % 7) * 0.6}s` }}
        />
      ))}
    </g>
  )
}

function Hexagons({ accent, accentSoft, reduce, uid }) {
  const R = 46
  const w = Math.sqrt(3) * R
  const h = 1.5 * R
  const hex = (cx, cy) =>
    Array.from({ length: 6 }, (_, i) => {
      const a = (Math.PI / 180) * (60 * i - 30)
      return `${(cx + R * Math.cos(a)).toFixed(1)},${(cy + R * Math.sin(a)).toFixed(1)}`
    }).join(' ')
  const cells = []
  for (let row = -1; row < 6; row++) {
    for (let col = -1; col < 8; col++) {
      const cx = col * w + (row % 2 ? w / 2 : 0)
      const cy = row * h
      cells.push({ cx, cy, key: `${row}-${col}` })
    }
  }
  return (
    <g>
      <rect x="0" y="0" width="800" height="600" fill={`url(#${uid}-glow)`} opacity="0.3" />
      {cells.map((c, i) => (
        <polygon
          key={c.key}
          points={hex(c.cx, c.cy)}
          fill={i % 6 === 0 ? accent : 'none'}
          fillOpacity={i % 6 === 0 ? 0.18 : 0}
          stroke={accentSoft}
          strokeOpacity="0.4"
          strokeWidth="1.4"
          className={reduce || i % 6 !== 0 ? '' : 'animate-twinkle'}
          style={reduce ? undefined : { animationDelay: `${(i % 9) * 0.5}s` }}
        />
      ))}
    </g>
  )
}

function Cells({ accent, accentSoft, reduce, uid }) {
  const rng = mulberry32(909)
  const cells = Array.from({ length: 9 }, () => ({
    x: 90 + rng() * 620,
    y: 90 + rng() * 420,
    r: 48 + rng() * 70,
    delay: rng() * 6,
  }))
  return (
    <g>
      <rect x="0" y="0" width="800" height="600" fill={`url(#${uid}-glow)`} opacity="0.3" />
      {cells.map((c, i) => (
        <g
          key={i}
          className={reduce ? '' : 'animate-floaty'}
          style={reduce ? undefined : { animationDelay: `${c.delay}s` }}
        >
          <circle cx={c.x} cy={c.y} r={c.r} fill={accent} opacity="0.12" />
          <circle cx={c.x} cy={c.y} r={c.r} fill="none" stroke={accentSoft} strokeOpacity="0.5" strokeWidth="1.6" />
          <circle cx={c.x - c.r * 0.28} cy={c.y - c.r * 0.28} r={c.r * 0.12} fill="#ffffff" opacity="0.6" />
          <circle cx={c.x + c.r * 0.12} cy={c.y + c.r * 0.1} r={c.r * 0.2} fill={accentSoft} opacity="0.55" />
        </g>
      ))}
    </g>
  )
}

function Network({ accent, accentSoft, reduce, uid }) {
  const rng = mulberry32(314)
  const nodes = Array.from({ length: 13 }, () => ({ x: 70 + rng() * 660, y: 70 + rng() * 460 }))
  const edges = []
  nodes.forEach((n, i) => {
    nodes.forEach((m, j) => {
      if (j <= i) return
      const d = Math.hypot(n.x - m.x, n.y - m.y)
      if (d < 240) edges.push({ a: n, b: m, key: `${i}-${j}` })
    })
  })
  return (
    <g>
      <rect x="0" y="0" width="800" height="600" fill={`url(#${uid}-glow)`} opacity="0.3" />
      <g stroke={accentSoft}>
        {edges.map((e, i) => (
          <line
            key={e.key}
            x1={e.a.x}
            y1={e.a.y}
            x2={e.b.x}
            y2={e.b.y}
            strokeOpacity="0.3"
            strokeWidth="1.2"
            strokeDasharray="3 10"
          >
            {!reduce && (
              <animate
                attributeName="stroke-dashoffset"
                from="26"
                to="0"
                dur={`${1.6 + (i % 5) * 0.4}s`}
                repeatCount="indefinite"
              />
            )}
          </line>
        ))}
      </g>
      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r="10" fill={accent} opacity="0.25" filter={`url(#${uid}-blur)`} />
          <circle
            cx={n.x}
            cy={n.y}
            r={i % 3 === 0 ? 6 : 4}
            fill={i % 3 === 0 ? '#ffffff' : accentSoft}
            className={reduce ? '' : 'animate-twinkle'}
            style={reduce ? undefined : { animationDelay: `${(i % 6) * 0.7}s` }}
          />
        </g>
      ))}
    </g>
  )
}

function Helix({ accent, accentSoft, reduce, uid }) {
  const top = sinePath(800, 300, 110, 300, 0)
  const bot = sinePath(800, 300, 110, 300, Math.PI)
  const rungs = []
  for (let x = 20; x <= 780; x += 30) {
    const y1 = 300 + 110 * Math.sin((x / 300) * Math.PI * 2)
    const y2 = 300 + 110 * Math.sin((x / 300) * Math.PI * 2 + Math.PI)
    const close = Math.abs(y1 - y2)
    rungs.push({ x, y1, y2, o: 0.15 + (close / 220) * 0.6 })
  }
  return (
    <g>
      <rect x="0" y="0" width="800" height="600" fill={`url(#${uid}-glow)`} opacity="0.3" />
      <Stars subset={DUST} accentSoft={accentSoft} reduce={reduce} />
      <g
        className={reduce ? '' : 'animate-floaty'}
        style={reduce ? undefined : { transformOrigin: 'center' }}
      >
        {rungs.map((r, i) => (
          <line key={i} x1={r.x} y1={r.y1} x2={r.x} y2={r.y2} stroke={accentSoft} strokeOpacity={r.o} strokeWidth="3" />
        ))}
        {rungs.map((r, i) => (
          <g key={`d${i}`}>
            <circle cx={r.x} cy={r.y1} r="4.5" fill="#ffffff" opacity="0.85" />
            <circle cx={r.x} cy={r.y2} r="4.5" fill={accent} opacity="0.85" />
          </g>
        ))}
        <path d={top} fill="none" stroke="#ffffff" strokeOpacity="0.7" strokeWidth="2.6" />
        <path d={bot} fill="none" stroke={accent} strokeOpacity="0.8" strokeWidth="2.6" />
      </g>
    </g>
  )
}

function Snowflake({ accent, accentSoft, reduce, uid }) {
  const arm = (
    <g stroke={accentSoft} strokeWidth="3" strokeLinecap="round" fill="none">
      <line x1="0" y1="0" x2="0" y2="-210" />
      <line x1="0" y1="-70" x2="42" y2="-104" />
      <line x1="0" y1="-70" x2="-42" y2="-104" />
      <line x1="0" y1="-130" x2="34" y2="-160" />
      <line x1="0" y1="-130" x2="-34" y2="-160" />
      <line x1="0" y1="-180" x2="24" y2="-202" />
      <line x1="0" y1="-180" x2="-24" y2="-202" />
    </g>
  )
  return (
    <g>
      <rect x="0" y="0" width="800" height="600" fill={`url(#${uid}-glow)`} opacity="0.32" />
      <Stars subset={DUST} accentSoft="#ffffff" reduce={reduce} />
      <g transform="translate(400 300)">
        <g>
          {!reduce && (
            <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="120s" repeatCount="indefinite" />
          )}
          {[0, 60, 120, 180, 240, 300].map((a) => (
            <g key={a} transform={`rotate(${a})`}>
              {arm}
            </g>
          ))}
          <circle r="12" fill="#ffffff" opacity="0.9" />
          <circle r="26" fill="none" stroke={accentSoft} strokeOpacity="0.5" strokeWidth="2" />
        </g>
      </g>
    </g>
  )
}

function Heartbeat({ accent, accentSoft, reduce, uid }) {
  const d = ecgPath(800, 320)
  const pathId = `${uid}-ecg`
  return (
    <g>
      <rect x="0" y="0" width="800" height="600" fill={`url(#${uid}-glow)`} opacity="0.3" />
      {/* echo / glow trace */}
      <path d={d} fill="none" stroke={accent} strokeOpacity="0.4" strokeWidth="9" filter={`url(#${uid}-blur)`} />
      <path id={pathId} d={d} fill="none" stroke={accentSoft} strokeWidth="2.6" strokeOpacity="0.9" />
      {!reduce && (
        <circle r="6" fill="#ffffff">
          <animateMotion dur="3.2s" repeatCount="indefinite" rotate="auto">
            <mpath href={`#${pathId}`} />
          </animateMotion>
          <animate attributeName="r" values="5;8;5" dur="0.8s" repeatCount="indefinite" />
        </circle>
      )}
    </g>
  )
}

function RingPulse({ accent, accentSoft, reduce, uid }) {
  const rings = [0, 1, 2, 3]
  return (
    <g>
      <rect x="0" y="0" width="800" height="600" fill={`url(#${uid}-glow)`} opacity="0.35" />
      <Stars subset={DUST} accentSoft={accentSoft} reduce={reduce} />
      <g transform="translate(400 300)">
        <circle r="46" fill={accent} opacity="0.3" filter={`url(#${uid}-blur)`} />
        <circle r="40" fill={`url(#${uid}-vert)`} />
        {reduce
          ? [70, 130, 190, 250].map((r) => (
              <circle key={r} r={r} fill="none" stroke={accentSoft} strokeOpacity={0.4 - r / 900} strokeWidth="2" />
            ))
          : rings.map((i) => (
              <circle key={i} r="40" fill="none" stroke={accentSoft} strokeWidth="2.5">
                <animate attributeName="r" from="40" to="280" dur="4s" begin={`${i}s`} repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.55" to="0" dur="4s" begin={`${i}s`} repeatCount="indefinite" />
              </circle>
            ))}
      </g>
    </g>
  )
}

function Iris({ accent, accentSoft, reduce, uid }) {
  const spokes = Array.from({ length: 60 }, (_, i) => (i * 360) / 60)
  return (
    <g>
      <rect x="0" y="0" width="800" height="600" fill={`url(#${uid}-glow)`} opacity="0.3" />
      <g transform="translate(400 300)">
        <circle r="230" fill={accent} opacity="0.12" />
        <g>
          {!reduce && (
            <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="140s" repeatCount="indefinite" />
          )}
          {spokes.map((a, i) => (
            <line
              key={i}
              x1={70 * Math.cos((a * Math.PI) / 180)}
              y1={70 * Math.sin((a * Math.PI) / 180)}
              x2={210 * Math.cos((a * Math.PI) / 180)}
              y2={210 * Math.sin((a * Math.PI) / 180)}
              stroke={accentSoft}
              strokeOpacity={i % 2 ? 0.18 : 0.4}
              strokeWidth={i % 2 ? 1 : 2}
            />
          ))}
        </g>
        {[210, 150, 90].map((r, i) => (
          <circle key={r} r={r} fill="none" stroke={accentSoft} strokeOpacity={0.5 - i * 0.1} strokeWidth="2" />
        ))}
        <circle r="70" fill="#05060a" />
        <circle r="70" fill="none" stroke={accentSoft} strokeOpacity="0.7" strokeWidth="2.5" />
        <circle r="58" fill={accent} opacity="0.18" />
        <circle cx="-26" cy="-26" r="16" fill="#ffffff" opacity="0.7" />
      </g>
    </g>
  )
}
