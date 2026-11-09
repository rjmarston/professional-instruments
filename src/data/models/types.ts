// The shape of a model page. Each file in this folder fills one in; src/data/models/index.ts lists them.
// A value is either one string or [inch, metric]; the units switch on the page picks one.
import type { Value } from '../products';

export type SpecRow = {
  label: string;
  values: Value[];
  // Words rather than figures (an encoder or motor type): set in the text face and allowed to wrap.
  text?: boolean;
};

export type SpecBlock = { title: string; columns?: string[]; rows: SpecRow[] };

export type Model = {
  // The model's name in the products table, e.g. '4R'. Links from the table and related cards use it.
  sku: string;
  // The page's address.
  slug: string;
  name: string;
  family?: { name: string; href: string };
  seoTitle: string;
  seoDescription: string;
  lede: string;
  image: { src: string; width: number; height: number };
  facts: { value: Value; label: string }[];
  brochure: { href: string; label: string };
  // What the product is. Configuration lives in `options`; dimensions are on the drawing.
  overview: string[];
  applications?: string[];
  specsIntro?: string;
  specs?: SpecBlock[];
  // Numbered steps, for accessories that come with instructions.
  instructions?: { title: string; steps: string[] };
  drawing?: { src: string; width: number; height: number; alt: string; intro: string };
  downloads: { name: string; href: string }[];
  optionsIntro?: string;
  options?: { title: string; text: string }[];
  // Related models show only the figures that differ from this one.
  related?: { sku: string; text: string; rows: [string, Value][] }[];
  cta: { title: string; text: string };
  // For search engines' product data.
  schema: { category: string; brand?: string };
};
