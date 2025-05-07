import React from 'react';
import { NextPage } from 'next';
import RestaurantsGrid from '~/components/restaurants/RestaurantsGrid';

const RestaurantsPage: NextPage = () => {
  return (
    <div>
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Portland Dining
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Experience Maine's culinary capital. From fresh seafood to farm-to-table restaurants,
            Portland's food scene is a feast for all senses.
          </p>
        </div>
      </div>
      <RestaurantsGrid />
    </div>
  );
};

export default RestaurantsPage; 