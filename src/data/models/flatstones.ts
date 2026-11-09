// GF-5 Flatstones. Copy and instructions are from the GF-5 brochure (19 March 2025).
import type { Model } from './types';
import { drive, families } from './shared';

const brochure = drive('1BFfBzG8ACVB_hKCGKhqBqpP9-WJbLYYa');

export const model: Model = {
  sku: 'GF-5',
  slug: '/products/flatstones',
  name: 'GF-5 Flatstones',
  family: families.accessories,
  seoTitle: 'GF-5 precision ground flatstones',
  seoDescription:
    'GF-5 precision ground aluminum oxide flatstones remove burrs and the swelling around nicks and dents, so precision surfaces make full contact. Standard pair: 120 and 80 grit.',
  lede: 'Precision ground flatstones for preparing precision surfaces.',
  image: { src: '/images/stones.webp', width: 538, height: 573 },
  facts: [
    { value: '120 + 80 grit', label: 'Standard pair: one light brown, one bluish gray' },
    { value: '46 grit', label: 'Open-bond stone for aluminum workpieces' },
    { value: 'Custom', label: 'Stones for internal diameters and tapers, on request' },
  ],
  brochure: { href: brochure, label: 'Brochure (PDF)' },
  overview: [
    'GF-5 Flatstones are aluminum oxide with a porous structure. They remove burrs, microscopic asperities and the localized swelling left by nicks and dents, so mating surfaces make full contact.',
    'The faces are ground flat and parallel with a diamond grinding wheel, and the long sides are ground flat and square to the faces.',
  ],
  instructions: {
    title: 'Instructions for use',
    steps: [
      'Ground flatstones are used dry, not oiled, so clean the workpiece before stoning.',
      'Rub two stones against each other to remove debris on the stones.',
      'Slide a stone onto the work with light pressure. If you can feel debris, stop and clean the work again.',
      'On clean work you can feel burrs and upsets. Keep stoning until the work feels smooth.',
      'Clean the stones quickly by wiping them on a cloth wetted with solvent.',
      'For deeper cleaning, use an ultrasonic tank with a detergent such as Alconox.',
      'After cleaning, let the stones dry completely before use.',
    ],
  },
  drawing: {
    src: '/images/flatstones-drawing.webp',
    width: 1648,
    height: 1083,
    alt: 'Drawing of a GF-5 ground flatstone: 4.9 by 1.9 by 0.73 inches (124 by 48 by 18.5 mm), with a table of stone colors and grits',
    intro: 'Dimensions in inches, with millimeters.',
  },
  downloads: [{ name: 'GF-5 Flatstones brochure', href: brochure }],
  cta: { title: 'Request a quote for GF-5 Flatstones.', text: 'Tell us which stones you need and how many.' },
  schema: { category: 'Flatstone' },
};
