import Scene from './Scene.jsx'

/**
 * Figure — the cinematic "image" that accompanies a fact.
 *
 * It layers the category's signature gradient, a procedural <Scene>, a soft
 * top-light and a legibility scrim. Used both small (option cards) and
 * full-bleed (the fact hero), driven entirely by className for sizing.
 */
export default function Figure({ category, scene, kenburns = false, className = '' }) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ background: category.gradient }}
    >
      <div className={`absolute inset-0 ${kenburns ? 'animate-kenburns' : ''}`}>
        <Scene
          scene={scene}
          accent={category.accent}
          accentSoft={category.accentSoft}
          className="block h-full w-full"
        />
      </div>

      {/* soft cinematic top-light + bottom shadow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.06] via-transparent to-black/30" />
    </div>
  )
}
