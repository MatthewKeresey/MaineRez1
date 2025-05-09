import React from 'react';
import { FeaturedBusinessesProps } from '~/shared/types';
import content from '~/shared/content/content.json';

const featuredBusinessesSection = content.sections['featuredBusinesses'];

export const featuredBusinessesHome: FeaturedBusinessesProps = {
  id: 'featured-businesses-on-home',
  hasBackground: false,
  header: {
    title: featuredBusinessesSection.header.title,
    subtitle: featuredBusinessesSection.header.subtitle,
    tagline: featuredBusinessesSection.header.tagline,
  },
  businesses: featuredBusinessesSection.businesses.map(business => ({
    ...business,
    callToAction: {
      ...business.callToAction,
      targetBlank: false,
    },
  })),
}; 