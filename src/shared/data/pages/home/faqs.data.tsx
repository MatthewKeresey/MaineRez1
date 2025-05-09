import React from 'react';
import { FAQsProps } from '~/shared/types';
import content from '~/shared/content/content.json';

const faqsSection = content.sections.faqs;

export const faqsHome: FAQsProps = {
  id: 'faqs-on-home',
  hasBackground: false,
  header: {
    title: faqsSection.header.title,
    subtitle: faqsSection.header.subtitle,
    tagline: faqsSection.header.tagline,
  },
  items: faqsSection.items,
}; 