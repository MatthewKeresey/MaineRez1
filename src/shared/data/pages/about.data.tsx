import {
  ContactProps,
  FAQsProps,
  FeaturesProps,
  HeroProps,
  StatsProps,
  StepsProps,
  TeamProps,
  TestimonialsProps,
} from '~/shared/types';
import {
  IconAdjustments,
  IconAward,
  IconBook,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBulb,
  IconCirclesRelation,
  IconClock,
  IconFlame,
  IconHeartHandshake,
  IconHomeEco,
  IconMail,
  IconMapPin,
  IconNumber1,
  IconNumber2,
  IconNumber3,
  IconNumber4,
  IconNumber5,
  IconPalette,
  IconPhoneCall,
  IconPuzzle2,
  IconScale,
  IconThumbUp,
  IconUser,
} from '@tabler/icons-react';
import { getContent, getContentArray } from '~/shared/content/content-helper';

// Hero2 data on About page *******************
export const hero2About: HeroProps = {
  title: getContent('about.hero2.title'),
  subtitle: getContent('about.hero2.subtitle'),
  tagline: getContent('about.hero2.tagline'),
  callToAction: {
    text: getContent('about.hero2.callToAction.text'),
    href: getContent('about.hero2.callToAction.href'),
    targetBlank: false,
  },
  callToAction2: {
    text: getContent('about.hero2.callToAction2.text'),
    href: getContent('about.hero2.callToAction2.href'),
  },
  image: {
    src: getContent('about.hero2.image.src'),
    alt: getContent('about.hero2.image.alt'),
  },
};

// Stats data on About page *******************
export const statsAbout: StatsProps = {
  id: 'stats-on-about',
  hasBackground: true,
  items: getContentArray('about.stats.items'),
};

// FeaturesFour data on About page *******************
export const featuresFourAbout: FeaturesProps = {
  id: 'features-four-on-about',
  hasBackground: false,
  header: {
    title: getContent('about.featuresFour.header.title'),
    subtitle: getContent('about.featuresFour.header.subtitle'),
    tagline: getContent('about.featuresFour.header.tagline'),
  },
};

// FeaturesFour data on About page (Two) *******************
export const featuresFourAboutTwo: FeaturesProps = {
  id: 'features-four-on-about-two',
  hasBackground: false,
  header: {
    title: getContent('about.featuresFourTwo.header.title'),
    subtitle: getContent('about.featuresFourTwo.header.subtitle'),
  },
  isAfterContent: true,
  columns: 2,
  items: getContentArray('about.featuresFourTwo.items').map((item, index) => ({
    ...item,
    icon: [IconUser, IconBulb, IconThumbUp, IconAdjustments, IconHeartHandshake, IconHomeEco][index],
  })),
};

// Steps data on About page *******************
export const stepsAbout: StepsProps = {
  id: 'steps-on-about',
  hasBackground: true,
  isImageDisplayed: true,
  image: {
    src: getContent('about.steps.image.src'),
    alt: getContent('about.steps.image.alt'),
  },
  header: {
    title: getContent('about.steps.header.title'),
    subtitle: getContent('about.steps.header.subtitle'),
    tagline: getContent('about.steps.header.tagline'),
  },
  items: getContentArray('about.steps.items').map((item, index) => ({
    ...item,
    icon: [IconNumber1, IconNumber2, IconNumber3, IconNumber4, IconNumber5][index],
  })),
};

// Features3 data on About page *******************
export const features3About: FeaturesProps = {
  id: 'featuresThree-on-about',
  hasBackground: false,
  columns: 3,
  header: {
    title: getContent('about.features3.header.title'),
    subtitle: getContent('about.features3.header.subtitle'),
    tagline: getContent('about.features3.header.tagline'),
  },
  items: getContentArray('about.features3.items').map((item, index) => ({
    ...item,
    icon: [IconPalette, IconBook, IconFlame, IconPuzzle2, IconScale, IconCirclesRelation][index],
  })),
};

// Features data on About page *******************
export const featuresAbout: FeaturesProps = {
  id: 'features-on-about',
  hasBackground: false,
  columns: 3,
  header: {
    title: 'Our Services',
    subtitle:
      'We provide comprehensive guides and resources to help you experience the best of Portland.',
    tagline: 'What We Offer',
  },
  items: [
    {
      title: 'Dining Guides',
      description: 'Discover the best restaurants, cafes, and food experiences in Portland.',
      icon: IconFlame,
    },
    {
      title: 'Attraction Reviews',
      description: 'Explore Portland\'s top attractions, from historic sites to modern entertainment.',
      icon: IconMapPin,
    },
    {
      title: 'Local Events',
      description: 'Stay updated on Portland\'s vibrant calendar of events and festivals.',
      icon: IconClock,
    },
  ],
};

