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
- **Each option is labelled with its field** (astronomy, physics, biology…),
  shown above the card and tinted in that field's accent colour.
- **Cinematic reveal.** Choosing a door opens its fact as a full-bleed hero with
  a still, on-topic backdrop and layered legibility scrims, so the words stay
  crisp the instant they appear — even over bright photos.
- **Real, on-topic photos.** Each fact is backed by a relevant photograph from
  [Pixabay](https://pixabay.com) (an octopus, Saturn, a glassblower at work…),
  bundled locally so it always loads. Abstract facts with no good photo fall
  back to a bespoke, animated procedural SVG "scene" — so every card always
  looks intentional. See [CREDITS.md](./CREDITS.md) for credits.
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

## Admin mode

A hidden review gallery lets you scroll through **every** fact (not just
today's three), grouped by field, and click any card to preview exactly what a
visitor sees. Each card is badged `photo` or `scene`.

- Open it by visiting the app with `?admin` (e.g. `http://localhost:5173/?admin`),
  or press **Shift + A** anywhere to toggle it.
- "Exit admin" (or Shift + A again) returns to the normal daily view.

It's a lightweight obscurity gate, not authentication — the facts are public
content, so admin mode just unlocks browsing the whole corpus.

## Project structure

```
src/
├── App.jsx                 # state + shared-layout orchestration
├── index.css               # cinematic base: grain, vignette, glass, type
├── assets/facts/           # bundled fact photographs (<factId>.jpg)
├── data/
│   ├── categories.js       # the six science fields + their visual identity
│   ├── facts.js            # the fun-fact corpus (fact, key points, deep dive)
│   ├── factImages.js       # maps facts to their bundled photo + credit
│   └── imageCredits.json   # per-image attribution (author, license, source)
├── lib/
│   └── daily.js            # deterministic "fact of the day" engine
└── components/
    ├── Atmosphere.jsx      # drifting nebula + starfield backdrop
    ├── OptionsView.jsx     # masthead + the three doors
    ├── OptionCard.jsx      # a single door, labelled with its field (morph source)
    ├── FactView.jsx        # the revealed fact (morph target) + hero
    ├── ReadMore.jsx        # the deep-dive sheet
    ├── Figure.jsx          # the image surface (photo, or scene fallback)
    └── Scene.jsx           # the procedural, animated SVG artwork library

scripts/
└── fetch-images.mjs        # re-fetch fact photos from Wikimedia + credits
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

The daily engine picks it up automatically. If `src/assets/facts/<id>.jpg`
exists it's used as the background; otherwise the fact's `scene` is rendered.

## Imagery

Photos are fetched from the [Pixabay API](https://pixabay.com/api/docs/) and
bundled locally. You'll need a free Pixabay API key. To add or refresh images,
edit the `MAP` (search queries) in `scripts/fetch-images.mjs`, then:

```bash
export PIXABAY_API_KEY=your_key_here
node scripts/fetch-images.mjs            # fetch all
node scripts/fetch-images.mjs bio-octopus med-cornea   # or specific facts
```

This downloads the photos into `src/assets/facts/` and records credits in
`src/data/imageCredits.json`. Images are used under the
[Pixabay Content License](https://pixabay.com/service/license-summary/)
(free to use, no attribution required); regenerate [CREDITS.md](./CREDITS.md)
after changes.
