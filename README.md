# The Misty Copeland Foundation — Website

A refreshed, mobile-first, SEO-optimized website for The Misty Copeland Foundation, built to honor Misty's legacy and drive donor support.

> _"In a just world, everyone can experience the beauty and power of dance."_

## Tech stack

- **[Next.js 14](https://nextjs.org/)** (App Router) + **TypeScript**
- **Tailwind CSS** for styling (warm-neutral palette with brand accents)
- **Framer Motion** + a custom `Reveal` component for scroll animation
- **next/font** — Playfair Display (headlines), Lora (body), Montserrat (UI)
- Fully responsive, semantic HTML, Open Graph + `schema.org` NGO structured data, `sitemap.xml` & `robots.txt`

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Project structure

```
app/
  layout.tsx        # fonts, global SEO metadata, <Nav> + <Footer>
  page.tsx          # homepage (composes the sections below)
  donate/           # donation page (money page)
  leadership/       # team + board, matched to photos
  programs/         # BE BOLD program family
  sitemap.ts, robots.ts
components/          # Hero, InstagramGallery, ImpactStats, CampaignSection, etc.
lib/content.ts      # ← ALL copy, giving amounts, people, and config live here
public/
  logo/  team/  video/  gallery/   # brand + media assets
```

## Editing content

Almost everything is in **`lib/content.ts`** — copy, giving tiers, team bios, campaign
figures, and links. No component edits needed for routine content changes.

## Before go-live — client checklist

These are marked with `TODO(client)` in the code:

1. **Donation platform** (`lib/content.ts` → `DONATE_URL`): connect the Foundation's real
   processor (Givebutter / Donorbox / Classy). The donate widget UI is built and ready — this
   is a one-line change plus, optionally, an embedded checkout.
2. **Campaign total** (`CAMPAIGN.raised`): set the live "Celebrating Misty" running total.
3. **Impact numbers** (`STATS`): confirm the real figures (the "children reached" tile is a
   placeholder).
4. **Instagram feed**: the homepage gallery currently uses curated images in `public/gallery`.
   Swap for a live feed with an Instagram API token or a widget (Behold / EmbedSocial).
5. **Hero video**: drop Misty's footage into `public/video/` (the hero cycles
   `ballet1.mp4`, `ballet2.mp4`, `programs.mp4` — add/replace as desired).

## Deployment

Optimized for **[Vercel](https://vercel.com/)**: import the GitHub repo and deploy — no config
needed. Every push to `main` redeploys automatically.

---

© The Misty Copeland Foundation. Brand colors, logo and typography per the official MCF style guide.
