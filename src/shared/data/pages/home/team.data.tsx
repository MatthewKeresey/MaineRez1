import React from 'react';
import { TeamProps } from '~/shared/types';
import content from '~/shared/content/content.json';

const teamSection = content.sections.team;

export const teamHome: TeamProps = {
  id: 'team-on-home',
  hasBackground: false,
  header: {
    title: teamSection.header.title,
    subtitle: teamSection.header.subtitle,
    tagline: teamSection.header.tagline,
  },
  teams: teamSection.teams.map(team => ({
    ...team,
    items: team.items?.map(item => ({
      ...item,
      icon: item.icon,
    })),
  })),
}; 