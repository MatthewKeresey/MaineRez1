import React from 'react';
import { IconCheck } from '@tabler/icons-react';
import { PricingProps } from '~/shared/types';

export const pricingHome: PricingProps = {
  id: 'pricing-on-home',
  hasBackground: true,
  header: {
    title: 'Featured Local Businesses',
    subtitle: 'Discover some of Portland\'s finest establishments',
    tagline: 'Local Favorites',
  },
  prices: [
    {
      title: 'Eventide Oyster Co.',
      description: 'Award-winning seafood restaurant known for innovative takes on New England classics',
      price: 0,
      period: '',
      items: [
        {
          description: 'Fresh Oysters',
          icon: IconCheck,
        },
        {
          description: 'Lobster Rolls',
          icon: IconCheck,
        },
        {
          description: 'Craft Cocktails',
          icon: IconCheck,
        },
      ],
      callToAction: {
        text: 'Visit Restaurant',
        href: '/restaurants/eventide',
      },
      hasRibbon: false,
    },
    {
      title: 'Portland Museum of Art',
      description: 'Maine\'s largest art museum featuring works from local and international artists',
      price: 0,
      period: '',
      items: [
        {
          description: 'Contemporary Art',
          icon: IconCheck,
        },
        {
          description: 'Historic Collection',
          icon: IconCheck,
        },
        {
          description: 'Special Exhibitions',
          icon: IconCheck,
        },
      ],
      callToAction: {
        text: 'View Exhibits',
        href: '/attractions/pma',
      },
      hasRibbon: false,
    },
    {
      title: 'Casco Bay Kayak Tours',
      description: 'Guided kayak tours exploring Portland\'s beautiful harbor and islands',
      price: 0,
      period: '',
      items: [
        {
          description: 'Guided Tours',
          icon: IconCheck,
        },
        {
          description: 'Equipment Provided',
          icon: IconCheck,
        },
        {
          description: 'Scenic Routes',
          icon: IconCheck,
        },
      ],
      callToAction: {
        text: 'Book Tour',
        href: '/outdoors/kayaking',
      },
      hasRibbon: false,
    },
  ],
}; 