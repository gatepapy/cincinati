# The Eye Lounge

An Awwwards-style marketing site for The Eye Lounge, a bar in Kigali,
Rwanda, built with Next.js (App Router), TypeScript, Tailwind CSS and
Framer Motion.

Menu items, imagery, team bios and testimonials are still **placeholder
content** — edit `src/lib/data.ts` to swap them for your real menu, photos
and copy. The bar's name, address, phone and menu currency (RWF) already
reflect the real brand; the email is a placeholder.

## Tech Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4** — custom theme (see `src/app/globals.css`) with the
  brand's palette (near-black to navy blue, a bright blue accent, white/gray) and
  Poppins loaded via `next/font/google`
- **Framer Motion** — scroll-triggered reveals, hero parallax, page
  transitions, mobile menu and lightbox animation
- **next/image** — all photography is placeholder imagery from Unsplash,
  loaded via `remotePatterns` in `next.config.ts`

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

> **Note on images:** if your network sits behind a corporate proxy or
> antivirus that intercepts HTTPS (common on managed Windows machines),
> Next's server-side image optimizer may fail to verify Unsplash's TLS
> certificate even though your browser trusts it fine. `next.config.ts`
> currently sets `images.unoptimized: true` to route around this — safe to
> remove once real, self-hosted images replace the Unsplash placeholders,
> or if you confirm optimization works in your deploy environment.

## Project Structure

```
src/
  app/
    layout.tsx        Root layout — fonts, metadata, Navbar/Footer
    template.tsx       Page-transition wrapper (fade/slide on route change)
    page.tsx            Home
    menu/                Menu (Cocktails / Food / Wine & Spirits)
    about/               About — story, philosophy, team
    gallery/             Gallery — masonry grid + lightbox
    reservations/        Reservation form
    contact/             Contact form + map
    globals.css          Tailwind theme: color palette + Poppins
  components/
    ui/                  Button, SectionHeading, Card, FadeIn
    layout/              Navbar, Footer, PageHero
    home/                Homepage sections (Hero, FeaturedMenu, etc.)
    ReservationForm.tsx, ContactForm.tsx, GalleryGrid.tsx
  lib/
    data.ts              All placeholder content (menu, team, gallery, etc.)
    motion.ts             Shared Framer Motion variants
    cn.ts                 Tiny classnames helper
```

## Customizing

- **Brand name & copy:** edit `src/lib/data.ts` — restaurant name, tagline,
  hours, address, menu items, team bios, testimonials, gallery captions.
- **Colors:** edit the `@theme` block in `src/app/globals.css`
  (`--color-midnight-*`, `--color-espresso-*`, `--color-cream-*`).
- **Images:** replace the Unsplash URLs in `src/lib/data.ts` and component
  files with your own photography (local files in `public/` or a CDN).
- **Forms:** `ReservationForm` and `ContactForm` currently validate
  client-side and simulate a submission. Wire them up to an API route,
  email service, or reservation provider (e.g. Resy, OpenTable, Formspree)
  by replacing the `handleSubmit` logic in
  `src/components/ReservationForm.tsx` / `ContactForm.tsx`.
- **Map:** `SITE.mapEmbedSrc` in `src/lib/data.ts` is a generic Google Maps
  embed — swap in your actual address's embed URL.

## Scripts

```bash
npm run dev     # start dev server
npm run build   # production build
npm run start   # run the production build
npm run lint    # eslint
```
