import React from 'react';
import { IconCalendar, IconHome, IconMapPin } from '@tabler/icons-react';
import { StepsProps } from '~/shared/types';
import { getContent, getContentObject } from '~/shared/content/content-helper';

const stepsContent = getContentObject('home.steps.items');

export const stepsHome: StepsProps = {
  id: 'steps-on-home',
  hasBackground: false,
  header: {
    title: getContent('home.steps.title'),
    subtitle: getContent('home.steps.subtitle'),
    tagline: getContent('home.steps.tagline'),
  },
  items: [
    {
      title: stepsContent.dates.title,
      description: stepsContent.dates.description,
      icon: IconCalendar,
    },
    {
      title: stepsContent.stay.title,
      description: stepsContent.stay.description,
      icon: IconHome,
    },
    {
      title: stepsContent.activities.title,
      description: stepsContent.activities.description,
      icon: IconMapPin,
    },
  ],
  image: {
    src: '/images/portland-map.jpg',
    alt: 'Portland Map',
  },
}; 