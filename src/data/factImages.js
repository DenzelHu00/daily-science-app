// Registry of the bundled fact photos.
//
// Images live in src/assets/facts/<factId>.jpg and are pulled in at build time
// by Vite (hashed, optimised). Facts without a photo here fall back to their
// procedural <Scene>. Attribution lives in imageCredits.json.

import credits from './imageCredits.json'

const modules = import.meta.glob('../assets/facts/*.jpg', {
  eager: true,
  import: 'default',
})

const IMAGES = {}
for (const filePath in modules) {
  const id = filePath.split('/').pop().replace('.jpg', '')
  IMAGES[id] = modules[filePath]
}

export function getFactImage(id) {
  return IMAGES[id] || null
}

export function getImageCredit(id) {
  return credits[id] || null
}
