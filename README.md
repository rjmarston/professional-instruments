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
| The 4R page (the template for model pages) | `src/data/models/4r.ts`, `src/pages/products/blockhead/4r.astro` |
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
| `/products/blockhead/4r` | 4R Blockhead. Every model links here until its own page is built |
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
3. Redirect the old Google Sites URLs and shared PDF links to their new homes (the content inventory lists every old URL).

## Not done yet

- **Quote form.** It checks the fields and shows a confirmation, but doesn't send anywhere. Who receives quote requests is a question for PI. Then add a handler (for example a Cloudflare Worker that emails sales@airbearings.com).
- **Model pages.** Only the 4R exists. Every other model, and the GF-5 Flatstones, links to it for now (`modelHref` in `src/data/products.ts`).
- **Pages linked as "not built yet".** Application pages, the two service pages, the brochure library and the privacy policy. Links to them use `#` and show a short notice.
- **Documents.** Brochures, drawings, the operator's manual, terms and the posters are still on Google Drive. Host them on this site when the library is built.
- **Hero.** PI is choosing between the two homepage heroes. When they pick, set `hero.default` and turn `hero.showToggle` off in `src/data/site.ts`.
- **Facts to confirm with PI.** 4R total weight (18 or 19 lb), the converted 10R 606 aperture (154 mm), the history details on the About page, and the other open questions in the review doc.
