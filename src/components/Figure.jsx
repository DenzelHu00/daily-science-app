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

      {/* Legibility shader — baked into the figure itself.
          Because <Figure> is the shared-layout element that morphs from the
          option card into the full-bleed hero, applying the darkening here means
          it is already in place while the fact is presented (the "fact making"
          stage) and travels with the morph — instead of fading in over the photo
          after the fact is opened. Bottom-weighted so the title/teaser stay
          readable over bright photos, with a gentle top fade for the hero's top
          bar; the middle stays clear so the image itself still reads. */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(to top, rgba(5,6,10,0.96) 0%, rgba(5,6,10,0.72) 18%, rgba(5,6,10,0.18) 42%, rgba(5,6,10,0.04) 60%, rgba(5,6,10,0) 82%, rgba(5,6,10,0.34) 100%)',
        }}
      />
    </div>
  )
}
