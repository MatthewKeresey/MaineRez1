import Image from 'next/image';

const diningFeatures = [
  {
    title: 'Seafood Delights',
    description: "Enjoy Portland's freshest lobster rolls, oysters, and more at local favorites.",
    img: '/images/MaineRez1.png',
  },
  {
    title: 'Farm-to-Table',
    description: "Experience seasonal menus crafted from Maine's best local produce.",
    img: '/images/MaineRez1.png',
  },
  {
    title: 'Craft Breweries',
    description: "Sample unique brews from Portland's vibrant craft beer scene.",
    img: '/images/MaineRez1.png',
  },
  {
    title: 'Coffee & Bakeries',
    description: "Start your day with artisanal coffee and fresh pastries from local bakeries.",
    img: '/images/MaineRez1.png',
  },
  {
    title: 'Fine Dining',
    description: "Indulge in award-winning cuisine at Portland's top restaurants.",
    img: '/images/MaineRez1.png',
  },
  {
    title: 'Family Friendly',
    description: "Discover welcoming spots perfect for families and groups of all sizes.",
    img: '/images/MaineRez1.png',
  },
];

export default function DiningPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="mb-8 text-center text-4xl font-bold">Portland Dining Highlights</h1>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        {diningFeatures.map((feature, idx) => (
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