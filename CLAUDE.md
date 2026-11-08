# Working on the Professional Instruments site

This is the airbearings.com site for Professional Instruments Company (Astro, hosted on Cloudflare). PI makes ultra-precision air bearing spindles, so the site should feel the same way: exact, quiet, built from fine lines.

## Where to make changes

- Words: in `src/data/`. Homepage in `home.ts`, product hub and specs in `products.ts`, the 4R page in `models/4r.ts`, About in `about.ts`, Contact in `contact.ts`. Name, phone, menus, footer and the closing call to action in `site.ts`. Change copy there, not in the components.
- Specs that have a metric twin are written `['0.45 lb/µin', '80 N/µm']`; the inch / metric switch picks one. Speeds ending in "max" or "rated" show that word as a small note.
- Layout and styling of a section: its component in `src/components/` (styles live in the same file). Shared styles (layout, buttons, section heads, rules, figures, lists): `src/styles/global.css`. Colors and fonts: `src/styles/tokens.css`.
- Product specs belong in data files and are read by page templates, never typed into page markup.
- `reference/` contains source material and prototypes; treat it as read-only unless a task explicitly asks otherwise.

## Preview

The site is a preview on rjmarston.com while airbearings.com is live. Anywhere but airbearings.com, every page is noindexed (see `astro.config.mjs` and the README). Don't remove that until launch.

## Content rules

- Only use figures and claims from PI's own brochures, drawings, current site and approved copy in `reference/copy-deck.md`. Never invent specs, dimensions, tolerances, dates, customers or quotes. Check figures against the source PDF; text extracts may have approximate tables.
- Note anything unconfirmed in a comment beside it, and list it in the README under "Not done yet". If a required figure is missing, leave a visible `TODO:` and mention it in your reply.
- Spell it "Blockhead", never "BLOCK-HEAD" or "Block-Head". Use "and", not "&", in headings and URLs.
- Give the metric equivalent next to inch and microinch figures. Keep inch and metric spec values paired in data for the unit switch.
- ISO 5.5PG sleeves are "porous carbon" (the brochure's term), not "porous graphite".
- Don't present linear slides as a product until the client confirms they're still offered.
- Every image needs alt text, and every page needs a unique title and meta description. Follow the URL slugs in the copy deck and redirect each listed `old_urls` entry to its new page.
- Don't ask visitors to send or attach drawings.

## Design rules

- Keep the PI logo exactly as it is.
- Red (`var(--red)`) is the brand and action color: one red button per screen, plus small markers. Everything else is ink, graphite and hairlines. Don't add new colors or fonts; if something new is needed, add a token and tell the user.
- The established typefaces are Inter Tight for words and Azeret Mono for figures, units and labels. Keep colors and fonts in `src/styles/tokens.css`; use the shared styles in `src/styles/global.css` rather than one-off styling.
- Lines are fine: .5px for detail, 1px for rules. No full-width lines between sections or under the header; separate sections with space, or the light band (`.sec.band`).
- Buttons are two-part (label cell, then an arrow cell): `<Button label="…" />`, `kind="line"` for secondary. One primary action per block.
- The primary action is to request a quote.
- Section headings use `SectionHead`: title left, short intro right, a rule that draws in from the right.
- No eyebrow labels above headings, no degree markings as headers.
- Bolt-circle plates (class `spin`) turn only while scrolling.

## Motion

- Motion follows the scroll, or plays once on load. Nothing loops or floats while the page is still.
- The product wheel, the year scales and the plates move only with the scroll. Section heads reveal once as they come into view.
- Every animation needs a `prefers-reduced-motion: reduce` fallback, and content must show finished without JavaScript.

## Voice

Plain words, short sentences, sentence case. Buttons start with a verb ("Request a quote", "View all spindles"). No exclamation marks or emoji. Don't ask visitors to send or attach drawings for now.

## Open questions

- Should ISO 5.5F and ISO 5.5PG be one page with two variants, or two pages?
- What does "ISO" denote in the ISO series name?
- Are linear slides still offered?
- Which spindles should be recommended for each application?
- What are the office hours for the Contact page?
- What backend should the quote form use, and what Privacy page text will the client's counsel provide?

## Working rules

- Work on a branch, one per page or change. Don't commit straight to `main`.
- Say why before adding a dependency.
- When a task is done, say what changed and what to look at in the preview.

## Before you finish

Run `npm run build` and `npm run check`. Check the page at phone width (390px) and desktop width (1440px), with nothing scrolling sideways.
