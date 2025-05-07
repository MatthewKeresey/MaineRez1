import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface OutdoorItem {
  title: string;
  description: string;
  imageSrc: string;
  href: string;
}

const outdoorItems: OutdoorItem[] = [
  {
    title: 'Kayaking Casco Bay',
    description: "Paddle through Portland's scenic harbor and explore the islands by kayak.",
    imageSrc: '/images/kayaking-casco.jpg',
    href: '/outdoors/kayaking',
  },
  {
    title: 'Eastern Promenade Trail',
    description: "A scenic 2.1-mile trail offering stunning views of Casco Bay and Portland's waterfront.",
    imageSrc: '/images/eastern-promenade.jpg',
    href: '/outdoors/eastern-prom',
  },
  {
    title: 'Island Hopping',
    description: "Take the ferry to explore Casco Bay's beautiful islands and beaches.",
    imageSrc: '/images/island-exploration.jpg',
    href: '/outdoors/islands',
  },
  {
    title: 'Hiking Trails',
    description: "Discover Portland's network of urban and coastal hiking trails.",
    imageSrc: '/images/hiking-trail.jpg',
    href: '/outdoors/hiking',
  },
  {
    title: 'Beach Activities',
    description: "Enjoy swimming, sunbathing, and beachcombing at Portland's scenic beaches.",
    imageSrc: '/images/kayaking-casco.jpg',
    href: '/outdoors/beaches',
  },
  {
    title: 'Harbor Tours',
    description: "Experience Portland from the water with scenic harbor and lighthouse tours.",
    imageSrc: '/images/casco-bay.jpg',
    href: '/outdoors/harbor-tours',
  },
];

export default function OutdoorsGrid() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {outdoorItems.map((item, index) => (
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