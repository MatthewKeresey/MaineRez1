import React from 'react';
import { ContentProps } from '~/shared/types';
import { getContent } from '~/shared/content/content-helper';

export const contentHomeOne: ContentProps = {
  id: 'contentOne-on-home',
  hasBackground: true,
  header: {
    title: getContent('home.contentOne.title'),
    subtitle: getContent('home.contentOne.subtitle'),
    tagline: getContent('home.contentOne.tagline'),
  },
  content: getContent('home.contentOne.content'),
  image: {
    src: '/images/old-port.jpg',
    alt: 'Portland Old Port',
  },
  isReversed: false,
}; 