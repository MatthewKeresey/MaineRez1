import React from 'react';
import { TeamProps, Icon } from '~/shared/types';
import content from '~/shared/content/content.json';

import { IconBrandLinkedin, IconBrandTwitter, IconMail } from '@tabler/icons-react';

export function getTeamHome(): TeamProps {
  const teamSection = content.sections['team'];
  if (!teamSection) {
    throw new Error("Missing 'team' section in content.json. Please check your JSON structure.");
  }
  const iconMap: Record<string, Icon> = {
    linkedin: IconBrandLinkedin,
    twitter: IconBrandTwitter,
    mail: IconMail,
  };

  return {
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
} 