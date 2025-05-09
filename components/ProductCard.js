import { useCart } from './CartContext';

export default function ProductCard({ product }) {
  const { cartItems, addToCart, removeFromCart } = useCart();
  const inCart = cartItems.some((item) => item.id === product.id);
  const disabled = product.quota === 0;

  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden w-full max-w-sm mx-auto hover:shadow-xl transition-shadow duration-300">
      <img
        src={product.image}
        alt={product.name}
        className="h-48 w-full object-cover"
      />
      <div className="p-4 sm:p-5">
        <h3 className="text-lg font-semibold mb-2 text-gray-800">{product.name}</h3>
        <p className="text-gray-700 mb-1">
          Harga:{' '}
          <span className="text-green-600 font-bold">
            Rp{product.price.toLocaleString()}
          </span>
        </p>
        <p className="text-sm text-gray-500 mb-3">Stok: {product.quota}</p>

        <button
          onClick={() =>
            inCart ? removeFromCart(product.id) : addToCart(product)
          }
          disabled={disabled}
          className={`w-full py-2 rounded-lg font-semibold transition duration-200 text-center
            ${disabled
              ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
              : inCart
              ? 'bg-red-500 hover:bg-red-600 text-white'
              : 'bg-blue-500 hover:bg-blue-600 text-white'
            }`}
        >
          {inCart ? 'Hapus dari Keranjang' : 'Tambah ke Keranjang'}
        </button>
      </div>
    </div>
  );
}
