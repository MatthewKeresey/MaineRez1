import React from 'react';
import { IconArrowDown, IconClock, IconListCheck } from '@tabler/icons-react';
import { StepsProps } from '~/shared/types';

export const stepsHome: StepsProps = {
  id: 'steps-on-home',
  hasBackground: false,
  header: {
    title: 'Plan Your Perfect Portland Visit',
    subtitle: 'Follow these simple steps to make the most of your trip',
    tagline: 'Getting Started',
  },
  items: [
    {
      title: 'Choose Your Dates',
      description:
        'Portland offers unique experiences in every season. Summer brings festivals and outdoor activities, while fall showcases stunning foliage and harvest events.',
      icon: IconClock,
    },
    {
      title: 'Book Your Stay',
      description:
        'From waterfront hotels to charming B&Bs, Portland offers accommodations for every style and budget. Book early during peak seasons.',
      icon: IconListCheck,
    },
    {
      title: 'Plan Your Activities',
      description:
        'Create your itinerary with our curated guides to dining, attractions, and events. Don\'t forget to leave room for spontaneous discoveries!',
      icon: IconArrowDown,
    },
  ],
  image: {
    src: '/images/portland-harbor.jpg',
    alt: 'Portland Harbor',
  },
}; 