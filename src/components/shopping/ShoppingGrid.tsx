import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ShoppingItem {
  title: string;
  description: string;
  imageSrc: string;
  href: string;
}

const shoppingItems: ShoppingItem[] = [
  {
    title: 'Old Port Shopping',
    description: "Explore unique boutiques and local shops in Portland's historic district.",
    imageSrc: '/images/old-port.jpg',
    href: '/shopping/old-port',
  },
  {
    title: 'Local Crafts',
    description: "Discover handmade Maine crafts, artwork, and unique local products.",
    imageSrc: '/images/crafts.jpg',
    href: '/shopping/crafts',
  },
  {
    title: 'Portland Markets',
    description: "Visit local markets featuring fresh produce, artisanal foods, and crafts.",
    imageSrc: '/images/market.jpg',
    href: '/shopping/markets',
  },
  {
    title: 'Maine Mall',
    description: "South Portland's premier shopping destination with major retailers.",
    imageSrc: '/images/mall.jpg',
    href: '/shopping/maine-mall',
  },
  {
    title: 'Arts District Shopping',
    description: "Browse galleries and specialty shops in the Arts District.",
    imageSrc: '/images/arts-district.jpg',
    href: '/shopping/arts-district',
  },
  {
    title: 'Waterfront Shops',
    description: "Shop with ocean views in Portland's working waterfront district.",
    imageSrc: '/images/waterfront.jpg',
    href: '/shopping/waterfront',
  },
];

export default function ShoppingGrid() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {shoppingItems.map((item, index) => (
          <Link key={index} href={item.href} className="group">
            <div className="relative h-64 overflow-hidden rounded-lg shadow-lg transition-all duration-300 group-hover:shadow-xl">
              <Image
                src={item.imageSrc}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
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