import React from 'react';
import { FAQsProps } from '~/shared/types';

export const faqs2Home: FAQsProps = {
  id: 'faqsTwo-on-home',
  hasBackground: false,
  header: {
    title: 'Frequently Asked Questions',
    subtitle: 'Find answers to common questions about visiting Portland',
    tagline: 'FAQs',
  },
  items: [
    {
      title: 'What is the best time to visit Portland?',
      description: 'Portland is beautiful year-round, but the most popular time to visit is from June to October. Summer offers perfect weather for outdoor activities, while fall brings stunning foliage and harvest events.',
    },
    {
      title: 'How do I get around Portland?',
      description: 'Portland is very walkable, especially in the Old Port and Arts District. The city also has a reliable bus system, taxis, and rideshare services. Many attractions are within easy walking distance of downtown.',
    },
    {
      title: 'What are the must-visit attractions?',
      description: 'Don\'t miss the Portland Head Light, Old Port District, Portland Museum of Art, and the Eastern Promenade. The city\'s food scene is also a major attraction, with numerous award-winning restaurants.',
    },
    {
      title: 'Is Portland family-friendly?',
      description: 'Yes! Portland offers many family-friendly activities, including the Children\'s Museum, Maine Narrow Gauge Railroad, and various parks and beaches. Many restaurants are also welcoming to families.',
    },
  ],
}; 