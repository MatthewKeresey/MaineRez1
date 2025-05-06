import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandTwitter,
  IconChevronDown,
  IconRss,
} from '@tabler/icons-react';
import { AnnouncementProps, FooterProps, HeaderProps } from '../types';

// Announcement data
export const announcementData: AnnouncementProps = {
  title: 'Welcome to MaineRez',
  callToAction: {
    text: 'Explore Portland',
    href: '/attractions',
  },
  callToAction2: {
    text: 'Contact Us',
    href: '/contact',
  },
};

// Header data
export const headerData: HeaderProps = {
  links: [
    {
      label: 'Explore',
      icon: IconChevronDown,
      links: [
        {
          label: 'Beaches & Parks',
          href: '/beaches',
        },
        {
          label: 'Restaurants',
          href: '/restaurants',
        },
        {
          label: 'Attractions',
          href: '/attractions',
        },
        {
          label: 'Events',
          href: '/events',
        },
        {
          label: 'About Portland',
          href: '/about',
        },
        {
          label: 'Contact',
          href: '/contact',
        },
      ],
    },
    {
      label: 'Dining',
      href: '/dining',
    },
    {
      label: 'Book Now',
      href: '/book',
    },
  ],
  actions: [
    {
      text: 'Reserve',
      href: '/reserve',
      targetBlank: false,
    },
  ],
  isSticky: true,
  showToggleTheme: true,
  showRssFeed: false,
  position: 'right',
  logo: {
    src: '/images/MaineRez1.png',
    alt: 'MaineRez Logo',
  },
};

// Footer data
export const footerData: FooterProps = {
  title: 'MaineRez',
  links: [
    {
      label: 'Terms & Conditions',
      href: '/terms',
    },
    {
      label: 'Privacy Policy',
      href: '/privacy',
    },
  ],
  columns: [
    {
      title: 'Explore Portland',
      links: [
        {
          label: 'Beaches & Parks',
          href: '/beaches',
        },
        {
          label: 'Restaurants',
          href: '/restaurants',
        },
        {
          label: 'Local Attractions',
          href: '/attractions',
        },
        {
          label: 'Events Calendar',
          href: '/events',
        },
        {
          label: 'Shopping',
          href: '/shopping',
        },
        {
          label: 'Nightlife',
          href: '/nightlife',
        },
      ],
    },
    {
      title: 'Dining Guide',
      links: [
        {
          label: 'Seafood',
          href: '/dining/seafood',
        },
        {
          label: 'Breweries',
          href: '/dining/breweries',
        },
        {
          label: 'Coffee Shops',
          href: '/dining/coffee',
        },
        {
          label: 'Fine Dining',
          href: '/dining/fine-dining',
        },
      ],
    },
    {
      title: 'Local Info',
      links: [
        {
          label: 'Weather',
          href: '/weather',
        },
        {
          label: 'Transportation',
          href: '/transportation',
        },
        {
          label: 'Parking',
          href: '/parking',
        },
        {
          label: 'Maps',
          href: '/maps',
        },
      ],
    },
    {
      title: 'About Us',
      links: [
        {
          label: 'Our Story',
          href: '/about',
        },
        {
          label: 'Blog',
          href: '/blog',
        },
        {
          label: 'Careers',
          href: '/careers',
        },
        {
          label: 'Contact',
          href: '/contact',
        },
      ],
    },
  ],
  socials: [
    { label: 'Twitter', icon: IconBrandTwitter, href: '#' },
    { label: 'Instagram', icon: IconBrandInstagram, href: '#' },
    { label: 'Facebook', icon: IconBrandFacebook, href: '#' },
    { label: 'RSS', icon: IconRss, href: '#' },
  ],
  footNote: (
    <div className="text-sm text-center w-full">
      Want to be featured on this website? Please send us an email to <a href="mailto:Portland@mainerez.com" className="font-semibold text-slate-900 dark:text-gray-200 hover:text-blue-600 hover:underline dark:hover:text-blue-600">Portland@mainerez.com</a>
    </div>
  ),
};

// Footer2 data
export const footerData2: FooterProps = {
  links: [
    {
      label: 'Terms & Conditions',
      href: '/terms',
    },
    {
      label: 'Privacy Policy',
      href: '/privacy',
    },
  ],
  columns: [
    {
      title: 'Visit Us',
      texts: ['123 Old Port Way', 'Portland, ME 04101'],
    },
    {
      title: 'Contact',
      texts: ['Phone: (207) 555-0123', 'Email: Portland@mainerez.com'],
    },
    {
      title: 'Hours',
      texts: ['Open Daily: 9AM - 5PM', '24/7 Online Booking'],
    },
  ],
  socials: [
    { label: 'Twitter', icon: IconBrandTwitter, href: '#' },
    { label: 'Instagram', icon: IconBrandInstagram, href: '#' },
    { label: 'Facebook', icon: IconBrandFacebook, href: '#' },
    { label: 'RSS', icon: IconRss, href: '#' },
  ],
  footNote: (
    <div className="mr-4 rtl:mr-0 rtl:ml-4 text-sm">
      <span className="float-left rtl:float-right mr-1.5 rtl:mr-0 rtl:ml-1.5 h-5 w-5 rounded-sm bg-[url(/images/MaineRez1.png)] bg-cover md:-mt-0.5 md:h-6 md:w-6"></span>
      <span>
        Experience the best of Portland, Maine — from our famous seafood to stunning coastal views.
        <a
          className="font-semibold text-slate-900 dark:text-gray-200 hover:text-blue-600 hover:underline dark:hover:text-blue-600"
          href="/about"
        >
          {' '}
          Start Exploring
        </a>
      </span>
    </div>
  ),
};
