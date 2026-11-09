// ISO 5.5F. Figures are from its brochure (2024–26 layout), at 100 psi (0.7 MPa).
// Built as its own page; whether ISO 5.5F and 5.5PG should share one page is still an open question for PI.
import type { Model } from './types';
import { drive, families, quoteText } from './shared';

const brochure = drive('1xDVdiUbtEqKO5wcPWDnGMnb1loubbZ6t');

export const model: Model = {
  sku: 'ISO 5.5F',
  slug: '/products/iso/iso-5-5f',
  name: 'ISO 5.5F',
  family: families.iso,
  seoTitle: 'ISO 5.5F air bearing spindle',
  seoDescription:
    'The ISO 5.5F air bearing spindle has groove compensated bronze journals and 0.5 µin (13 nm) synchronous error, for direct machining of optical surfaces to 10,000 rpm.',
  lede: 'Groove compensated bronze journals, for direct machining of optical surfaces.',
  image: { src: '/images/iso-5-5f.webp', width: 722, height: 509 },
  facts: [
    { value: ['0.5 µin', '13 nm'], label: 'Synchronous error, radial and axial' },
    { value: ['0.6 lb/µin', '100 N/µm'], label: 'Radial stiffness' },
    { value: ['1.7 lb/µin', '300 N/µm'], label: 'Axial stiffness' },
    { value: '10,000 rpm', label: 'Maximum speed, water-cooled' },
  ],
  brochure: { href: brochure, label: 'Brochure and drawing (PDF)' },
  overview: [
    'Widely spaced journal bearings use groove compensated bronze sleeves, and the thrust bearing uses groove compensation with a proprietary crash resistant coating. Water jackets remove heat from the front and rear journals and the motor housing, and an integrated rotary union provides vacuum through the spindle for chucking.',
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
        { label: 'Axial', values: [['330 lb', '150 kg'], ['200 lb', '90 kg']] },
      ],
    },
    {
      title: 'Stiffness',
      rows: [
        { label: 'Radial', values: [['0.6 lb/µin', '100 N/µm']] },
        { label: 'Axial', values: [['1.7 lb/µin', '300 N/µm']] },
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
        { label: 'Air consumption', values: [['2 SCFM', '55 SLPM']] },
        { label: 'Rotor weight', values: [['26 lb', '11.8 kg']] },
        { label: 'Rotor inertia', values: [['0.133 lb·in·sec²', '0.015 kg·m²']] },
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
    src: '/images/iso-5-5f-drawing.webp',
    width: 1648,
    height: 1282,
    alt: 'Dimensioned drawing of the ISO 5.5F: end and side views with mounting holes, cooling water ports, motor connectors and Renco encoder',
    intro: 'Dimensions in millimeters.',
  },
  downloads: [{ name: 'ISO 5.5F brochure and drawing', href: brochure }],
  options: [
    { title: 'Chuck adapters', text: 'Custom chuck adapters are available.' },
    { title: 'Encoders and motors', text: 'Alternate encoders and motors are available, with an option for two readheads.' },
  ],
  related: [
    {
      sku: 'ISO 5.5PG',
      text: 'The same size with porous carbon journals, for more stiffness and axial capacity.',
      rows: [['Radial stiffness', ['0.66 lb/µin', '115 N/µm']], ['Axial stiffness', ['2.5 lb/µin', '440 N/µm']], ['Axial load, ultimate', ['650 lb', '295 kg']]],
    },
    {
      sku: 'ISO 3.375PG',
      text: 'A smaller porous carbon spindle, for high-speed direct machining.',
      rows: [['Radial stiffness', ['0.2 lb/µin', '35 N/µm']], ['Maximum speed', '18,000 rpm']],
    },
  ],
  cta: { title: 'Request a quote for the ISO 5.5F.', text: quoteText },
  schema: { category: 'Air bearing spindle' },
};
