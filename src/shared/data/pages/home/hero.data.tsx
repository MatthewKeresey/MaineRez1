import React from 'react';
import { HeroProps } from '~/shared/types';
import { getContent } from '~/shared/content/content-helper';

export const heroHome: HeroProps = {
  title: getContent('home.hero.title'),
  subtitle: getContent('home.hero.subtitle'),
  tagline: getContent('home.hero.tagline'),
  callToAction: {
    text: getContent('common.buttons.learnMore'),
    href: '/about',
  },
  callToAction2: {
    text: getContent('common.buttons.contact'),
    href: '/contact',
  },
  image: {
    src: '/images/casco-bay.jpg',
    alt: 'Portland Harbor',
  },
}; 