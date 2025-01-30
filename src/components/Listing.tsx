import Image from 'next/image';
import Link from 'next/link';

const Listing = () => {
  return (
    <div className="flex flex-col bg-[#F9F9F9] w-full min-h-screen">
      {/* Cover Section */}
      <div className="w-full relative">
        <Image
          src="/photos/cover.png" // Desktop cover image
          alt="Cover Image"
          height={209}
          width={1440}
          layout="responsive"
          objectFit="cover"
          className="hidden md:block" // Show only on desktop
          priority // Ensure the image loads first
        />
        <Image
          src="/photos/covermobile.png" // Mobile cover image
          alt="Cover Image"
          height={146}
          width={390}
          layout="responsive"
          objectFit="cover"
          className="block md:hidden" // Show only on mobile
          priority // Ensure the image loads first
        />
      </div>

      <div className="bg-white">
        {/* Desktop Layout */}
        <div className="hidden md:flex flex-row items-center justify-between p-6">
          {/* Filters */}
          <div className="flex flex-row gap-3">
            <button className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded">
              <span className="font-[family-name:var(--font-satoshi-light)]  text-dark-primary">Category</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6L8 10L12 6" stroke="#2A254B" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded">
              <span className="font-[family-name:var(--font-satoshi-light)]  text-dark-primary">Origin</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6L8 10L12 6" stroke="#2A254B" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded">
              <span className="font-[family-name:var(--font-satoshi-light)]  text-dark-primary">Price</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6L8 10L12 6" stroke="#2A254B" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded">
              <span className="font-[family-name:var(--font-satoshi-light)]  text-dark-primary">Material</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6L8 10L12 6" stroke="#2A254B" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Sorting */}
          <div className="flex flex-row items-center gap-4">
            <span className="font-[family-name:var(--font-satoshi-light)] ml-4 text-dark-primary">Sorting by:</span>
            <button className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded">
              <span className="font-[family-name:var(--font-satoshi-light)]  text-dark-primary">Date added</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6L8 10L12 6" stroke="#2A254B" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-row justify-center gap-2 px-4 py-2">
          <button className="flex items-center justify-center w-[90%] gap-2 px-8 py-4 bg-gray-50 rounded">
            <span className="font-[family-name:var(--font-satoshi-light)] mx-3 text-dark-primary">Filters</span>
            <span>
              <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 0L4 5L0 0H8Z" fill="#2A254B" />
              </svg>
            </span>           
          </button>
          <button className="flex items-center gap-2 justify-center w-[90%] px-8 py-4 bg-gray-50 rounded">
            <span className="font-[family-name:var(--font-satoshi-light)] mx-3 text-dark-primary">Sorting</span>
            <span>
              <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 0L4 5L0 0H8Z" fill="#2A254B" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* List 1 Products */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 px-6 py-12 md:px-20 lg:px-24">
        {/* Product Card 1 */}
        <div className="w-full">
          <div className="mb-4 overflow-hidden relative">
            <Image
              src="/photos/dandy-chair.png"
              alt="chair"
              objectFit="cover"
              objectPosition="center"
              width={305}
              height={357}
              className="w-full h-auto"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-xl md:text-2xl font-[family-name:var(--font-clash-display)] text-[#2A254B]">
              The Dandy chair
            </h4>
            <p className="text-lg md:text-xl font-[family-name:var(--font-satoshi-light)] text-[#2A254B]">£250</p>
          </div>
        </div>

        {/* Product Card 2 */}
        <div className="w-full">
          <div className="mb-4 overflow-hidden relative">
            <Image
              src="/photos/three-vases.png"
              alt="Vases"
              objectFit="cover"
              objectPosition="center"
              width={305}
              height={357}
              className="w-full h-auto"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-xl md:text-2xl font-[family-name:var(--font-clash-display)] text-[#2A254B]">
              Rustic Vase Set
            </h4>
            <p className="text-lg md:text-xl font-[family-name:var(--font-satoshi-light)] text-[#2A254B]">£155</p>
          </div>
        </div>

        {/* Product Card 3 */}
        <div className="w-full">
          <div className="mb-4 overflow-hidden relative">
            <Image
              src="/photos/silky-vase.png"
              alt="Vase"
              width={305}
              height={357}
              objectFit="cover"
              objectPosition="center"
              className="w-full h-auto"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-xl md:text-2xl font-[family-name:var(--font-clash-display)] text-[#2A254B]">
              The Silky Vase
            </h4>
            <p className="text-lg md:text-xl font-[family-name:var(--font-satoshi-light)] text-[#2A254B]">£125</p>
          </div>
        </div>

        {/* Product Card 4 */}
        <div className="w-full">
          <div className="mb-4 overflow-hidden relative">
            <Image
              src="/photos/lucy-lamp.png"
              alt="Lamp"
              width={305}
              height={357}
              objectFit="cover"
              objectPosition="center"
              className="w-full h-auto"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-xl md:text-2xl font-[family-name:var(--font-clash-display)] text-[#2A254B]">
              The Lucy Lamp
            </h4>
            <p className="text-lg md:text-xl font-[family-name:var(--font-satoshi-light)] text-[#2A254B]">£399</p>
          </div>
        </div>
      </div>

      {/* List 2 Products */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 px-6 py-12 md:px-20 lg:px-24">
        {/* Product Card 1 */}
        <div className="w-full">
          <div className="mb-4 overflow-hidden relative">
            <Image
              src="/photos/multiple_lamps.png"
              alt="chair"
              objectFit="cover"
              objectPosition="center"
              width={305}
              height={357}
              className="w-full h-auto"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-xl md:text-2xl font-[family-name:var(--font-clash-display)] text-[#2A254B]">
              The Dandy chair
            </h4>
            <p className="text-lg md:text-xl font-[family-name:var(--font-satoshi-light)] text-[#2A254B]">£250</p>
          </div>
        </div>

        {/* Product Card 2 */}
        <div className="w-full">
          <div className="mb-4 overflow-hidden relative">
            <Image
              src="/photos/rustic_vase.png"
              alt="Vases"
              objectFit="cover"
              objectPosition="center"
              width={305}
              height={357}
              className="w-full h-auto"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-xl md:text-2xl font-[family-name:var(--font-clash-display)] text-[#2A254B]">
              Rustic Vase Set
            </h4>
            <p className="text-lg md:text-xl font-[family-name:var(--font-satoshi-light)] text-[#2A254B]">£155</p>
          </div>
        </div>

        {/* Product Card 3 */}
        <div className="w-full">
          <div className="mb-4 overflow-hidden relative">
            <Image
              src="/photos/stool.png"
              alt="Vase"
              width={305}
              height={357}
              objectFit="cover"
              objectPosition="center"
              className="w-full h-auto"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-xl md:text-2xl font-[family-name:var(--font-clash-display)] text-[#2A254B]">
              The Silky Vase
            </h4>
            <p className="text-lg md:text-xl font-[family-name:var(--font-satoshi-light)] text-[#2A254B]">£125</p>
          </div>
        </div>

        {/* Product Card 4 */}
        <div className="w-full">
          <div className="mb-4 overflow-hidden relative">
            <Image
              src="/photos/multiple_chairs.png"
              alt="Lamp"
              width={305}
              height={357}
              objectFit="cover"
              objectPosition="center"
              className="w-full h-auto"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-xl md:text-2xl font-[family-name:var(--font-clash-display)] text-[#2A254B]">
              The Lucy Lamp
            </h4>
            <p className="text-lg md:text-xl font-[family-name:var(--font-satoshi-light)] text-[#2A254B]">£399</p>
          </div>
        </div>
      </div>
      {/* View Collection Button */}
      <div className="w-full flex justify-center pb-12">
        <Link
          href="#"
          className="bg-[#F9F9F9] px-8 py-4 text-[#2A254B] font-satoshi hover:bg-gray-200 transition-colors"
        >
          View collection
        </Link>
      </div>
    </div>
  );
};

export default Listing;