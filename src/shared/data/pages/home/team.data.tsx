import React from 'react';
import { IconBrandLinkedin, IconBrandTwitter } from '@tabler/icons-react';
import { TeamProps } from '~/shared/types';
import { getContent, getContentObject } from '~/shared/content/content-helper';

const teamContent = getContentObject('home.team.members');

export const teamHome: TeamProps = {
  id: 'team-on-home',
  hasBackground: false,
  header: {
    title: getContent('home.team.title'),
    subtitle: getContent('home.team.subtitle'),
    tagline: getContent('home.team.tagline'),
  },
  teams: [
    {
      name: teamContent.sarah.name,
      occupation: teamContent.sarah.occupation,
      image: {
        src: '/images/team/food-expert.jpg',
        alt: teamContent.sarah.name,
      },
      items: [
        {
          title: getContent('common.social.learnMore'),
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: getContent('common.social.follow'),
          icon: IconBrandTwitter,
          href: '#',
        },
      ],
    },
    {
      name: teamContent.michael.name,
      occupation: teamContent.michael.occupation,
      image: {
        src: '/images/team/arts-expert.jpg',
        alt: teamContent.michael.name,
      },
      items: [
        {
          title: getContent('common.social.learnMore'),
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: getContent('common.social.follow'),
          icon: IconBrandTwitter,
          href: '#',
        },
      ],
    },
    {
      name: teamContent.emily.name,
      occupation: teamContent.emily.occupation,
      image: {
        src: '/images/team/outdoor-expert.jpg',
        alt: teamContent.emily.name,
      },
      items: [
        {
          title: getContent('common.social.learnMore'),
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: getContent('common.social.follow'),
          icon: IconBrandTwitter,
          href: '#',
        },
      ],
    },
  ],
}; 