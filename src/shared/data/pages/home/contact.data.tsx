import React from 'react';
import { IconClock, IconMail, IconPhoneCall } from '@tabler/icons-react';
import { ContactProps } from '~/shared/types';

export const contactHome: ContactProps = {
  id: 'contact-on-home',
  hasBackground: true,
  header: {
    title: 'Get in Touch',
    subtitle: 'Have questions about Portland? We\'re here to help!',
    tagline: 'Contact Us',
  },
  content: 'Whether you\'re planning a visit to Portland, looking for local business information, or have questions about our city, we\'d love to hear from you. Our team of local experts is ready to help make your Portland experience unforgettable.',
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