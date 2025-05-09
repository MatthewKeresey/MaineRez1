import React from 'react';
import { SocialProofProps } from '~/shared/types';
import { getContent } from '~/shared/content/content-helper';

export const socialProofHome: SocialProofProps = {
  id: 'socialProof-on-home',
  hasBackground: false,
  images: [
    {
      link: '/attractions',
      src: '/images/casco-bay.jpg',
      alt: getContent('home.socialProof.images.harbor.alt'),
    },
    {
      link: '/dining',
      src: '/images/eventide-oyster.jpg',
      alt: getContent('home.socialProof.images.food.alt'),
    },
    {
      link: '/arts',
      src: '/images/arts-district.jpg',
      alt: getContent('home.socialProof.images.arts.alt'),
    },
    {
      link: '/outdoors',
      src: '/images/kayaking-casco.jpg',
      alt: getContent('home.socialProof.images.outdoors.alt'),
    },
  ],
}; 