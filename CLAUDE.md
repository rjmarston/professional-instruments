# Working on the Professional Instruments site

This is the airbearings.com site for Professional Instruments Company (Astro, hosted on Cloudflare). PI makes ultra-precision air bearing spindles, so the site should feel the same way: exact, quiet, built from fine lines.

## Where to make changes

- Words: in `src/data/`. Homepage in `home.ts`, product hub and specs in `products.ts`, the 4R page in `models/4r.ts`, About in `about.ts`, Contact in `contact.ts`. Name, phone, menus, footer and the closing call to action in `site.ts`. Change copy there, not in the components.
- Specs that have a metric twin are written `['0.45 lb/µin', '80 N/µm']`; the inch / metric switch picks one. Speeds ending in "max" or "rated" show that word as a small note.
- Layout and styling of a section: its component in `src/components/` (styles live in the same file).
- Shared styles (layout, buttons, section heads, rules, figures, lists): `src/styles/global.css`. Colors and fonts: `src/styles/tokens.css`.

## Facts

- Only use figures and claims from PI's own brochures, drawings and current site. Never invent stats, customers or quotes.
- Note anything unconfirmed in a comment beside it, and list it in the README under "Not done yet".

## Design rules

- Keep the PI logo exactly as it is.
- Red (`var(--red)`) is the brand and action color: one red button per screen, plus small markers. Everything else is ink, graphite and hairlines. Don't add new colors or fonts; if something new is needed, add a token and tell the user.
- Lines are fine: .5px for detail, 1px for rules. No full-width lines between sections or under the header; separate sections with space, or the light band (`.sec.band`).
- Buttons are two-part (label cell, then an arrow cell): `<Button label="…" />`, `kind="line"` for secondary. One primary action per block.
- Section headings use `SectionHead`: title left, short intro right, a rule that draws in from the right.
- No eyebrow labels above headings, no degree markings as headers.
- Bolt-circle plates (class `spin`) turn only while scrolling.

## Motion

- Motion follows the scroll, or plays once on load. Nothing loops or floats while the page is still.
- The product wheel, the year scales and the plates move only with the scroll. Section heads reveal once as they come into view.
- Every animation needs a `prefers-reduced-motion: reduce` fallback, and content must show finished without JavaScript.

## Voice

Plain words, short sentences, sentence case. Buttons start with a verb ("Request a quote", "View all spindles"). No exclamation marks or emoji. Don't ask visitors to send or attach drawings for now.

## Before you finish

Run `npm run build` and `npm run check`. Check the page at phone width (390px) and desktop width (1440px), with nothing scrolling sideways.
