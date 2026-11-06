// The 4R Blockhead page. Figures are from the 4R brochure (2024–26 layout), at 100 psi (0.7 MPa).
// A value is either one string or [inch, metric]; the units switch on the page picks one.
import type { Value } from '../products';
import { urls } from '../site';

const brochure = 'https://drive.google.com/file/d/1SH-3yN-gxonnLkwzUdwsnJqhtUqoDuQ8/view';

export const model = {
  name: '4R Blockhead',
  family: { name: 'Blockhead series', href: '/products#blockhead' },
  seoTitle: '4R Blockhead air bearing spindle',
  seoDescription:
    'The 4R Blockhead is our standard universal air bearing spindle: 1 µin (25 nm) synchronous error, 0.45 lb/µin (80 N/µm) radial stiffness and a 1.25 in aperture.',
  lede: 'Our standard universal spindle with a round stator. One of our most popular models, and typically the best place to start.',
  image: { src: '/images/4r.webp', width: 900, height: 837 },
  facts: [
    { value: ['1 µin', '25 nm'] as Value, label: 'Synchronous error, radial and axial' },
    { value: ['0.45 lb/µin', '80 N/µm'] as Value, label: 'Radial stiffness' },
    { value: ['1.25 in', '32 mm'] as Value, label: 'Aperture' },
    { value: '7,500 rpm' as Value, label: 'Rated speed' },
  ],
  brochure,
  overview: [
    'Since 1965, Professional Instruments has offered the Blockhead family of air bearing spindles for the most demanding rotary applications. Designed for universal integration, their combination of accuracy and stiffness makes Blockheads the first choice for applications from optics manufacturing to metrology.',
    'The 4R features stainless steel construction in our medium package size. Its porting allows biasing and pneumo-lock modes, preferably configured at the factory but convertible in the field. Inlet air can come through the standard air fittings or through porting in the mounting face.',
    'A motor, encoder, chucks and housings can be added to suit your requirements.',
  ],
  features: [
    '400 series stainless steel',
    'Horizontal or vertical orientation',
    'Nanometer-level error motion',
    [['4.07 in', '103 mm'], 'height'],
    [['5.625 in', '143 mm'], 'diameter stator'],
    [['1.25 in', '32 mm'], 'diameter aperture'],
  ] as (string | [Value, string])[],
  applications: [
    'Precision manufacturing and metrology',
    'Single point diamond turning',
    'Synchrotron instrumentation',
    'HDD writing and testing',
    'Wafer inspection',
  ],
  specs: [
    {
      title: 'Load capacity',
      columns: ['Ultimate', 'Working'],
      rows: [
        { label: 'Radial', values: [['70 lb', '30 kg'], ['35 lb', '15 kg']] },
        { label: 'Axial', values: [['270 lb', '120 kg'], ['135 lb', '60 kg']] },
        { label: 'Tilt', values: [['270 lb·in', '30 N·m'], ['135 lb·in', '15 N·m']] },
      ],
    },
    {
      title: 'Stiffness',
      rows: [
        { label: 'Radial', values: [['0.45 lb/µin', '80 N/µm']] },
        { label: 'Axial', values: [['1.3 lb/µin', '230 N/µm']] },
        { label: 'Tilt', values: [['2.7 lb·in/µrad', '0.3 N·m/µrad']] },
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
        { label: 'Air consumption', values: [['0.7 SCFM', '20 SLPM']] },
        { label: 'Rotor inertia', values: [['0.05 lb·in·sec²', '0.005 kg·m²']] },
        { label: 'Rotor weight', values: [['7.7 lb', '3.5 kg']] },
        // The drawing says 19 lb; the brochure says 18 lb. Waiting on PI to confirm.
        { label: 'Total weight', values: [['18 lb', '8.2 kg']] },
        { label: 'Rated speed', values: [['7,500 rpm', '125 Hz']] },
      ],
    },
  ] as { title: string; columns?: string[]; rows: { label: string; values: Value[] }[] }[],
  drawing: {
    src: '/images/4r-drawing.webp',
    width: 1600,
    height: 1031,
    alt: 'Dimensioned drawing of the 4R Blockhead: end and side views with mounting holes, ports, stator pilot and overall length',
  },
  downloads: [
    { name: '4R brochure and drawing', href: brochure },
    { name: 'Blockhead series overview', href: 'https://drive.google.com/file/d/1Cq3yENTdudXo1k6GVakdKW27Y5OrNi7O/view' },
    { name: 'Blockhead operator’s manual', href: 'https://drive.google.com/file/d/1qROaO_65ab8BH8t4pn42-bYmOktp4dDb/view' },
  ],
  options: [
    { title: 'Motor and encoder', text: 'An optional motor and encoder, matched to the application.' },
    { title: 'Chucks and housings', text: 'Optional chucks and housings to hold the work and mount the spindle.' },
    { title: 'Biasing and pneumo-lock', text: 'Pneumo-lock fixes the rotor in position without introducing rotational error.' },
    { title: 'Air inlet', text: 'Through the standard air fittings, or through porting in the mounting face.' },
  ],
  related: [
    {
      name: '4B',
      text: 'The same 4 inch performance with a rectangular stator, ideal for horizontal mounting.',
      rows: [['Radial stiffness', ['0.45 lb/µin', '80 N/µm']], ['Aperture', ['1.25 in', '32 mm']], ['Rated speed', '7,500 rpm']],
    },
    {
      name: '4R 225',
      text: 'The same stator size as the 4R, with a larger 2.25 inch aperture.',
      rows: [['Radial stiffness', ['0.5 lb/µin', '95 N/µm']], ['Aperture', ['2.25 in', '57 mm']], ['Rated speed', '3,000 rpm']],
    },
    {
      name: '10R',
      text: 'For heavier work: a 12 inch round stator and 1,600 lb ultimate axial load.',
      rows: [['Radial stiffness', ['1.3 lb/µin', '230 N/µm']], ['Aperture', ['3.25 in', '83 mm']], ['Rated speed', '1,800 rpm']],
    },
  ] as { name: string; text: string; rows: [string, Value][] }[],
  cta: {
    title: 'Request a quote for the 4R Blockhead.',
    text: 'Tell us about your application and the quantity you need.',
  },
  quote: urls.quote,
};
