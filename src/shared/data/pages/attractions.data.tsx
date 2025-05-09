import { ContentProps } from '~/shared/types';
import { getContent, getContentArray } from '~/shared/content/content-helper';

export const attractionsContent: ContentProps = {
  id: 'attractions-grid',
  hasBackground: true,
  content: getContent('attractions.content'),
  items: getContentArray('attractions.items'),
  image: {
    src: getContent('attractions.image.src'),
    alt: getContent('attractions.image.alt'),
  },
  isReversed: false,
  isAfterContent: false,
}; 