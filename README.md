# Professional Instruments website

The new airbearings.com for Professional Instruments Company: air bearing spindles, accessories and precision engineering and manufacturing services. Built with [Astro](https://astro.build) and hosted on Cloudflare, the same setup as the InHouse Labs and Plainweb sites.

## Where things live

| What | Where |
| --- | --- |
| Name, phone, email, address, social links, document links | `src/data/site.ts` |
| Main menu, footer links, closing call to action | `src/data/site.ts` |
| Which homepage hero shows, and the A/B switch | `src/data/site.ts` (`hero`) |
| Homepage copy: hero, product wheel, services, applications, timeline, resources | `src/data/home.ts` |
| Product hub copy and every model's specs | `src/data/products.ts` |
| Model pages: one file per model (figures, copy, images, related models) | `src/data/models/` (listed in `index.ts`) |
| The model page layout | `src/components/products/ModelPage.astro` |
| Technical posters: the full list (all 87) | `src/data/poster-list.ts` |
| Technical posters with their own page: one Markdown file each, text copied word for word from the poster | `src/data/posters/` (figures in `public/images/posters/`) |
| About and Contact copy, quote form options | `src/data/about.ts`, `src/data/contact.ts` |
| Colors and fonts | `src/styles/tokens.css` |
| Shared styles: layout, buttons, section heads, rules, figures, lists | `src/styles/global.css` |
| Header and menus, footer, page heads, closing call to action | `src/components/` |
| Homepage sections, including the product wheel | `src/components/home/` |
| Images, favicon, share image, robots.txt | `public/` |

## Pages

| URL | Page |
| --- | --- |
| `/` | Homepage |
| `/products` | All spindles and accessories, with comparison tables and an inch / metric switch |
| `/products/blockhead/3r`, `/4b`, `/4r`, `/4r-225`, `/10b`, `/10r`, `/10r-606` | Blockhead model pages |
| `/products/iso/iso-2-25`, `/iso-3r-db400`, `/iso-3-375pg`, `/iso-5-5f`, `/iso-5-5pg` | ISO model pages |
| `/products/4rh-oil-hydrostatic`, `/products/flatstones` | 4RH and GF-5 Flatstones |
| `/resources/posters` | Every technical poster, by year |
| `/resources/posters/<name>` | A poster as a web page (six so far) |
| `/about` | Who we are, history, the shop, technical posters |
| `/contact` | Contact details and the quote form |

## Running it locally

Needs Node 24 or newer.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run check    # type-check the Astro files
```

## Deploying

Cloudflare deploys every push to `main` with `npx wrangler deploy`. Wrangler runs `npm run build` first (the `build` setting in `wrangler.jsonc`) and uploads `dist`, so the build command in Cloudflare's settings can stay blank. Other branches get preview links. Settings are in `wrangler.jsonc`.

One-time setup: in Cloudflare, create a Worker from this GitHub repository (Workers & Pages → Create → Import a repository). It picks up `wrangler.jsonc`.

## Domain and search

For now the site is a preview for PI at **https://rjmarston.com** (and www), set in `wrangler.jsonc` and `astro.config.mjs`. airbearings.com still runs on Google Sites, so the preview is kept out of search:

- Every page carries `<meta name="robots" content="noindex, nofollow">`.
- Cloudflare sends `X-Robots-Tag: noindex, nofollow` with every file, images included (a `_headers` file written at build).
- `robots.txt` lets crawlers in, so they can see the noindex, and there's no sitemap.
- Canonical URLs and share cards point at rjmarston.com, so links sent to PI preview properly. The company's structured data still names airbearings.com.

rjmarston.com has to be in the same Cloudflare account for the custom domains to attach. If it already has DNS records for the apex or www, remove them first.

### At launch

1. In `astro.config.mjs`, set `SITE_URL` to `https://www.airbearings.com`. That alone removes the noindex tags and header and brings back the sitemap.
2. In `wrangler.jsonc`, swap the rjmarston.com routes for airbearings.com and www.airbearings.com (after moving airbearings.com's DNS to Cloudflare).
3. Redirect the old Google Sites URLs and shared PDF links to their new homes (the content inventory lists every old URL). The old product URLs are already in `public/_redirects`; add the rest there.

## Not done yet

- **Quote form.** It checks the fields and shows a confirmation, but doesn't send anywhere. Who receives quote requests is a question for PI. Then add a handler (for example a Cloudflare Worker that emails sales@airbearings.com).
- **Model pages.** Every standard model, the 4RH and the GF-5 Flatstones have a page, built from the brochures. Family pages (`/products/blockhead`, `/products/iso`) and an Attachments page aren't built; the family addresses redirect to the products page. ISO 5.5F and 5.5PG are two pages until PI decides whether they should be one.
- **Technical posters.** Six of the 87 have their own page (a pilot); the rest link to their PDF on Google Drive. To add one, copy its text word for word into a new Markdown file in `src/data/posters/` and crop its figures into `public/images/posters/<name>/`. The 2018 Blockhead history poster says PI was established in 1947; the rest of the site says 1946. Poster text is kept as printed, so a few posters use "BLOCK-HEAD", "porous graphite" or "&" where the site's own copy wouldn't.
- **Linear slides.** "Slides" is left out of the homepage headline, site description and About until PI confirms they are still offered. The history and shop text still mention them as past products and in-house equipment.
- **Pages linked as "not built yet".** Application pages, the two service pages, the brochure library and the privacy policy. Links to them use `#` and show a short notice.
- **Documents.** Brochures, drawings, the operator's manual, terms and the posters are still on Google Drive. Host them on this site when the library is built.
- **Hero.** PI is choosing between the two homepage heroes. When they pick, set `hero.default` and turn `hero.showToggle` off in `src/data/site.ts`.
- **Facts to confirm with PI.** 4R total weight (18 or 19 lb); 10R 606 ultimate tilt load (brochure 1,850 lb·in, Blockhead overview 1,800 lb·in); 10B material (brochure says stainless steel, drawing says mild steel, so the page leaves it out); the supply pressure for the ISO 2.25 (50K) figures (not stated in its brochure); the history details on the About page; and the other open questions in the review doc.
