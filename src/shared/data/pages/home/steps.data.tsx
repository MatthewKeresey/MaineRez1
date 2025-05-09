import React from 'react';
import { StepsProps } from '~/shared/types';
import content from '~/shared/content/content.json';

const stepsSection = content.sections.steps;

export const stepsHome: StepsProps = {
  id: 'steps-on-home',
  hasBackground: false,
  header: {
    title: stepsSection.header.title,
  },
  items: stepsSection.items.map(item => ({
    ...item,
    icon: item.icon,
  })),
  image: stepsSection.image,
  isReversed: stepsSection.isReversed,
  isImageDisplayed: stepsSection.isImageDisplayed,
}; 