import React from 'react';
import { IconCheck } from '@tabler/icons-react';
import { PricingProps, Price, Item } from '~/shared/types';
import { getContent, getContentArray } from '~/shared/content/content-helper';

interface PricingItem {
  description: string;
  icon: typeof IconCheck;
}

interface PricingPlan {
  title: string;
  subtitle: string;
  price: string;
  period: string;
  items: PricingItem[];
  callToAction: {
    text: string;
    href: string;
  };
  hasRibbon?: boolean;
  ribbonTitle?: string;
}

export const pricingHome: PricingProps = {
  id: 'pricing-on-home',
  hasBackground: true,
  header: {
    title: getContent('home.pricing.header.title'),
    subtitle: getContent('home.pricing.header.subtitle'),
    tagline: getContent('home.pricing.header.tagline'),
  },
  prices: getContentArray('home.pricing.prices').map((price: any): Price => ({
    ...price,
    price: typeof price.price === 'string' ? parseFloat(price.price.replace(/[^0-9.-]+/g, '')) : price.price,
    items: price.items.map((item: string): Item => ({
      description: item,
      icon: IconCheck,
    })),
  })),
}; 