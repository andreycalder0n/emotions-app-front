import CardTravel from '@common/CardTravel';

export default function Carrucel() {
  const cards = [
    {
      id: 1,
      title: 'Noruega',
      description: 'Paisajes Increíbles',
      bg: 'norway',
    },
    {
      id: 2,
      title: 'Noruega',
      description: 'Paisajes Increíbles',
      bg: 'norway',
    },
    {
      id: 3,
      title: 'Nueva York',
      description: 'La gran manzana',
      bg: 'new_york',
    },
    {
      id: 4,
      title: 'Chicago',
      description: 'Como en las películas',
      bg: "url('/img/chicago.jpg')",
    },
    {
      id: 5,
      title: 'Yosemite',
      description: 'Un descanso del mundo',
      bg: "url('/img/chicago.jpg')",
    },
    {
      id: 6,
      title: 'Noruega',
      description: 'Paisajes Increíbles',
      bg: 'norway',
    },
    {
      id: 7,
      title: 'Noruega',
      description: 'Paisajes Increíbles',
      bg: 'norway',
    },
    {
      id: 8,
      title: 'Noruega',
      description: 'Paisajes Increíbles',
      bg: 'norway',
    },
  ];

  return (
    <div className="px-2 md:px-20" id="recomendados">
      <p className="text-2xl font-semibold text-primary pb-2 mt-6 dark:text-white">Recomendados</p>
      <div className="w-auto h-80 items-center mt-1 overflow-x-auto overscroll-x-contain flex space-x-4 scrollbar">
        {cards.map((card) => {
          return <CardTravel card={card} key={`place-${card.id}`} />;
        })}
      </div>
    </div>
  );
}
