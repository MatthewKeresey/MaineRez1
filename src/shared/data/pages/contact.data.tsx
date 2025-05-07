import { IconClock, IconHeadset, IconHelp, IconMapPin, IconMessages, IconPhoneCall, IconMail } from '@tabler/icons-react';
import { ContactProps, FeaturesProps } from '~/shared/types';
import { HeroProps } from '~/shared/types';

// Hero data on Contact page *******************
export const heroContact: HeroProps = {
  title: 'Get in touch with us',
  subtitle: (
    <>
      <span className="hidden md:inline">{`Thank you for considering us for your project! We're excited to hear from you.`}</span>{' '}
      {`Our team can assist you in building your dream website.`}
    </>
  ),
  tagline: 'Demo Contact Page',
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
    title: 'Support Center',
    subtitle: 'Looking for something in particular?',
  },
  items: [
    {
      title: 'Have a question?',
      description: 'See our frequently asked questions',
      icon: IconHelp,
      callToAction: {
        text: 'Go to FAQ page',
        href: '/faqs',
      },
    },
    {
      title: 'Chat with us',
      description: 'Live chat with our support team',
      icon: IconMessages,
      callToAction: {
        text: 'Write to us',
        href: '/',
      },
    },
    {
      title: 'Get help',
      description: 'Speak to our team today',
      icon: IconHeadset,
      callToAction: {
        text: 'Call us',
        href: '/',
      },
    },
  ],
};
