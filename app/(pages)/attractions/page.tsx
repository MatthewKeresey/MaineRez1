import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { getContent, getContentArray } from '~/shared/content/content-helper';

const AdSense = dynamic(() => import('../../../components/AdSense'), { ssr: false });

export default function AttractionsPage() {
  const attractionsFeatures = getContentArray('attractions.items');

  return (
    <>
      <section className="mx-auto max-w-5xl px-4 py-12">
        <h1 className="mb-8 text-center text-4xl font-bold">{getContent('attractions.content')}</h1>
        <AdSense 
          adSlot="attractions-top-ad"
          className="mb-8"
        />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {attractionsFeatures.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <Image 
                src={feature.image?.src || '/images/casco-bay.jpg'} 
                alt={feature.title} 
                width={120} 
                height={120} 
                className="mb-4 rounded-full"
                quality={75}
                priority={idx < 3}
              />
              <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        <AdSense 
          adSlot="attractions-bottom-ad"
          className="mt-8"
        />
      </section>
    </>
  );
} 