// Team data on About page *******************
export const teamAbout: TeamProps = {
  id: 'team-on-about',
  hasBackground: false,
  header: {
    title: 'Meet Our Team',
    subtitle:
      'Our team of local experts is dedicated to helping you discover the best of Portland.',
  },
  teams: [
    {
      name: 'Sarah Mitchell',
      occupation: 'Local Food Expert',
      image: {
        src: '/images/eventide-oyster.jpg',
        alt: 'Sarah Mitchell',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Michael Chen',
      occupation: 'Arts & Culture Guide',
      image: {
        src: '/images/arts-district.jpg',
        alt: 'Michael Chen',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Emma Thompson',
      occupation: 'Outdoor Adventure Specialist',
      image: {
        src: '/images/kayaking-casco.jpg',
        alt: 'Emma Thompson',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
  ],
};

// Testimonials2 data on About page *******************
export const testimonials2About: TestimonialsProps = {
  id: 'testimonialsTwo-on-about',
  hasBackground: true,
  header: {
    title: 'What Our Visitors Say',
    subtitle:
      'Hear from people who have used MaineRez to explore Portland and discover its hidden gems.',
  },
  testimonials: [
    {
      name: 'David Wilson',
      job: 'Travel Blogger',
      testimonial: `MaineRez helped me discover the authentic Portland experience. Their recommendations led me to amazing local spots I would have never found on my own.`,
      image: {
        src: '/images/portland-market.jpg',
        alt: 'David Wilson',
      },
      href: '/',
    },
    {
      name: 'Lisa Rodriguez',
      job: 'Food Critic',
      testimonial: `The dining guides are spot-on! I found incredible restaurants and local food experiences that made my visit to Portland truly memorable.`,
      image: {
        src: '/images/eventide-oyster.jpg',
        alt: 'Lisa Rodriguez',
      },
      href: '/',
    },
    {
      name: 'James Anderson',
      job: 'Photography Enthusiast',
      testimonial: `Thanks to MaineRez, I captured the most beautiful spots in Portland. Their local insights helped me find the perfect locations for stunning photos.`,
      image: {
        src: '/images/casco-bay.jpg',
        alt: 'James Anderson',
      },
      href: '/',
    },
  ],
};

// FAQS data on About page *******************
export const faqsAbout: FAQsProps = {
  id: 'faqs-on-about',
  hasBackground: false,
  header: {
    title: 'Frequently Asked Questions',
    subtitle:
      'Have questions about MaineRez or planning your visit to Portland? Here are some common questions and answers.',
    tagline: 'FAQS',
  },
  items: [
    {
      title: 'How do I use MaineRez to plan my visit?',
      description: `Browse our comprehensive guides for attractions, dining, and events. Use our interactive maps and recommendations to create your perfect Portland itinerary.`,
    },
    {
      title: 'Are your recommendations up to date?',
      description: `Yes, we regularly update our content to ensure you have the most current information about Portland\'s attractions, restaurants, and events.`,
    },
    {
      title: 'Can I contribute to MaineRez?',
      description: `We welcome contributions from locals and visitors alike! Share your experiences, photos, and recommendations to help others discover Portland.`,
    },
    {
      title: 'How can I support local businesses?',
      description: `Our guides highlight local businesses and sustainable tourism practices. We encourage visitors to shop local and support Portland\'s vibrant community.`,
    },
  ],
};

// Contact data on About page *******************
export const contactAbout: ContactProps = {
  hasBackground: true,
  header: {
    title: 'Get in Touch',
    subtitle: 'Have questions or suggestions? We\'d love to hear from you!',
    tagline: 'Contact',
  },
  content:
    'Whether you\'re planning a visit to Portland, looking to feature your business, or have feedback to share, our team is here to help. Reach out to us and we\'ll get back to you as soon as possible.',
  items: [
    {
      title: 'Email Us',
      description: ['For general inquiries', 'Portland@mainerez.com'],
      icon: IconMail,
    },
    {
      title: 'Contact',
      description: ['For business features', 'Portland@mainerez.com'],
      icon: IconPhoneCall,
    },
    {
      title: 'Working hours',
      description: ['Monday - Friday: 09:00 - 17:00', 'Saturday & Sunday: 10:00 - 15:00'],
      icon: IconClock,
    },
  ],
  form: {
    title: 'Send Us a Message',
    inputs: [
      {
        type: 'text',
        name: 'name',
        autocomplete: 'off',
        placeholder: 'Your name',
      },
      {
        type: 'email',
        name: 'email',
        autocomplete: 'on',
        placeholder: 'Your email address',
      },
    ],
    textarea: {
      cols: 30,
      rows: 5,
      name: 'textarea',
      placeholder: 'Tell us about your inquiry...',
    },
    btn: {
      title: 'Send Message',
      type: 'submit',
    },
  },
};
