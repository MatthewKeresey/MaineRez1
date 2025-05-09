import React from 'react';
import { StepsProps, Icon } from '~/shared/types';
import content from '~/shared/content/content.json';

import { IconArrowDown, IconArrowRight, IconCalendar, IconHome, IconMapPin } from '@tabler/icons-react';

const iconMap: Record<string, Icon> = {
  arrowDown: IconArrowDown,
  arrowRight: IconArrowRight,
  calendar: IconCalendar,
  home: IconHome,
  mapPin: IconMapPin,
};

const stepsSection = content.sections['steps'];

export const stepsHome: StepsProps = {
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