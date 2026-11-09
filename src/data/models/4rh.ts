// 4RH oil hydrostatic. Figures are from its brochure (7 January 2020, older layout), at 600 psi (4.1 MPa) inlet pressure.
// The brochure gives capacities without separating ultimate and working load.
import type { Model } from './types';
import { drive, quoteText } from './shared';

const brochure = drive('1fla_itfQBidZspt5uUqYZGwBgP6s735I');

export const model: Model = {
  sku: '4RH',
  slug: '/products/4rh-oil-hydrostatic',
  name: '4RH oil hydrostatic',
  seoTitle: '4RH oil hydrostatic biconic spindle',
  seoDescription:
    'The 4RH is a step-compensated oil hydrostatic biconic spindle for grinding and hard-turning: 1 µin (25 nm) synchronous error and 2,000 lb (9 kN) axial capacity.',
  lede: 'A step-compensated oil hydrostatic biconic spindle for grinding and hard-turning.',
  image: { src: '/images/4rh.webp', width: 700, height: 685 },
  facts: [
    { value: ['1 µin', '25 nm'], label: 'Synchronous error, radial and axial' },
    { value: ['2,000 lb', '9 kN'], label: 'Axial capacity' },
    { value: ['1.0 lb/µin', '180 N/µm'], label: 'Axial stiffness' },
    { value: '3,500 rpm', label: 'Top speed' },
  ],
  brochure: { href: brochure, label: 'Brochure and drawing (PDF)' },
  overview: ['Oil hydrostatic bearings give the 4RH nanometer-level error motion together with high load capacity and high crash resistance.'],
  applications: ['Grinding', 'Hard-turning'],
  specsIntro: 'At 600 psi (4.1 MPa) inlet pressure.',
  specs: [
    {
      title: 'Load capacity',
      rows: [
        { label: 'Axial', values: [['2,000 lb', '9 kN']] },
        { label: 'Radial', values: [['650 lb', '3 kN']] },
        { label: 'Tilt', values: [['2,600 lb·in', '300 N·m']] },
      ],
    },
    {
      title: 'Stiffness and speed',
      rows: [
        { label: 'Axial stiffness', values: [['1.0 lb/µin', '180 N/µm']] },
        { label: 'Top speed', values: ['3,500 rpm'] },
      ],
    },
    {
      title: 'Synchronous error',
      rows: [
        { label: 'Radial', values: [['1 µin', '25 nm']] },
        { label: 'Axial', values: [['1 µin', '25 nm']] },
      ],
    },
  ],
  drawing: {
    src: '/images/4rh-drawing.webp',
    width: 1648,
    height: 1073,
    alt: 'Dimensioned drawing of the 4RH oil hydrostatic bearing: end and side views with mounting holes, oil inlet and drain ports and air curtain seal port',
    intro: 'Dimensions in inches.',
  },
  downloads: [{ name: '4RH brochure and drawing', href: brochure }],
  cta: { title: 'Request a quote for the 4RH.', text: quoteText },
  schema: { category: 'Oil hydrostatic spindle' },
};
