import Image from 'next/image';
import dynamic from 'next/dynamic';

const AdSense = dynamic(() => import('../../../components/AdSense'), { ssr: false });

const beachesFeatures = [
  {
    title: 'Old Orchard Beach',
    description: "A classic Maine beach with a lively pier, amusements, and soft sand.",
    img: '/images/old-orchard-beach.jpg',
  },
  {
    title: 'Willard Beach',
    description: "A local favorite for families, with gentle waves and scenic views.",
    img: '/images/higgins-beach.jpg',
  },
  {
    title: 'Crescent Beach',
    description: "Enjoy a mile of sandy shoreline and picnic areas just south of Portland.",
    img: '/images/crescent-beach.jpg',
  },
  {
    title: 'Scarborough Beach',
    description: "Known for its surf and wide open spaces, perfect for sunbathing.",
    img: '/images/ferry-beach.jpg',
  },
  {
    title: 'Ferry Beach',
    description: "A peaceful spot for swimming, walking, and birdwatching.",
    img: '/images/ferry-beach.jpg',
  },
  {
    title: 'Higgins Beach',
    description: "Famous for its surfing and picturesque setting, great for all ages.",
    img: '/images/higgins-beach.jpg',
  },
];

export default function BeachesPage() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-4 py-12">
        <h1 className="mb-8 text-center text-4xl font-bold">Portland Beaches</h1>
        <AdSense 
          adSlot="beaches-top-ad"
          className="mb-8"
        />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {beachesFeatures.map((feature, idx) => (
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
          adSlot="beaches-bottom-ad"
          className="mt-8"
        />
      </section>
    </>
  );
} 