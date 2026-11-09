// Site-wide settings. Change these in one place.
export const site = {
  name: 'Professional Instruments Company',
  shortName: 'Professional Instruments',
  // The company's real address, used in structured data even while the site is previewed elsewhere.
  url: 'https://www.airbearings.com',
  description:
    'Professional Instruments makes the world’s most accurate air bearing spindles, for millionth-inch precision, high stiffness and zero friction.',
  phone: '(952) 933-1222',
  phoneIntl: '+1-952-933-1222',
  email: 'sales@airbearings.com',
  address: {
    street: '7800 Powell Road',
    city: 'Hopkins',
    region: 'MN',
    postalCode: '55343',
    country: 'USA',
  },
  coords: { lat: 44.929351, lng: -93.376439 },
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=44.929351,-93.376439',
  founded: '1946',
  social: {
    youtube: 'https://www.youtube.com/@PIcoAirBearings',
    linkedin: 'https://www.linkedin.com/company/professional-instruments-company/',
  },
  // Documents still hosted on Google Drive. Move them to this site when the library is built.
  docs: {
    terms: 'https://drive.google.com/file/d/1pVxfEVMu_ZpF70zb4xLuzHl04L1EgJnZ/view',
    posters: 'https://docs.google.com/folderview?id=1fnoQGHLuQceyPYA0myIPR7fJ5yNXgVJJ',
  },
};

// Homepage hero. 'original' is the plate to the right of the headline; 'sheet' is the drawing sheet.
// showToggle puts a small A/B switch in the hero so PI can compare the two. Turn it off once they pick.
export const hero = {
  default: 'original' as 'original' | 'sheet',
  showToggle: true,
};

// Pages that aren't built yet. Links to them show a short notice instead of going nowhere.
export const notBuilt = '#';

export const urls = {
  home: '/',
  products: '/products',
  about: '/about',
  contact: '/contact',
  quote: '/contact#quote',
};

export const applicationLinks = [
  { name: 'Disk testing', slug: 'disk-testing' },
  { name: 'Roundness and flatness', slug: 'roundness-flatness' },
  { name: 'Machine tool workheads', slug: 'workheads' },
  { name: 'Bearing analysis', slug: 'bearing-analysis' },
  { name: 'Pivots and indexers', slug: 'pivots-indexers' },
  { name: 'Optical scanners', slug: 'optical-scanners' },
  { name: 'Grinding', slug: 'grinding' },
];

type MenuItem = { name: string; href: string };
type Menu = { label: string; key: string; href: string; items: MenuItem[] };

// Main menu. The label goes to `href`; the arrow beside it opens the list of `items`.
export const menus: Menu[] = [
  {
    label: 'Products',
    key: 'products',
    href: urls.products,
    items: [
      { name: 'Blockhead series', href: '/products#blockhead' },
      { name: 'ISO series', href: '/products#iso' },
      { name: '4RH oil hydrostatic', href: '/products#4rh' },
      { name: 'Accessories', href: '/products#accessories' },
    ],
  },
  {
    label: 'Services',
    key: 'services',
    href: '/#services',
    items: [
      { name: 'Precision engineering', href: '/#engineering' },
      { name: 'Precision manufacturing', href: '/#manufacturing' },
    ],
  },
  {
    label: 'Applications',
    key: 'applications',
    href: '/#applications',
    items: applicationLinks.map((a) => ({ name: a.name, href: `/#app-${a.slug}` })),
  },
  {
    label: 'Resources',
    key: 'resources',
    href: '/#resources',
    items: [
      { name: 'Brochures and drawings', href: '/#resources' },
      { name: 'Technical posters', href: '/about#research' },
      { name: 'Videos', href: site.social.youtube },
    ],
  },
  {
    label: 'About',
    key: 'about',
    href: urls.about,
    items: [
      { name: 'Who we are', href: '/about#company' },
      { name: 'History', href: '/about#history' },
      { name: 'The shop', href: '/about#shop' },
    ],
  },
];

export const footerNav = [
  {
    title: 'Products',
    links: [
      { label: 'Blockhead series', href: '/products#blockhead' },
      { label: 'ISO series', href: '/products#iso' },
      { label: '4RH oil hydrostatic', href: '/products#4rh' },
      { label: 'Accessories', href: '/products#accessories' },
      { label: 'View all spindles', href: urls.products },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Precision engineering', href: '/#engineering' },
      { label: 'Precision manufacturing', href: '/#manufacturing' },
      { label: 'Request a quote', href: urls.quote },
    ],
  },
  {
    title: 'Applications',
    links: applicationLinks.map((a) => ({ label: a.name, href: `/#app-${a.slug}` })),
  },
  {
    title: 'Resources',
    links: [
      { label: 'Brochures and drawings', href: '/#resources' },
      { label: 'Posters', href: '/about#research' },
      { label: 'Videos', href: site.social.youtube },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: urls.about },
      { label: 'History', href: '/about#history' },
      { label: 'Contact', href: urls.contact },
      { label: 'LinkedIn', href: site.social.linkedin },
    ],
  },
];

// The closing call to action at the bottom of most pages.
export const cta = {
  title: 'Tell us about your <span class="nw">high-precision</span> project.',
  text: 'For prompt, personal service, request a quote or give us a call.',
  button: 'Request a quote',
};
