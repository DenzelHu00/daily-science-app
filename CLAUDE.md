# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Lumen · Daily Science — a cinematic, **backend-less** React 18 + Vite single-page app that shows a daily science fun-fact. Everything visitors see is derived deterministically from the local calendar date, so there is no server, database, or persistence to reason about.

## Commands

```bash
npm install        # install deps
npm run dev        # Vite dev server → http://localhost:5173
npm run build      # production build → dist/
npm run preview    # serve the built dist/ locally
```

- **There are no test or lint scripts configured.** Verify changes with `npm run build` and by eye in `npm run dev`.
- **Image pipeline:** `PIXABAY_API_KEY=xxxx node scripts/fetch-images.mjs [factId ...]` (re)fetches fact photos into `src/assets/facts/` and rewrites `src/data/imageCredits.json`. Omit ids to fetch all; pass ids to refetch specific facts. Requires a free Pixabay API key.
- ES modules throughout (`"type": "module"`).

## Architecture

### The daily engine is the spine — `src/lib/daily.js`

Everything flows from the date. `dateKey(date)` → an integer like `20260614` → seeds a `mulberry32` PRNG → drives a `seededShuffle` (Fisher–Yates). `getDailySelection(date)` then, **in a fixed order of `rng()` calls**, picks 3 distinct categories, one fact within each, and a display order, returning `{ key, dateLabel, categories, options: [{ category, fact }] }`.

- Because the output is a pure function of the date, every visitor sees the same trio on the same day, rotating at local midnight — no backend.
- **Consequence:** reordering or adding `rng()` calls here silently changes which facts everyone is served. Treat the consumption order as load-bearing.
- `getDailySelection(date)` / `dateKey(date)` accept an optional `date` — the seam for reasoning about or testing any specific day.
- `App.jsx` polls `dateKey()` every 60s and rebuilds the selection when the day rolls over while the tab is open.

### Three data registries that must stay in sync — `src/data/`

- `categories.js` — the 6 science fields. Each carries its visual identity (`accent`, `accentSoft`, `gradient`, `glyph`, `label`). `CATEGORY_ORDER` is the pool the daily draw shuffles.
- `facts.js` — the `FACTS` corpus. Every fact's `category` must be a key in `categories.js`, and its `scene` must be a key `Scene.jsx` knows how to draw. Exposes derived `FACTS_BY_CATEGORY` and `getFactById`.
- `factImages.js` — uses Vite `import.meta.glob` to eagerly bundle `src/assets/facts/*.jpg`, keyed by fact id; `imageCredits.json` holds attribution.

### Photo-or-scene fallback is a filename convention — `src/components/Figure.jsx`

A fact renders its **photo** iff `src/assets/facts/<id>.jpg` exists; otherwise it renders its procedural **`<Scene>`**. The category `gradient` always sits underneath as the base layer. `Figure` is the single place this decision lives — so adding or removing a photo needs **no code change**, just the correctly-named file.

### Procedural artwork — `src/components/Scene.jsx`

A library of self-contained, animated 800×600 SVG "scenes" (orbits, starfield, helix, cells, network, waves, heartbeat, iris, …), one per `scene` key, tinted by the category accent and honoring `prefers-reduced-motion`. A fact's `scene` field selects one. Adding a new visual = add a branch here, then reference its key from a fact.

### Shared-layout morph is the signature transition (Framer Motion)

`App.jsx` wraps the views in a single `<LayoutGroup>`. Both `OptionCard.jsx` and `FactView.jsx` render the **same** `<Figure>` inside a `motion.div` sharing `layoutId={`fig-${fact.id}`}`. Picking a card morphs the small card image seamlessly into the full-bleed hero. Keep that `layoutId` identical on both sides or the morph breaks.

### Top-level state & view routing — `src/App.jsx`

Three pieces of state — `selection` (today's trio), `selectedId` (chosen fact, or `null`), `admin` — select exactly one of three mutually-exclusive views: `FactView` (a fact is open) → `AdminView` (admin on) → `OptionsView` (default). The selected fact + its category are resolved via `useMemo`.

### Admin mode

A hidden full-corpus gallery (`AdminView.jsx`), gated behind `?admin`/`#admin` in the URL or toggled with **Shift+A** (URL kept in sync via `history.replaceState`). It is obscurity, not authentication — the facts are public.

### Styling

Tailwind + a hand-written cinematic base in `src/index.css` (film grain, vignette, glass surfaces, `.kicker`, `.font-display`). `tailwind.config.js` extends the `ink`/`gold` palette, the three Google-font families (loaded in `index.html`), and the `kenburns`/`drift`/`twinkle`/etc. keyframes. `vite.config.js` sets `base: './'` so the build runs from any static host subpath.

## Adding a fact (the most common change)

Append an object to `src/data/facts.js` (`id`, `category`, `teaser`, `title`, `fact`, `scene`, `keyPoints`, `readMore`); the field header comment documents each field. The daily engine picks it up automatically. The cross-file wiring to get right:

- `category` must already exist in `categories.js`; `scene` must already exist in `Scene.jsx`.
- For a photo, either map its id → a search query in `scripts/fetch-images.mjs` and run the script, or drop `src/assets/facts/<id>.jpg` in yourself. With no photo, it falls back to the `scene`.

## Gotcha

The photo-credit code in `FactView.jsx` and some fields in `imageCredits.json` still carry vestigial **Wikimedia** fallbacks (`credit.artist`, `'Wikimedia Commons'`), but the live image pipeline is **Pixabay** — don't be misled into thinking there are two sources.
