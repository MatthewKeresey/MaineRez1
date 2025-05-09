import React from 'react';
import { SocialProofProps } from '~/shared/types';

export const socialProofHome: SocialProofProps = {
  id: 'socialProof-on-home',
  hasBackground: false,
  images: [
    {
      link: '/attractions',
      src: '/images/casco-bay.jpg',
      alt: 'Portland Harbor',
    },
    {
      link: '/dining',
      src: '/images/eventide-oyster.jpg',
      alt: 'Portland Food Scene',
    },
    {
      link: '/arts',
      src: '/images/arts-district.jpg',
      alt: 'Portland Arts District',
    },
    {
      link: '/outdoors',
      src: '/images/kayaking-casco.jpg',
      alt: 'Portland Outdoor Activities',
    },
  ],
}; 