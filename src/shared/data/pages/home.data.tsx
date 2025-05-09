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
  FeaturedBusinessesProps,
  Item,
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

// Define the type for icon names that can be used in JSON
type IconName = 'arrowDown' | 'arrowUp' | 'check' | 'rocket' | 'bulb' | 'arrowsRightLeft' | 'brandTailwind' | 'components' | 'listCheck' | '';

// Define the type for the icon map
type IconMapType = {
  [K in IconName]: any;
};

const iconMap: IconMapType = {
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

// Steps data on Home page *******************
const stepsSection = content.sections.steps;
export const stepsHome: StepsProps = stepsSection ? {
  id: stepsSection.id || 'steps-on-home',
  hasBackground: false,
  isReversed: stepsSection.isReversed ?? false,
  isImageDisplayed: stepsSection.isImageDisplayed ?? true,
  image: stepsSection.image,
  header: stepsSection.header,
  items: stepsSection.items.map((item) => ({
    ...item,
    icon: iconMap[item.icon as IconName] || undefined
  })),
} : {
  id: 'steps-on-home',
  hasBackground: false,
  isReversed: false,
  isImageDisplayed: true,
  image: { src: '', alt: '' },
  header: { title: '', subtitle: '', tagline: '' },
  items: []
};

// Testimonials data on Home page *******************
const testimonialsSection = content.sections.testimonials;
export const testimonialsHome: TestimonialsProps = testimonialsSection ? {
  id: testimonialsSection.id || 'testimonials-on-home',
  hasBackground: true,
  header: testimonialsSection.header,
  testimonials: testimonialsSection.testimonials,
} : {
  id: 'testimonials-on-home',
  hasBackground: true,
  header: { title: '', subtitle: '', tagline: '' },
  testimonials: []
};

// FAQS data on Home page *******************
const faqsSection = content.sections.faqs;
if (!faqsSection) {
  throw new Error("Missing 'faqs' section in content.json. Please check your JSON structure and deployment.");
}
export const faqs2Home: FAQsProps = faqsSection ? {
  id: faqsSection.id || 'faqsTwo-on-home',
  hasBackground: false,
  header: faqsSection.header,
  items: faqsSection.items,
} : {
  id: 'faqsTwo-on-home',
  hasBackground: false,
  header: { title: '', subtitle: '', tagline: '' },
  items: []
};

// Featured Businesses data on Home page *******************
const featuredBusinessesSection = content.sections.featuredBusinesses;
export const featuredBusinessesHome: FeaturedBusinessesProps = featuredBusinessesSection ? {
  id: featuredBusinessesSection.id || 'featured-businesses-on-home',
  hasBackground: true,
  header: featuredBusinessesSection.header,
  businesses: featuredBusinessesSection.businesses,
} : {
  id: 'featured-businesses-on-home',
  hasBackground: true,
  header: { title: '', subtitle: '', tagline: '' },
  businesses: []
};

// Pricing data on Home page *******************
const pricingSection = content.sections.pricing;
export const pricingHome: PricingProps = pricingSection ? {
  id: pricingSection.id || 'pricing-on-home',
  hasBackground: true,
  header: pricingSection.header,
  prices: pricingSection.prices,
} : {
  id: 'pricing-on-home',
  hasBackground: true,
  header: { title: '', subtitle: '', tagline: '' },
  prices: []
};

// Team data on Home page *******************
const teamSection = content.sections.team;
export const teamHome: TeamProps = teamSection ? {
  id: teamSection.id || 'team-on-home',
  hasBackground: false,
  header: teamSection.header,
  teams: teamSection.teams.map(team => ({
    ...team,
    items: team.items.map(item => ({
      ...item,
      icon: iconMap[item.icon as IconName] || undefined
    }))
  }))
} : {
  id: 'team-on-home',
  hasBackground: false,
  header: { title: '', subtitle: '', tagline: '' },
  teams: []
};

// Contact data on Home page *******************
const contactSection = content.sections.contact;
export const contactHome: ContactProps = contactSection ? {
  hasBackground: true,
  header: contactSection.header,
  content: contactSection.content,
  items: contactSection.items.map(item => ({
    ...item,
    icon: iconMap[item.icon as IconName] || undefined
  })),
  form: {
    ...contactSection.form,
    textarea: {
      ...contactSection.form.textarea,
      name: contactSection.form.textarea.name || 'message'
    },
    btn: {
      ...contactSection.form.btn,
      type: contactSection.form.btn.type as 'submit' | 'button' | 'reset'
    }
  }
} : {
  hasBackground: true,
  header: { title: '', subtitle: '', tagline: '' },
  content: '',
  items: [],
  form: {
    title: '',
    inputs: [],
    textarea: { name: 'message', placeholder: '' },
    btn: { title: '', type: 'submit' }
  }
};

// CallToAction data *******************
const callToAction2Section = content.sections.callToAction2;
export const callToAction2Home: CallToActionProps = callToAction2Section ? {
  title: callToAction2Section.title,
  subtitle: callToAction2Section.subtitle,
  callToAction: {
    ...callToAction2Section.callToAction,
    icon: IconMapPin
  },
  items: callToAction2Section.items.map(item => {
    const mappedItem: Item = {
      title: item.title,
      description: item.description,
    };

    if ('href' in item) {
      mappedItem.href = item.href;
    }

    if ('form' in item && item.form) {
      mappedItem.form = {
        ...item.form,
        icon: item.form.icon ? iconMap[item.form.icon as IconName] || undefined : undefined,
        btn: {
          ...item.form.btn,
          type: item.form.btn.type as 'submit' | 'button' | 'reset'
        }
      };
    }

    return mappedItem;
  })
} : {
  title: '',
  subtitle: '',
  callToAction: { text: '', href: '', icon: IconMapPin },
  items: []
};
