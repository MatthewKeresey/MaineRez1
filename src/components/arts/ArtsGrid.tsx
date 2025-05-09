"use client";
/** @jsxImportSource react */
import type { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getContentObject } from '~/shared/content/content-helper';
import { useEffect, useState } from 'react';

interface ArtVenue {
  id: string;
  title: string;
  description: string;
  image?: {
    src: string;
    alt: string;
  };
  href: string;
}

const ArtsGrid: FC = () => {
  const [venues, setVenues] = useState<ArtVenue[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadVenues = async () => {
      try {
        const artsData = await getContentObject('arts');
        const venuesList = Object.entries(artsData).map(([id, venue]: [string, any]) => ({
          id,
          title: venue.title,
          description: venue.description,
          image: {
            src: `/images/arts/${id}.jpg`,
            alt: venue.title
          },
          href: `/arts/${id}`
        }));
        setVenues(venuesList);
      } catch (error) {
        console.error('Error loading art venues:', error);
      } finally {
        setLoading(false);
      }
    };

    loadVenues();
  }, []);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(3)].map((_, index) => (
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
        {venues.map((venue) => (
          <Link key={venue.id} href={venue.href} className="group">
            <div className="relative h-64 overflow-hidden rounded-lg shadow-lg transition-all duration-300 group-hover:shadow-xl">
              <Image
                src={venue.image?.src || '/images/arts/default.jpg'}
                alt={venue.image?.alt || venue.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                quality={75}
                priority={venues.indexOf(venue) < 3}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                <div className="absolute bottom-0 p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {venue.title}
                  </h3>
                  <p className="text-sm text-gray-200">
                    {venue.description}
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

export default ArtsGrid; 