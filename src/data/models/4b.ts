// 4B Blockhead. Figures are from the 4B brochure (17 March 2025), at 100 psi (0.7 MPa).
import type { Model } from './types';
import { drive, families, blockheadDocs, blockheadOptions as o, blockheadSpecsIntro, blockheadApplications, quoteText } from './shared';

const brochure = drive('1DqHZVUd3c5NXIT-M1MDJeXYWZe5G9PPe');

export const model: Model = {
  sku: '4B',
  slug: '/products/blockhead/4b',
  name: '4B Blockhead',
  family: families.blockhead,
  seoTitle: '4B Blockhead air bearing spindle',
  seoDescription:
    'The 4B Blockhead air bearing spindle has a rectangular stator for horizontal mounting, 1 µin (25 nm) synchronous error and 0.45 lb/µin (80 N/µm) radial stiffness.',
  lede: 'Our medium Blockhead with a rectangular stator, ideal for horizontal mounting.',
  image: { src: '/images/4b.webp', width: 900, height: 754 },
  facts: [
    { value: ['1 µin', '25 nm'], label: 'Synchronous error, radial and axial' },
    { value: ['0.45 lb/µin', '80 N/µm'], label: 'Radial stiffness' },
    { value: ['1.25 in', '32 mm'], label: 'Aperture' },
    { value: '7,500 rpm', label: 'Rated speed' },
  ],
  brochure: { href: brochure, label: 'Brochure and drawing (PDF)' },
  overview: [
    'The 4B is built in 400 series stainless steel in our medium package size, with a 5.0 x 4.25 inch (127 x 108 mm) stator. It runs in horizontal or vertical orientation.',
  ],
  applications: blockheadApplications,
  specsIntro: blockheadSpecsIntro,
  specs: [
    {
      title: 'Load capacity',
      columns: ['Ultimate', 'Working'],
      rows: [
        { label: 'Radial', values: [['70 lb', '30 kg'], ['35 lb', '15 kg']] },
        { label: 'Axial', values: [['270 lb', '120 kg'], ['135 lb', '60 kg']] },
        { label: 'Tilt', values: [['270 lb·in', '30 N·m'], ['135 lb·in', '15 N·m']] },
      ],
    },
    {
      title: 'Stiffness',
      rows: [
        { label: 'Radial', values: [['0.45 lb/µin', '80 N/µm']] },
        { label: 'Axial', values: [['1.3 lb/µin', '230 N/µm']] },
        { label: 'Tilt', values: [['2.7 lb·in/µrad', '0.3 N·m/µrad']] },
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
        { label: 'Air consumption', values: [['0.7 SCFM', '20 SLPM']] },
        { label: 'Rotor inertia', values: [['0.05 lb·in·sec²', '0.005 kg·m²']] },
        { label: 'Rotor weight', values: [['7.7 lb', '3.5 kg']] },
        { label: 'Total weight', values: [['18 lb', '8.2 kg']] },
        { label: 'Rated speed', values: [['7,500 rpm', '125 Hz']] },
      ],
    },
  ],
  drawing: {
    src: '/images/4b-drawing.webp',
    width: 1236,
    height: 1648,
    alt: 'Dimensioned drawing of the 4B Blockhead: front, side and top views of the rectangular stator with mounting holes, inlet and gauge ports',
    intro: 'Dimensions in inches.',
  },
  downloads: [{ name: '4B brochure and drawing', href: brochure }, ...blockheadDocs],
  optionsIntro: 'Configured at the factory to your requirements.',
  options: [o.motor, o.chucks, o.pneumoLock, o.airInlet],
  related: [
    { sku: '4R', text: 'The same 4 inch performance with a round stator.', rows: [] },
    {
      sku: '10B',
      text: 'For heavier work, with a 10 inch square stator.',
      rows: [['Axial load, ultimate', ['1,600 lb', '725 kg']], ['Radial stiffness', ['1.3 lb/µin', '230 N/µm']], ['Rated speed', '1,800 rpm']],
    },
  ],
  cta: { title: 'Request a quote for the 4B Blockhead.', text: quoteText },
  schema: { category: 'Air bearing spindle', brand: 'Blockhead' },
};
