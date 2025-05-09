import React from 'react';
import {
  IconBrandTailwind,
  IconComponents,
  IconListCheck,
  IconRocket,
  IconArrowsRightLeft,
  IconBulb,
} from '@tabler/icons-react';
import { FeaturesProps } from '~/shared/types';

export const featuresHome: FeaturesProps = {
  id: 'features-on-home',
  hasBackground: false,
  columns: 3,
  header: {
    title: (
      <>
        Discover <span className="whitespace-nowrap">Portland, Maine</span>
      </>
    ),
    subtitle:
      "Experience the perfect blend of coastal charm and urban sophistication. From historic lighthouses to award-winning restaurants, Portland offers unforgettable experiences for every visitor.",
    tagline: 'Why Visit Portland',
  },
  items: [
    {
      title: 'Historic Waterfront',
      description:
        'Explore the working waterfront of the Old Port, where lobster boats and fishing vessels share the harbor with luxury yachts. The historic cobblestone streets are lined with unique shops and restaurants.',
      icon: IconBrandTailwind,
      callToAction: {
        text: 'Explore the Harbor',
        href: '/waterfront',
      },
    },
    {
      title: 'Culinary Excellence',
      description:
        'Portland is a food lover&apos;s paradise, boasting more restaurants per capita than any other city in America. From fresh seafood to innovative farm-to-table cuisine, every meal is a celebration of local flavors.',
      icon: IconComponents,
      callToAction: {
        text: 'View Restaurants',
        href: '/dining',
      },
    },
    {
      title: 'Arts & Culture',
      description:
        'Immerse yourself in Portland&apos;s vibrant arts scene, from the Portland Museum of Art to local galleries and theaters. The city&apos;s creative spirit is evident in every neighborhood.',
      icon: IconListCheck,
      callToAction: {
        text: 'Discover Arts',
        href: '/arts',
      },
    },
    {
      title: 'Outdoor Adventures',
      description:
        'Whether you prefer kayaking in Casco Bay, hiking the Eastern Promenade, or exploring the nearby islands, Portland offers endless opportunities for outdoor recreation.',
      icon: IconRocket,
      callToAction: {
        text: 'Plan Activities',
        href: '/outdoors',
      },
    },
    {
      title: 'Craft Beer Scene',
      description:
        'Home to over 20 breweries, Portland is a craft beer destination. Sample unique brews at local favorites like Allagash, Bissell Brothers, and Rising Tide.',
      icon: IconArrowsRightLeft,
      callToAction: {
        text: 'Tour Breweries',
        href: '/breweries',
      },
    },
    {
      title: 'Shopping & Entertainment',
      description:
        'From boutique shops in the Old Port to the Maine Mall, Portland offers diverse shopping experiences. Enjoy live music, theater, and entertainment throughout the city.',
      icon: IconBulb,
      callToAction: {
        text: 'Shop Local',
        href: '/shopping',
      },
    },
  ],
}; 