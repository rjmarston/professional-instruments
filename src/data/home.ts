// All homepage copy lives here, in page order.
import { urls, site } from './site';

export const hero = {
  // The large logo leads the hero; the header leaves its logo off on the homepage.
  logo: { src: '/images/logo-lg.webp', width: 300, height: 152 },
  title: 'The world’s most accurate air bearing spindles and slides',
  lede: 'For customers who require millionth-inch precision, high stiffness, and zero friction.',
  primary: 'Explore spindles',
  secondary: { label: 'View services', href: '#services' },
  // Hero B (drawing sheet): callouts on the 4R photo, from the 4R brochure.
  // x and y are fractions of the photo; side -1 puts the label left, 1 right; y is the shoulder height.
  callouts: [
    { x: 0.505, y: 0.07, side: -1, shoulder: -0.62, value: 'Ø 1.25 in', label: 'Aperture' },
    { x: 0.8, y: 0.1, side: 1, shoulder: -0.62, value: '1 µin', label: 'Synchronous error' },
    { x: 0.985, y: 0.36, side: 1, shoulder: 0.06, value: 'Ø 5.625 in', label: 'Stator' },
    { x: 0.2, y: 0.82, side: -1, shoulder: 0.52, value: '400 series', label: 'Stainless steel' },
  ],
  titleBlock: [
    { label: 'Company', value: site.name },
    { label: 'Location', value: 'Hopkins, Minnesota' },
    { label: 'Shown', value: '4R Blockhead' },
    { label: 'Since', value: site.founded },
  ],
};

// The product wheel: one station per product line, in order.
export const productLines = {
  title: 'Standard spindles and accessories',
  cta: { label: 'View all spindles', href: urls.products },
  lines: [
    {
      key: 'blockhead',
      name: 'Blockhead series',
      short: 'Blockhead',
      image: { src: '/images/4r.webp', width: 900, height: 837 },
      desc: 'High axial load capacity in a compact size, offered since 1965. Seven universal spindles in three package sizes, from the 3 inch 3R to the 10 inch 10R 606.',
      specs: [
        { value: '1 µin (25 nm)', label: 'Synchronous error, radial and axial, every model' },
        { value: '60–350 N/µm', label: 'Radial stiffness across the series' },
        { value: '15,000 rpm', label: 'Rated speed of the 3R' },
      ],
      chips: ['3R', '4B', '4R', '4R 225', '10B', '10R', '10R 606'],
      featured: '4R',
      note: 'New to Blockheads? The 4R is one of our most popular models and typically the best place to start.',
    },
    {
      key: 'iso',
      name: 'ISO series',
      short: 'ISO',
      image: { src: '/images/iso55f.webp', width: 720, height: 508 },
      desc: 'Higher radial and tilt loads at higher speeds. Water-cooled spindles for high-speed machining and direct machining of optical surfaces.',
      specs: [
        { value: '0.5 µin (13 nm)', label: 'Synchronous error, ISO 5.5F and 5.5PG' },
        { value: '50,000 rpm', label: 'ISO 2.25 (50K), water-cooled' },
        { value: '250 lb (115 kg)', label: 'Ultimate radial load, ISO 5.5F and 5.5PG' },
      ],
      chips: ['ISO 2.25 (50K)', 'ISO 3R DB400', 'ISO 3.375PG', 'ISO 5.5F', 'ISO 5.5PG'],
    },
    {
      key: '4rh',
      name: '4RH oil hydrostatic',
      short: '4RH',
      image: { src: '/images/4rh.webp', width: 700, height: 685 },
      desc: 'A step-compensated oil hydrostatic biconic spindle. Nanometer-level error motion with high load capacity and high crash resistance, for grinding and hard-turning.',
      specs: [
        { value: '1 µin (25 nm)', label: 'Synchronous error, radial and axial' },
        { value: '2,000 lb (9 kN)', label: 'Axial capacity' },
        { value: '3,500 rpm', label: 'Maximum speed' },
      ],
      details: '/products#4rh',
    },
    {
      key: 'accessories',
      name: 'Accessories',
      short: 'Accessories',
      image: { src: '/images/stones.webp', width: 538, height: 573 },
      desc: 'GF-5 precision ground flatstones for preparing precision surfaces, and attachments: workholding devices, motor drives, piloting systems, vacuum seals and rotary unions.',
      specs: [
        { value: '120 + 80 grit', label: 'Standard GF-5 flatstone pair' },
        { value: '46 grit', label: 'Open-bond option for aluminum workpieces' },
      ],
      chips: ['GF-5 Flatstones', 'Attachments'],
    },
  ],
};

