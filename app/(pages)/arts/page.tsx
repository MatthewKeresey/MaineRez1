import React from 'react';
import ArtsGrid from '~/components/arts/ArtsGrid';
import { getContent } from '~/shared/content/content-helper';

export default function ArtsPage() {
  const pageContent = getContent('pages.arts');

  return (
    <div>
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            {pageContent.title}
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            {pageContent.subtitle}
          </p>
        </div>
      </div>
      <ArtsGrid />
    </div>
  );
} 