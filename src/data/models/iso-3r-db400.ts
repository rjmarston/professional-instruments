// ISO 3R DB400. Figures are from its brochure (2024–26 layout), at 100 psi (0.7 MPa).
import type { Model } from './types';
import { drive, families, quoteText } from './shared';

const brochure = drive('1zVbzFZqZAea63k8vKuEKzXEr3FgphPjZ');

export const model: Model = {
  sku: 'ISO 3R DB400',
  slug: '/products/iso/iso-3r-db400',
  name: 'ISO 3R DB400',
  family: families.iso,
  seoTitle: 'ISO 3R DB400 air bearing spindle',
  seoDescription:
    'The ISO 3R DB400 air bearing spindle has widely spaced porous carbon journals for radial and tilt capacity, water cooling, a rotary union and a 15,000 rpm rating.',
  lede: 'Widely spaced porous carbon journals for improved radial and tilt capacity.',
  image: { src: '/images/iso-3r-db400.webp', width: 588, height: 421 },
  facts: [
    { value: ['1 µin', '25 nm'], label: 'Synchronous error, radial and axial' },
    { value: ['0.2 lb/µin', '35 N/µm'], label: 'Radial stiffness' },
    { value: ['0.8 lb/µin', '140 N/µm'], label: 'Axial stiffness' },
    { value: '15,000 rpm', label: 'Rated speed, water-cooled' },
  ],
  brochure: { href: brochure, label: 'Brochure and drawing (PDF)' },
  overview: [
    'The central thrust bearing uses compound compensation with grooved faces and a proprietary crash resistant coating. A water-cooled housing removes heat from the motor, and a two-channel rotary union in the shaft supplies workpiece clamping. The shaft and stator are hardcoated aluminum.',
  ],
  applications: [
    'Single point diamond turning',
    'Precision milling and flycutting',
    'Contact lens and mold',
    'HDD servo track writing',
    'HDD head testing',
    'DVD mastering',
  ],
  specsIntro: 'At 100 psi (0.7 MPa) supply pressure.',
  specs: [
    {
      title: 'Load capacity',
      columns: ['Ultimate', 'Working'],
      rows: [
        { label: 'Radial', values: [['55 lb', '26 kg'], ['28 lb', '13 kg']] },
        { label: 'Axial', values: [['120 lb', '54 kg'], ['60 lb', '27 kg']] },
      ],
    },
    {
      title: 'Stiffness',
      rows: [
        { label: 'Radial', values: [['0.2 lb/µin', '35 N/µm']] },
        { label: 'Axial', values: [['0.8 lb/µin', '140 N/µm']] },
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
        { label: 'Air consumption', values: [['0.35 SCFM', '10 SLPM']] },
        { label: 'Rotor weight', values: [['1.5 lb', '0.7 kg']] },
        { label: 'Rotor inertia', values: [['0.002 lb·in·sec²', '0.00023 kg·m²']] },
        { label: 'Spindle weight', values: [['9 lb', '4 kg']] },
        { label: 'Rated speed, water-cooled', values: ['15,000 rpm'] },
      ],
    },
    {
      title: 'Motor and encoder',
      rows: [
        { label: 'Motor', values: ['Brushless DC'], text: true },
        { label: 'Continuous torque', values: [['1.6 in·lb', '0.18 N·m']] },
        { label: 'Encoder', values: ['Renishaw Atom, analog or TTL output'], text: true },
        { label: 'Encoder disk', values: ['Renishaw RCDM glass disk, 2048 line count'], text: true },
      ],
    },
  ],
  drawing: {
    src: '/images/iso-3r-db400-drawing.webp',
    width: 1648,
    height: 1318,
    alt: 'Dimensioned drawing of the ISO 3R DB400: end and side views with mounting holes, cooling water ports, rotary union and encoder',
    intro: 'Dimensions in millimeters.',
  },
  downloads: [{ name: 'ISO 3R DB400 brochure and drawing', href: brochure }],
  options: [
    { title: 'Chucks', text: 'The chuck shown is optional, and alternate chucks are available.' },
    { title: 'Encoders', text: 'Alternate encoders are available, with an option for two readheads.' },
  ],
  related: [
    {
      sku: 'ISO 3.375PG',
      text: 'Porous carbon journals with a vacuum rotary union, for direct machining of optical surfaces.',
      rows: [['Axial stiffness', ['1.0 lb/µin', '175 N/µm']], ['Maximum speed', '18,000 rpm']],
    },
    {
      sku: 'ISO 2.25 (50K)',
      text: 'For micro-machining at up to 50,000 rpm.',
      rows: [['Radial stiffness', ['0.11 lb/µin', '20 N/µm']], ['Speed', '50,000 rpm']],
    },
  ],
  cta: { title: 'Request a quote for the ISO 3R DB400.', text: quoteText },
  schema: { category: 'Air bearing spindle' },
};
