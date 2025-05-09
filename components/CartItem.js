import { useCart } from './CartContext';

export default function CartItem({ item }) {
  const { removeFromCart } = useCart();

  return (
    <div className="flex items-center bg-white shadow-md rounded-lg overflow-hidden p-4">
      <img
        src={item.image}
        alt={item.name}
        className="w-20 h-20 object-cover rounded-md mr-4"
      />
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
        <p className="text-gray-600">Harga: <span className="text-green-600 font-medium">Rp{item.price.toLocaleString()}</span></p>
      </div>
      <button
        onClick={() => removeFromCart(item.id)}
        className="ml-4 text-sm text-red-500 hover:text-red-600 font-semibold"
      >
        Hapus
      </button>
    </div>
  );
}
