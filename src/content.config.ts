// Content collections. Technical posters with their own page are Markdown files in src/data/posters/.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posters = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/data/posters' }),
  schema: z.object({
    // As printed on the poster.
    title: z.string(),
    // Authors and affiliations as printed; may contain <sup> markers.
    authors: z.string(),
    affiliations: z.array(z.string()),
    year: z.number(),
    event: z.string(),
    // The poster's own "Presented at ..." line, when it has one.
    presented: z.string().optional(),
    // The poster's file name in the capture; links it to its PDF in src/data/poster-list.ts.
    file: z.string(),
    // Meta description: the opening of the poster's abstract, verbatim.
    description: z.string(),
    // Size of the poster's thumbnail image (public/images/posters/<name>/poster.webp).
    thumb: z.object({ width: z.number(), height: z.number() }),
    // Models the poster is about, by their name in the products table, e.g. '10R 606'.
    products: z.array(z.string()).default([]),
  }),
});

export const collections = { posters };
