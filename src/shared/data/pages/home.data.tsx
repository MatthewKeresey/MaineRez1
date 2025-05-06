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
} from '../../types';
import heroImg from '~/assets/images/hero.jpg';
import nextJsLogo from '~/assets/images/nextjs-logo.png';
import reactLogo from '~/assets/images/react-logo.png';
import tailwindCssLogo from '~/assets/images/tailwind-css-logo.png';
import typescriptLogo from '~/assets/images/typescript-logo.png';
import cameraFrontImg from '~/assets/images/camera-front.jpg';
import cameraBackImg from '~/assets/images/camera-back.jpg';
import gasImg from '~/assets/images/gas.jpg';

// Hero data on Home page *******************
export const heroHome: HeroProps = {
  title: (
    <>
      Welcome to <span className="hidden md:inline">Portland, Maine —</span> Where Coastal Charm Meets Culinary Excellence
    </>
  ),
  subtitle: (
    <>
      <span className="hidden md:inline">
        Nestled along the rocky shores of Casco Bay, Portland offers a perfect blend of small-town charm and big-city culture. From world-class seafood to stunning coastal views, discover why Portland is one of America&apos;s most beloved coastal destinations.
      </span>{' '}
      Experience the best of Maine&apos;s vibrant city — where every corner offers a story, every meal is memorable, and every visit leaves you dreaming of the next.
    </>
  ),
  callToAction: {
    text: 'Explore Portland',
    href: '/attractions',
    icon: IconMapPin,
  },
  callToAction2: {
    text: 'Book Now',
    href: '/book',
  },
  image: {
    src: heroImg,
    alt: 'Portland, Maine Harbor',
  },
};

// SocialProof data on Home page *******************
export const socialProofHome: SocialProofProps = {
  id: 'socialProof-on-home',
  hasBackground: false,
  images: [
    {
      link: '/attractions',
      src: '/images/portland-lighthouse.jpg',
      alt: 'Portland Head Light',
    },
    {
      link: '/dining',
      src: '/images/portland-food.jpg',
      alt: 'Portland Food Scene',
    },
    {
      link: '/arts',
      src: '/images/portland-arts.jpg',
      alt: 'Portland Arts District',
    },
    {
      link: '/outdoors',
      src: '/images/portland-outdoors.jpg',
      alt: 'Portland Outdoor Activities',
    },
  ],
};

// Features data on Home page *******************
export const featuresHome: FeaturesProps = {
  id: 'features-on-home',
  hasBackground: false,
  columns: 3,
  header: {
    title: (
      <>
        Discover <span className="whitespace-nowrap">Portland, Maine</span>
      </>
    ),
    subtitle:
      "Experience the perfect blend of coastal charm and urban sophistication. From historic lighthouses to award-winning restaurants, Portland offers unforgettable experiences for every visitor.",
    tagline: 'Why Visit Portland',
  },
  items: [
    {
      title: 'Historic Waterfront',
      description:
        'Explore the working waterfront of the Old Port, where lobster boats and fishing vessels share the harbor with luxury yachts. The historic cobblestone streets are lined with unique shops and restaurants.',
      icon: IconBrandTailwind,
      callToAction: {
        text: 'Explore the Harbor',
        href: '/waterfront',
      },
    },
    {
      title: 'Culinary Excellence',
      description:
        'Portland is a food lover&apos;s paradise, boasting more restaurants per capita than any other city in America. From fresh seafood to innovative farm-to-table cuisine, every meal is a celebration of local flavors.',
      icon: IconComponents,
      callToAction: {
        text: 'View Restaurants',
        href: '/dining',
      },
    },
    {
      title: 'Arts & Culture',
      description:
        'Immerse yourself in Portland&apos;s vibrant arts scene, from the Portland Museum of Art to local galleries and theaters. The city&apos;s creative spirit is evident in every neighborhood.',
      icon: IconListCheck,
      callToAction: {
        text: 'Discover Arts',
        href: '/arts',
      },
    },
    {
      title: 'Outdoor Adventures',
      description:
        'Whether you prefer kayaking in Casco Bay, hiking the Eastern Promenade, or exploring the nearby islands, Portland offers endless opportunities for outdoor recreation.',
      icon: IconRocket,
      callToAction: {
        text: 'Plan Activities',
        href: '/outdoors',
      },
    },
    {
      title: 'Craft Beer Scene',
      description:
        'Home to over 20 breweries, Portland is a craft beer destination. Sample unique brews at local favorites like Allagash, Bissell Brothers, and Rising Tide.',
      icon: IconArrowsRightLeft,
      callToAction: {
        text: 'Tour Breweries',
        href: '/breweries',
      },
    },
    {
      title: 'Shopping & Entertainment',
      description:
        'From boutique shops in the Old Port to the Maine Mall, Portland offers diverse shopping experiences. Enjoy live music, theater, and entertainment throughout the city.',
      icon: IconBulb,
      callToAction: {
        text: 'Shop Local',
        href: '/shopping',
      },
    },
  ],
};

