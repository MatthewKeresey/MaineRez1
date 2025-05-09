import React from 'react';
import { HeroProps } from '~/shared/types';
import content from '~/shared/content/content.json';

const heroSection = content.sections.hero;

export const heroHome: HeroProps = {
  title: heroSection.title,
  subtitle: heroSection.subtitle,
  tagline: heroSection.tagline,
  callToAction: {
    text: heroSection.callToAction.text,
    href: heroSection.callToAction.href,
  },
  callToAction2: {
    text: heroSection.callToAction2.text,
    href: heroSection.callToAction2.href,
  },
}; 