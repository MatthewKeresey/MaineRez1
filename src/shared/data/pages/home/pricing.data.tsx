import React from 'react';
import { IconCheck } from '@tabler/icons-react';
import { PricingProps } from '~/shared/types';
import { getContent, getContentArray } from '~/shared/content/content-helper';

export const pricingHome: PricingProps = {
  id: 'pricing-on-home',
  hasBackground: true,
  header: {
    title: getContent('home.pricing.header.title'),
    subtitle: getContent('home.pricing.header.subtitle'),
    tagline: getContent('home.pricing.header.tagline'),
  },
  prices: getContentArray('home.pricing.prices').map(price => ({
    ...price,
    items: price.items.map(item => ({
      description: item,
      icon: IconCheck,
    })),
  })),
}; 