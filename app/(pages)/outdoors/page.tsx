import React from 'react';
import OutdoorsGrid from '~/components/outdoors/OutdoorsGrid';

export default function OutdoorsPage() {
  return (
    <div>
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Outdoor Activities
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Explore Portland&apos;s natural beauty, from kayaking in Casco Bay to hiking the Eastern Promenade.
            Adventure awaits in every corner of our coastal city.
          </p>
        </div>
      </div>
      <OutdoorsGrid />
    </div>
  );
} 