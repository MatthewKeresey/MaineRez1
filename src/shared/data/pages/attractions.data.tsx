import { ContentProps } from '~/shared/types';

export const attractionsContent: ContentProps = {
  id: 'attractions-grid',
  hasBackground: true,
  content: 'Discover Portlands Most Popular Attractions',
  items: [
    {
      title: 'Portland Head Light',
      description: 'Historic lighthouse with stunning ocean views',
    },
    {
      title: 'Old Port District',
      description: "Cobblestone streets, unique shops, and vibrant nightlife in Portlands historic heart.",
    },
    {
      title: 'Eastern Promenade',
      description: 'A scenic park with walking trails, picnic spots, and panoramic bay views.',
    },
    {
      title: 'Casco Bay Islands',
      description: 'Take a ferry to explore charming islands, beaches, and local communities.',
    },
    {
      title: 'Portland Museum of Art',
      description: 'Home to an impressive collection of American, European, and contemporary art.',
    },
    {
      title: 'Victoria Mansion',
      description: 'A beautifully preserved 19th-century home with ornate interiors and guided tours.',
    }
  ],
  image: {
    src: '/images/casco-bay.jpg',
    alt: 'Portland Attractions'
  },
  isReversed: false,
  isAfterContent: false,
}; 