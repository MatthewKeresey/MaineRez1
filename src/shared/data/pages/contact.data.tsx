import { IconClock, IconHeadset, IconHelp, IconMapPin, IconMessages, IconPhoneCall, IconMail } from '@tabler/icons-react';
import { ContactProps, FeaturesProps } from '~/shared/types';
import { HeroProps } from '~/shared/types';

// Hero data on Contact page *******************
export const heroContact: HeroProps = {
  title: 'Contact Portland Guide',
  subtitle: (
    <>
      <span className="hidden md:inline">{`Have questions about visiting Portland? We're here to help!`}</span>{' '}
      {`Our local experts can assist you in planning your perfect Portland experience.`}
    </>
  ),
  tagline: 'Get in Touch',
};

// Contact data on Contact page *******************
export const contactPage: ContactProps = {
  hasBackground: true,
  header: {
    title: 'Contact Us',
    subtitle: 'Have questions about Portland? We\'re here to help!',
    tagline: 'Get in Touch',
  },
  content:
    'Whether you\'re planning a visit to Portland, looking for local business information, or have questions about our city, we\'d love to hear from you. Our team of local experts is ready to help make your Portland experience unforgettable.',
  items: [
    {
      title: 'Email Us',
      description: ['For visitor information', 'info@portlandguide.com'],
      icon: IconMail,
    },
    {
      title: 'Contact',
      description: ['For business inquiries', 'business@portlandguide.com'],
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
      placeholder: 'Tell us about your Portland questions or interests...',
    },
    btn: {
      title: 'Send Message',
      type: 'submit',
    },
  },
};

// Feature2 data on Contact page *******************
export const features2Contact: FeaturesProps = {
  columns: 3,
  header: {
    title: 'Visit Portland',
    subtitle: 'Need help planning your trip?',
  },
  items: [
    {
      title: 'Visitor Information',
      description: 'Find answers to common questions',
      icon: IconHelp,
      callToAction: {
        text: 'View Visitor Guide',
        href: '/guide',
      },
    },
    {
      title: 'Local Events',
      description: 'Discover upcoming events in Portland',
      icon: IconMessages,
      callToAction: {
        text: 'Browse Events',
        href: '/events',
      },
    },
    {
      title: 'Local Support',
      description: 'Get help from our local experts',
      icon: IconHeadset,
      callToAction: {
        text: 'Contact Us',
        href: '/contact',
      },
    },
  ],
};
