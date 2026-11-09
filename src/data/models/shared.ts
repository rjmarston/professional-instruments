// Links and wording shared by several model pages.
const drive = (id: string) => `https://drive.google.com/file/d/${id}/view`;
export { drive };

export const families = {
  blockhead: { name: 'Blockhead series', href: '/products#blockhead' },
  iso: { name: 'ISO series', href: '/products#iso' },
  accessories: { name: 'Accessories', href: '/products#accessories' },
};

export const blockheadDocs = [
  { name: 'Blockhead series overview', href: drive('1Cq3yENTdudXo1k6GVakdKW27Y5OrNi7O') },
  { name: 'Blockhead operator’s manual', href: drive('1qROaO_65ab8BH8t4pn42-bYmOktp4dDb') },
];

// Blockhead options, worded from the brochures. Each page lists only the ones its brochure offers.
export const blockheadOptions = {
  motor: { title: 'Motor and encoder', text: 'An optional motor and encoder, matched to the application.' },
  chucks: { title: 'Chucks and housings', text: 'Optional chucks and housings to hold the work and mount the spindle.' },
  pneumoLock: {
    title: 'Biasing and pneumo-lock',
    text: 'Pneumo-lock fixes the rotor in position without introducing rotational error. Best configured at the factory, but convertible in the field.',
  },
  airInlet: { title: 'Air inlet', text: 'Through the standard air fittings, or through porting in the mounting face.' },
};

export const blockheadSpecsIntro = 'At 100 psi (0.7 MPa) supply pressure.';
export const blockheadApplications = [
  'Precision manufacturing and metrology',
  'Single point diamond turning',
  'Synchrotron instrumentation',
  'HDD writing and testing',
  'Wafer inspection',
];

export const quoteText = 'Tell us about your application and the quantity you need.';
