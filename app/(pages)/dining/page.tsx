import Image from 'next/image';
import { getContent } from '~/shared/content/content-helper';

export default function DiningPage() {
  const pageContent = getContent('pages.restaurants');
  const diningFeatures = getContent('sections.contentOne.items');

  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="mb-8 text-center text-4xl font-bold">{pageContent.title}</h1>
      <p className="mb-8 text-center text-lg text-gray-600">{pageContent.subtitle}</p>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        {diningFeatures.map((feature: any, idx: number) => (
          <div key={idx} className="flex flex-col items-center text-center">
            <Image 
              src={`/images/dining/${feature.title.toLowerCase().replace(/\s+/g, '-')}.jpg`} 
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
    </section>
  );
} 