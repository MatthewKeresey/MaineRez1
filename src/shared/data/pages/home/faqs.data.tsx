import React from 'react';
import { FAQsProps } from '~/shared/types';
import { getContent, getContentObject } from '~/shared/content/content-helper';

const faqsContent = getContentObject('home.faqs.items');

export const faqs2Home: FAQsProps = {
  id: 'faqs-on-home',
  hasBackground: false,
  header: {
    title: getContent('home.faqs.title'),
    subtitle: getContent('home.faqs.subtitle'),
    tagline: getContent('home.faqs.tagline'),
  },
  items: [
    {
      title: faqsContent.bestTime.title,
      description: faqsContent.bestTime.description,
    },
    {
      title: faqsContent.transportation.title,
      description: faqsContent.transportation.description,
    },
    {
      title: faqsContent.attractions.title,
      description: faqsContent.attractions.description,
    },
    {
      title: faqsContent.family.title,
      description: faqsContent.family.description,
    },
  ],
}; 