// Product hub copy and model specs. Figures come from PI's brochures; metric values in brackets
// are shown when the visitor switches units. A value is either one string or [inch, metric].
import { urls } from './site';

export type Value = string | [string, string];

// Only the 4R has its own page so far. Every model links there until its page is built.
export const modelHref = (_model: string) => urls.product4r;

export const page = {
  title: 'Spindles and accessories',
  lede: 'These spindles are the first choice of the world’s most demanding precision users.',
  seoTitle: 'Standard air bearing spindles',
  seoDescription:
    'Compare 13 standard air bearing spindles in the Blockhead, ISO and 4RH families, with stiffness, load, aperture and speed for every model, plus GF-5 Flatstones.',
};

type Row = { model: string; desc: string; values: Value[]; tag?: string };
type Family = {
  id: string;
  title: string;
  intro: string;
  image: { src: string; alt: string };
  facts: { value: Value; label: string }[];
  text: string;
  table?: { caption: string; heads: string[]; rows: Row[] };
};

export const families: Family[] = [
  {
    id: 'blockhead',
    title: 'Blockhead series',
    intro: 'High axial load capacity in a compact size, offered since 1965. Seven universal spindles in 3, 4 and 10 inch package sizes.',
    image: { src: '/images/4r.webp', alt: '4R Blockhead spindle' },
    facts: [
      { value: ['1 µin', '25 nm'], label: 'Synchronous error, radial and axial, every model' },
      { value: '1965', label: 'Blockheads first offered' },
      { value: '7', label: 'Standard models' },
    ],
    text: 'Designed for universal integration, the Blockhead’s combination of accuracy and stiffness makes it the first choice for applications from optics manufacturing to metrology.',
    table: {
      caption: 'Blockhead series specifications at 100 psi (0.7 MPa)',
      heads: ['Radial stiffness', 'Axial stiffness', 'Axial load, ultimate', 'Aperture', 'Rated speed'],
      rows: [
        { model: '3R', desc: 'Our smallest Blockhead, capable of 15,000 rpm.', values: [['0.33 lb/µin', '60 N/µm'], ['1.0 lb/µin', '175 N/µm'], ['115 lb', '50 kg'], ['0.75 in', '19 mm'], '15,000 rpm'] },
        { model: '4B', desc: 'Rectangular stator, ideal for horizontal mounting.', values: [['0.45 lb/µin', '80 N/µm'], ['1.3 lb/µin', '230 N/µm'], ['270 lb', '120 kg'], ['1.25 in', '32 mm'], '7,500 rpm'] },
        { model: '4R', desc: 'Our standard universal spindle with a round stator.', values: [['0.45 lb/µin', '80 N/µm'], ['1.3 lb/µin', '230 N/µm'], ['270 lb', '120 kg'], ['1.25 in', '32 mm'], '7,500 rpm'], tag: 'Start here' },
        { model: '4R 225', desc: 'Medium package size with a larger aperture.', values: [['0.5 lb/µin', '95 N/µm'], ['0.6 lb/µin', '110 N/µm'], ['115 lb', '52 kg'], ['2.25 in', '57 mm'], '3,000 rpm'] },
        { model: '10B', desc: 'Six stator faces for convenient mounting.', values: [['1.3 lb/µin', '230 N/µm'], ['6.5 lb/µin', '1,150 N/µm'], ['1,600 lb', '725 kg'], ['3.25 in', '83 mm'], '1,800 rpm'] },
        { model: '10R', desc: 'High load capacity universal spindle with a round stator.', values: [['1.3 lb/µin', '230 N/µm'], ['6.5 lb/µin', '1,150 N/µm'], ['1,600 lb', '725 kg'], ['3.25 in', '83 mm'], '1,800 rpm'] },
        // The 154 mm aperture is converted from the brochure's 6.06 in; confirm with PI.
        { model: '10R 606', desc: 'Large capacity spindle with a 6.06 inch clear aperture.', values: [['2.0 lb/µin', '350 N/µm'], ['3.3 lb/µin', '580 N/µm'], ['650 lb', '300 kg'], ['6.06 in', '154 mm'], '1,500 rpm max'] },
      ],
    },
  },
  {
    id: 'iso',
    title: 'ISO series',
    intro: 'Higher radial and tilt loads at higher speeds. Five water-cooled spindles, from 50,000 rpm micro-machining to direct machining of optical surfaces.',
    image: { src: '/images/iso55f.webp', alt: 'ISO 5.5F spindle' },
    facts: [
      { value: ['0.5 µin', '13 nm'], label: 'Synchronous error, ISO 5.5F and 5.5PG' },
      { value: '50,000 rpm', label: 'ISO 2.25 (50K)' },
      { value: '5', label: 'Standard models, all water-cooled' },
    ],
    text: 'Journals are groove compensated bronze or porous carbon. Most models add a crash resistant coating on the thrust bearing and an integrated rotary union for vacuum or clamping through the spindle.',
    table: {
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
    intro: 'A step-compensated oil hydrostatic biconic spindle for grinding and hard-turning.',
    image: { src: '/images/4rh.webp', alt: '4RH oil hydrostatic spindle' },
    facts: [
      { value: ['1 µin', '25 nm'], label: 'Synchronous error, radial and axial' },
      { value: ['2,000 lb', '9 kN'], label: 'Axial capacity' },
      { value: '3,500 rpm', label: 'Maximum speed' },
    ],
    text: 'Oil hydrostatic bearings give the 4RH nanometer-level error motion together with high load capacity and high crash resistance.',
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
    intro: 'For preparing precision surfaces, and for mounting, driving and sealing a spindle in your machine.',
    image: { src: '/images/stones.webp', alt: 'GF-5 flatstones in their wooden case' },
    facts: [
      { value: '120 + 80 grit', label: 'Standard GF-5 flatstone pair' },
      { value: '46 grit', label: 'Open-bond stones for aluminum workpieces' },
      { value: 'Custom', label: 'Stones for internal diameters and tapers' },
    ],
    text: 'GF-5 Flatstones are precision ground aluminum oxide stones that remove burrs and the swelling around nicks and dents, so mating surfaces make full contact. Faces are diamond ground flat and parallel.',
  },
];

export const accessories = {
  flatstones: {
    title: 'GF-5 Flatstones',
    text: 'Diamond ground flat and parallel, in a standard pair, an open-bond grade for aluminum, and custom shapes.',
    href: urls.product4r,
  },
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
  figures: [
    { value: '15,000 lb', label: 'Top load among our custom builds' },
    { value: '60,000 rpm', label: 'Top speed among our custom builds' },
  ],
};

// Every standard model, for the quote form.
export const allModels = families.flatMap((f) => f.table?.rows.map((r) => r.model) ?? []);
