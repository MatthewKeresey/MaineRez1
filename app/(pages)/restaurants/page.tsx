import Image from 'next/image';
import dynamic from 'next/dynamic';

const AdSense = dynamic(() => import('../../../components/AdSense'), { ssr: false });

const restaurantsFeatures = [
  {
    title: 'Eventide Oyster Co.',
    description: "Famous for its fresh oysters and creative seafood dishes in a lively setting.",
    img: '/images/MaineRez1.png',
  },
  {
    title: 'Fore Street',
    description: "Award-winning wood-fired cuisine with a focus on local ingredients.",
    img: '/images/MaineRez1.png',
  },
  {
    title: 'Central Provisions',
    description: "A small plates restaurant known for inventive flavors and a vibrant atmosphere.",
    img: '/images/MaineRez1.png',
  },
  {
    title: 'Duckfat',
    description: "Beloved for its hand-cut fries, paninis, and house sodas.",
    img: '/images/MaineRez1.png',
  },
  {
    title: 'The Honey Paw',
    description: "A creative noodle bar offering Asian-inspired dishes with a Maine twist.",
    img: '/images/MaineRez1.png',
  },
  {
    title: 'Boda',
    description: "Thai street food and tapas in a cozy, welcoming space.",
    img: '/images/MaineRez1.png',
  },
];

export default function RestaurantsPage() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-4 py-12">
        <h1 className="mb-8 text-center text-4xl font-bold">Portland Restaurants</h1>
        <AdSense 
          adSlot="restaurant-top-ad"
          className="mb-8"
        />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {restaurantsFeatures.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <Image src={feature.img} alt={feature.title} width={120} height={120} className="mb-4 rounded-full" />
              <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        <AdSense 
          adSlot="restaurant-bottom-ad"
          className="mt-8"
        />
      </section>
    </>
  );
} 