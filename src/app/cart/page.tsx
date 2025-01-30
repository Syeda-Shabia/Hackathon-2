// "use client"; // Mark this as a Client Component

// import Link from "next/link";
// import { useCart } from "@/context/CartContext";

// export default function CartPage() {
//   const { cart, removeFromCart, getTotalPrice } = useCart();

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-6">Cart</h1>
//       {cart.length === 0 ? (
//         <p>Your cart is empty!</p>
//       ) : (
//         <div>
//           {cart.map((product) => (
//             <div key={product._id} className="border-b py-4">
//               <h2 className="text-xl font-semibold">{product.name}</h2>
//               <img
//                 src={product.mainImage}
//                 alt={product.name}
//                 className="w-24 h-24 object-cover rounded-lg"
//               />
//               <p>Price: ${product.price}</p>
//               <p>Quantity: {product.quantity}</p>
//               <button
//                 onClick={() => removeFromCart(product._id)}
//                 className="mt-2 px-4 py-2 bg-red-500 text-white rounded-none hover:bg-red-600 transition-colors"
//               >
//                 Remove
//               </button>
//             </div>
//           ))}
//           <div className="mt-6">
//             <h3 className="text-2xl font-bold">Total: ${getTotalPrice()}</h3>
//           </div>
//         </div>
//       )}
//       {/* Checkout Button */}
//       <Link
//         href="/checkout"
//         className="mt-4 px-6 py-3 bg-[#2A254B] text-white rounded-none hover:bg-slate-50 hover:border-2 hover:border-[#2A254B] hover:text-[#2A254B] transition-colors inline-block"
//       >
//         Proceed to Checkout
//       </Link>
//     </div>
//   );
// }
"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity, getTotalPrice } = useCart();

  return (
    <div className="container h-auto mx-auto p-4 overflow-y-hidden">
      <h1 className="text-3xl font-[family-name:var(--font-clash-display)] font-bold mb-6">Cart</h1>
      {cart.length === 0 ? (
        <p className="font-[family-name:var(--font-satoshi-light)]">Your cart is empty!</p>
      ) : (
        <div>
          {cart.map((product) => (
            <div key={product._id} className="border-b py-4">
              <h2 className="text-xl font-semibold font-[family-name:var(--font-clash-display)]">{product.name}</h2>
              <img
                src={product.mainImage}
                alt={product.name}
                className="w-24 h-24 object-cover rounded-lg"
              />
              <p className="font-[family-name:var(--font-satoshi-light)]">Price: ${product.price}</p>
              <div className="flex items-center gap-2">
                <p className="font-[family-name:var(--font-satoshi-light)]">Quantity:</p>
                <button
                  onClick={() => decrementQuantity(product._id)}
                  className="px-2 py-1 font-[family-name:var(--font-satoshi-light)] bg-gray-200 rounded hover:bg-gray-300"
                >
                  -
                </button>
                <span>{product.quantity}</span>
                <button
                  onClick={() => incrementQuantity(product._id)}
                  className="px-2 py-1 font-[family-name:var(--font-satoshi-light)] bg-gray-200 rounded hover:bg-gray-300"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeFromCart(product._id)}
                className="mt-2 px-4 py-2 font-[family-name:var(--font-satoshi-light)] bg-red-500 text-white rounded-none hover:bg-red-600 transition-colors"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-6">
            <h3 className="text-2xl font-bold font-[family-name:var(--font-clash-display)]">Total: ${getTotalPrice()}</h3>
          </div>
        </div>
      )}
      <Link
        href="/checkout"
        className="mt-4 px-6 py-3 bg-[#2A254B] text-white font-[family-name:var(--font-satoshi-light)] rounded-none hover:bg-slate-50 hover:border-2 hover:border-[#2A254B] hover:text-[#2A254B] transition-colors inline-block"
      >
        Proceed to Checkout
      </Link>
    </div>
  );
}