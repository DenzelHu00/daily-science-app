/**
 * keepGpuLayer — a framer-motion `transformTemplate` that appends a constant
 * `translateZ(0)` to whatever transform motion generates.
 *
 * Entrance animations (the `y` slides on headings, articles, cards) promote an
 * element to its own GPU compositing layer while running. When the animation
 * finishes, framer-motion drops `will-change`, the browser tears that layer
 * down, and the text is re-rasterized on the main layer — a visible one-frame
 * flicker right after content loads.
 *
 * Because `y` keeps a transform on the element at rest (`translateY(0px)`),
 * appending `translateZ(0)` means the element stays on a 3D-promoted layer
 * permanently, so there is no promote→demote re-raster and no flicker.
 */
export const keepGpuLayer = (_latest, generatedTransform) =>
  `${generatedTransform} translateZ(0)`
