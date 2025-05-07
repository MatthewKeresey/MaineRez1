import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface AttractionItem {
  title: string;
  description: string;
  imageSrc: string;
  href: string;
}

const attractions: AttractionItem[] = [
  {
    title: 'Portland Head Light',
    description: "Maine's most iconic lighthouse, offering stunning ocean views and history.",
    imageSrc: '/images/portland-head-light.jpg',
    href: '/attractions/portland-head-light',
  },
  {
    title: 'Old Port District',
    description: "Cobblestone streets, unique shops, and vibrant nightlife in Portland's historic heart.",
    imageSrc: '/images/old-port.jpg',
    href: '/attractions/old-port',
  },
  {
    title: 'Eastern Promenade',
    description: 'A scenic park with walking trails, picnic spots, and panoramic bay views.',
    imageSrc: '/images/eastern-promenade.jpg',
    href: '/attractions/eastern-promenade',
  },
  {
    title: 'Casco Bay Islands',
    description: 'Take a ferry to explore charming islands, beaches, and local communities.',
    imageSrc: '/images/casco-bay.jpg',
    href: '/attractions/casco-bay-islands',
  },
  {
    title: 'Portland Museum of Art',
    description: 'Home to an impressive collection of American, European, and contemporary art.',
    imageSrc: '/images/portland-museum.jpg',
    href: '/attractions/portland-museum',
  },
  {
    title: 'Victoria Mansion',
    description: 'A beautifully preserved 19th-century home with ornate interiors and guided tours.',
    imageSrc: '/images/victoria-mansion.jpg',
    href: '/attractions/victoria-mansion',
  },
];

export default function AttractionsGrid() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {attractions.map((attraction, index) => (
          <Link key={index} href={attraction.href} className="group">
            <div className="relative h-64 overflow-hidden rounded-lg shadow-lg transition-all duration-300 group-hover:shadow-xl">
              <Image
                src={attraction.imageSrc}
                alt={attraction.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                quality={75}
                priority={index < 3}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                <div className="absolute bottom-0 p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {attraction.title}
                  </h3>
                  <p className="text-sm text-gray-200">
                    {attraction.description}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 