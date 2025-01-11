import Image from 'next/image';
import Link from 'next/link';

const ShoppingBasket = () => {
  return (
    <div className="bg-[#F9F9F9] min-h-screen p-6">
      {/* Mobile Layout */}
      <div className="block md:hidden">
        <h1 className="font-[family-name:var(--font-clash-display)] text-2xl text-[#2A254B] mb-6">Your shopping cart</h1>

        {/* Product One */}
        <div className="flex gap-4 mb-6">
          <div className="w-32 h-40 relative">
            {/* Image */}
            <Image src="/photos/Graystone-vase.png" width={133} height={166} alt="Graystone vase" layout="responsive" objectFit="cover" />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="font-[family-name:var(--font-clash-display)] text-lg text-[#2A254B]">Graystone vase</h2>
            <p className="font-[family-name:var(--font-satoshi-light)] text-sm text-[#2A254B]">A timeless ceramic vase with a tri color grey glaze.</p>
            <p className="font-[family-name:var(--font-satoshi-light)] text-base text-[#2A254B]">£85</p>
            <div className="flex justify-between items-center bg-[#F9F9F9] p-3 w-32">
              <span className="text-[#EBE8F4]">-</span>
              <span className="text-[#2A254B]">1</span>
              <span className="text-[#EBE8F4]">+</span>
            </div>
          </div>
        </div>

        {/* Product Two */}
        <div className="flex gap-4 mb-6">
          <div className="w-32 h-40 relative">
            {/* Image */}
            <Image src="/photos/White-vase.png" width={133} height={164} alt="Basic white vase" layout="responsive" objectFit="cover" />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="font-[family-name:var(--font-clash-display)] text-lg text-[#2A254B]">Basic white vase</h2>
            <p className="font-[family-name:var(--font-satoshi-light)] text-sm text-[#2A254B]">Beautiful and simple, this is one for the classics.</p>
            <p className="font-[family-name:var(--font-satoshi-light)] text-base text-[#2A254B]">£85</p>
            <div className="flex justify-between items-center bg-[#F9F9F9] p-3 w-32">
              <span className="text-[#EBE8F4]">-</span>
              <span className="text-[#2A254B]">1</span>
              <span className="text-[#EBE8F4]">+</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#EBE8F4] my-6"></div>

        {/* Pricing Information */}
        <div className="flex flex-col items-end gap-2">
          <div className="flex gap-4">
            <p className="font-[family-name:var(--font-clash-display)] text-lg text-[#4E4D93]">Subtotal</p>
            <p className="font-[family-name:var(--font-clash-display)] text-2xl text-[#2A254B]">£210</p>
          </div>
          <p className="font-[family-name:var(--font-satoshi-light)] text-sm text-[#4E4D93]">Taxes and shipping are calculated at checkout</p>
        </div>

        {/* Checkout Button */}
        <Link href="#" className="mt-6 bg-[#2A254B] text-white font-[family-name:var(--font-satoshi-light)] text-base py-4 px-8 block text-center">
          Go to checkout
        </Link>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block max-w-7xl mx-auto">
        <h1 className="font-[family-name:var(--font-clash-display)] text-4xl text-[#2A254B] mb-12">Your shopping cart</h1>

        {/* Table Header */}
        <div className="grid grid-cols-3 gap-8 mb-6">
          <p className="font-[family-name:var(--font-clash-display)] text-sm text-[#2A254B]">Product</p>
          <p className="font-[family-name:var(--font-clash-display)] text-sm text-[#2A254B] text-center">Quantity</p>
          <p className="font-[family-name:var(--font-clash-display)] text-sm text-[#2A254B] text-right">Total</p>
        </div>

        {/* Divider */}
        <div className="border-t border-[#EBE8F4] mb-6"></div>

        {/* Product One */}
        <div className="grid grid-cols-3 gap-8 items-center mb-6">
          <div className="flex gap-4">
            <div className="w-24 h-32 relative">
              {/* Image */}
              <Image src="/photos/Graystone-vase.png" alt="Graystone vase" width={109} height={134} layout="responsive" objectFit="cover" />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-[family-name:var(--font-clash-display)] text-lg text-[#2A254B]">Graystone vase</h2>
              <p className="font-[family-name:var(--font-satoshi-light)] text-sm text-[#2A254B]">A timeless ceramic vase with a tri color grey glaze.</p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex justify-between items-center bg-[#F9F9F9] p-3 w-32">
              <span className="text-[#EBE8F4]">-</span>
              <span className="text-[#2A254B]">1</span>
              <span className="text-[#EBE8F4]">+</span>
            </div>
          </div>
          <p className="font-[family-name:var(--font-satoshi-light)] text-lg text-[#2A254B] text-right">£85</p>
        </div>

        {/* Product Two */}
        <div className="grid grid-cols-3 gap-8 items-center mb-6">
          <div className="flex gap-4">
            <div className="w-24 h-32 relative">
              {/* Image */}
              <Image src="/photos/White-vase.png" alt="Basic white vase" width={109} height={134} layout="responsive" objectFit="cover" />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-[family-name:var(--font-clash-display)] text-lg text-[#2A254B]">Basic white vase</h2>
              <p className="font-[family-name:var(--font-satoshi-light)] text-sm text-[#2A254B]">Beautiful and simple, this is one for the classics.</p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex justify-between items-center bg-[#F9F9F9] p-3 w-32">
              <span className="text-[#EBE8F4]">-</span>
              <span className="text-[#2A254B]">1</span>
              <span className="text-[#EBE8F4]">+</span>
            </div>
          </div>
          <p className="font-[family-name:var(--font-satoshi-light)] text-lg text-[#2A254B] text-right">£85</p>
        </div>

        {/* Divider */}
        <div className="border-t border-[#EBE8F4] mb-6"></div>

        {/* Pricing Information */}
        <div className="flex flex-col items-end gap-2">
          <div className="flex gap-4">
            <p className="font-[family-name:var(--font-clash-display)] text-lg text-[#4E4D93]">Subtotal</p>
            <p className="font-[family-name:var(--font-clash-display)] text-2xl text-[#2A254B]">£210</p>
          </div>
          <p className="font-[family-name:var(--font-satoshi-light)] text-sm text-[#4E4D93]">Taxes and shipping are calculated at checkout</p>
        </div>

        {/* Checkout Button */}
        <Link href="#" className="mt-6 bg-[#2A254B] text-white font-[family-name:var(--font-satoshi-light)] text-base py-4 px-8 inline-block text-center">
          Go to checkout
        </Link>
      </div>
    </div>
  );
};

export default ShoppingBasket;
