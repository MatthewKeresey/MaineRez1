/** @jsxImportSource react */
import type { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getContent } from '~/shared/content/content-helper';

interface RestaurantItem {
  id: string;
  title: string;
  description: string;
  image?: {
    src: string;
    alt: string;
  };
  href: string;
}

// Get all restaurants from content.json
const getRestaurants = (): RestaurantItem[] => {
  const restaurantsData = getContent('restaurants');
  return Object.entries(restaurantsData).map(([id, restaurant]: [string, any]) => ({
    id,
    title: restaurant.title,
    description: restaurant.description,
    image: {
      src: `/images/restaurants/${id}.jpg`,
      alt: restaurant.title
    },
    href: `/restaurants/${id}`
  }));
};

const RestaurantsGrid: FC = () => {
  const restaurants = getRestaurants();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {restaurants.map((restaurant) => (
          <Link key={restaurant.id} href={restaurant.href} className="group">
            <div className="relative h-64 overflow-hidden rounded-lg shadow-lg transition-all duration-300 group-hover:shadow-xl">
              <Image
                src={restaurant.image?.src || '/images/restaurants/default.jpg'}
                alt={restaurant.image?.alt || restaurant.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                quality={75}
                priority={restaurants.indexOf(restaurant) < 3}
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
};

export default RestaurantsGrid; 