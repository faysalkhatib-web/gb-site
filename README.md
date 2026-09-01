# Good Boy Records

The Good Boy Records marketing site — built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # run the production build
npm run lint    # eslint
```

## Site structure

- `/` — Home: hero, horizontal-scrolling artist gallery, latest releases, label ethos, merch teaser, newsletter
- `/artists` — full roster grid
- `/music` — full release catalog
- `/merch` — merch lookbook, links out to Shopify
- `/about` — label story and values
- `/contact` — general + demo-submission contact info

## Where things live

- `data/site.ts` — site-wide config: Shopify URL, contact emails, social links
- `data/artists.ts` — the artist roster (name, genre, bio, Spotify/Instagram links)
- `data/releases.ts` — the release catalog
- `components/` — UI building blocks (Nav, Footer, cards, buttons, the artist gallery, etc.)
- `lib/generative.ts` — generates the abstract gradient "cover art" used for artists/releases until real photography/artwork is supplied

## Before you launch — placeholder checklist

Everything below is realistic placeholder content so the site is fully functional today, but should be swapped before it goes live:

- [ ] **Logo** — `components/Logo.tsx` renders a generated paw mark + wordmark. Swap in your real logo (and update `app/icon.svg`, the favicon, to match).
- [ ] **Shopify URL** — `data/site.ts` → `shopifyUrl`. The Merch page's collection tiles link to `{shopifyUrl}/collections/<handle>`, which assumes your Shopify collections use matching handles (`apparel`, `headwear`, `vinyl-ephemera`, `limited-drops`) — adjust the `handle` fields in `app/merch/page.tsx` if yours differ.
- [ ] **Contact emails** — `data/site.ts` → `email`, `demoEmail`.
- [ ] **Social links** — `data/site.ts` → `social.instagram`, `social.spotify`, `social.tiktok`.
- [ ] **Artist roster** — `data/artists.ts`. Replace the 8 placeholder artists with your real roster and their real Spotify/Instagram URLs. `seed` just controls the generated artwork variation — any number works.
- [ ] **Releases** — `data/releases.ts`, same idea.
- [ ] **Artist/release artwork** — currently generated gradients (`lib/generative.ts`) standing in for real photography and cover art. To use a real image, swap the `<ArtistArt seed={...} />` usage for a `next/image` in `components/ArtistCard.tsx` / `components/ReleaseCard.tsx`.
- [ ] **Newsletter form** — `components/NewsletterForm.tsx` currently only updates local UI state (see the `TODO` in the file). Wire it up to a real email service (Mailchimp, Klaviyo, ConvertKit, etc.) before launch.
- [ ] **About page copy** — `app/about/page.tsx` has placeholder brand story/values copy — personalize it with your label's real story.
- [ ] **Legal/business specifics** — none of the copy makes any specific contractual, financial, or legal claims (deal terms, splits, etc.) — if you want to state any of that publicly, add it deliberately and have it reviewed.

## Design system

- **Colors**: cream `#FFFBF4` (primary background), blue `#2955A6` (primary/brand), orange `#F4D68E` (secondary/accent) — plus a few derived shades in `tailwind.config.ts` (`ink`, `blue-dark`, `orange-deep`, etc.) for text and hover states.
- **Type**: Fraunces (serif, display/headings) + Manrope (sans, body/UI), both loaded via `next/font/google`.
- **Motion**: hover states are pure CSS (`transition` + `group-hover`) for performance; scroll-triggered entrances use Framer Motion (`components/Reveal.tsx`).
