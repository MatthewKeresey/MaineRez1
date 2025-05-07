import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface RestaurantItem {
  title: string;
  description: string;
  imageSrc: string;
  href: string;
}

const restaurants: RestaurantItem[] = [
  {
    title: 'Eventide Oyster Co.',
    description: "Famous for their brown butter lobster rolls and fresh oysters. A must-visit Portland dining destination.",
    imageSrc: '/images/eventide.jpg',
    href: '/restaurants/eventide',
  },
  {
    title: 'Fore Street',
    description: "Wood-fired cooking and farm-to-table cuisine in a rustic-elegant setting with harbor views.",
    imageSrc: '/images/fore-street.jpg',
    href: '/restaurants/fore-street',
  },
  {
    title: 'Allagash Brewing',
    description: "Renowned brewery offering tours, tastings, and a welcoming beer garden experience.",
    imageSrc: '/images/eventide.jpg',
    href: '/restaurants/allagash',
  },
  {
    title: 'Farm-to-Table Experience',
    description: "Portland's finest seasonal ingredients transformed into memorable dining experiences.",
    imageSrc: '/images/eventide.jpg',
    href: '/restaurants/farm-to-table',
  },
  {
    title: 'Old Port Dining',
    description: "Explore the historic district's diverse restaurant scene, from seafood shacks to fine dining.",
    imageSrc: '/images/old-port-shopping.jpg',
    href: '/restaurants/old-port',
  },
  {
    title: 'Local Food Scene',
    description: "Discover Portland's vibrant food markets, food trucks, and casual eateries.",
    imageSrc: '/images/portland-market.jpg',
    href: '/restaurants/local-food',
  },
];

export default function RestaurantsGrid() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {restaurants.map((restaurant, index) => (
          <Link key={index} href={restaurant.href} className="group">
            <div className="relative h-64 overflow-hidden rounded-lg shadow-lg transition-all duration-300 group-hover:shadow-xl">
              <Image
                src={restaurant.imageSrc}
                alt={restaurant.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                <div className="absolute bottom-0 p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {restaurant.title}
                  </h3>
                  <p className="text-sm text-gray-200">
                    {restaurant.description}
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