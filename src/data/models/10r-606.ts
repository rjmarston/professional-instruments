// 10R 606 Blockhead. Figures are from the 10R-606 brochure (15 December 2022, older layout), which lists
// minimum figures at 100 psi (7 bar). Where it gives weight in newtons, the kg figures and the rotor
// inertia in lb·in·sec² come from the newer Blockhead Spindles Overview (14 March 2025).
import type { Model } from './types';
import { drive, families, blockheadDocs, quoteText } from './shared';

const brochure = drive('13kIW_07K5xX1jsVUsu4fYDKpEWW3KeMM');

export const model: Model = {
  sku: '10R 606',
  slug: '/products/blockhead/10r-606',
  name: '10R 606 Blockhead',
  family: families.blockhead,
  seoTitle: '10R 606 Blockhead air bearing spindle',
  seoDescription:
    'The 10R 606 Blockhead air bearing spindle has a 6.06 in (154 mm) clear aperture, 2.0 lb/µin (350 N/µm) radial stiffness and 1 µin (25 nm) synchronous error.',
  lede: 'A large capacity spindle with a 6.06 inch clear aperture.',
  image: { src: '/images/10r-606.webp', width: 900, height: 700 },
  facts: [
    { value: ['1 µin', '25 nm'], label: 'Synchronous error, radial and axial' },
    { value: ['2.0 lb/µin', '350 N/µm'], label: 'Radial stiffness' },
    { value: ['6.06 in', '154 mm'], label: 'Aperture' },
    { value: '1,500 rpm', label: 'Maximum speed' },
  ],
  brochure: { href: brochure, label: 'Brochure and drawing (PDF)' },
  overview: [
    'The 10R 606 adds a 6.06 inch clear aperture and more radial capacity to the 10 inch package, with a stainless steel stator and rotor. It suits precision machining and metrology of heavy workpieces.',
  ],
  applications: ['Lens alignment', 'Diamond turning', 'Grinding', 'Metrology'],
  specsIntro: 'Minimum figures at 100 psi (0.7 MPa) supply pressure. Maximum speed depends on the application.',
  specs: [
    {
      title: 'Load capacity',
      columns: ['Ultimate', 'Working'],
      rows: [
        { label: 'Radial', values: [['400 lb', '180 kg'], ['200 lb', '90 kg']] },
        { label: 'Axial', values: [['650 lb', '300 kg'], ['325 lb', '150 kg']] },
        // The brochure says 1,850 lb·in; the Blockhead Spindles Overview says 1,800 lb·in. Waiting on PI to confirm.
        { label: 'Tilt', values: [['1,850 lb·in', '210 N·m'], ['925 lb·in', '105 N·m']] },
      ],
    },
    {
      title: 'Stiffness',
      rows: [
        { label: 'Radial', values: [['2.0 lb/µin', '350 N/µm']] },
        { label: 'Axial', values: [['3.3 lb/µin', '580 N/µm']] },
        { label: 'Tilt', values: [['40 lb·in/µrad', '4.5 N·m/µrad']] },
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
        { label: 'Air consumption, maximum', values: [['3.0 SCFM', '85 SLPM']] },
        { label: 'Rotor inertia', values: [['1.7 lb·in·sec²', '0.191 kg·m²']] },
        { label: 'Rotor weight', values: [['42 lb', '19 kg']] },
        { label: 'Total weight', values: [['104 lb', '47 kg']] },
        { label: 'Maximum speed', values: ['1,500 rpm'] },
      ],
    },
  ],
  drawing: {
    src: '/images/10r-606-drawing.webp',
    width: 1648,
    height: 1284,
    alt: 'Dimensioned drawing of the 10R 606 Blockhead: end view with the 6.06 inch aperture and bolt circles, and side view with ports and lifting holes',
    intro: 'Dimensions in inches.',
  },
  downloads: [{ name: '10R 606 brochure and drawing', href: brochure }, ...blockheadDocs],
  options: [{ title: 'Motorization', text: 'Integral motorizations are available.' }],
  related: [
    {
      sku: '10R',
      text: 'The standard 10 inch package, with more axial capacity.',
      rows: [['Axial load, ultimate', ['1,600 lb', '725 kg']], ['Aperture', ['3.25 in', '83 mm']], ['Rated speed', '1,800 rpm']],
    },
    {
      sku: '4R 225',
      text: 'A large central aperture in the medium package size.',
      rows: [['Aperture', ['2.25 in', '57 mm']], ['Rated speed', '3,000 rpm']],
    },
  ],
  cta: { title: 'Request a quote for the 10R 606 Blockhead.', text: quoteText },
  schema: { category: 'Air bearing spindle', brand: 'Blockhead' },
};
