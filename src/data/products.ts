// Product hub copy and model specs. Figures come from PI's brochures; metric values in brackets
// are shown when the visitor switches units. A value is either one string or [inch, metric].
import { models } from './models';

export type Value = string | [string, string];

// Each model's page, from src/data/models. A model without a page shows as plain text, not a link.
const modelPages: Record<string, string> = Object.fromEntries(models.map((m) => [m.sku, m.slug]));
export const modelHref = (model: string): string | undefined => modelPages[model];

export const page = {
  title: 'Spindles and accessories',
  lede: 'These spindles are the first choice of the world’s most demanding precision users.',
  seoTitle: 'Standard air bearing spindles',
  seoDescription:
    'Compare 13 standard air bearing spindles in the Blockhead, ISO and 4RH families, with stiffness, load, aperture and speed for every model, plus GF-5 Flatstones.',
};

type Row = { model: string; desc: string; values: Value[] };
type Family = {
  id: string;
  title: string;
  image: { src: string; alt: string };
  facts?: { value: Value; label: string }[];
  // The family's one paragraph, beside its photo. Pieces are joined in order, so a figure
  // with a metric twin can sit inside the sentence and follow the units switch.
  text: Value[];
  link?: { label: string; href: string };
  table?: { caption: string; heads: string[]; rows: Row[] };
};

