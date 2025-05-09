import React from 'react';
import { ContentProps } from '~/shared/types';
import { getContent } from '~/shared/content/content-helper';

export const contentHomeTwo: ContentProps = {
  id: 'contentTwo-on-home',
  hasBackground: true,
  header: {
    title: getContent('home.contentTwo.title'),
    subtitle: getContent('home.contentTwo.subtitle'),
    tagline: getContent('home.contentTwo.tagline'),
  },
  content: getContent('home.contentTwo.content'),
  image: {
    src: '/images/portland-head-light.jpg',
    alt: 'Portland Head Light',
  },
  isReversed: true,
}; 