export const services = {
  title: 'Precision Engineering and Manufacturing Services',
  intro: 'For work outside the standard line, or parts made to the same tolerances as our spindles.',
  items: [
    {
      id: 'engineering',
      name: 'Precision engineering',
      image: { src: '/images/eng.webp', width: 672, height: 480, alt: 'PI engineers reviewing a drawing' },
      desc: 'When a specification falls outside our standard lines, our engineers design and build a spindle for the application. Custom spindle making at PI goes back almost to the beginning in 1946.',
      list: [
        'Custom air bearing spindles, designed to the application',
        'Hemispherical, dual diameter, air pad and vacuum-rated designs',
        'Aluminum, Invar, graphite and ceramic structures',
        'Cost-effective from 25 units',
      ],
      figures: [
        { value: '15,000 lb', label: 'Top load among our custom builds' },
        { value: '60,000 rpm', label: 'Top speed among our custom builds' },
      ],
      link: 'About precision engineering',
    },
    {
      id: 'manufacturing',
      name: 'Precision manufacturing',
      image: { src: '/images/mfg.webp', width: 500, height: 333, alt: 'Grinding with coolant in the PI shop' },
      desc: 'Sub-contract manufacturing in a shop where the most critical work runs on our own air bearing spindles and slides.',
      list: [
        'OD, ID and surface grinding',
        'Diamond machining',
        'Tools, gages, precision cams and prototypes',
        'Precision parts, design, development and R&D',
      ],
      figures: [
        { value: '<20 µin', label: 'Roundness' },
        { value: '<20 µin', label: 'Circular flatness' },
      ],
      link: 'About precision manufacturing',
    },
  ],
};

export const applications = {
  title: 'Applications',
  items: [
    { slug: 'disk-testing', name: 'Disk testing and pack writing', desc: 'Sub-microinch asynchronous error motion, the rotational reference for memory disk testing.' },
    { slug: 'roundness-flatness', name: 'Roundness and flatness testing', desc: 'Runout, concentricity and squareness on IDs, ODs and faces, to one microinch.' },
    { slug: 'workheads', name: 'Machine tool workheads', desc: 'Face, turn and bore to better than ten microinches, with specular finishes.' },
    { slug: 'bearing-analysis', name: 'Bearing analysis', desc: 'Noise signature, runout and asynchronous error motion.' },
    { slug: 'pivots-indexers', name: 'Precision pivots and indexers', desc: 'Pneumo-lock fixes the rotor without introducing rotational error.' },
    { slug: 'optical-scanners', name: 'Optical scanner spindles', desc: 'High rotational accuracy, no torque ripple, low thermal excursion.' },
    { slug: 'grinding', name: 'Grinding spindles', desc: 'Minimal sub-surface damage, so less polishing afterwards.' },
  ],
  other: { title: 'Don’t see your application?', desc: 'Describe it in a quote request.', href: urls.quote },
};

export const pursuit = {
  title: 'The pursuit of precision',
  text: 'Eighty years of solving problems in manufacturing, measuring and scientific research.',
  cta: { label: 'Read our history', href: '/about#history' },
  from: 1946,
  to: 2026,
};

export const resources = {
  title: 'Resources',
  items: [
    { title: 'Brochures and drawings', desc: 'The brochure and drawing for every standard model, in one library.', link: 'Open the library', href: '#' },
    { title: 'Technical posters', desc: '87 posters, most presented at ASPE and euspen meetings, 2004 to 2026.', link: 'Browse posters', href: site.docs.posters },
  ],
};
