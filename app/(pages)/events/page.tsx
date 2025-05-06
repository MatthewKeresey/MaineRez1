import Image from 'next/image';
import dynamic from 'next/dynamic';

const AdSense = dynamic(() => import('../../../components/AdSense'), { ssr: false });

const eventsFeatures = [
  {
    title: 'Portland Sea Dogs Games',
    description: "Catch a minor league baseball game at Hadlock Field.",
    img: '/images/events/sea-dogs.jpg',
  },
  {
    title: 'First Friday Art Walk',
    description: "Monthly celebration of local art, music, and culture.",
    img: '/images/events/art-walk.jpg',
  },
  {
    title: 'Old Port Festival',
    description: "Annual summer celebration with music, food, and entertainment.",
    img: '/images/events/old-port-fest.jpg',
  },
  {
    title: 'Maine Restaurant Week',
    description: "Special prix-fixe menus at Portland's best restaurants.",
    img: '/images/events/restaurant-week.jpg',
  },
  {
    title: 'Portland Jazz Festival',
    description: "World-class jazz performances across the city.",
    img: '/images/events/jazz-fest.jpg',
  },
  {
    title: 'Holiday Tree Lighting',
    description: "Annual celebration marking the start of the holiday season.",
    img: '/images/events/tree-lighting.jpg',
  },
];

export default function EventsPage() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-4 py-12">
        <h1 className="mb-8 text-center text-4xl font-bold">Portland Events</h1>
        <AdSense 
          adSlot="events-top-ad"
          className="mb-8"
        />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {eventsFeatures.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <Image src={feature.img} alt={feature.title} width={120} height={120} className="mb-4 rounded-full" />
              <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        <AdSense 
          adSlot="events-bottom-ad"
          className="mt-8"
        />
      </section>
    </>
  );
} 