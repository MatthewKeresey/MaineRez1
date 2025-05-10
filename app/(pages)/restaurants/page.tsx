import Image from 'next/image';
import dynamic from 'next/dynamic';
import { getContent } from '~/shared/content/content-helper';

const AdSense = dynamic(() => import('../../../components/AdSense'), { ssr: false });

// Get all restaurants from content.json
const getRestaurants = () => {
  const restaurantsData = getContent('restaurants');
  return Object.entries(restaurantsData).map(([id, restaurant]: [string, any]) => ({
    title: restaurant.title,
    description: restaurant.description,
    img: `/images/restaurants/${id}.jpg`,
  }));
};

export default function RestaurantsPage() {
  const restaurantsFeatures = getRestaurants();
  const pageContent = getContent('pages.restaurants');

  return (
    <>
      <section className="mx-auto max-w-5xl px-4 py-12">
        <h1 className="mb-8 text-center text-4xl font-bold">{pageContent.title}</h1>
        <p className="mb-8 text-center text-lg text-gray-600">{pageContent.subtitle}</p>
        <AdSense 
          adSlot="restaurants-top-ad"
          className="mb-8"
        />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {restaurantsFeatures.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <Image 
                src={feature.img} 
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
          adSlot="restaurants-bottom-ad"
          className="mt-8"
        />
      </section>
    </>
  );
} 