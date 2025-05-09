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
  IconArrowUp,
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
} from '../../types';
import content from '../../content/content.json';

// Hero data on Home page *******************
const heroSection = content.sections.hero;
export const heroHome: HeroProps = {
  title: heroSection.title,
  subtitle: heroSection.subtitle,
  tagline: heroSection.tagline,
  callToAction: {
    text: heroSection.callToAction.text,
    href: heroSection.callToAction.href,
    icon: IconMapPin,
  },
  callToAction2: {
    text: heroSection.callToAction2.text,
    href: heroSection.callToAction2.href,
    icon: IconMapPin,
  },
  image: {
    src: heroSection.image.src,
    alt: heroSection.image.alt,
  },
};

// SocialProof data on Home page *******************
export const socialProofHome: SocialProofProps = {
  id: 'socialProof-on-home',
  hasBackground: false,
  images: [
    {
      link: '/attractions',
      src: '/images/casco-bay.jpg',
      alt: 'Portland Harbor',
    },
    {
      link: '/dining',
      src: '/images/eventide-oyster.jpg',
      alt: 'Portland Food Scene',
    },
    {
      link: '/arts',
      src: '/images/arts-district.jpg',
      alt: 'Portland Arts District',
    },
    {
      link: '/outdoors',
      src: '/images/kayaking-casco.jpg',
      alt: 'Portland Outdoor Activities',
    },
  ],
};

// Features data on Home page *******************
const featuresSection = content.sections.features;
export const featuresHome: FeaturesProps = {
  id: 'features-on-home',
  hasBackground: false,
  columns: 3,
  header: {
    title: featuresSection.title,
    subtitle: featuresSection.subtitle,
    tagline: featuresSection.tagline,
  },
  items: featuresSection.items.map((item: any) => ({
    title: item.title,
    description: item.description,
    icon: (() => {
      switch (item.icon) {
        case 'tailwind': return IconBrandTailwind;
        case 'components': return IconComponents;
        case 'listCheck': return IconListCheck;
        case 'rocket': return IconRocket;
        case 'arrowsRightLeft': return IconArrowsRightLeft;
        case 'bulb': return IconBulb;
        default: return IconCheck;
      }
    })(),
    callToAction: item.callToAction,
  })),
};

// Content data on Home page *******************
const contentOneSection = content.sections.contentOne;
export const contentHomeOne: ContentProps = {
  id: 'contentOne-on-home-one',
  hasBackground: true,
  header: {
    title: contentOneSection.title,
    subtitle: contentOneSection.subtitle,
    tagline: contentOneSection.tagline,
  },
  content: contentOneSection.content,
  items: contentOneSection.items,
  image: contentOneSection.image,
  isReversed: false,
  isAfterContent: false,
};

// Content data on Home page *******************
const contentTwoSection = content.sections.contentTwo;
export const contentHomeTwo: ContentProps = {
  id: 'contentOne-on-home-two',
  hasBackground: true,
  header: {
    title: contentTwoSection?.title || 'Beyond its culinary scene, Portland offers endless opportunities for exploration and adventure.',
    subtitle: contentTwoSection?.subtitle || "From historic landmarks to outdoor activities, there's something for everyone.",
    tagline: contentTwoSection?.tagline || '',
  },
  content: contentTwoSection?.content || 'Beyond its culinary scene, Portland offers endless opportunities for exploration and adventure. From historic landmarks to outdoor activities, there\'s something for everyone.',
  items: contentTwoSection?.items || [
    { title: 'Historic Old Port' },
    { title: 'Eastern Promenade' },
    { title: 'Casco Bay Islands' },
    { title: 'Portland Museum of Art' },
    { title: 'Victoria Mansion' },
    { title: 'Willard Beach' },
  ],
  image: contentTwoSection?.image || { src: '/images/old-port-shopping.jpg', alt: 'Portland, Maine Harbor' },
  isReversed: true,
  isAfterContent: true,
};

// Steps data on Home page *******************
const iconMap = {
  arrowDown: IconArrowDown,
  arrowUp: IconArrowUp,
  check: IconCheck,
  rocket: IconRocket,
  bulb: IconBulb,
  arrowsRightLeft: IconArrowsRightLeft,
  brandTailwind: IconBrandTailwind,
  components: IconComponents,
  listCheck: IconListCheck,
  "": undefined
};

const stepsSection = content.sections.steps;
export const stepsHome: StepsProps = stepsSection ? {
  id: stepsSection.id || 'steps-on-home',
  hasBackground: stepsSection.hasBackground ?? false,
  isReversed: stepsSection.isReversed ?? false,
  isImageDisplayed: stepsSection.isImageDisplayed ?? true,
  image: stepsSection.image,
  header: stepsSection.header,
  items: stepsSection.items.map((item: any) => ({
    ...item,
    icon: iconMap[item.icon] || undefined
  })),
} : stepsHome;

// Testimonials data on Home page *******************
const testimonialsSection = content.sections.testimonials;
export const testimonialsHome: TestimonialsProps = testimonialsSection ? {
  id: testimonialsSection.id || 'testimonials-on-home',
  hasBackground: testimonialsSection.hasBackground ?? true,
  header: testimonialsSection.header,
  testimonials: testimonialsSection.testimonials,
} : testimonialsHome;

// FAQS data on Home page *******************
const faqsSection = content.sections.faqs;
export const faqs2Home: FAQsProps = faqsSection ? {
  id: faqsSection.id || 'faqsTwo-on-home',
  hasBackground: faqsSection.hasBackground ?? false,
  header: faqsSection.header,
  items: faqsSection.items,
} : faqs2Home;

// Featured Businesses data on Home page *******************
const featuredBusinessesSection = content.sections.featuredBusinesses;
export const featuredBusinessesHome = featuredBusinessesSection ? {
  id: featuredBusinessesSection.id || 'featured-businesses-on-home',
  hasBackground: featuredBusinessesSection.hasBackground ?? true,
  header: featuredBusinessesSection.header,
  businesses: featuredBusinessesSection.businesses,
} : featuredBusinessesHome;

// Pricing data on Home page *******************
const pricingSection = content.sections.pricing;
export const pricingHome: PricingProps = pricingSection ? {
  id: pricingSection.id || 'pricing-on-home',
  hasBackground: pricingSection.hasBackground ?? true,
  header: pricingSection.header,
  prices: pricingSection.prices,
} : pricingHome;

// Team data on Home page *******************
const teamSection = content.sections.team;
export const teamHome: TeamProps = teamSection ? {
  id: teamSection.id || 'team-on-home',
  hasBackground: teamSection.hasBackground ?? false,
  header: teamSection.header,
  teams: teamSection.teams,
} : teamHome;

// Contact data on Home page *******************
const contactSection = content.sections.contact;
export const contactHome: ContactProps = contactSection ? {
  hasBackground: contactSection.hasBackground ?? true,
  header: contactSection.header,
  content: contactSection.content,
  items: contactSection.items,
  form: contactSection.form,
} : contactHome;

// CallToAction data *******************
const callToAction2Section = content.sections.callToAction2;
export const callToAction2Home: CallToActionProps = callToAction2Section ? {
  title: callToAction2Section.title,
  subtitle: callToAction2Section.subtitle,
  callToAction: callToAction2Section.callToAction,
  items: callToAction2Section.items,
} : callToAction2Home;
