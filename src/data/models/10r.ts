// 10R Blockhead. Figures are from the 10R brochure (26 March 2025), at 100 psi (0.7 MPa).
import type { Model } from './types';
import { drive, families, blockheadDocs, blockheadOptions as o, blockheadSpecsIntro, quoteText } from './shared';

const brochure = drive('1-JAqcMbRsRGgYQBJttMP0SnKkp7rVuu_');

export const model: Model = {
  sku: '10R',
  slug: '/products/blockhead/10r',
  name: '10R Blockhead',
  family: families.blockhead,
  seoTitle: '10R Blockhead air bearing spindle',
  seoDescription:
    'The 10R Blockhead is our high load capacity air bearing spindle: 1,600 lb (725 kg) ultimate axial load, 1 µin (25 nm) synchronous error and a 12 inch round stator.',
  lede: 'Our high load capacity universal spindle with a round stator.',
  image: { src: '/images/10r.webp', width: 900, height: 708 },
  facts: [
    { value: ['1 µin', '25 nm'], label: 'Synchronous error, radial and axial' },
    { value: ['1.3 lb/µin', '230 N/µm'], label: 'Radial stiffness' },
    { value: ['3.25 in', '83 mm'], label: 'Aperture' },
    { value: '1,800 rpm', label: 'Rated speed' },
  ],
  brochure: { href: brochure, label: 'Brochure and drawing (PDF)' },
  overview: [
    'The 10R is built in 400 series stainless steel in our largest standard package size, with a 12 inch (305 mm) round stator. It runs in horizontal or vertical orientation.',
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
        { label: 'Total weight', values: [['154 lb', '70 kg']] },
        { label: 'Rated speed', values: [['1,800 rpm', '30 Hz']] },
      ],
    },
  ],
  drawing: {
    src: '/images/10r-drawing.webp',
    width: 1648,
    height: 1287,
    alt: 'Dimensioned drawing of the 10R Blockhead: end and side views of the 12 inch round stator with mounting holes, ports and lifting holes',
    intro: 'Dimensions in inches.',
  },
  downloads: [{ name: '10R brochure and drawing', href: brochure }, ...blockheadDocs],
  optionsIntro: 'Configured at the factory to your requirements.',
  options: [o.motor, o.chucks, o.pneumoLock, o.airInlet],
  related: [
    { sku: '10B', text: 'The same 10 inch performance with a square stator, ideal for horizontal mounting.', rows: [] },
    {
      sku: '10R 606',
      text: 'The 10 inch package with a 6.06 inch clear aperture and more radial capacity.',
      rows: [['Aperture', ['6.06 in', '154 mm']], ['Radial stiffness', ['2.0 lb/µin', '350 N/µm']], ['Maximum speed', '1,500 rpm']],
    },
    {
      sku: '4R',
      text: 'Our standard universal spindle, in the medium package size.',
      rows: [['Axial load, ultimate', ['270 lb', '120 kg']], ['Aperture', ['1.25 in', '32 mm']], ['Rated speed', '7,500 rpm']],
    },
  ],
  cta: { title: 'Request a quote for the 10R Blockhead.', text: quoteText },
  schema: { category: 'Air bearing spindle', brand: 'Blockhead' },
};
