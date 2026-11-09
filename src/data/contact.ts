// Contact page copy and the quote form's options.
import { allModels } from './products';
import { applications } from './home';

export const contact = {
  seoTitle: 'Contact us and request a quote',
  seoDescription:
    'Request a quote for an air bearing spindle or precision part from Professional Instruments. Call (952) 933-1222 or visit 7800 Powell Road, Hopkins, MN 55343.',
  title: 'Contact us',
  lede: 'For prompt, personal service, tell us about your high-precision project.',
  form: {
    title: 'Request a quote',
    interests: [
      { value: 'standard', label: 'A standard spindle' },
      { value: 'custom', label: 'A custom spindle (precision engineering)' },
      { value: 'manufacturing', label: 'Precision manufacturing' },
      { value: 'accessories', label: 'Accessories' },
      { value: 'other', label: 'Something else' },
    ],
    models: allModels,
    applications: applications.items.map((a) => a.name),
    requirementsHint: 'Load, speed, accuracy, environment, quantity, and anything else we should know.',
    submit: 'Send request',
    // The form doesn't send anywhere yet. Who receives quote requests is an open question for PI.
    done: {
      title: 'Request ready',
      text: 'This form doesn’t send yet. Once the site launches, requests go to sales@airbearings.com and you see a confirmation here. Until then, please email or call us.',
      again: 'Start another request',
    },
  },
};
