import React from 'react';
import { NextPage } from 'next';
import ArtsGrid from '~/components/arts/ArtsGrid';

const ArtsPage: NextPage = () => {
  return (
    <div>
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Arts & Culture
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Discover Portland's vibrant arts scene, from world-class museums to local galleries,
            street art, and performing arts venues.
          </p>
        </div>
      </div>
      <ArtsGrid />
    </div>
  );
};

export default ArtsPage; 