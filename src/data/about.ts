// About page copy. History facts come from the current History page and the "PICo" text;
// names, dates and the Honeywell and Control Data reference are waiting on PI to confirm.
import { urls } from './site';

export const about = {
  seoTitle: 'About Professional Instruments | Air bearings since 1946',
  seoDescription:
    'Since 1946, Professional Instruments has solved problems in manufacturing, measuring and scientific research. Meet the team, see the shop, read our history.',
  title: 'The pursuit of precision',
  lede: 'Since 1946, we have solved our customers’ problems in manufacturing, measuring, and scientific research.',
  company: {
    title: 'Who we are',
    paragraphs: [
      'We design and build air bearing spindles, and serve customers around the globe from our shop in Hopkins, Minnesota.',
      'Alongside our air bearings, we provide a wide range of sub-contract manufacturing, including tools, gages, precision cams, special machines, and prototype or production parts.',
    ],
    photo: { src: '/images/team.webp', width: 667, height: 375, alt: 'The Professional Instruments team in a meeting' },
  },
  history: {
    title: 'History',
    from: 1946,
    to: 2026,
    milestone: 1965,
    eras: [
      { from: 1946, to: 1966, text: 'Ted and Harold Arneson take the company from their garage to outer space.', note: '1965: the first Blockhead spindles.' },
      { from: 1966, to: 1986, text: 'Collaborations with Honeywell and Control Data set the company on a path toward ultra-high precision manufacturing.' },
      { from: 1986, to: 2006, text: 'By the turn of the century, the product line includes a wide variety of ultra-precision linear slides.' },
      { from: 2006, to: 2026, text: 'Mastery of ultra-precision manufacturing helps drive tolerances toward the next decimal point.' },
    ],
  },
  shop: {
    title: 'The shop',
    intro: 'We build our spindles, and make close-tolerance parts for others, in the same shop.',
    photos: [
      { src: '/images/mfg.webp', width: 500, height: 333, alt: 'Grinding a part with coolant' },
      { src: '/images/shop-spindle.webp', width: 500, height: 286, alt: 'A spindle and test fixture on a machine base' },
      { src: '/images/eng.webp', width: 672, height: 480, alt: 'Engineers reviewing a drawing' },
    ],
    text: 'Our shop is tooled with fine machines and inspection equipment. We have rebuilt many of those machines to better-than-new condition, and for the most critical work we have installed our own air bearing spindles and slides, making extremely close-tolerance work a specialty.',
    facts: [
      { value: '<20 µin', label: 'Roundness' },
      { value: '<20 µin', label: 'Circular flatness' },
    ],
  },
  research: {
    title: 'Shared with the field',
    intro: 'Technical posters, most presented at ASPE and euspen meetings.',
    posters: [
      { year: '2004', event: 'ASPE', title: 'Turning calcium fluoride' },
      { year: '2006', event: 'euspen', title: 'Flatcheck' },
      { year: '2009', event: 'ASPE', title: 'The step-compensated 4RH' },
      { year: '2011', event: 'ASPE', title: 'Flatstones' },
    ],
    text: 'The posters cover spindle error motion, grinding, turning and surface preparation, and the full set is free to read.',
    cta: { label: 'Browse all posters', href: urls.posters },
  },
};
