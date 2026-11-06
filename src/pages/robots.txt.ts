import type { APIRoute } from 'astro';

// While the site is a preview (served anywhere but airbearings.com), crawlers may still fetch pages,
// so they see each page's noindex tag and drop it. There's no sitemap until launch.
export const GET: APIRoute = ({ site }) => {
  const live = site?.hostname.endsWith('airbearings.com');
  const body = live ? `User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap-index.xml', site)}\n` : 'User-agent: *\nAllow: /\n';
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
