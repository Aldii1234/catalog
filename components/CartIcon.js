import Link from 'next/link';
import { useCart } from './CartContext';

export default function CartIcon() {
  const { cartItems } = useCart();

  return (
    <Link href="/cart">
      <div className="fixed top-4 right-5 z-50 cursor-pointer">
        <div className="relative bg-white rounded-full shadow-lg p-4 hover:bg-blue-100 transition duration-300">
          <span className="text-2xl">🛒</span>
          {cartItems.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-semibold w-5 h-5 flex items-center justify-center rounded-full shadow-md">
              {cartItems.length}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
