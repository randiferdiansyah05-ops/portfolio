# Randi Ferdiansyah — Portfolio

Next.js (App Router) + TypeScript + Tailwind CSS portfolio, built to support
Software Engineer / Full Stack Developer applications.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Before you publish — placeholder checklist

Everything in this build reflects real work from your CV and the two live
sites (jaecooplu.co.id, bozzmobil.com). Two things still need your input:

1. **`src/data/site.ts`** — `github` and `linkedin` are placeholder URLs.
   Replace them with your real profiles. The Contact section will render a
   dashed "add your link" state until you do, so a dead link can't ship by
   accident.
2. **`src/data/projects.ts`** — the last entry (`web3-roadmap`) is explicitly
   marked `isPlaceholder: true` and rendered with a visible "PLACEHOLDER"
   tag. Once you start a real Web3/Solidity project, either replace its
   content and flip that flag to `false`, or remove the entry entirely —
   don't leave it claiming finished work.

Everything else — the sensor project, the BozzMobil operations work, and the
JAECOO Next.js build — is real and doesn't need editing, though you're
welcome to refine the copy in your own voice.

## Project structure

```
src/
  app/            # App Router: layout, page, global styles
  components/
    layout/       # Navbar, Footer
    sections/     # Hero, About, Skills, Projects, Journey, Contact
    ui/           # Reusable primitives: Container, Section, Badge, Button
  data/           # Typed content — swap for a CMS/DB later without touching components
  lib/            # Shared types + utilities
```

## Designed for future scalability

- **Blog**: add `src/app/blog/[slug]/page.tsx` and a `data/posts.ts` (or swap
  for a CMS) following the same typed-data pattern used here.
- **CMS/database**: every section reads from typed data in `src/data/`. Point
  those same types at a database or CMS query instead of a local constant and
  the components don't need to change.
- **Web3 wallet integration**: the Skills and Projects sections already model
  a "Web3 — Learning Next" category and a roadmap project entry, so adding
  real wallet-connect functionality later is additive, not a rewrite.

## Notes

- Colors, spacing, and fonts are defined once in `tailwind.config.ts` — no
  hardcoded hex values in components.
- `prefers-reduced-motion` is respected globally in `globals.css`.
- Keyboard focus states are visible (`:focus-visible` ring) throughout.
