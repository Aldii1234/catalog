import ProductCard from '../../katalog-cart/components/ProductCard';
import CartIcon from '../../katalog-cart/components/CartIcon';

const products = [
  {
    id: 1,
    name: 'Sepatu Running Alpha',
    price: 250000,
    quota: 5,
    image: '/sepatu1.jpg',
  },
  {
    id: 2,
    name: 'Sepatu Kasual Street',
    price: 300000,
    quota: 0,
    image: '/sepatu2.jpg',
  },
  {
    id: 3,
    name: 'Sepatu Sneaker Hitam',
    price: 280000,
    quota: 4,
    image: '/sepatu4.jpg',
  },
  {
    id: 4,
    name: 'Sepatu Outdoor TrailX',
    price: 350000,
    quota: 2,
    image: '/sepatu5.jpg',
  },
  {
    id: 5,
    name: 'Sepatu Kulit Pria',
    price: 400000,
    quota: 6,
    image: '/sepatu6.jpg',
  },
  {
    id: 6,
    name: 'Sepatu Wanita Fashion',
    price: 270000,
    quota: 3,
    image: '/sepatu7.jpg',
  },
  {
    id: 7,
    name: 'Sepatu Sneakers Retro',
    price: 320000,
    quota: 7,
    image: 'https://images.stockx.com/images/Nike-Dunk-Low-Retro-White-Black-2021-Product.jpg',
  },
  {
    id: 8,
    name: 'Sepatu Training ProMax',
    price: 290000,
    quota: 5,
    image: '/sepatu8.jpg',
  },
  {
    id: 9,
    name: 'Sepatu Anak Lari Cepat',
    price: 180000,
    quota: 8,
    image: '/sepatu9.jpg',
  },
  {
    id: 10,
    name: 'Sepatu Safety Baja',
    price: 450000,
    quota: 1,
    image: '/sepatu3.jpg',
  },
];

export default function Home() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Katalog Sepatu</h1>
        <CartIcon />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
