import { CATEGORY_ORDER, CATEGORIES } from '../data/categories.js'

/**
 * CategoryBar — the band of science fields shown above the daily options.
 * Today's three featured categories glow in their accent colour; the rest sit
 * quietly dimmed, hinting at the full breadth the app rotates through.
 */
export default function CategoryBar({ activeIds = [] }) {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
      {CATEGORY_ORDER.map((id) => {
        const c = CATEGORIES[id]
        const active = activeIds.includes(id)
        return (
          <li
            key={id}
            className="flex items-center gap-2 transition-all duration-500"
            style={{ color: active ? c.accentSoft : 'rgba(233,236,245,0.32)' }}
          >
            <span
              className="text-base leading-none transition-transform duration-500"
              style={{
                transform: active ? 'scale(1.15)' : 'scale(1)',
                filter: active ? `drop-shadow(0 0 8px ${c.accent})` : 'none',
              }}
              aria-hidden="true"
            >
              {c.glyph}
            </span>
            <span className="kicker">{c.label}</span>
            {active && (
              <span
                className="ml-0.5 h-1 w-1 rounded-full"
                style={{ background: c.accentSoft, boxShadow: `0 0 8px ${c.accent}` }}
              />
            )}
          </li>
        )
      })}
    </ul>
  )
}
