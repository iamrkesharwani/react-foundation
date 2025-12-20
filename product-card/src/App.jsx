import Card from './Card';

function App() {
  const products = [
    {
      id: 1,
      name: 'Noise Pulse Go Smartwatch',
      description:
        '1.4 inch display, heart rate monitor, SpO2 tracking, and 7-day battery life.',
      price: 2499,
      rating: 4.2,
      ratingCount: 1245,
      image: 'https://picsum.photos/seed/smartwatch/600/400',
      badge: 'sale',
    },
    {
      id: 2,
      name: 'boAt Airdopes 281 Pro',
      description:
        'Wireless earbuds with ENx tech, low latency, and Type-C fast charging.',
      price: 1899,
      rating: 3.8,
      ratingCount: 678,
      image: 'https://picsum.photos/seed/earbuds/600/400',
      badge: 'new',
    },
    {
      id: 3,
      name: 'HP 15s Laptop (Ryzen 5)',
      description:
        '8GB RAM, 512GB SSD, FHD display for work and daily multitasking.',
      price: 48999,
      rating: 4.5,
      ratingCount: 432,
      image: 'https://picsum.photos/seed/laptop/600/400',
      badge: 'new',
    },
    {
      id: 4,
      name: 'Mi Power Bank 20000mAh',
      description:
        'Fast charging support with dual USB output and aluminum casing.',
      price: 2199,
      rating: 4.3,
      ratingCount: 1987,
      image: 'https://picsum.photos/seed/powerbank/600/400',
      badge: 'sale',
    },
    {
      id: 5,
      name: 'Samsung Galaxy M14 5G',
      description: '6000mAh battery, 50MP camera, and 5G connectivity.',
      price: 13499,
      rating: 4.0,
      ratingCount: 854,
      image: 'https://picsum.photos/seed/smartphone/600/400',
      badge: 'new',
    },
    {
      id: 6,
      name: 'Zebronics Mechanical Keyboard',
      description:
        'RGB mechanical keyboard with blue switches and anti-ghosting.',
      price: 2799,
      rating: 4.1,
      ratingCount: 512,
      image: 'https://picsum.photos/seed/keyboard/600/400',
      badge: 'sale',
    },
    {
      id: 7,
      name: 'Logitech B170 Wireless Mouse',
      description:
        '2.4GHz wireless mouse with long battery life and ergonomic design.',
      price: 695,
      rating: 4.4,
      ratingCount: 3042,
      image: 'https://picsum.photos/seed/mouse/600/400',
      badge: 'sale',
    },
    {
      id: 8,
      name: 'AmazonBasics Laptop Backpack',
      description:
        'Water-resistant backpack with padded laptop sleeve and organizer pockets.',
      price: 1399,
      rating: 4.2,
      ratingCount: 921,
      image: 'https://picsum.photos/seed/backpack/600/400',
      badge: 'sale',
    },
    {
      id: 9,
      name: 'Philips Trimmer BT3211',
      description:
        'Beard trimmer with 10 length settings and fast charge support.',
      price: 1999,
      rating: 3.9,
      ratingCount: 1143,
      image: 'https://picsum.photos/seed/trimmer/600/400',
      badge: 'new',
    },
    {
      id: 10,
      name: 'OnePlus Nord Buds 2',
      description:
        'Active noise cancellation and powerful bass with fast charging support.',
      price: 2999,
      rating: 4.6,
      ratingCount: 2674,
      image: 'https://picsum.photos/seed/nordbuds/600/400',
      badge: 'new',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-200 p-4">
      <h1 className="font-semibold text-3xl">Static Product Cards</h1>
      <div className="flex flex-wrap gap-2 mt-4 justify-around">
        {products.map((item) => (
          <Card
            key={item.id}
            image={item.image}
            name={item.name}
            description={item.description}
            price={item.price}
            rating={item.rating}
            ratingCount={item.ratingCount}
            badge={item.badge}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
