import React from 'react';
import {
  IconArrowDown,
  IconArrowsRightLeft,
  IconBrandLinkedin,
  IconBrandTailwind,
  IconBrandTwitter,
  IconBulb,
  IconCheck,
  IconClock,
  IconComponents,
  IconDownload,
  IconListCheck,
  IconMail,
  IconMapPin,
  IconPhoneCall,
  IconRocket,
} from '@tabler/icons-react';
import {
  CallToActionProps,
  ContactProps,
  ContentProps,
  FAQsProps,
  FeaturesProps,
  HeroProps,
  PricingProps,
  SocialProofProps,
  StepsProps,
  TeamProps,
  TestimonialsProps,
  Textarea,
  Button,
} from '../../types';
import { getContent, getContentArray } from '~/shared/content/content-helper';

// Hero data on Home page *******************
export const heroHome: HeroProps = {
  title: getContent('home.hero.title'),
  subtitle: getContent('home.hero.subtitle'),
  tagline: getContent('home.hero.tagline'),
  callToAction: {
    text: getContent('home.hero.callToAction.text'),
    href: getContent('home.hero.callToAction.href'),
    icon: IconMapPin,
  },
  callToAction2: {
    text: getContent('home.hero.callToAction2.text'),
    href: getContent('home.hero.callToAction2.href'),
    icon: IconMapPin,
  },
  image: {
    src: getContent('home.hero.image.src'),
    alt: getContent('home.hero.image.alt'),
  },
};

// SocialProof data on Home page *******************
export const socialProofHome: SocialProofProps = {
  id: 'socialProof-on-home',
  hasBackground: false,
  images: getContentArray('home.socialProof.images'),
};

// Features data on Home page *******************
export const featuresHome: FeaturesProps = {
  id: 'features-on-home',
  hasBackground: false,
  columns: 3,
  header: {
    title: getContent('home.features.title'),
    subtitle: getContent('home.features.subtitle'),
    tagline: getContent('home.features.tagline'),
  },
  items: getContentArray('home.features.items').map((item, index) => ({
    title: item.title,
    description: item.description,
    icon: [IconBrandTailwind, IconComponents, IconListCheck, IconRocket, IconArrowsRightLeft, IconBulb][index],
    callToAction: {
      text: item.callToAction.text,
      href: item.callToAction.href,
    },
  })),
};

// Content data on Home page *******************
export const contentHomeOne: ContentProps = {
  id: 'contentOne-on-home-one',
  hasBackground: true,
  header: {
    title: getContent('home.contentOne.title'),
    subtitle: getContent('home.contentOne.subtitle'),
    tagline: getContent('home.contentOne.tagline'),
  },
  content: getContent('home.contentOne.content'),
  items: getContentArray('home.contentOne.items'),
  image: {
    src: getContent('home.contentOne.image.src'),
    alt: getContent('home.contentOne.image.alt'),
  },
  isReversed: false,
  isAfterContent: false,
};

// Content data on Home page *******************
export const contentHomeTwo: ContentProps = {
  id: 'contentOne-on-home-two',
  hasBackground: true,
  content: getContent('home.contentTwo.content'),
  items: getContentArray('home.contentTwo.items'),
  image: {
    src: getContent('home.contentTwo.image.src'),
    alt: getContent('home.contentTwo.image.alt'),
  },
  isReversed: true,
  isAfterContent: true,
};

// Steps data on Home page *******************
export const stepsHome: StepsProps = {
  id: 'steps-on-home',
  hasBackground: false,
  isReversed: false,
  isImageDisplayed: true,
  image: {
    src: getContent('home.steps.image.src'),
    alt: getContent('home.steps.image.alt'),
  },
  header: {
    title: getContent('home.steps.header.title'),
  },
  items: getContentArray('home.steps.items').map((item, index) => ({
    title: item.title,
    description: item.description,
    icon: [IconArrowDown, IconCheck, IconClock][index],
  })),
};

// Testimonials data on Home page *******************
export const testimonialsHome: TestimonialsProps = {
  id: 'testimonials-on-home',
  hasBackground: true,
  header: {
    title: getContent('home.testimonials.header.title'),
    subtitle: getContent('home.testimonials.header.subtitle'),
  },
  testimonials: getContentArray('home.testimonials.testimonials'),
};

// FAQS data on Home page *******************
export const faqs2Home: FAQsProps = {
  id: 'faqsTwo-on-home',
  hasBackground: false,
  header: {
    title: getContent('home.faqs.header.title'),
    subtitle: getContent('home.faqs.header.subtitle'),
    tagline: getContent('home.faqs.header.tagline'),
  },
  items: getContentArray('home.faqs.items'),
};

// Featured Businesses data on Home page *******************
export const featuredBusinessesHome = {
  id: 'featured-businesses-on-home',
  hasBackground: true,
  header: {
    title: getContent('home.featuredBusinesses.header.title'),
    subtitle: getContent('home.featuredBusinesses.header.subtitle'),
    tagline: getContent('home.featuredBusinesses.header.tagline'),
  },
  businesses: getContentArray('home.featuredBusinesses.businesses'),
};

// Pricing data on Home page *******************
export const pricingHome: PricingProps = {
  id: 'pricing-on-home',
  hasBackground: true,
  header: {
    title: getContent('home.pricing.header.title'),
    subtitle: getContent('home.pricing.header.subtitle'),
    tagline: getContent('home.pricing.header.tagline'),
  },
  prices: getContentArray('home.pricing.prices'),
};

// Team data on Home page *******************
export const teamHome: TeamProps = {
  id: 'team-on-home',
  hasBackground: false,
  header: {
    title: getContent('home.team.header.title'),
    subtitle: getContent('home.team.header.subtitle'),
  },
  teams: getContentArray('home.team.teams').map(team => ({
    ...team,
    items: [
      {
        title: 'Know more on Twitter',
        icon: IconBrandTwitter,
        href: team.social?.twitter || '#',
      },
      {
        title: 'Know more on Linkedin',
        icon: IconBrandLinkedin,
        href: team.social?.linkedin || '#',
      },
      {
        title: 'Contact by email',
        icon: IconMail,
        href: `mailto:${team.email}`,
      },
    ],
  })),
};

// Contact data on Home page *******************
export const contactHome: ContactProps = {
  hasBackground: true,
  header: {
    title: getContent('home.contact.header.title'),
    subtitle: getContent('home.contact.header.subtitle'),
    tagline: getContent('home.contact.header.tagline'),
  },
  content: getContent('home.contact.content'),
  items: getContentArray('home.contact.items').map(item => ({
    ...item,
    icon: [IconMail, IconPhoneCall, IconClock][item.iconIndex || 0],
  })),
  form: {
    title: getContent('home.contact.form.title'),
    inputs: getContentArray('home.contact.form.inputs'),
    textarea: {
      cols: 30,
      rows: 5,
      name: 'textarea',
      placeholder: getContent('home.contact.form.textarea.placeholder'),
    },
    btn: {
      title: getContent('home.contact.form.btn.title'),
      type: 'submit',
    },
  },
};

// CallToAction data *******************
export const callToAction2Home: CallToActionProps = {
  title: getContent('home.callToAction2.title'),
  subtitle: getContent('home.callToAction2.subtitle'),
  callToAction: {
    text: getContent('home.callToAction2.callToAction.text'),
    href: getContent('home.callToAction2.callToAction.href'),
    icon: IconDownload,
  },
  items: getContentArray('home.callToAction2.items').map(item => ({
    ...item,
    form: item.form ? {
      ...item.form,
      icon: IconMail,
    } : undefined,
  })),
};
