# Lumen · Daily Science

A cinematic web app that serves up a daily fun fact about science.

Every day the app refreshes to **three doors**, each belonging to a field of
science — astronomy, physics, biology, chemistry, medicine or neuroscience.
Pick one and it transitions, cinematically, into that field's **fact of the
day**: a short, vivid explanation paired with bespoke artwork. Curious? Hit
**Read more** for a deeper dive with key points and a longer story.

![Lumen](https://img.shields.io/badge/Daily-Science-e8c37e)

## Highlights

- **Refreshes every day.** The trio of options is derived deterministically
  from the calendar date, so everyone sees the same set on a given day and it
  rotates automatically at local midnight — no backend required.
- **A category band** above the options shows the full breadth of science,
  with today's three featured fields glowing in their accent colours.
- **Cinematic transitions.** Choosing a door morphs the card seamlessly into a
  full-bleed hero (shared-layout animation), with a slow Ken Burns drift.
- **Bespoke, always-relevant imagery.** Each fact is illustrated by a
  procedural, animated SVG "scene" themed to its category — no external image
  dependencies, so it always loads and stays visually cohesive.
- **Read more.** A focused, scrollable deep-dive sheet with key points and a
  richer explanation.
- **Considered details:** film grain, vignette, drifting nebula backdrop,
  twinkling starfield, full keyboard support, and `prefers-reduced-motion`
  respected throughout.

## Tech stack

- [React 18](https://react.dev) + [Vite](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com) for styling
- [Framer Motion](https://www.framer.com/motion/) for transitions & morphs

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Project structure

```
src/
├── App.jsx                 # state + shared-layout orchestration
├── index.css               # cinematic base: grain, vignette, glass, type
├── data/
│   ├── categories.js       # the six science fields + their visual identity
│   └── facts.js            # the fun-fact corpus (fact, key points, deep dive)
├── lib/
│   └── daily.js            # deterministic "fact of the day" engine
└── components/
    ├── Atmosphere.jsx      # drifting nebula + starfield backdrop
    ├── CategoryBar.jsx     # the science-field band above the options
    ├── OptionsView.jsx     # masthead + the three doors
    ├── OptionCard.jsx      # a single door (morph source)
    ├── FactView.jsx        # the revealed fact (morph target) + hero
    ├── ReadMore.jsx        # the deep-dive sheet
    ├── Figure.jsx          # the cinematic image surface
    └── Scene.jsx           # the procedural, animated SVG artwork library
```

## Adding a fact

Append an entry to `src/data/facts.js`:

```js
{
  id: 'astro-myfact',
  category: 'astronomy',          // must match a key in categories.js
  teaser: 'A spoiler-free hook for the option card.',
  title: 'The Headline Fact',
  fact: 'Three to four sentences stating the fact.',
  scene: 'starfield',             // any scene key from Scene.jsx
  keyPoints: ['Point one', 'Point two', 'Point three'],
  readMore: 'A longer dive.\n\nSeparate paragraphs with a blank line.',
}
```

The daily engine picks it up automatically.
