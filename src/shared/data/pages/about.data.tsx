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

// Hero2 data on About page *******************
export const hero2About: HeroProps = {
  title: 'Discover Portland, Maine with MaineRez',
  subtitle:
    'Welcome to MaineRez, your ultimate guide to exploring Portland, Maine. We\'re passionate about showcasing the best of our vibrant coastal city - from its world-class dining scene and historic landmarks to its stunning natural beauty and rich cultural heritage.',
  tagline: 'About MaineRez',
  callToAction: {
    text: 'Explore Portland',
    href: '/attractions',
    targetBlank: false,
  },
  callToAction2: {
    text: 'Contact us',
    href: '/contact',
  },
  image: {
    src: '/images/casco-bay.jpg',
    alt: 'Portland Harbor',
  },
};

// Stats data on About page *******************
export const statsAbout: StatsProps = {
  id: 'stats-on-about',
  hasBackground: true,
  items: [
    {
      title: 200,
      description: 'Local Businesses',
    },
    {
      title: 50,
      description: 'Restaurants',
    },
    {
      title: 20,
      description: 'Breweries',
    },
    {
      title: 1000,
      description: 'Happy Visitors',
    },
  ],
};

// FeaturesFour data on About page *******************
export const featuresFourAbout: FeaturesProps = {
  id: 'features-four-on-about',
  hasBackground: false,
  header: {
    title: 'Our Mission',
    subtitle:
      'At MaineRez, we\'re dedicated to helping visitors and locals alike discover the authentic Portland experience. We believe in showcasing the city\'s unique character, supporting local businesses, and providing valuable insights that make every visit memorable.',
    tagline: 'Mission and Values',
  },
};

// FeaturesFour data on About page (Two) *******************
export const featuresFourAboutTwo: FeaturesProps = {
  id: 'features-four-on-about-two',
  hasBackground: false,
  header: {
    title: 'Our Values',
    subtitle: 'We\'re committed to promoting Portland\'s best features while maintaining authenticity and local perspective.',
  },
  isAfterContent: true,
  columns: 2,
  items: [
    {
      title: 'Local Expertise',
      description: 'Our team consists of Portland natives and long-time residents who know the city inside and out.',
      icon: IconUser,
    },
    {
      title: 'Authentic Experiences',
      description: 'We focus on genuine local experiences that showcase Portland\'s true character and charm.',
      icon: IconBulb,
    },
    {
      title: 'Quality Content',
      description: 'Every recommendation and review is carefully curated to ensure the highest quality information.',
      icon: IconThumbUp,
    },
    {
      title: 'Community Focus',
      description: 'We prioritize supporting local businesses and promoting sustainable tourism practices.',
      icon: IconAdjustments,
    },
    {
      title: 'Visitor Support',
      description: 'We\'re dedicated to helping visitors make the most of their Portland experience.',
      icon: IconHeartHandshake,
    },
    {
      title: 'Sustainable Tourism',
      description: 'We promote responsible tourism that respects and preserves Portland\'s unique character.',
      icon: IconHomeEco,
    },
  ],
};

// Steps data on About page *******************
export const stepsAbout: StepsProps = {
  id: 'steps-on-about',
  hasBackground: true,
  isImageDisplayed: true,
  image: {
    src: '/images/old-port-shopping.jpg',
    alt: 'Portland History',
  },
  header: {
    title: 'Portland\'s Rich History',
    subtitle:
      'From its early days as a fishing village to its current status as a vibrant cultural hub, Portland has a fascinating story to tell.',
    tagline: 'City History',
  },
  items: [
    {
      title: 'Early Settlement',
      description:
        'Portland was first settled in 1632 as a fishing and trading village. The city\'s deep harbor and strategic location made it an important port for early American commerce.',
      icon: IconNumber1,
    },
    {
      title: 'Maritime Heritage',
      description:
        'Throughout the 18th and 19th centuries, Portland became a major shipping center, with a thriving shipbuilding industry and bustling waterfront.',
      icon: IconNumber2,
    },
    {
      title: 'The Great Fire',
      description:
        'In 1866, a devastating fire destroyed much of the city, leading to a period of rebuilding that shaped Portland\'s architectural character.',
      icon: IconNumber3,
    },
    {
      title: 'Modern Development',
      description:
        'The 20th century saw Portland evolve into a center for arts, culture, and culinary innovation, while preserving its historic charm.',
      icon: IconNumber4,
    },
    {
      title: 'Today\'s Portland',
      description:
        'Modern Portland is a vibrant city that balances historic preservation with contemporary innovation, making it one of America\'s most beloved coastal destinations.',
      icon: IconNumber5,
    },
  ],
};

// Features3 data on About page *******************
export const features3About: FeaturesProps = {
  id: 'featuresThree-on-about',
  hasBackground: false,
  columns: 3,
  header: {
    title: 'What Makes Portland Special',
    subtitle:
      'Portland\'s unique character comes from its perfect blend of coastal charm, urban sophistication, and authentic local culture.',
    tagline: 'City Highlights',
  },
  items: [
    {
      title: 'Culinary Excellence',
      description: 'Home to award-winning restaurants and innovative chefs, Portland is a food lover\'s paradise.',
      icon: IconFlame,
    },
    {
      title: 'Arts & Culture',
      description: 'From the Portland Museum of Art to local galleries and theaters, the city celebrates creativity in all forms.',
      icon: IconPalette,
    },
    {
      title: 'Natural Beauty',
      description: 'Stunning coastal views, historic lighthouses, and beautiful parks make Portland a feast for the eyes.',
      icon: IconHomeEco,
    },
  ],
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
