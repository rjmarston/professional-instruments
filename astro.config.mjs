// @ts-check
import { defineConfig } from 'astro/config';
import { writeFile } from 'node:fs/promises';
import sitemap from '@astrojs/sitemap';

// Where the site is served. Used for canonical URLs, the sitemap and social cards.
// While it's a preview for PI on rjmarston.com, every page tells search engines not to index it,
// because airbearings.com is still live. At launch, change this to 'https://www.airbearings.com':
// the noindex tags and header come off and the sitemap comes back.
const SITE_URL = 'https://rjmarston.com';
const PREVIEW = !SITE_URL.includes('airbearings.com');

// Preview only: Cloudflare sends "X-Robots-Tag: noindex" with every file it serves, images included.
const noindexHeader = {
  name: 'noindex-header',
  hooks: {
    /** @param {{ dir: URL }} options */
    'astro:build:done': async ({ dir }) => {
      await writeFile(new URL('_headers', dir), '/*\n  X-Robots-Tag: noindex, nofollow\n');
    },
  },
};

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: PREVIEW ? [noindexHeader] : [sitemap()],
});
