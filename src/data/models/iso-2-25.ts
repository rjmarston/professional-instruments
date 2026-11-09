// ISO 2.25 (50K). Figures are from its brochure (15 August 2022, older layout), which calls it the "ISO 50K".
// The brochure gives capacities in newtons only, and doesn't state the supply pressure for its figures.
import type { Model } from './types';
import { drive, families, quoteText } from './shared';

const brochure = drive('1RXLNQwioOnA9C6EAQxoFqINm8zbkeERj');

export const model: Model = {
  sku: 'ISO 2.25 (50K)',
  slug: '/products/iso/iso-2-25',
  name: 'ISO 2.25 (50K)',
  family: families.iso,
  seoTitle: 'ISO 2.25 (50K) high-speed air bearing spindle',
  seoDescription:
    'The ISO 2.25 (50K) is a water-cooled 50,000 rpm air bearing spindle for micro-milling, micro-grinding and raster flycutting, with 1 µin (25 nm) synchronous error.',
  lede: 'A high-speed precision machining spindle, capable of 50,000 rpm.',
  image: { src: '/images/iso-2-25.webp', width: 847, height: 704 },
  facts: [
    { value: ['1 µin', '25 nm'], label: 'Synchronous error, radial and axial' },
    { value: ['0.11 lb/µin', '20 N/µm'], label: 'Radial stiffness' },
    { value: ['0.37 lb/µin', '65 N/µm'], label: 'Axial stiffness' },
    { value: '50,000 rpm', label: 'Speed' },
  ],
  brochure: { href: brochure, label: 'Brochure and drawing (PDF)' },
  overview: ['A water-cooled air bearing spindle with brushless motorization and a 100 line count encoder.'],
  applications: ['Micro-milling', 'Micro-grinding', 'Raster flycutting'],
  specs: [
    {
      title: 'Load capacity',
      rows: [
        { label: 'Axial', values: [['75 lb', '340 N']] },
        { label: 'Radial', values: [['40 lb', '195 N']] },
      ],
    },
    {
      title: 'Stiffness',
      rows: [
        { label: 'Radial', values: [['0.11 lb/µin', '20 N/µm']] },
        { label: 'Axial', values: [['0.37 lb/µin', '65 N/µm']] },
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
      title: 'Physical, motor and encoder',
      rows: [
        { label: 'Rotor weight', values: [['2.5 lb', '1.1 kg']] },
        { label: 'Total weight', values: [['13.5 lb', '6.1 kg']] },
        { label: 'Motor', values: ['Brushless'], text: true },
        { label: 'Encoder', values: ['100 line count'], text: true },
        { label: 'Speed, water-cooled', values: ['50,000 rpm'] },
      ],
    },
  ],
  drawing: {
    src: '/images/iso-2-25-drawing.webp',
    width: 1648,
    height: 1074,
    alt: 'Dimensioned drawing of the ISO 2.25 (50K): end and side views with mounting holes, cooling water and air ports, motor and encoder connectors',
    intro: 'Dimensions in millimeters.',
  },
  downloads: [{ name: 'ISO 2.25 (50K) brochure and drawing', href: brochure }],
  related: [
    {
      sku: 'ISO 3R DB400',
      text: 'Porous carbon journals for more radial and tilt capacity.',
      rows: [['Radial stiffness', ['0.2 lb/µin', '35 N/µm']], ['Rated speed', '15,000 rpm']],
    },
    {
      sku: 'ISO 3.375PG',
      text: 'Porous carbon journals, for high-speed direct machining of optical surfaces.',
      rows: [['Radial stiffness', ['0.2 lb/µin', '35 N/µm']], ['Maximum speed', '18,000 rpm']],
    },
  ],
  cta: { title: 'Request a quote for the ISO 2.25 (50K).', text: quoteText },
  schema: { category: 'Air bearing spindle' },
};
