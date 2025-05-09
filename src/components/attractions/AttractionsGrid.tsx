/** @jsxImportSource react */
import type { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getContentObject } from '~/shared/content/content-helper';
import { useEffect, useState } from 'react';

interface AttractionItem {
  id: string;
  title: string;
  description: string;
  image?: {
    src: string;
    alt: string;
  };
  href: string;
}

const AttractionsGrid: FC = () => {
  const [attractions, setAttractions] = useState<AttractionItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAttractions = async () => {
      try {
        const attractionsData = await getContentObject('attractions');
        const attractionsList = Object.entries(attractionsData).map(([id, attraction]: [string, any]) => ({
          id,
          title: attraction.title,
          description: attraction.description,
          image: {
            src: `/images/attractions/${id}.jpg`,
            alt: attraction.title
          },
          href: `/attractions/${id}`
        }));
        setAttractions(attractionsList);
      } catch (error) {
        console.error('Error loading attractions:', error);
      } finally {
        setLoading(false);
      }
    };

    loadAttractions();
  }, []);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="animate-pulse">
              <div className="h-64 bg-gray-200 rounded-lg"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {attractions.map((attraction) => (
          <Link key={attraction.id} href={attraction.href} className="group">
            <div className="relative h-64 overflow-hidden rounded-lg shadow-lg transition-all duration-300 group-hover:shadow-xl">
              <Image
                src={attraction.image?.src || '/images/attractions/default.jpg'}
                alt={attraction.image?.alt || attraction.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                quality={75}
                priority={attractions.indexOf(attraction) < 3}
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
};

export default AttractionsGrid; 