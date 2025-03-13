import Image from 'next/image';

export default function Home() {
  const tours = [
    { id: 1, title: 'Мальдивы: Рай на Земле', price: '1200$', image: '/images/maldives.jpg' },
    { id: 2, title: 'Париж: Город Любви', price: '900$', image: '/images/paris.jpg' },
    { id: 3, title: 'Япония: Сакура и Культура', price: '1500$', image: '/images/japan.jpg' },
  ];

  return (
    <main className="min-h-screen bg-gray-900 p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Лучшие туры</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tours.map((tour) => (
          <div key={tour.id} className="bg-white/50 p-4 shadow-lg rounded-lg">
            <Image src={tour.image} alt={tour.title} width={300} height={200} className="rounded-md" />
            <h2 className="text-xl font-semibold mt-4 text-black">{tour.title}</h2>
            <p className="text-black">Цена: {tour.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
}