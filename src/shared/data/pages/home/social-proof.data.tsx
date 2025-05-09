import React from 'react';
import { SocialProofProps } from '~/shared/types';
import content from '~/shared/content/content.json';

const socialProofSection = content.sections['socialProof'];

export const socialProofHome: SocialProofProps = {
  id: 'social-proof-on-home',
  hasBackground: socialProofSection.hasBackground,
  images: socialProofSection.images,
}; 