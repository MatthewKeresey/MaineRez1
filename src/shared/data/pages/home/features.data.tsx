import React from 'react';
import { FeaturesProps } from '~/shared/types';
import content from '~/shared/content/content.json';

const featuresSection = content.sections.features;

export const featuresHome: FeaturesProps = {
  id: 'features-on-home',
  hasBackground: false,
  header: {
    title: featuresSection.title,
    subtitle: featuresSection.subtitle,
    tagline: featuresSection.tagline,
  },
  items: featuresSection.items.map(item => ({
    ...item,
    icon: item.icon,
  })),
}; 