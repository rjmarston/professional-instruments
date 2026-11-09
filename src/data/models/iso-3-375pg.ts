// ISO 3.375PG. Figures are from its brochure (2024–26 layout), at 100 psi (0.7 MPa).
import type { Model } from './types';
import { drive, families, quoteText } from './shared';

const brochure = drive('1PjoI7K3cdr8vNiXaemNuOydit4Ifmxue');

export const model: Model = {
  sku: 'ISO 3.375PG',
  slug: '/products/iso/iso-3-375pg',
  name: 'ISO 3.375PG',
  family: families.iso,
  seoTitle: 'ISO 3.375PG air bearing spindle',
  seoDescription:
    'The ISO 3.375PG air bearing spindle has porous carbon journals, water cooling and a vacuum rotary union, for high-speed direct machining of optical surfaces to 18,000 rpm.',
  lede: 'Porous carbon journals, for high-speed direct machining of optical surfaces.',
  image: { src: '/images/iso-3-375pg.webp', width: 489, height: 463 },
  facts: [
    { value: ['1 µin', '25 nm'], label: 'Synchronous error, radial and axial' },
    { value: ['0.2 lb/µin', '35 N/µm'], label: 'Radial stiffness' },
    { value: ['1.0 lb/µin', '175 N/µm'], label: 'Axial stiffness' },
    { value: '18,000 rpm', label: 'Maximum speed, water-cooled' },
  ],
  brochure: { href: brochure, label: 'Brochure and drawing (PDF)' },
  overview: [
    'The journal bearings use porous carbon sleeves with exceptional load capacity, and the thrust bearing uses groove compensation with a proprietary crash resistant coating. Water jackets remove heat from the front and rear journals and the motor housing, and an integrated rotary union provides vacuum through the spindle for chucking.',
    'The housing is hardcoated aluminum and the shaft is 420 stainless steel.',
  ],
  applications: ['Direct machining IR optics', 'Single point diamond turning', 'Ultra precision grinding and flycutting'],
  specsIntro: 'At 100 psi (0.7 MPa) supply pressure. Capacity and speed may be limited by loading conditions.',
  specs: [
    {
      title: 'Load capacity',
      columns: ['Ultimate', 'Working'],
      rows: [
        { label: 'Radial', values: [['110 lb', '50 kg'], ['65 lb', '30 kg']] },
        { label: 'Axial', values: [['220 lb', '100 kg'], ['130 lb', '60 kg']] },
      ],
    },
    {
      title: 'Stiffness',
      rows: [
        { label: 'Radial', values: [['0.2 lb/µin', '35 N/µm']] },
        { label: 'Axial', values: [['1.0 lb/µin', '175 N/µm']] },
      ],
    },
    {
      title: 'Synchronous error',
      rows: [
        { label: 'Radial', values: [['1 µin', '25 nm']] },
        { label: 'Axial', values: [['1 µin', '25 nm']] },
      ],
    },
    {
      title: 'Physical and air',
      rows: [
        { label: 'Air consumption', values: [['1.5 SCFM', '43 SLPM']] },
        { label: 'Rotor weight', values: [['8.4 lb', '3.8 kg']] },
        { label: 'Rotor inertia', values: [['0.25 oz·in·sec²', '0.0017 kg·m²']] },
        { label: 'Spindle weight', values: [['27 lb', '12 kg']] },
        { label: 'Maximum speed, water-cooled', values: ['18,000 rpm'] },
      ],
    },
    {
      title: 'Motor and encoder',
      rows: [
        { label: 'Motor', values: ['Permanent magnet brushless'], text: true },
        { label: 'Stall torque (30 A)', values: [['13 in·lb', '1.5 N·m']] },
        { label: 'Encoder', values: ['Renishaw Atom, 1,650 line count analog'], text: true },
      ],
    },
  ],
  drawing: {
    src: '/images/iso-3-375pg-drawing.webp',
    width: 1648,
    height: 1290,
    alt: 'Dimensioned drawing of the ISO 3.375PG: end and side views with mounting holes, cooling water ports, vacuum rotary union and encoder',
    intro: 'Dimensions in millimeters.',
  },
  downloads: [{ name: 'ISO 3.375PG brochure and drawing', href: brochure }],
  options: [
    { title: 'Chuck adapters', text: 'Custom chuck adapters are available.' },
    { title: 'Encoder readheads', text: 'Single or dual encoder readheads.' },
  ],
  related: [
    {
      sku: 'ISO 5.5PG',
      text: 'Larger porous carbon journals for higher capacity, to 10,000 rpm.',
      rows: [['Radial stiffness', ['0.66 lb/µin', '115 N/µm']], ['Synchronous error', ['0.5 µin', '13 nm']], ['Maximum speed', '10,000 rpm']],
    },
    {
      sku: 'ISO 3R DB400',
      text: 'Widely spaced porous carbon journals, with a two-channel rotary union for clamping.',
      rows: [['Axial stiffness', ['0.8 lb/µin', '140 N/µm']], ['Rated speed', '15,000 rpm']],
    },
  ],
  cta: { title: 'Request a quote for the ISO 3.375PG.', text: quoteText },
  schema: { category: 'Air bearing spindle' },
};
