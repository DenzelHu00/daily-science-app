import { useState } from 'react'
import Scene from './Scene.jsx'
import { getFactImage } from '../data/factImages.js'

/**
 * Figure — the cinematic "image" that accompanies a fact.
 *
 * If a bundled photo exists for the fact it becomes the background; otherwise
 * we fall back to the fact's procedural <Scene>. The image is shown still (no
 * pan/zoom), so it — and the legibility scrims layered over it — are fully in
 * place the moment a fact opens. A category gradient sits underneath as the
 * base layer, and a soft top-light / bottom-shadow keeps overlaid text legible.
 * Used both small (option cards) and full-bleed (the fact hero).
 *
 * The photo fades in on load rather than popping in once decoded — without
 * that, the swap from the gradient/scene placeholder to the loaded image
 * reads as a flicker. `priority` skips lazy-loading for images that are
 * visible immediately (the hero, the door cards).
 */
export default function Figure({ category, fact, className = '', priority = false }) {
  const photo = getFactImage(fact.id)
  const [loaded, setLoaded] = useState(false)

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
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding="async"
          onLoad={() => setLoaded(true)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-out ${loaded ? 'opacity-100' : 'opacity-0'}`}
        />
      ) : (
        <div className="absolute inset-0">
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
