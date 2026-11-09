// 4R 225 Blockhead. Figures are from the 4R-225 brochure (17 March 2025), at 100 psi (0.7 MPa).
import type { Model } from './types';
import { drive, families, blockheadDocs, blockheadOptions as o, blockheadSpecsIntro, quoteText } from './shared';

const brochure = drive('1-LEO8DYIdmm6zYUHb-CDDiBOFHL_KE4F');

export const model: Model = {
  sku: '4R 225',
  slug: '/products/blockhead/4r-225',
  name: '4R 225 Blockhead',
  family: families.blockhead,
  seoTitle: '4R 225 Blockhead air bearing spindle',
  seoDescription:
    'The 4R 225 Blockhead air bearing spindle has a large 2.25 in (57 mm) central aperture, 1 µin (25 nm) synchronous error and belt grooves on both thrusts.',
  lede: 'Our medium Blockhead with a large central aperture.',
  image: { src: '/images/4r-225.webp', width: 900, height: 686 },
  facts: [
    { value: ['1 µin', '25 nm'], label: 'Synchronous error, radial and axial' },
    { value: ['0.5 lb/µin', '95 N/µm'], label: 'Radial stiffness' },
    { value: ['2.25 in', '57 mm'], label: 'Aperture' },
    { value: '3,000 rpm', label: 'Rated speed' },
  ],
  brochure: { href: brochure, label: 'Brochure and drawing (PDF)' },
  overview: [
    'The 4R 225 is built in 400 series stainless steel in our medium package size, with a larger aperture than the standard 4R. Both thrusts have an integrated Polyflex belt groove for belt-driven applications. Its porting has no pneumo-lock option.',
  ],
  applications: [
    'Precision manufacturing and metrology',
    'Optical assembly',
    'Synchrotron instrumentation',
    'HDD writing and testing',
    'Wafer inspection',
  ],
  specsIntro: blockheadSpecsIntro,
  specs: [
    {
      title: 'Load capacity',
      columns: ['Ultimate', 'Working'],
      rows: [
        { label: 'Radial', values: [['85 lb', '36 kg'], ['43 lb', '18 kg']] },
        { label: 'Axial', values: [['115 lb', '52 kg'], ['58 lb', '26 kg']] },
        { label: 'Tilt', values: [['100 lb·in', '11 N·m'], ['50 lb·in', '6 N·m']] },
      ],
    },
    {
      title: 'Stiffness',
      rows: [
        { label: 'Radial', values: [['0.5 lb/µin', '95 N/µm']] },
        { label: 'Axial', values: [['0.6 lb/µin', '110 N/µm']] },
        { label: 'Tilt', values: [['1.1 lb·in/µrad', '0.13 N·m/µrad']] },
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
        { label: 'Air consumption', values: [['1 SCFM', '30 SLPM']] },
        { label: 'Rotor inertia', values: [['0.05 lb·in·sec²', '0.005 kg·m²']] },
        { label: 'Rotor weight', values: [['7 lb', '3.2 kg']] },
        { label: 'Total weight', values: [['16 lb', '7.3 kg']] },
        { label: 'Rated speed', values: [['3,000 rpm', '50 Hz']] },
      ],
    },
  ],
  drawing: {
    src: '/images/4r-225-drawing.webp',
    width: 1648,
    height: 1074,
    alt: 'Dimensioned drawing of the 4R 225 Blockhead: end and side views with the 2.25 inch aperture, belt groove, mounting holes and ports',
    intro: 'Dimensions in inches.',
  },
  downloads: [{ name: '4R 225 brochure and drawing', href: brochure }, ...blockheadDocs],
  optionsIntro: 'Configured at the factory to your requirements.',
  options: [o.motor, o.chucks],
  related: [
    {
      sku: '4R',
      text: 'The standard 4R, with a 1.25 inch aperture and pneumo-lock.',
      rows: [['Axial load, ultimate', ['270 lb', '120 kg']], ['Aperture', ['1.25 in', '32 mm']], ['Rated speed', '7,500 rpm']],
    },
    {
      sku: '10R 606',
      text: 'Our largest aperture, in the 10 inch package size.',
      rows: [['Aperture', ['6.06 in', '154 mm']], ['Radial stiffness', ['2.0 lb/µin', '350 N/µm']], ['Maximum speed', '1,500 rpm']],
    },
  ],
  cta: { title: 'Request a quote for the 4R 225 Blockhead.', text: quoteText },
  schema: { category: 'Air bearing spindle', brand: 'Blockhead' },
};
