This is the [Next.js](https://nextjs.org) rebuild of the Fresh Loom Cleaning marketing site, converted from the original WordPress/Elementor export in `reference/original-source.html`.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## About this conversion

- Same layout, copy, and section order as the original site (hero, stats, about, services, appointment form, why-choose-us, process, before/after gallery, CTA, testimonials, footer, WhatsApp button).
- Real photography, logo, and brand colors (navy `#0b0f52` + orange `#fc5304`, sampled from the logo) are used throughout — pulled from the client-supplied asset bundle and converted into `public/images/`.
- The appointment and newsletter forms are UI-only (no backend wired up yet) — hook them up to your form/CRM provider of choice.

## Stack

Next.js App Router, TypeScript, Tailwind CSS v4, lucide-react icons.
