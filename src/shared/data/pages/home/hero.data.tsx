import React from 'react';
import { IconMapPin } from '@tabler/icons-react';
import { HeroProps } from '~/shared/types';

export const heroHome: HeroProps = {
  title: (
    <>
      Welcome to <span className="hidden md:inline">Portland, Maine —</span> Where Coastal Charm Meets Culinary Excellence
    </>
  ),
  subtitle: (
    <>
      <span className="hidden md:inline">
        Nestled along the rocky shores of Casco Bay, Portland offers a perfect blend of small-town charm and big-city culture. From world-class seafood to stunning coastal views, discover why Portland is one of Americas most beloved coastal destinations.
      </span>{' '}
      Experience the best of Maines vibrant city — where every corner offers a story, every meal is memorable, and every visit leaves you dreaming of the next.
    </>
  ),
  callToAction: {
    text: 'Explore Attractions',
    href: '/attractions',
    icon: IconMapPin,
  },
  callToAction2: {
    text: 'Find Restaurants',
    href: '/restaurants',
    icon: IconMapPin,
  },
  image: {
    src: '/images/casco-bay.jpg',
    alt: 'Portland, Maine Harbor',
  },
}; 