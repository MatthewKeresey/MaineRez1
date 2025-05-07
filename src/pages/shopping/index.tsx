import React from 'react';
import { NextPage } from 'next';
import ShoppingGrid from '~/components/shopping/ShoppingGrid';

const ShoppingPage: NextPage = () => {
  return (
    <div>
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Shopping in Portland
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            From charming boutiques in the Old Port to local artisan markets,
            discover Portland's diverse shopping experiences.
          </p>
        </div>
      </div>
      <ShoppingGrid />
    </div>
  );
};

export default ShoppingPage; 