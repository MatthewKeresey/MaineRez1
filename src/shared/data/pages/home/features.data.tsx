import React from 'react';
import { IconMapPin, IconPalette, IconKayak } from '@tabler/icons-react';
import { FeaturesProps } from '~/shared/types';
import { getContent, getContentObject } from '~/shared/content/content-helper';

const featuresContent = getContentObject('home.features.items');

export const featuresHome: FeaturesProps = {
  id: 'features-on-home',
  hasBackground: false,
  header: {
    title: getContent('home.features.title'),
    subtitle: getContent('home.features.subtitle'),
    tagline: getContent('home.features.tagline'),
  },
  items: [
    {
      title: featuresContent.food.title,
      description: featuresContent.food.description,
      icon: IconMapPin,
    },
    {
      title: featuresContent.culture.title,
      description: featuresContent.culture.description,
      icon: IconPalette,
    },
    {
      title: featuresContent.outdoors.title,
      description: featuresContent.outdoors.description,
      icon: IconKayak,
    },
  ],
  columns: 3,
  isImageDisplayed: true,
  image: {
    src: '/images/portland-harbor.jpg',
    alt: 'Portland Harbor',
  },
}; 