import React from 'react';
declare var require: any;
import { StepsProps, Icon } from '~/shared/types';
import content from '~/shared/content/content.json';

export function getStepsHome(): StepsProps {
  const stepsSection = content.sections['steps'];
  if (!stepsSection) {
    throw new Error("Missing 'steps' section in content.json. Please check your JSON structure.");
  }
  const { IconArrowDown, IconArrowRight, IconCalendar, IconHome, IconMapPin } = require('@tabler/icons-react');
  const iconMap: Record<string, Icon> = {
    arrowDown: IconArrowDown,
    arrowRight: IconArrowRight,
    calendar: IconCalendar,
    home: IconHome,
    mapPin: IconMapPin,
  };

  return {
    id: 'steps-on-home',
    hasBackground: false,
    header: {
      title: stepsSection.header.title,
    },
    items: stepsSection.items.map(item => ({
      ...item,
      icon: iconMap[item.icon] || IconArrowDown,
    })),
    image: stepsSection.image,
    isReversed: stepsSection.isReversed,
    isImageDisplayed: stepsSection.isImageDisplayed,
  };
} 