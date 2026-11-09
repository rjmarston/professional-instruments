// ISO 5.5PG. Figures are from its brochure (2024–26 layout), at 100 psi (0.7 MPa).
// The sleeves are "porous carbon" (the brochure's term), not "porous graphite".
// Built as its own page; whether ISO 5.5F and 5.5PG should share one page is still an open question for PI.
import type { Model } from './types';
import { drive, families, quoteText } from './shared';

const brochure = drive('1qZSyGBjvmQEGdSzukZ6_sPx3GF4h7YYE');

export const model: Model = {
  sku: 'ISO 5.5PG',
  slug: '/products/iso/iso-5-5pg',
  name: 'ISO 5.5PG',
  family: families.iso,
  seoTitle: 'ISO 5.5PG air bearing spindle',
  seoDescription:
    'The ISO 5.5PG air bearing spindle has porous carbon journals, 0.5 µin (13 nm) synchronous error and 2.5 lb/µin (440 N/µm) axial stiffness, for direct machining of optics.',
  lede: 'Porous carbon journals, for direct machining of optical surfaces.',
  image: { src: '/images/iso-5-5pg.webp', width: 670, height: 473 },
  facts: [
    { value: ['0.5 µin', '13 nm'], label: 'Synchronous error, radial and axial' },
    { value: ['0.66 lb/µin', '115 N/µm'], label: 'Radial stiffness' },
    { value: ['2.5 lb/µin', '440 N/µm'], label: 'Axial stiffness' },
    { value: '10,000 rpm', label: 'Maximum speed, water-cooled' },
  ],
  brochure: { href: brochure, label: 'Brochure and drawing (PDF)' },
  overview: [
    'Widely spaced journal bearings use porous carbon sleeves, and the thrust bearing uses groove compensation with a proprietary crash resistant coating. Water jackets remove heat from the front and rear journals and the motor housing, and an integrated rotary union provides vacuum through the spindle for chucking.',
    'The housing is hardcoated aluminum and the shaft is stainless steel.',
  ],
  applications: ['Single point diamond turning', 'Ultra precision grinding and flycutting', 'Nanometer-level metrology'],
  specsIntro: 'At 100 psi (0.7 MPa) supply pressure.',
  specs: [
    {
      title: 'Load capacity',
      columns: ['Ultimate', 'Working'],
      rows: [
        { label: 'Radial', values: [['250 lb', '115 kg'], ['150 lb', '70 kg']] },
        { label: 'Axial', values: [['650 lb', '295 kg'], ['385 lb', '175 kg']] },
      ],
    },
    {
      title: 'Stiffness',
      rows: [
        { label: 'Radial', values: [['0.66 lb/µin', '115 N/µm']] },
        { label: 'Axial', values: [['2.5 lb/µin', '440 N/µm']] },
      ],
    },
    {
      title: 'Synchronous error',
      rows: [
        { label: 'Radial', values: [['0.5 µin', '13 nm']] },
        { label: 'Axial', values: [['0.5 µin', '13 nm']] },
      ],
    },
    {
      title: 'Physical and air',
      rows: [
        { label: 'Air consumption', values: [['3 SCFM', '90 SLPM']] },
        { label: 'Rotor weight', values: [['26 lb', '11.8 kg']] },
        { label: 'Rotor inertia', values: [['2.12 oz·in·sec²', '0.015 kg·m²']] },
        { label: 'Spindle weight', values: [['76 lb', '34.5 kg']] },
        { label: 'Maximum speed, water-cooled', values: ['10,000 rpm'] },
      ],
    },
    {
      title: 'Motor and encoder',
      rows: [
        { label: 'Motor', values: ['Permanent magnet brushless'], text: true },
        { label: 'Stall torque (30 A)', values: [['30 in·lb', '3.3 N·m']] },
        { label: 'Encoders', values: ['Renishaw 9,000 line count analog, or Renco 1,024 line count TTL'], text: true },
      ],
    },
  ],
  drawing: {
    src: '/images/iso-5-5pg-drawing.webp',
    width: 1648,
    height: 1285,
    alt: 'Dimensioned drawing of the ISO 5.5PG: end and side views with mounting holes, cooling water ports, motor connectors and encoders',
    intro: 'Dimensions in millimeters.',
  },
  downloads: [{ name: 'ISO 5.5PG brochure and drawing', href: brochure }],
  options: [
    { title: 'Chuck adapters', text: 'Custom chuck adapters are available.' },
    { title: 'Encoders and motors', text: 'Incremental or absolute positioning encoders, and alternate encoders and motors.' },
  ],
  related: [
    {
      sku: 'ISO 5.5F',
      text: 'The same size with groove compensated bronze journals.',
      rows: [['Radial stiffness', ['0.6 lb/µin', '100 N/µm']], ['Axial stiffness', ['1.7 lb/µin', '300 N/µm']], ['Axial load, ultimate', ['330 lb', '150 kg']]],
    },
    {
      sku: 'ISO 3.375PG',
      text: 'A smaller porous carbon spindle, for high-speed direct machining.',
      rows: [['Radial stiffness', ['0.2 lb/µin', '35 N/µm']], ['Maximum speed', '18,000 rpm']],
    },
  ],
  cta: { title: 'Request a quote for the ISO 5.5PG.', text: quoteText },
  schema: { category: 'Air bearing spindle' },
};
