// 10B Blockhead. Figures are from the 10B brochure (27 March 2025), at 100 psi (0.7 MPa).
// Material is left out: the brochure text says stainless steel, but the drawing (50-22191-001) says
// mild steel stator and rotor. Waiting on PI to confirm.
import type { Model } from './types';
import { drive, families, blockheadDocs, blockheadOptions as o, blockheadSpecsIntro, quoteText } from './shared';

const brochure = drive('1jJmvpDS0idLXPRRmKQ0XBZ0TZVy8xZEl');

export const model: Model = {
  sku: '10B',
  slug: '/products/blockhead/10b',
  name: '10B Blockhead',
  family: families.blockhead,
  seoTitle: '10B Blockhead air bearing spindle',
  seoDescription:
    'The 10B Blockhead air bearing spindle has a 10 inch square stator, 1,600 lb (725 kg) ultimate axial load and 1 µin (25 nm) synchronous error.',
  lede: 'Our largest standard Blockhead, with six stator faces for convenient mounting.',
  image: { src: '/images/10b.webp', width: 667, height: 712 },
  facts: [
    { value: ['1 µin', '25 nm'], label: 'Synchronous error, radial and axial' },
    { value: ['1.3 lb/µin', '230 N/µm'], label: 'Radial stiffness' },
    { value: ['3.25 in', '83 mm'], label: 'Aperture' },
    { value: '1,800 rpm', label: 'Rated speed' },
  ],
  brochure: { href: brochure, label: 'Brochure and drawing (PDF)' },
  overview: [
    'The 10B has a 10 inch (254 mm) square stator, which makes it ideal for horizontal mounting. It runs in horizontal or vertical orientation.',
  ],
  applications: [
    'Precision manufacturing and metrology',
    'Single point diamond turning',
    'Synchrotron instrumentation',
    'Wafer grinding and inspection',
  ],
  specsIntro: blockheadSpecsIntro,
  specs: [
    {
      title: 'Load capacity',
      columns: ['Ultimate', 'Working'],
      rows: [
        { label: 'Radial', values: [['270 lb', '120 kg'], ['135 lb', '60 kg']] },
        { label: 'Axial', values: [['1,600 lb', '725 kg'], ['800 lb', '363 kg']] },
        { label: 'Tilt', values: [['4,000 lb·in', '450 N·m'], ['2,000 lb·in', '225 N·m']] },
      ],
    },
    {
      title: 'Stiffness',
      rows: [
        { label: 'Radial', values: [['1.3 lb/µin', '230 N/µm']] },
        { label: 'Axial', values: [['6.5 lb/µin', '1,150 N/µm']] },
        { label: 'Tilt', values: [['65 lb·in/µrad', '7.5 N·m/µrad']] },
      ],
    },
    {
      title: 'Synchronous error',
      rows: [
        { label: 'Radial', values: [['1 µin', '25 nm']] },
        { label: 'Axial', values: [['1 µin', '25 nm']] },
        { label: 'Tilt', values: ['0.1 µrad'] },
      ],
    },
    {
      title: 'Physical and air',
      rows: [
        { label: 'Air consumption', values: [['1.6 SCFM', '45 SLPM']] },
        { label: 'Rotor inertia', values: [['2.3 lb·in·sec²', '0.254 kg·m²']] },
        { label: 'Rotor weight', values: [['72 lb', '33 kg']] },
        { label: 'Total weight', values: [['146 lb', '66 kg']] },
        { label: 'Rated speed', values: [['1,800 rpm', '30 Hz']] },
      ],
    },
  ],
  drawing: {
    src: '/images/10b-drawing.webp',
    width: 1546,
    height: 1648,
    alt: 'Dimensioned drawing of the 10B Blockhead: front, side and top views of the 10 inch square stator with mounting holes and ports',
    intro: 'Dimensions in inches.',
  },
  downloads: [{ name: '10B brochure and drawing', href: brochure }, ...blockheadDocs],
  optionsIntro: 'Configured at the factory to your requirements.',
  options: [o.motor, o.chucks, o.pneumoLock],
  related: [
    { sku: '10R', text: 'The same 10 inch performance with a 12 inch round stator.', rows: [] },
    {
      sku: '4B',
      text: 'A smaller rectangular stator, in the medium package size.',
      rows: [['Radial stiffness', ['0.45 lb/µin', '80 N/µm']], ['Aperture', ['1.25 in', '32 mm']], ['Rated speed', '7,500 rpm']],
    },
  ],
  cta: { title: 'Request a quote for the 10B Blockhead.', text: quoteText },
  schema: { category: 'Air bearing spindle', brand: 'Blockhead' },
};
