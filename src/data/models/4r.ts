// 4R Blockhead. Figures are from the 4R brochure (14 March 2025), at 100 psi (0.7 MPa).
import type { Model } from './types';
import { drive, families, blockheadDocs, blockheadOptions as o, blockheadSpecsIntro, blockheadApplications, quoteText } from './shared';

const brochure = drive('1SH-3yN-gxonnLkwzUdwsnJqhtUqoDuQ8');

export const model: Model = {
  sku: '4R',
  slug: '/products/blockhead/4r',
  name: '4R Blockhead',
  family: families.blockhead,
  seoTitle: '4R Blockhead air bearing spindle',
  seoDescription:
    'The 4R Blockhead is our standard universal air bearing spindle: 1 µin (25 nm) synchronous error, 0.45 lb/µin (80 N/µm) radial stiffness and a 1.25 in aperture.',
  lede: 'Our standard universal spindle with a round stator.',
  image: { src: '/images/4r.webp', width: 900, height: 837 },
  facts: [
    { value: ['1 µin', '25 nm'], label: 'Synchronous error, radial and axial' },
    { value: ['0.45 lb/µin', '80 N/µm'], label: 'Radial stiffness' },
    { value: ['1.25 in', '32 mm'], label: 'Aperture' },
    { value: '7,500 rpm', label: 'Rated speed' },
  ],
  brochure: { href: brochure, label: 'Brochure and drawing (PDF)' },
  overview: ['The 4R is built in 400 series stainless steel in our medium package size, and runs in horizontal or vertical orientation.'],
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
        // The drawing says 19 lb; the brochure says 18 lb. Waiting on PI to confirm.
        { label: 'Total weight', values: [['18 lb', '8.2 kg']] },
        { label: 'Rated speed', values: [['7,500 rpm', '125 Hz']] },
      ],
    },
  ],
  drawing: {
    src: '/images/4r-drawing.webp',
    width: 1600,
    height: 1031,
    alt: 'Dimensioned drawing of the 4R Blockhead: end and side views with mounting holes, ports, stator pilot and overall length',
    intro: 'Dimensions in inches.',
  },
  downloads: [{ name: '4R brochure and drawing', href: brochure }, ...blockheadDocs],
  optionsIntro: 'Configured at the factory to your requirements.',
  options: [o.motor, o.chucks, o.pneumoLock, o.airInlet],
  related: [
    { sku: '4B', text: 'The same 4 inch performance with a rectangular stator, ideal for horizontal mounting.', rows: [] },
    { sku: '4R 225', text: 'The same stator size as the 4R, with a larger 2.25 inch aperture.', rows: [['Aperture', ['2.25 in', '57 mm']], ['Rated speed', '3,000 rpm']] },
    {
      sku: '10R',
      text: 'For heavier work, with a 12 inch round stator.',
      rows: [['Axial load, ultimate', ['1,600 lb', '725 kg']], ['Radial stiffness', ['1.3 lb/µin', '230 N/µm']], ['Rated speed', '1,800 rpm']],
    },
  ],
  cta: { title: 'Request a quote for the 4R Blockhead.', text: quoteText },
  schema: { category: 'Air bearing spindle', brand: 'Blockhead' },
};
