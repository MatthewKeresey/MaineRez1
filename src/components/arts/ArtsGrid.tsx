import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ArtItem {
  title: string;
  description: string;
  imageSrc: string;
  href: string;
}

const artItems: ArtItem[] = [
  {
    title: 'Arts District',
    description: "Portland's creative hub, featuring galleries, studios, and performance spaces.",
    imageSrc: '/images/arts-district.jpg',
    href: '/arts/district',
  },
  {
    title: 'Portland Stage',
    description: "Professional theater company presenting classic and contemporary productions.",
    imageSrc: '/images/portland-stage.jpg',
    href: '/arts/portland-stage',
  },
  {
    title: 'Local Galleries',
    description: "Explore diverse art galleries showcasing local and international artists.",
    imageSrc: '/images/local-gallery.jpg',
    href: '/arts/galleries',
  },
  {
    title: 'Street Art',
    description: "Vibrant murals and public art installations throughout the city.",
    imageSrc: '/images/street-art.jpg',
    href: '/arts/street-art',
  },
  {
    title: 'Portland Museum of Art',
    description: "Maine's largest and oldest public art institution, featuring an impressive collection.",
    imageSrc: '/images/portland-museum.jpg',
    href: '/arts/museum',
  },
  {
    title: 'Cultural Events',
    description: "Year-round festivals, exhibitions, and performances celebrating arts and culture.",
    imageSrc: '/images/arts-district.jpg',
    href: '/arts/events',
  },
];

export default function ArtsGrid() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {artItems.map((item, index) => (
          <Link key={index} href={item.href} className="group">
            <div className="relative h-64 overflow-hidden rounded-lg shadow-lg transition-all duration-300 group-hover:shadow-xl">
              <Image
                src={item.imageSrc}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                quality={75}
                priority={index < 3}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                <div className="absolute bottom-0 p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-200">
                    {item.description}
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