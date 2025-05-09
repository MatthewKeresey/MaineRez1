import React from 'react';
import { FeaturesProps, Icon } from '~/shared/types';
import content from '~/shared/content/content.json';

import { IconRocket, IconBulb, IconListCheck, IconArrowsRightLeft, IconComponents, IconBrandTailwind } from '@tabler/icons-react';

const iconMap: Record<string, Icon> = {
  rocket: IconRocket,
  bulb: IconBulb,
  listCheck: IconListCheck,
  arrowsRightLeft: IconArrowsRightLeft,
  components: IconComponents,
  tailwind: IconBrandTailwind,
};

const featuresSection = content.sections['features'];

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
    icon: iconMap[item.icon] || IconBulb,
  })),
}; 