import React from 'react';
import { ContentProps } from '~/shared/types';
import content from '~/shared/content/content.json';

const contentTwoSection = content.sections.contentTwo;

export const contentHomeTwo: ContentProps = {
  id: 'contentTwo-on-home',
  hasBackground: true,
  header: {
    title: contentTwoSection.title,
    subtitle: contentTwoSection.subtitle,
    tagline: contentTwoSection.tagline,
  },
  content: contentTwoSection.content,
  items: contentTwoSection.items,
  image: contentTwoSection.image,
  isReversed: true,
  isAfterContent: true,
}; 