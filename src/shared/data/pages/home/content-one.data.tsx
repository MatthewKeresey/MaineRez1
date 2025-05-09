import React from 'react';
import { ContentProps } from '~/shared/types';
import content from '~/shared/content/content.json';

const contentOneSection = content.sections['contentOne'];

export const contentHomeOne: ContentProps = {
  id: 'contentOne-on-home-one',
  hasBackground: true,
  header: {
    title: contentOneSection.title,
    subtitle: contentOneSection.subtitle,
    tagline: contentOneSection.tagline,
  },
  content: contentOneSection.content,
  items: contentOneSection.items,
  image: contentOneSection.image,
  isReversed: false,
  isAfterContent: false,
}; 