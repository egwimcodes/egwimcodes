# egwimcodes.dev

Personal portfolio — Next.js (App Router) + Tailwind CSS v4, on the egwimcodes brand.

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in the EmailJS values
npm run dev
```

| Script | Purpose |
| --- | --- |
| `npm run dev` | Dev server |
| `npm run build` | Production build (`output: "standalone"`) |
| `npm run start` | Not used with standalone — run `node .next/standalone/server.js` instead |
| `npm run lint` | ESLint |
| `npm run brand:assets` | Regenerate icons, OG image and monogram paths from the SVG master |
| `npm run images:optimize` | Convert large PNGs under `public/` to WebP |

## Structure

```
app/            layout, page, work/[slug], globals.css, robots, sitemap, manifest, icons
components/     Nav, Hero, About, Skills, Services, Portfolio, Experience, Contact, Footer…
content/site.ts all copy: skills, services, projects, experience, socials, bio
public/brand/   EC primary SVG master + Open Graph image
brand-src/      superseded raster comps + mono SVG variants (provenance only)
scripts/        brand asset pipeline + image optimisation
```

## Brand assets

`public/brand/egwimcodes-EC-primary.svg` is the single source of truth for the EC
monogram. `npm run brand:assets` reads it and regenerates everything derived from
it — `app/icon.svg`, `app/icon.png`, `app/apple-icon.png`, the 1200×630
`public/brand/og.png`, and `components/ec-paths.ts`. Rerun it after any change to
the master; don't edit the outputs by hand.

The mark is inlined so its fills follow the theme: cyan keeps the brand gradient
on both themes; the second C switches between silver and flat graphite via
`--ec-second-c`. Mono black/white SVG masters live under `brand-src/` for print
and partner use — they are not loaded at runtime.

## Deployment

`docker build` produces a standalone Node image serving on port 3000. The VPS
workflow at `.github/workflows/deploy.yml` builds in `/opt/egwimcodes`, attaches
the container to the `intellanex-public` Traefik network (no host port publish),
and routes `egwimcodes.dev` / `www.egwimcodes.dev` via Traefik labels. The
`NEXT_PUBLIC_EMAILJS_*` values are inlined at build time and must be passed as
`--build-arg` (see the workflow and matching GitHub repo secrets).
