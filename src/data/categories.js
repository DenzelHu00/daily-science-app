// Science categories. Each carries a mineral-inspired identity: an accent
// colour drawn from gemstone palettes, a deep dark gradient fallback, and
// a short glyph used in the category label.

export const CATEGORIES = {
  astronomy: {
    id: 'astronomy',
    label: 'Astronomy',
    glyph: '✦',
    blurb: 'Worlds, stars & the deep dark',
    accent: '#7060e4',
    accentSoft: '#a898f4',
    gradient:
      'radial-gradient(120% 140% at 20% 10%, #1c1248 0%, #0e0828 45%, #040209 100%)',
  },
  physics: {
    id: 'physics',
    label: 'Physics',
    glyph: '◇',
    blurb: 'The rules behind everything',
    accent: '#28b8d0',
    accentSoft: '#7adce8',
    gradient:
      'radial-gradient(120% 140% at 80% 10%, #082230 0%, #041520 45%, #010608 100%)',
  },
  biology: {
    id: 'biology',
    label: 'Biology',
    glyph: '❧',
    blurb: 'The improbable machinery of life',
    accent: '#2cba6e',
    accentSoft: '#72d8a8',
    gradient:
      'radial-gradient(120% 140% at 25% 15%, #0a2016 0%, #061410 45%, #020807 100%)',
  },
  chemistry: {
    id: 'chemistry',
    label: 'Chemistry',
    glyph: '⬡',
    blurb: 'Where matter rearranges itself',
    accent: '#cc9428',
    accentSoft: '#e4be6c',
    gradient:
      'radial-gradient(120% 140% at 75% 12%, #281804 0%, #180e02 45%, #070401 100%)',
  },
  medicine: {
    id: 'medicine',
    label: 'Medicine',
    glyph: '✚',
    blurb: 'The body, in close-up',
    accent: '#cc4058',
    accentSoft: '#e890a4',
    gradient:
      'radial-gradient(120% 140% at 30% 12%, #22080e 0%, #14050b 45%, #060204 100%)',
  },
  neuroscience: {
    id: 'neuroscience',
    label: 'Neuroscience',
    glyph: '⟁',
    blurb: 'The mind watching itself',
    accent: '#b04ed4',
    accentSoft: '#ce8ce8',
    gradient:
      'radial-gradient(120% 140% at 70% 14%, #1e0828 0%, #110518 45%, #050209 100%)',
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
