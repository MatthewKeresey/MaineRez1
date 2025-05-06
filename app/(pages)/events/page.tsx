import Image from 'next/image';

const eventsFeatures = [
  {
    title: "Portland Farmers' Market",
    description: "A beloved weekly event featuring local produce, flowers, and artisan goods.",
    img: '/images/MaineRez1.png',
  },
  {
    title: "Old Port Festival",
    description: "A lively summer street festival with music, food, and family fun.",
    img: '/images/MaineRez1.png',
  },
  {
    title: "Maine Lobster Festival",
    description: "Celebrate Maine's most famous seafood with tastings, contests, and entertainment.",
    img: '/images/MaineRez1.png',
  },
  {
    title: "First Friday Art Walk",
    description: "Explore Portland's vibrant arts scene with open galleries and street performances.",
    img: '/images/MaineRez1.png',
  },
  {
    title: "Portland Wine Week",
    description: "A week-long celebration of wine, food pairings, and special events at local venues.",
    img: '/images/MaineRez1.png',
  },
  {
    title: "Harvest on the Harbor",
    description: "A culinary festival showcasing Portland's best chefs, brewers, and food artisans.",
    img: '/images/MaineRez1.png',
  },
];

export default function EventsPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="mb-8 text-center text-4xl font-bold">Portland Events</h1>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        {eventsFeatures.map((feature, idx) => (
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