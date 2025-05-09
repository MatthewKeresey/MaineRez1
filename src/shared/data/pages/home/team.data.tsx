import React from 'react';
import { TeamProps, Icon } from '~/shared/types';
import content from '~/shared/content/content.json';

import { IconBrandLinkedin, IconBrandTwitter, IconMail } from '@tabler/icons-react';

const iconMap: Record<string, Icon> = {
  linkedin: IconBrandLinkedin,
  twitter: IconBrandTwitter,
  mail: IconMail,
};

const teamSection = content.sections['team'];

export const teamHome: TeamProps = {
  id: 'team-on-home',
  hasBackground: false,
  header: {
    title: teamSection.header.title,
    subtitle: teamSection.header.subtitle,
  },
  teams: teamSection.teams.map(team => ({
    ...team,
    items: team.items?.map(item => ({
      ...item,
      icon: iconMap[item.icon] || IconMail,
    })),
  })),
}; 