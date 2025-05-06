import Image from 'next/image';

const beachesFeatures = [
  {
    title: 'Old Orchard Beach',
    description: "A classic Maine beach with a lively pier, amusements, and soft sand.",
    img: '/images/MaineRez1.png',
  },
  {
    title: 'Willard Beach',
    description: "A local favorite for families, with gentle waves and scenic views.",
    img: '/images/MaineRez1.png',
  },
  {
    title: 'Crescent Beach',
    description: "Enjoy a mile of sandy shoreline and picnic areas just south of Portland.",
    img: '/images/MaineRez1.png',
  },
  {
    title: 'Scarborough Beach',
    description: "Known for its surf and wide open spaces, perfect for sunbathing.",
    img: '/images/MaineRez1.png',
  },
  {
    title: 'Ferry Beach',
    description: "A peaceful spot for swimming, walking, and birdwatching.",
    img: '/images/MaineRez1.png',
  },
  {
    title: 'Higgins Beach',
    description: "Famous for its surfing and picturesque setting, great for all ages.",
    img: '/images/MaineRez1.png',
  },
];

export default function BeachesPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="mb-8 text-center text-4xl font-bold">Portland Area Beaches</h1>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        {beachesFeatures.map((feature, idx) => (
          <div key={idx} className="flex flex-col items-center text-center">
            <Image src={feature.img} alt={feature.title} width={120} height={120} className="mb-4 rounded-full" />
            <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 