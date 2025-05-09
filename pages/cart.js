import { useCart } from '../components/CartContext';
import CartItem from '../components/CartItem';
import Link from 'next/link';

export default function CartPage() {
  const { cartItems } = useCart();
  const totalHarga = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">🛒 Keranjang Belanja</h1>

      {cartItems.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-600 mb-4">Keranjang kamu masih kosong.</p>
          <Link
            href="/"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md transition"
          >
            Kembali ke Katalog
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="grid gap-4">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="border-t pt-4 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-xl font-semibold text-gray-800">
              Total: <span className="text-green-600">Rp{totalHarga.toLocaleString()}</span>
            </p>
            <div className="mt-4 sm:mt-0">
              <Link
                href="/"
                className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 px-5 py-2 rounded-md mr-2 transition"
              >
                ➕ Tambah Produk
              </Link>
              <button
                className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-md transition"
                onClick={() => alert('Checkout berhasil! (dummy action)')}
              >
                ✅ Checkout
              </button>
            </div>
          </div>

          {/* Tombol Kembali ke Home */}
          <div className="text-center mt-8">
            <Link
              href="/"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md transition"
            >
               Kembali ke Katalog
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