// Content data on Home page *******************
export const contentHomeOne: ContentProps = {
  id: 'contentOne-on-home-one',
  hasBackground: true,
  header: {
    title: 'A Food Lover&apos;s Paradise',
    subtitle: 'Discover Portland&apos;s renowned culinary scene',
    tagline: 'Dining',
  },
  content: "Portland has earned its reputation as one of America&apos;s top food cities. From fresh seafood to craft breweries, every meal is an adventure waiting to be discovered.",
  items: [
    {
      title: 'World-Class Seafood',
      description:
        'Experience the freshest lobster rolls at Eventide Oyster Co., where delicate lobster meat meets a warm, buttery bun. Don&apos;t miss the famous clam chowder and fresh oysters.',
    },
    {
      title: 'Craft Breweries',
      description:
        'Portland is a beer lover&apos;s paradise with over 20 breweries. Visit Bissell Brothers, Allagash Brewing Company, and Austin Street Brewery for unique craft beers.',
    },
    {
      title: 'Farm-to-Table Dining',
      description:
        'Enjoy locally sourced ingredients at Fore Street, where wood-fired cuisine features the best of Maine&apos;s seasonal produce and meats.',
    },
  ],
  image: {
    src: cameraFrontImg,
    alt: 'Portland Dining Scene',
  },
  isReversed: false,
  isAfterContent: false,
};

// Content data on Home page *******************
export const contentHomeTwo: ContentProps = {
  id: 'contentOne-on-home-two',
  hasBackground: true,
  content:
    'Beyond its culinary scene, Portland offers endless opportunities for exploration and adventure. From historic landmarks to outdoor activities, there&apos;s something for everyone.',
  items: [
    {
      title: 'Historic Old Port',
    },
    {
      title: 'Eastern Promenade',
    },
    {
      title: 'Casco Bay Islands',
    },
    {
      title: 'Portland Museum of Art',
    },
    {
      title: 'Victoria Mansion',
    },
    {
      title: 'Willard Beach',
    },
  ],
  image: {
    src: cameraBackImg,
    alt: 'Portland Attractions',
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
    src: gasImg,
    alt: 'Steps image',
  },
  header: {
    title: 'Plan Your Perfect Portland Visit',
  },
  items: [
    {
      title: 'Choose Your Adventure',
      description: 'Select from top attractions, dining, and outdoor activities to build your ideal Portland itinerary.',
      icon: IconArrowDown,
    },
    {
      title: 'Book & Reserve',
      description: 'Reserve tables at renowned restaurants, book tours, and secure your stay with local partners.',
      icon: IconArrowDown,
    },
    {
      title: 'Experience Portland',
      description: 'Enjoy your visit with curated recommendations and insider tips from MaineRez.',
      icon: IconArrowDown,
    },
    {
      title: 'Share Your Story',
      description: 'Tag @MaineRez on social media to be featured and inspire future visitors!',
    },
  ],
};

