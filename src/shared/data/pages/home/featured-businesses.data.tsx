import React from 'react';
import { IconCheck } from '@tabler/icons-react';
import { PricingProps } from '~/shared/types';
import { getContent, getContentObject } from '~/shared/content/content-helper';

const businessesContent = getContentObject('home.featuredBusinesses.items');

export const featuredBusinessesHome: PricingProps = {
  id: 'featured-businesses-on-home',
  hasBackground: true,
  header: {
    title: getContent('home.featuredBusinesses.title'),
    subtitle: getContent('home.featuredBusinesses.subtitle'),
    tagline: getContent('home.featuredBusinesses.tagline'),
  },
  prices: [
    {
      title: businessesContent.eventide.title,
      description: businessesContent.eventide.description,
      price: 0,
      period: '',
      items: businessesContent.eventide.features.map((feature: string) => ({
        description: feature,
        icon: IconCheck,
      })),
      callToAction: {
        text: getContent('common.buttons.learnMore'),
        href: '/restaurants/eventide',
      },
      hasRibbon: false,
    },
    {
      title: businessesContent.pma.title,
      description: businessesContent.pma.description,
      price: 0,
      period: '',
      items: businessesContent.pma.features.map((feature: string) => ({
        description: feature,
        icon: IconCheck,
      })),
      callToAction: {
        text: getContent('common.buttons.learnMore'),
        href: '/attractions/pma',
      },
      hasRibbon: false,
    },
    {
      title: businessesContent.kayak.title,
      description: businessesContent.kayak.description,
      price: 0,
      period: '',
      items: businessesContent.kayak.features.map((feature: string) => ({
        description: feature,
        icon: IconCheck,
      })),
      callToAction: {
        text: getContent('common.buttons.learnMore'),
        href: '/outdoors/kayaking',
      },
      hasRibbon: false,
    },
  ],
}; 