import Scene from './Scene.jsx'
import { getFactImage } from '../data/factImages.js'

/**
 * Figure — the cinematic "image" that accompanies a fact.
 *
 * If a bundled photo exists for the fact it becomes the background (with a
 * slow Ken Burns drift on the hero); otherwise we fall back to the fact's
 * procedural <Scene>. A category gradient sits underneath as the base layer,
 * and a soft top-light / bottom-shadow keeps overlaid text legible. Used both
 * small (option cards) and full-bleed (the fact hero).
 */
export default function Figure({ category, fact, kenburns = false, className = '' }) {
  const photo = getFactImage(fact.id)

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ background: category.gradient }}
    >
      {photo ? (
        <img
          src={photo}
          alt=""
          aria-hidden="true"
          draggable="false"
          loading="lazy"
          decoding="async"
          className={`absolute inset-0 h-full w-full object-cover ${
            kenburns ? 'animate-kenburns' : ''
          }`}
        />
      ) : (
        <div className={`absolute inset-0 ${kenburns ? 'animate-kenburns' : ''}`}>
          <Scene
            scene={fact.scene}
            accent={category.accent}
            accentSoft={category.accentSoft}
            className="block h-full w-full"
          />
        </div>
      )}

      {/* soft cinematic top-light + bottom shadow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.05] via-transparent to-black/30" />
    </div>
  )
}