// Testimonials data on Home page *******************
export const testimonialsHome: TestimonialsProps = {
  id: 'testimonials-on-home',
  hasBackground: true,
  header: {
    title: 'What visitors say about Portland',
    subtitle:
      'From first-time visitors to longtime residents, everyone has a story to share about their Portland experience. Here&apos;s what people are saying about our beautiful city.',
  },
  testimonials: [
    {
      name: 'Sarah Mitchell',
      job: 'Travel Blogger',
      testimonial: `Portland exceeded all my expectations! The food scene is incredible, and the waterfront views are breathtaking. I can&apos;t wait to come back and explore more of this charming city.`,
      image: {
        src: 'https://images.unsplash.com/photo-1619734086067-24bf8889ea7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Sarah Mitchell',
      },
      href: '/',
    },
    {
      name: 'Michael Chen',
      job: 'Food Critic',
      testimonial: `The culinary scene here is world-class. From the lobster rolls at Eventide to the innovative dishes at Fore Street, every meal was a revelation. Portland truly deserves its reputation as a foodie destination.`,
      image: {
        src: 'https://images.unsplash.com/photo-1565049786474-1dea82a8b995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Michael Chen',
      },
      href: '/',
    },
    {
      name: 'Emma Thompson',
      job: 'Local Artist',
      testimonial: `The creative energy in Portland is inspiring. Between the galleries, street art, and local craftspeople, there&apos;s always something new to discover. It&apos;s a city that celebrates creativity in all forms.`,
      image: {
        src: 'https://images.unsplash.com/photo-1659057106920-da022cfbc0cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Emma Thompson',
      },
      href: '/',
    },
    {
      name: 'David Wilson',
      job: 'Outdoor Enthusiast',
      testimonial: `The outdoor opportunities here are endless. I spent my days kayaking in the harbor and hiking the Eastern Promenade, then enjoyed amazing seafood dinners. Portland offers the perfect mix of adventure and relaxation.`,
      image: {
        src: 'https://images.unsplash.com/photo-1572417884940-c24659be6068?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'David Wilson',
      },
      href: '/',
    },
    {
      name: 'Lisa Rodriguez',
      job: 'Beer Enthusiast',
      testimonial: `As a craft beer lover, Portland is paradise. The variety and quality of local breweries is impressive, and the beer community is welcoming. Don&apos;t miss the brewery tours and tasting rooms!`,
      image: {
        src: 'https://images.unsplash.com/photo-1694287877106-ee22f764aef1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Lisa Rodriguez',
      },
      href: '/',
    },
    {
      name: 'James Anderson',
      job: 'History Buff',
      testimonial: `The historic architecture and maritime heritage make Portland fascinating to explore. The Old Port&apos;s cobblestone streets and working waterfront tell stories of the city&apos;s rich past.`,
      image: {
        src: 'https://images.unsplash.com/photo-1665984867752-6370ab5ae35e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'James Anderson',
      },
      href: '/',
    },
  ],
};

// FAQS data on Home page *******************
export const faqs2Home: FAQsProps = {
  id: 'faqsTwo-on-home',
  hasBackground: false,
  header: {
    title: 'Frequently Asked Questions',
    subtitle:
      'Planning your visit to Portland? Here are answers to some common questions about our city, from the best time to visit to local transportation options.',
    tagline: 'FAQS',
  },
  items: [
    {
      title: 'When is the best time to visit Portland?',
      description: `Portland is beautiful year-round, but summer (June-August) offers the best weather for outdoor activities. Fall brings stunning foliage, while winter offers cozy indoor experiences and fewer crowds. Spring is perfect for whale watching and early-season lobster.`,
    },
    {
      title: 'How do I get around Portland?',
      description: `Portland is very walkable, especially in the Old Port and Arts District. The city also offers public transportation, taxis, and rideshare services. For exploring the islands, ferries run regularly from the waterfront.`,
    },
    {
      title: 'What are the must-try foods in Portland?',
      description: `Don&apos;t miss the lobster rolls, fresh oysters, and clam chowder. Portland is also known for its craft breweries, artisanal coffee shops, and farm-to-table restaurants. The food scene is diverse and innovative.`,
    },
    {
      title: 'Are there good shopping options?',
      description: `Yes! The Old Port features unique boutiques and local crafts, while the Arts District offers galleries and specialty shops. The Maine Mall provides traditional retail options, and local markets showcase Maine-made products.`,
    },
    {
      title: 'What outdoor activities are available?',
      description: `Enjoy kayaking in Casco Bay, hiking the Eastern Promenade, exploring nearby islands, or relaxing at local beaches. The city also offers bike rentals and walking tours for exploring different neighborhoods.`,
    },
    {
      title: 'Is Portland family-friendly?',
      description: `Absolutely! Families can enjoy the Children&apos;s Museum, local parks, boat tours, and many restaurants welcome children. The city offers a perfect mix of educational and fun activities for all ages.`,
    },
  ],
};