export const families: Family[] = [
  {
    id: 'blockhead',
    title: 'Blockhead series',
    image: { src: '/images/4r.webp', alt: '4R Blockhead spindle' },
    text: [
      'High axial load capacity in compact 3, 4 and 10 inch package sizes, designed for universal integration from optics manufacturing to metrology. Every model has ',
      ['1 µin', '25 nm'],
      ' synchronous error, radial and axial. Figures below are at 100 psi (0.7 MPa).',
    ],
    table: {
      caption: 'Blockhead series specifications at 100 psi (0.7 MPa)',
      heads: ['Radial stiffness', 'Axial stiffness', 'Axial load, ultimate', 'Aperture', 'Rated speed'],
      rows: [
        { model: '3R', desc: 'Our smallest Blockhead, capable of 15,000 rpm.', values: [['0.33 lb/µin', '60 N/µm'], ['1.0 lb/µin', '175 N/µm'], ['115 lb', '50 kg'], ['0.75 in', '19 mm'], '15,000 rpm'] },
        { model: '4B', desc: 'Rectangular stator, ideal for horizontal mounting.', values: [['0.45 lb/µin', '80 N/µm'], ['1.3 lb/µin', '230 N/µm'], ['270 lb', '120 kg'], ['1.25 in', '32 mm'], '7,500 rpm'] },
        { model: '4R', desc: 'Our standard universal spindle with a round stator.', values: [['0.45 lb/µin', '80 N/µm'], ['1.3 lb/µin', '230 N/µm'], ['270 lb', '120 kg'], ['1.25 in', '32 mm'], '7,500 rpm'] },
        { model: '4R 225', desc: 'Medium package size with a larger aperture.', values: [['0.5 lb/µin', '95 N/µm'], ['0.6 lb/µin', '110 N/µm'], ['115 lb', '52 kg'], ['2.25 in', '57 mm'], '3,000 rpm'] },
        { model: '10B', desc: 'Six stator faces for convenient mounting.', values: [['1.3 lb/µin', '230 N/µm'], ['6.5 lb/µin', '1,150 N/µm'], ['1,600 lb', '725 kg'], ['3.25 in', '83 mm'], '1,800 rpm'] },
        { model: '10R', desc: 'High load capacity universal spindle with a round stator.', values: [['1.3 lb/µin', '230 N/µm'], ['6.5 lb/µin', '1,150 N/µm'], ['1,600 lb', '725 kg'], ['3.25 in', '83 mm'], '1,800 rpm'] },
        // 154 mm: the Blockhead Spindles Overview gives 153.9 mm for the 6.06 in aperture.
        { model: '10R 606', desc: 'Large capacity spindle with a 6.06 inch clear aperture.', values: [['2.0 lb/µin', '350 N/µm'], ['3.3 lb/µin', '580 N/µm'], ['650 lb', '300 kg'], ['6.06 in', '154 mm'], '1,500 rpm max'] },
      ],
    },
  },
  {
    id: 'iso',
    title: 'ISO series',
    image: { src: '/images/iso55f.webp', alt: 'ISO 5.5F spindle' },
    text: [
      'Water-cooled spindles for higher radial and tilt loads at higher speeds, from 50,000 rpm micro-machining to direct machining of optical surfaces. Journals are groove compensated bronze or porous carbon. Figures below are at 100 psi (0.7 MPa).',
    ],
    table: {
      // The ISO 2.25 (50K) brochure doesn't state a supply pressure; the others are at 100 psi.
      caption: 'ISO series specifications at 100 psi (0.7 MPa)',
      heads: ['Radial stiffness', 'Axial stiffness', 'Synchronous error', 'Speed'],
      rows: [
        { model: 'ISO 2.25 (50K)', desc: 'Water-cooled high-speed spindle for micro-milling, micro-grinding and raster flycutting.', values: [['0.11 lb/µin', '20 N/µm'], ['0.37 lb/µin', '65 N/µm'], ['1 µin', '25 nm'], '50,000 rpm'] },
        { model: 'ISO 3R DB400', desc: 'Widely spaced porous carbon journals for improved radial and tilt capacity.', values: [['0.2 lb/µin', '35 N/µm'], ['0.8 lb/µin', '140 N/µm'], ['1 µin', '25 nm'], '15,000 rpm rated'] },
        { model: 'ISO 3.375PG', desc: 'Porous carbon journals, for high-speed direct machining of optical surfaces.', values: [['0.2 lb/µin', '35 N/µm'], ['1.0 lb/µin', '175 N/µm'], ['1 µin', '25 nm'], '18,000 rpm max'] },
        { model: 'ISO 5.5F', desc: 'Groove compensated bronze journals, for direct machining of optical surfaces.', values: [['0.6 lb/µin', '100 N/µm'], ['1.7 lb/µin', '300 N/µm'], ['0.5 µin', '13 nm'], '10,000 rpm max'] },
        { model: 'ISO 5.5PG', desc: 'Porous carbon journals, for direct machining of optical surfaces.', values: [['0.66 lb/µin', '115 N/µm'], ['2.5 lb/µin', '440 N/µm'], ['0.5 µin', '13 nm'], '10,000 rpm max'] },
      ],
    },
  },
  {
    id: '4rh',
    title: '4RH oil hydrostatic',
    image: { src: '/images/4rh.webp', alt: '4RH oil hydrostatic spindle' },
    text: [
      'A step-compensated oil hydrostatic biconic spindle for grinding and hard-turning. Oil hydrostatic bearings give it nanometer-level error motion with high load capacity and high crash resistance.',
    ],
    table: {
      caption: '4RH oil hydrostatic specifications',
      heads: ['Axial capacity', 'Radial capacity', 'Tilt capacity', 'Axial stiffness', 'Inlet pressure', 'Maximum speed'],
      rows: [
        { model: '4RH', desc: 'Step-compensated oil hydrostatic biconic spindle.', values: [['2,000 lb', '9 kN'], ['650 lb', '3 kN'], ['2,600 lb·in', '300 N·m'], ['1.0 lb/µin', '180 N/µm'], ['600 psi', '4.1 MPa'], '3,500 rpm'] },
      ],
    },
  },
  {
    id: 'accessories',
    title: 'Accessories',
    image: { src: '/images/stones.webp', alt: 'GF-5 flatstones in their wooden case' },
    facts: [
      { value: '120 + 80 grit', label: 'Standard GF-5 flatstone pair' },
      { value: '46 grit', label: 'Open-bond stones for aluminum workpieces' },
      { value: 'Custom', label: 'Stones for internal diameters and tapers' },
    ],
    text: [
      'GF-5 Flatstones are precision ground aluminum oxide stones that remove burrs and the swelling around nicks and dents, so mating surfaces make full contact. Faces are diamond ground flat and parallel.',
    ],
    link: { label: 'About GF-5 Flatstones', href: '/products/flatstones' },
  },
];

export const accessories = {
  attachments: {
    title: 'Attachments',
    text: 'Everything that connects a spindle to the work and to the machine around it.',
    list: ['Workholding devices', 'Motor drives', 'High-precision piloting systems', 'Vacuum seals', 'Rotary unions'],
    cta: 'Ask about attachments',
  },
};

export const custom = {
  title: 'Outside the standard line?',
  text: 'We design and build custom air bearing spindles to the application, including hemispherical, dual diameter, air pad and vacuum-rated designs.',
  cta: { label: 'Explore precision engineering', href: '/#engineering' },
};

// Every standard model, for the quote form.
export const allModels = families.flatMap((f) => f.table?.rows.map((r) => r.model) ?? []);
