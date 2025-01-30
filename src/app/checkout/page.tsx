"use client"; // Mark this as a Client Component

import Image from "next/image";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function CheckoutPage() {
  const { cart, getTotalPrice } = useCart();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-[family-name:var(--font-clash-display)] font-bold mb-6">Checkout</h1>
      {cart.length === 0 ? (
        <p className="font-[family-name:var(--font-satoshi-light)] text-xl">Your basket is empty! <Link href="/products" className="text-violet-900 font-[family-name:var(--font-satoshi-light)] hover:underline">Visit our Products</Link></p>
      ) : (
        <div>
          <h2 className="text-2xl font-[family-name:var(--font-satoshi-light)] font-semibold mb-4">Order Summary</h2>
          {cart.map((product) => (
            <div key={product._id} className="border-b py-4">
              <Image
                src={product.mainImage}
                alt={product.name}
                width={100}
                height={100}
                className="object-cover rounded-lg"/>
              <h3 className="text-xl font-[family-name:var(--font-clash-display)] font-semibold">{product.name}</h3>
              <p className="font-[family-name:var(--font-satoshi-light)]">Price: ${product.price}</p>
              <p className="font-[family-name:var(--font-satoshi-light)]">Quantity: {product.quantity}</p>
            </div>
          ))}
          <div className="mt-6">
            <h3 className="text-2xl font-[family-name:var(--font-clash-display)] font-bold">Total: ${getTotalPrice()}</h3>
          </div>

          {/* Payment Form or Confirmation Button */}
          <div className="mt-6">
            <button
              onClick={() => alert("Payment processing not implemented yet.")}
              className="px-6 py-3 bg-[#2A254B] font-[family-name:var(--font-satoshi-light)] text-white rounded-none hover:bg-slate-50 hover:border-2 hover:border-[#2A254B] hover:text-[#2A254B] transition-colors"
            >
              Confirm and Pay
            </button>
          </div>
        </div>
      )}
    </div>
  );
}