// Pricing data on Home page *******************
export const pricingHome: PricingProps = {
  id: 'pricing-on-home',
  hasBackground: true,
  header: {
    title: 'Plan Your Portland Experience',
    subtitle: "Explore free and premium experiences, from self-guided tours to exclusive local packages. There's something for every traveler!",
  },
  prices: [
    {
      title: 'Self-Guided',
      price: 0,
      period: 'always free',
      items: [
        { description: 'Access to Portland guides & maps' },
        { description: 'Local event calendar' },
        { description: 'Dining & attractions directory' },
      ],
      callToAction: {
        targetBlank: false,
        text: 'Start Exploring',
        href: '/attractions',
      },
      hasRibbon: false,
    },
    {
      title: 'Insider Access',
      price: 29,
      period: 'per year',
      items: [
        { description: 'Exclusive discounts at local businesses' },
        { description: 'Priority event booking' },
        { description: 'Seasonal guides & tips' },
      ],
      callToAction: {
        targetBlank: false,
        text: 'Become an Insider',
        href: '/insider',
      },
      hasRibbon: true,
      ribbonTitle: 'Popular',
    },
    {
      title: 'Business Feature',
      price: 99,
      period: 'per year',
      items: [
        { description: 'Get your business featured on MaineRez' },
        { description: 'Custom listing & promotion' },
        { description: 'Direct contact for inquiries' },
      ],
      callToAction: {
        targetBlank: false,
        text: 'Feature My Business',
        href: '/contact',
      },
      hasRibbon: false,
    },
  ],
};

// Team data on Home page *******************
export const teamHome: TeamProps = {
  id: 'team-on-home',
  hasBackground: false,
  header: {
    title: 'Team Members',
    subtitle:
      'Our team is dedicated to providing you with the best possible experience in Portland, Maine.',
    // tagline: 'Team',
  },
  teams: [
    {
      name: 'Chef Emily Carter',
      occupation: 'Executive Chef, Portland Eats',
      image: {
        src: '/images/MaineRez1.png',
        alt: 'MaineRez Logo',
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
      name: 'Ava Thompson',
      occupation: 'Local Artist & Gallery Owner',
      image: {
        src: '/images/MaineRez1.png',
        alt: 'MaineRez Logo',
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
      name: 'Marcus Lee',
      occupation: 'Craft Brewer & Owner, Casco Bay Brewing',
      image: {
        src: '/images/MaineRez1.png',
        alt: 'MaineRez Logo',
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
      name: 'Sophie Bennett',
      occupation: 'Outdoor Guide & Adventure Blogger',
      image: {
        src: '/images/MaineRez1.png',
        alt: 'MaineRez Logo',
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

// Contact data on Home page *******************
export const contactHome: ContactProps = {
  hasBackground: true,
  header: {
    title: 'Get in Touch',
    subtitle: 'Want to be featured on our website or need more information?',
    tagline: 'Contact',
  },
  content:
    'Whether you\'re a local business looking to be featured, a visitor seeking more information, or a resident with questions about Portland, we\'d love to hear from you. Send us an email and we\'ll get back to you as soon as possible.',
  items: [
    {
      title: 'Email Us',
      description: ['For business features and inquiries', 'Portland@mainerez.com'],
      icon: IconMail,
    },
    {
      title: 'Contact',
      description: ['For general information', 'Portland@mainerez.com'],
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
      placeholder: 'Tell us about your business or inquiry...',
    },
    btn: {
      title: 'Send Message',
      type: 'submit',
    },
  },
};

// CallToAction data *******************
export const callToAction2Home: CallToActionProps = {
  title: 'Discover Portland',
  subtitle:
    'Experience the vibrant culture, stunning coastal views, and world-class dining that make Portland, Maine a must-visit destination.',
  callToAction: {
    text: 'Plan Your Visit',
    href: '/attractions',
    icon: IconDownload,
  },
  items: [
    {
      title: 'Local Attractions',
      description: 'Explore Portland\'s historic landmarks, art galleries, and scenic waterfront.',
      href: '/attractions',
    },
    {
      title: 'Dining Guide',
      description: 'Discover Portland\'s renowned restaurants, breweries, and food scene.',
      href: '/dining',
    },
    {
      title: 'Stay Updated',
      description: 'Get the latest news about events, festivals, and special offers.',
      form: {
        icon: IconMail,
        input: {
          type: 'email',
          name: 'email',
          autocomplete: 'email',
          placeholder: 'Enter your email address',
        },
        btn: {
          title: 'Subscribe',
          type: 'submit',
        },
      },
    },
  ],
};
