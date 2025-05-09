import React from 'react';

export const featuredBusinessesHome = {
  id: 'featuredBusinesses-on-home',
  hasBackground: false,
  header: {
    title: 'Featured Local Businesses',
    subtitle: 'Discover some of Portland\'s finest establishments',
    tagline: 'Local Favorites',
  },
  items: [
    {
      title: 'Eventide Oyster Co.',
      description: 'Award-winning seafood restaurant known for innovative takes on New England classics',
      features: ['Fresh Oysters', 'Lobster Rolls', 'Craft Cocktails'],
      callToAction: {
        text: 'Visit Restaurant',
        href: '/restaurants/eventide',
      },
      image: {
        src: '/images/eventide-oyster.jpg',
        alt: 'Eventide Oyster Co.',
      },
    },
    {
      title: 'Portland Museum of Art',
      description: 'Maine\'s largest art museum featuring works from local and international artists',
      features: ['Contemporary Art', 'Historic Collection', 'Special Exhibitions'],
      callToAction: {
        text: 'View Exhibits',
        href: '/attractions/pma',
      },
      image: {
        src: '/images/portland-museum.jpg',
        alt: 'Portland Museum of Art',
      },
    },
    {
      title: 'Casco Bay Kayak Tours',
      description: 'Guided kayak tours exploring Portland\'s beautiful harbor and islands',
      features: ['Guided Tours', 'Equipment Provided', 'Scenic Routes'],
      callToAction: {
        text: 'Book Tour',
        href: '/outdoors/kayaking',
      },
      image: {
        src: '/images/kayaking-casco.jpg',
        alt: 'Casco Bay Kayak Tours',
      },
    },
  ],
}; 