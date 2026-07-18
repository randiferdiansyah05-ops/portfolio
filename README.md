# Randi Ferdiansyah — Portfolio

Next.js (App Router) + TypeScript + Tailwind CSS portfolio, built to support
Software Engineer / Full Stack Developer applications.

## Getting started

```bash
npm install
npm run dev
```
Open http://localhost:3000.

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
