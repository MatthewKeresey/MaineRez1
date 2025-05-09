import React from 'react';
import { ContentProps } from '~/shared/types';

export const contentHomeOne: ContentProps = {
  id: 'contentOne-on-home-one',
  hasBackground: true,
  header: {
    title: 'A Food Lovers Paradise',
    subtitle: 'Discover Portlands renowned culinary scene',
    tagline: 'Dining',
  },
  content: "Portland has earned its reputation as one of Americas top food cities. From fresh seafood to craft breweries, every meal is an adventure waiting to be discovered.",
  items: [
    {
      title: 'World-Class Seafood',
      description:
        'Experience the freshest lobster rolls at Eventide Oyster Co., where delicate lobster meat meets a warm, buttery bun. Dont miss the famous clam chowder and fresh oysters.',
    },
    {
      title: 'Craft Breweries',
      description:
        'Portland is a beer lovers paradise with over 20 breweries. Visit Bissell Brothers, Allagash Brewing Company, and Austin Street Brewery for unique craft beers.',
    },
    {
      title: 'Farm-to-Table Dining',
      description:
        'Enjoy locally sourced ingredients at Fore Street, where wood-fired cuisine features the best of Maines seasonal produce and meats.',
    },
  ],
  image: {
    src: '/images/eventide-oyster.jpg',
    alt: 'Portland Dining Scene',
  },
}; 