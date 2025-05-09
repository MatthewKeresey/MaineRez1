import React from 'react';
import { FAQsProps } from '~/shared/types';
import content from '~/shared/content/content.json';

export function getFaqsHome(): FAQsProps {
  const faqsSection = content.sections['faqs'];
  if (!faqsSection) {
    throw new Error("Missing 'faqs' section in content.json. Please check your JSON structure.");
  }
  return {
    id: 'faqs-on-home',
    hasBackground: false,
    header: {
      title: faqsSection.header.title,
      subtitle: faqsSection.header.subtitle,
      tagline: faqsSection.header.tagline,
    },
    items: faqsSection.items,
  };
} 