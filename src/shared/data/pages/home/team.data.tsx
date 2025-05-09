import React from 'react';
import { IconBrandLinkedin, IconBrandTwitter } from '@tabler/icons-react';
import { TeamProps } from '~/shared/types';

export const teamHome: TeamProps = {
  id: 'team-on-home',
  hasBackground: false,
  header: {
    title: 'Meet Our Local Experts',
    subtitle: 'Get to know the people behind Portland Guide',
    tagline: 'Our Team',
  },
  members: [
    {
      name: 'Sarah Johnson',
      occupation: 'Food & Dining Expert',
      image: {
        src: '/images/team/food-expert.jpg',
        alt: 'Sarah Johnson',
      },
      items: [
        {
          title: 'Learn more',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Follow',
          icon: IconBrandTwitter,
          href: '#',
        },
      ],
    },
    {
      name: 'Michael Chen',
      occupation: 'Arts & Culture Guide',
      image: {
        src: '/images/team/arts-expert.jpg',
        alt: 'Michael Chen',
      },
      items: [
        {
          title: 'Learn more',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Follow',
          icon: IconBrandTwitter,
          href: '#',
        },
      ],
    },
    {
      name: 'Emily Rodriguez',
      occupation: 'Outdoor Activities Specialist',
      image: {
        src: '/images/team/outdoor-expert.jpg',
        alt: 'Emily Rodriguez',
      },
      items: [
        {
          title: 'Learn more',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Follow',
          icon: IconBrandTwitter,
          href: '#',
        },
      ],
    },
  ],
}; 