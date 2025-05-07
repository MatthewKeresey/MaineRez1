import Image from 'next/image';
import dynamic from 'next/dynamic';

const AdSense = dynamic(() => import('../../../components/AdSense'), { ssr: false });

const attractionsFeatures = [
  {
    title: 'Portland Head Light',
    description: "Maine's most iconic lighthouse, offering stunning ocean views and history.",
    img: '/images/portland-head-light.jpg',
  },
  {
    title: 'Old Port District',
    description: "Cobblestone streets, unique shops, and vibrant nightlife in Portland's historic heart.",
    img: '/images/old-port-shopping.jpg',
  },
  {
    title: 'Eastern Promenade',
    description: "A scenic park with walking trails, picnic spots, and panoramic bay views.",
    img: '/images/eastern-promenade.jpg',
  },
  {
    title: 'Casco Bay Islands',
    description: "Take a ferry to explore charming islands, beaches, and local communities.",
    img: '/images/casco-bay.jpg',
  },
  {
    title: 'Portland Museum of Art',
    description: "Home to an impressive collection of American, European, and contemporary art.",
    img: '/images/portland-museum.jpg',
  },
  {
    title: 'Victoria Mansion',
    description: "A beautifully preserved 19th-century home with ornate interiors and guided tours.",
    img: '/images/victoria-mansion.jpg',
  },
];

export default function AttractionsPage() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-4 py-12">
        <h1 className="mb-8 text-center text-4xl font-bold">Portland Attractions</h1>
        <AdSense 
          adSlot="attractions-top-ad"
          className="mb-8"
        />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {attractionsFeatures.map((feature, idx) => (
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
          adSlot="attractions-bottom-ad"
          className="mt-8"
        />
      </section>
    </>
  );
} 