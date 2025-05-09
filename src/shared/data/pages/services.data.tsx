import {
  IconArrowsRightLeft,
  IconBrandTailwind,
  IconBulb,
  IconChevronsRight,
  IconComponents,
  IconListCheck,
  IconRocket,
} from '@tabler/icons-react';

import {
  CallToActionProps,
  ContentProps,
  FAQsProps,
  FeaturesProps,
  HeroProps,
  TestimonialsProps,
} from '~/shared/types';

import { getContent, getContentArray } from '~/shared/content/content-helper';

// Hero data on Services page *******************
export const heroServices: HeroProps = {
  title: getContent('services.hero.title'),
  subtitle: getContent('services.hero.subtitle'),
  callToAction: {
    text: getContent('services.hero.callToAction.text'),
    href: getContent('services.hero.callToAction.href'),
    targetBlank: true,
  },
  image: {
    src: getContent('services.hero.image.src'),
    alt: getContent('services.hero.image.alt'),
  },
};

// Feature2 data on Services page *******************
export const features2Services: FeaturesProps = {
  id: 'featuresTwo-on-services',
  header: {
    title: getContent('services.features2.header.title'),
  },
  items: getContentArray('services.features2.items').map((item, index) => ({
    ...item,
    icon: [IconBrandTailwind, IconComponents, IconListCheck, IconRocket, IconArrowsRightLeft, IconBulb][index],
  })),
};

// Content data on Services page *******************
export const contentServicesOne: ContentProps = {
  id: 'contentOne-on-services-one',
  hasBackground: false,
  content: getContent('services.content1.content'),
  items: getContentArray('services.content1.items'),
  image: {
    src: getContent('services.content1.image.src'),
    alt: getContent('services.content1.image.alt'),
  },
  isReversed: true,
  isAfterContent: false,
};

// Content data on Services page *******************
export const contentServicesTwo: ContentProps = {
  id: 'contentOne-on-services-two',
  hasBackground: false,
  content: getContent('services.content2.content'),
  items: getContentArray('services.content2.items'),
  image: {
    src: getContent('services.content2.image.src'),
    alt: getContent('services.content2.image.alt'),
  },
  isReversed: false,
  isAfterContent: true,
};

// Feature4 data on Services page *******************
export const features4Services: FeaturesProps = {
  id: 'featuresFour-on-services',
  hasBackground: true,
  columns: 2,
  header: {
    title: getContent('services.features4.header.title'),
    subtitle: getContent('services.features4.header.subtitle'),
  },
  isImageDisplayed: true,
  image: {
    src: getContent('services.features4.image.src'),
    alt: getContent('services.features4.image.alt'),
  },
  items: getContentArray('services.features4.items').map((item, index) => ({
    ...item,
    icon: [IconBrandTailwind, IconComponents, IconListCheck, IconRocket, IconArrowsRightLeft, IconBulb][index],
  })),
};

// Testimonials data on Services page *******************
export const testimonialsServices: TestimonialsProps = {
  id: 'testimonials-on-services',
  hasBackground: false,
  isTestimonialUp: true,
  header: {
    title: getContent('services.testimonials.header.title'),
    subtitle: getContent('services.testimonials.header.subtitle'),
  },
  testimonials: getContentArray('services.testimonials.testimonials'),
};

// FAQS data on Services page *******************
export const faqsServices: FAQsProps = {
  id: 'faqs-on-services',
  hasBackground: true,
  header: {
    title: 'Answers to Common Queries',
    subtitle:
      'Etiam laoreet mi eros, vitae iaculis mi egestas blandit. Sed nisl diam, congue sed justo et, cursus sollicitudin ligula.',
  },
  columns: 1,
  items: [
    {
      title: 'Can I customize the templates to match my brand?',
      description: `Ut accumsan, massa at sagittis maximus, libero justo rhoncus metus, quis finibus neque justo quis nisi. Suspendisse sed sapien et justo iaculis faucibus.`,
      icon: IconChevronsRight,
    },
    {
      title: 'What if I need help customizing the template?',
      description: `Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent imperdiet ultricies ex consequat egestas.`,
      icon: IconChevronsRight,
    },
    {
      title: 'Are there setup guides available?',
      description: `Mauris vitae eros a dui varius luctus. Suspendisse rutrum, sapien nec blandit bibendum, justo sapien sollicitudin erat, id aliquam sapien purus quis leo. Aliquam vulputate vestibulum consectetur.`,
      icon: IconChevronsRight,
    },
    {
      title: 'Can I hire you for template customization?',
      description: `Phasellus est quam, mollis tincidunt dictum pulvinar, tempor vel justo. Mauris eu lobortis leo. Proin pretium arcu lectus, a mattis nisi fermentum quis.`,
      icon: IconChevronsRight,
    },
  ],
};

// CallToAction data on Services page *******************
export const callToActionServices: CallToActionProps = {
  id: 'callToAction-on-services',
  hasBackground: false,
  title: 'Still have questions?',
  subtitle:
    'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut in leo odio. Cras finibus ex a ante convallis ullamcorper.',
  callToAction: {
    text: 'Contact us',
    href: '/contact',
  },
};
