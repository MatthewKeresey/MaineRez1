/** @jsxImportSource react */
import type { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getContentObject } from '~/shared/content/content-helper';
import { useEffect, useState } from 'react';

interface OutdoorLocation {
  id: string;
  title: string;
  description: string;
  image?: {
    src: string;
    alt: string;
  };
  href: string;
}

const OutdoorsGrid: FC = () => {
  const [locations, setLocations] = useState<OutdoorLocation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadLocations = async () => {
      try {
        const outdoorsData = await getContentObject('outdoors');
        const locationsList = Object.entries(outdoorsData).map(([id, location]: [string, any]) => ({
          id,
          title: location.title,
          description: location.description,
          image: {
            src: `/images/outdoors/${id}.jpg`,
            alt: location.title
          },
          href: `/outdoors/${id}`
        }));
        setLocations(locationsList);
      } catch (error) {
        console.error('Error loading outdoor locations:', error);
      } finally {
        setLoading(false);
      }
    };

    loadLocations();
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
        {locations.map((location) => (
          <Link key={location.id} href={location.href} className="group">
            <div className="relative h-64 overflow-hidden rounded-lg shadow-lg transition-all duration-300 group-hover:shadow-xl">
              <Image
                src={location.image?.src || '/images/outdoors/default.jpg'}
                alt={location.image?.alt || location.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                quality={75}
                priority={locations.indexOf(location) < 3}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                <div className="absolute bottom-0 p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {location.title}
                  </h3>
                  <p className="text-sm text-gray-200">
                    {location.description}
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

export default OutdoorsGrid; 