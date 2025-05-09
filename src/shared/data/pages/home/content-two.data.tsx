import React from 'react';
import { ContentProps } from '~/shared/types';

export const contentHomeTwo: ContentProps = {
  id: 'contentOne-on-home-two',
  hasBackground: false,
  header: {
    title: 'Explore Portland\'s Rich History',
    subtitle: 'From lighthouses to cobblestone streets',
    tagline: 'History & Culture',
  },
  content: 'Portland\'s history is woven into its streets, buildings, and waterfront. Discover the stories that shaped this vibrant coastal city.',
  items: [
    {
      title: 'Historic Lighthouses',
      description:
        'Visit the iconic Portland Head Light, Maine\'s oldest lighthouse, and explore the maritime history that shaped the region.',
    },
    {
      title: 'Old Port District',
      description:
        'Wander through the cobblestone streets of the Old Port, where historic buildings house modern shops and restaurants.',
    },
    {
      title: 'Arts District',
      description:
        'Experience Portland\'s creative side in the Arts District, home to galleries, theaters, and the Portland Museum of Art.',
    },
  ],
  image: {
    src: '/images/portland-head-light.jpg',
    alt: 'Portland Head Light',
  },
}; 