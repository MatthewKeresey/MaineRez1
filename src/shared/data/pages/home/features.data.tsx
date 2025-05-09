import React from 'react';
declare var require: any;
import { FeaturesProps, Icon } from '~/shared/types';
import content from '~/shared/content/content.json';

export function getFeaturesHome(): FeaturesProps {
  const featuresSection = content.sections['features'];
  if (!featuresSection) {
    throw new Error("Missing 'features' section in content.json. Please check your JSON structure.");
  }
  const { IconRocket, IconBulb, IconListCheck, IconArrowsRightLeft, IconComponents, IconBrandTailwind } = require('@tabler/icons-react');
  const iconMap: Record<string, Icon> = {
    rocket: IconRocket,
    bulb: IconBulb,
    listCheck: IconListCheck,
    arrowsRightLeft: IconArrowsRightLeft,
    components: IconComponents,
    tailwind: IconBrandTailwind,
  };

  return {
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
} 