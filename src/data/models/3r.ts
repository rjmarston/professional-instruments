// 3R Blockhead. Figures are from the 3R brochure (14 March 2025), at 100 psi (0.7 MPa).
import type { Model } from './types';
import { drive, families, blockheadDocs, blockheadOptions as o, blockheadSpecsIntro, blockheadApplications, quoteText } from './shared';

const brochure = drive('1_aBDL7_pvcJbyA_3mCPdsXbJConOUHZQ');

export const model: Model = {
  sku: '3R',
  slug: '/products/blockhead/3r',
  name: '3R Blockhead',
  family: families.blockhead,
  seoTitle: '3R Blockhead air bearing spindle',
  seoDescription:
    'The 3R is our smallest Blockhead air bearing spindle, rated to 15,000 rpm, with 1 µin (25 nm) synchronous error and a 0.75 in (19 mm) aperture.',
  lede: 'Our smallest Blockhead, capable of 15,000 rpm.',
  image: { src: '/images/3r.webp', width: 900, height: 785 },
  facts: [
    { value: ['1 µin', '25 nm'], label: 'Synchronous error, radial and axial' },
    { value: ['0.33 lb/µin', '60 N/µm'], label: 'Radial stiffness' },
    { value: ['0.75 in', '19 mm'], label: 'Aperture' },
    { value: '15,000 rpm', label: 'Rated speed' },
  ],
  brochure: { href: brochure, label: 'Brochure and drawing (PDF)' },
  overview: [
    'The 3R is built in 400 series stainless steel in our smallest package size, and runs in horizontal or vertical orientation. Its porting is simplified, without the pneumo-lock option.',
  ],
  applications: blockheadApplications,
  specsIntro: blockheadSpecsIntro,
  specs: [
    {
      title: 'Load capacity',
      columns: ['Ultimate', 'Working'],
      rows: [
        { label: 'Radial', values: [['45 lb', '20 kg'], ['23 lb', '10 kg']] },
        { label: 'Axial', values: [['115 lb', '50 kg'], ['58 lb', '25 kg']] },
        { label: 'Tilt', values: [['95 lb·in', '10 N·m'], ['48 lb·in', '5 N·m']] },
      ],
    },
    {
      title: 'Stiffness',
      rows: [
        { label: 'Radial', values: [['0.33 lb/µin', '60 N/µm']] },
        { label: 'Axial', values: [['1.0 lb/µin', '175 N/µm']] },
        { label: 'Tilt', values: [['1.1 lb·in/µrad', '0.12 N·m/µrad']] },
      ],
    },
    {
      title: 'Synchronous error',
      rows: [
        { label: 'Radial', values: [['1 µin', '25 nm']] },
        { label: 'Axial', values: [['1 µin', '25 nm']] },
        { label: 'Tilt', values: ['0.3 µrad'] },
      ],
    },
    {
      title: 'Physical and air',
      rows: [
        { label: 'Air consumption', values: [['0.7 SCFM', '20 SLPM']] },
        { label: 'Rotor inertia', values: [['0.01 lb·in·sec²', '0.001 kg·m²']] },
        { label: 'Rotor weight', values: [['3.2 lb', '1.5 kg']] },
        // Not in the 3R brochure; from the Blockhead Spindles Overview (14 March 2025).
        { label: 'Total weight', values: [['7.3 lb', '3.2 kg']] },
        { label: 'Rated speed', values: [['15,000 rpm', '250 Hz']] },
      ],
    },
  ],
  drawing: {
    src: '/images/3r-drawing.webp',
    width: 1648,
    height: 1229,
    alt: 'Dimensioned drawing of the 3R Blockhead: end and side views with mounting holes, ports, stator pilot and overall height',
    intro: 'Dimensions in inches.',
  },
  downloads: [{ name: '3R brochure and drawing', href: brochure }, ...blockheadDocs],
  optionsIntro: 'Configured at the factory to your requirements.',
  options: [o.motor, o.chucks],
  related: [
    {
      sku: '4R',
      text: 'Our standard universal spindle, in the medium package size.',
      rows: [['Radial stiffness', ['0.45 lb/µin', '80 N/µm']], ['Aperture', ['1.25 in', '32 mm']], ['Rated speed', '7,500 rpm']],
    },
    {
      sku: '4R 225',
      text: 'The medium package size with a 2.25 inch aperture.',
      rows: [['Aperture', ['2.25 in', '57 mm']], ['Rated speed', '3,000 rpm']],
    },
  ],
  cta: { title: 'Request a quote for the 3R Blockhead.', text: quoteText },
  schema: { category: 'Air bearing spindle', brand: 'Blockhead' },
};
