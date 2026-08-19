# Al-Manzil Guest House — Static Website

Next.js (App Router) static export, 4 pages: Home, Rooms, About, Contact.

## Before you launch — 5 placeholders to swap

Everything content-wise lives in `lib/business.ts`. Open it and replace:

1. `name` — real business name (currently "Al-Manzil Guest House", a working name)
2. `address` — real address + `mapQuery` (used for the embedded Google map on the Contact page)
3. `phone` / `whatsapp` — real numbers (`href` fields must be digits only, no spaces)
4. `rooms[].priceFrom` — real nightly rates per room type
5. `yearsInService` / the stats strip numbers — confirm founding year and real counts

Images in `/public/images/*.svg` are brand-colored placeholder illustrations, not real
photos — swap them for real photography (same filenames, or update the `src` paths in
`components/Hero.tsx`, `components/RoomCard.tsx`, and `app/about/page.tsx`).

## Contact form

This is a fully static site with no backend. The Contact form builds a `mailto:` link
from the entered fields and opens the visitor's email app — nothing is submitted to a
server. If you want real form submissions without adding a backend, swap
`components/ContactForm.tsx` to post to a service like Formspree; if you want a WhatsApp-first
flow instead, replace the `mailto:` in `handleSubmit` with a `https://wa.me/...` link built the
same way `ClosingCta` and `Header` already do it.

## Run locally

```bash
npm install
npm run dev       # http://localhost:3000
```

## Build for static hosting

```bash
npm run build      # outputs static HTML/CSS/JS to /out
```

`/out` is a fully static site — drop it on any static host (Vercel, Netlify, GitHub Pages,
S3, cPanel, etc). No Node server required at runtime.
