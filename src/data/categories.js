// Science categories. Each carries its own cinematic identity: an accent
// colour, a signature gradient used as the guaranteed image fallback, and a
// short glyph/word used in the category bar above the daily options.

export const CATEGORIES = {
  astronomy: {
    id: 'astronomy',
    label: 'Astronomy',
    glyph: '✦',
    blurb: 'Worlds, stars & the deep dark',
    accent: '#8b7bf0',
    accentSoft: '#b3a8f7',
    // Used to tint cards, glows and the fallback gradient.
    gradient:
      'radial-gradient(120% 140% at 20% 10%, #2a2360 0%, #160f3a 45%, #06040f 100%)',
  },
  physics: {
    id: 'physics',
    label: 'Physics',
    glyph: '◇',
    blurb: 'The rules behind everything',
    accent: '#39d0e0',
    accentSoft: '#9af0f8',
    gradient:
      'radial-gradient(120% 140% at 80% 10%, #0b4f5e 0%, #08313c 45%, #040d12 100%)',
  },
  biology: {
    id: 'biology',
    label: 'Biology',
    glyph: '❧',
    blurb: 'The improbable machinery of life',
    accent: '#46c98a',
    accentSoft: '#9fe9c4',
    gradient:
      'radial-gradient(120% 140% at 25% 15%, #15532f 0%, #0a3320 45%, #03110a 100%)',
  },
  chemistry: {
    id: 'chemistry',
    label: 'Chemistry',
    glyph: '⬡',
    blurb: 'Where matter rearranges itself',
    accent: '#f2a65a',
    accentSoft: '#f8cfa0',
    gradient:
      'radial-gradient(120% 140% at 75% 12%, #6a3a14 0%, #43250d 45%, #160a03 100%)',
  },
  medicine: {
    id: 'medicine',
    label: 'Medicine',
    glyph: '✚',
    blurb: 'The body, in close-up',
    accent: '#f06a86',
    accentSoft: '#f7adbd',
    gradient:
      'radial-gradient(120% 140% at 30% 12%, #6b1f33 0%, #43121f 45%, #160409 100%)',
  },
  neuroscience: {
    id: 'neuroscience',
    label: 'Neuroscience',
    glyph: '⟁',
    blurb: 'The mind watching itself',
    accent: '#c178f0',
    accentSoft: '#dcb1f7',
    gradient:
      'radial-gradient(120% 140% at 70% 14%, #4a1f63 0%, #2f1342 45%, #100517 100%)',
  },
}

export const CATEGORY_ORDER = [
  'astronomy',
  'physics',
  'biology',
  'chemistry',
  'medicine',
  'neuroscience',
]

export function getCategory(id) {
  return CATEGORIES[id]
}
