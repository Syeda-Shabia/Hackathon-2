// import React from 'react';

// const Shopping: React.FC = () => {
//   return (
//     <div className="flex flex-col items-start p-0 relative w-full h-[800px] bg-[#F9F9F9]">
//       {/* Shopping Basket */}
//       <div className="flex flex-col items-start p-0 relative w-full h-[660px] bg-[#F9F9F9]">
//         {/* Your shopping cart */}
//         <h1 className="absolute w-[328px] h-[50px] left-[188px] top-[64px] font-[family-name:var(--font-[family-name:var(--font-[family-name:var(--font-clash-display)])])] text-[36px] leading-[140%] text-[#2A254B]">
//           Your shopping cart
//         </h1>
//         {/* Product */}
//         <h6 className="absolute w-[55px] h-[20px] left-[188px] top-[162px] font-[family-name:var(--font-[family-name:var(--font-[family-name:var(--font-clash-display)])])] text-[14px] leading-[140%] text-[#2A254B]">
//           Product
//         </h6>
//         {/* Quantity */}
//         <h6 className="absolute w-[57px] h-[20px] left-[838px] top-[162px] font-[family-name:var(--font-[family-name:var(--font-[family-name:var(--font-clash-display)])])] text-[14px] leading-[140%] text-[#2A254B]">
//           Quantity
//         </h6>
//         {/* Total */}
//         <h6 className="absolute w-[34px] h-[20px] left-[1212px] top-[162px] font-[family-name:var(--font-[family-name:var(--font-[family-name:var(--font-clash-display)])])] text-[14px] leading-[140%] text-[#2A254B]">
//           Total
//         </h6>
//         {/* Product One */}
//         <div className="absolute flex flex-row items-center p-0 gap-[21px] w-[309px] h-[134px] left-[188px] top-[214px]">
//           <div className="w-[109px] h-[134px] bg-[url('/photos/Graystone-vase.png')]"></div>
//           <div className="flex flex-col items-start p-0 gap-[8px] w-[179px] h-[110px]">
//             <h4 className="w-[150px] h-[28px] font-[family-name:var(--font-[family-name:var(--font-[family-name:var(--font-clash-display)])])] text-[20px] leading-[140%] text-[#2A254B]">
//               Graystone vase
//             </h4>
//             <p className="w-[179px] h-[42px] font-[family-name:var(--font-[family-name:var(--font-[family-name:var(--font-satoshi-light)]-light)]-light)] text-[14px] leading-[150%] text-[#2A254B]">
//               A timeless ceramic vase with a tri color grey glaze.
//             </p>
//             <p className="w-[29px] h-[24px] font-[family-name:var(--font-[family-name:var(--font-[family-name:var(--font-satoshi-light)]-light)]-light)] text-[16px] leading-[150%] text-[#2A254B]">
//               £85
//             </p>
//           </div>
//         </div>
//         {/* Product Two */}
//         <div className="absolute flex flex-row items-center p-0 gap-[21px] w-[292px] h-[134px] left-[188px] top-[368px]">
//           <div className="w-[109px] h-[134px] bg-[url('/photos/White-vase.png')]"></div>
//           <div className="flex flex-col items-start p-0 gap-[8px] w-[162px] h-[110px]">
//             <h4 className="w-[155px] h-[28px] font-[family-name:var(--font-[family-name:var(--font-[family-name:var(--font-clash-display)])])] text-[20px] leading-[140%] text-[#2A254B]">
//               Basic white vase
//             </h4>
//             <p className="w-[162px] h-[42px] font-[family-name:var(--font-[family-name:var(--font-[family-name:var(--font-satoshi-light)]-light)]-light)] text-[14px] leading-[150%] text-[#2A254B]">
//               Beautiful and simple this is one for the classics
//             </p>
//             <p className="w-[29px] h-[24px] font-[family-name:var(--font-[family-name:var(--font-[family-name:var(--font-satoshi-light)]-light)]-light)] text-[16px] leading-[150%] text-[#2A254B]">
//               £125
//             </p>
//           </div>
//         </div>
//         {/* Divider */}
//         <div className="absolute w-[1064px] h-0 left-[188px] top-[194px] border border-[#EBE8F4]"></div>
//         <div className="absolute w-[1064px] h-0 left-[188px] top-[534px] border border-[#EBE8F4]"></div>
//         {/* Pricing Information */}
//         <div className="absolute flex flex-col items-end p-0 gap-[12px] w-[282px] h-[67px] left-[970px] top-[562px]">
//           <div className="flex flex-row items-center p-0 gap-[16px] w-[150px] h-[34px]">
//             <h4 className="w-[80px] h-[28px] font-[family-name:var(--font-[family-name:var(--font-[family-name:var(--font-clash-display)])])] text-[20px] leading-[140%] text-right text-[#4E4D93]">
//               Subtotal
//             </h4>
//             <h3 className="w-[54px] h-[34px] font-[family-name:var(--font-[family-name:var(--font-[family-name:var(--font-clash-display)])])] text-[24px] leading-[140%] text-right text-[#2A254B]">
//               £210
//             </h3>
//           </div>
//           <p className="w-[282px] h-[21px] font-[family-name:var(--font-[family-name:var(--font-[family-name:var(--font-satoshi-light)]-light)]-light)] text-[14px] leading-[150%] text-right text-[#4E4D93]">
//             Taxes and shipping are calculated at checkout
//           </p>
//         </div>
//         {/* Stepper One */}
//         <div className="absolute flex flex-row justify-between items-center p-[12px_16px] gap-[33px] w-[122px] h-[46px] left-[838px] top-[226px] bg-[#F9F9F9]">
//           <span className="w-[7px] h-[22px] font-[family-name:var(--font-[family-name:var(--font-[family-name:var(--font-satoshi-light)]-light)]-light)] text-[16px] leading-[22px] text-[#EBE8F4]">-</span>
//           <span className="w-[6px] h-[22px] font-[family-name:var(--font-[family-name:var(--font-[family-name:var(--font-satoshi-light)]-light)]-light)] text-[16px] leading-[22px] text-[#2A254B]">1</span>
//           <span className="w-[11px] h-[22px] font-[family-name:var(--font-[family-name:var(--font-[family-name:var(--font-satoshi-light)]-light)]-light)] text-[16px] leading-[22px] text-[#EBE8F4]">+</span>
//         </div>
//         {/* Stepper Two */}
//         <div className="absolute flex flex-row justify-between items-center p-[12px_16px] gap-[33px] w-[122px] h-[46px] left-[838px] top-[380px] bg-[#F9F9F9]">
//           <span className="w-[7px] h-[22px] font-[family-name:var(--font-[family-name:var(--font-[family-name:var(--font-satoshi-light)]-light)]-light)] text-[16px] leading-[22px] text-[#EBE8F4]">-</span>
//           <span className="w-[6px] h-[22px] font-[family-name:var(--font-[family-name:var(--font-[family-name:var(--font-satoshi-light)]-light)]-light)] text-[16px] leading-[22px] text-[#2A254B]">1</span>
//           <span className="w-[11px] h-[22px] font-[family-name:var(--font-[family-name:var(--font-[family-name:var(--font-satoshi-light)]-light)]-light)] text-[16px] leading-[22px] text-[#EBE8F4]">+</span>
//         </div>
//         {/* £85 */}
//         <p className="absolute w-[33px] h-[27px] left-[1212px] top-[225px] font-[family-name:var(--font-[family-name:var(--font-[family-name:var(--font-satoshi-light)]-light)]-light)] text-[18px] leading-[150%] text-[#2A254B]">
//           £85
//         </p>
//         {/* £125 */}
//         <p className="absolute w-[38px] h-[27px] left-[1209px] top-[380px] font-[family-name:var(--font-[family-name:var(--font-[family-name:var(--font-satoshi-light)]-light)]-light)] text-[18px] leading-[150%] text-[#2A254B]">
//           £125
//         </p>
//         {/* Button Medium */}
//         <button className="absolute flex flex-row items-center p-[16px_32px] gap-[10px] w-[172px] h-[56px] left-[1080px] top-[645px] bg-[#2A254B]">
//           <span className="w-[108px] h-[24px] font-[family-name:var(--font-[family-name:var(--font-[family-name:var(--font-satoshi-light)]-light)]-light)] text-[16px] leading-[150%] text-white">
//             Checkout
//           </span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Shopping;
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
            {/* Replace with next/Image */}
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
            {/* Replace with next/Image */}
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
        <Link href="/checkout" className="mt-6 bg-[#2A254B] text-white font-[family-name:var(--font-satoshi-light)] text-base py-4 px-8 block text-center">
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
              {/* Replace with next/Image */}
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
              {/* Replace with next/Image */}
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
// import Image from 'next/image';
// import Link from 'next/link';

// const ShoppingBasket = () => {
//   return (
//     <div className="flex flex-col items-center bg-[#F9F9F9] w-full min-h-screen">
//       {/* Header */}
//       <div className="w-full bg-white py-6 px-10 lg:px-20">
//         <h1 className="text-3xl font-[family-name:var(--font-[family-name:var(--font-clash-display)])] text-[#2A254B]">
//           Your shopping cart
//         </h1>
//       </div>

      // {/* Product List */}
      // <div className="w-full px-10 lg:px-20 py-8">
      //   {/* Product 1 */}
      //   <div className="flex flex-row items-center gap-6 py-6 border-b border-[#EBE8F4]">
      //     {/* Product Image */}
      //     <div className="w-[109px] h-[134px] relative">
      //       <Image
      //         src="/photos/Graystone-vase.png" // Direct image path
      //         alt="Graystone vase"
      //         layout="responsive"
      
      //         objectFit="cover"
      //         className="rounded-none"
      //       />
      //     </div>

      //     {/* Product Details */}
      //     <div className="flex flex-col gap-2">
      //       <h3 className="text-xl font-[family-name:var(--font-[family-name:var(--font-clash-display)])] text-[#2A254B]">
      //         Graystone vase
      //       </h3>
      //       <p className="text-sm font-[family-name:var(--font-[family-name:var(--font-satoshi-light)]-light)] text-[#2A254B]">
      //         A timeless ceramic vase with a tri color grey glaze.
      //       </p>
      //     </div>

      //     {/* Quantity Stepper */}
      //     <div className="flex items-center gap-4 bg-[#F9F9F9] p-3 rounded-none">
      //       <button className="text-[#EBE8F4]">-</button>
      //       <span className="text-[#2A254B]">1</span>
      //       <button className="text-[#EBE8F4]">+</button>
      //     </div>

      //     {/* Price */}
      //     <div className="text-right">
      //       <p className="text-lg font-[family-name:var(--font-[family-name:var(--font-satoshi-light)]-light)] text-[#2A254B]">£85</p>
      //     </div>
      //   </div>

      //   {/* Product 2 */}
      //   <div className="flex flex-row items-center gap-6 py-6 border-b border-[#EBE8F4]">
      //     {/* Product Image */}
      //     <div className="w-[109px] h-[134px] relative">
      //       <Image
      //         src="/photos/White-vase.png" // Direct image path
      //         alt="White vase"
      //         layout="responsive"
      
      //         objectFit="cover"
      //         className="rounded-none"
      //       />
      //     </div>

      //     {/* Product Details */}
      //     <div className="flex flex-col gap-2">
      //       <h3 className="text-xl font-[family-name:var(--font-[family-name:var(--font-clash-display)])] text-[#2A254B]">
      //         Basic white vase
      //       </h3>
      //       <p className="text-sm font-[family-name:var(--font-[family-name:var(--font-satoshi-light)]-light)] text-[#2A254B]">
      //         Beautiful and simple, this is one for the classics.
      //       </p>
      //     </div>

      //     {/* Quantity Stepper */}
      //     <div className="flex items-center gap-4 bg-[#F9F9F9] p-3 rounded-none">
      //       <button className="text-[#EBE8F4]">-</button>
      //       <span className="text-[#2A254B]">1</span>
      //       <button className="text-[#EBE8F4]">+</button>
      //     </div>

      //     {/* Price */}
      //     <div className="text-right">
      //       <p className="text-lg font-[family-name:var(--font-[family-name:var(--font-satoshi-light)]-light)] text-[#2A254B]">£85</p>
      //     </div>
      //   </div>
      // </div>

//       {/* Divider */}
//       <div className="w-full border-b border-[#EBE8F4] my-4" />

//       {/* Pricing Information */}
//       <div className="w-full px-10 lg:px-20 py-8">
//         <div className="flex flex-col items-end gap-4">
//           <div className="flex items-center gap-4">
//             <p className="text-xl font-[family-name:var(--font-[family-name:var(--font-clash-display)])] text-[#4E4D93]">
//               Subtotal
//             </p>
//             <p className="text-2xl font-[family-name:var(--font-[family-name:var(--font-clash-display)])] text-[#2A254B]">
//               £210
//             </p>
//           </div>
//           <p className="text-sm font-[family-name:var(--font-[family-name:var(--font-satoshi-light)]-light)] text-[#4E4D93]">
//             Taxes and shipping are calculated at checkout
//           </p>
//         </div>
//       </div>

//       {/* Checkout Button */}
//       <div className="w-full px-10 lg:px-20 py-8">
//         <Link href="/checkout" passHref>
//           <button className="w-full bg-[#2A254B] py-4 px-8 font-[family-name:var(--font-[family-name:var(--font-satoshi-light)]-light)] text-white text-lg hover:bg-[#4E4D93] transition-colors">
//             Go to checkout
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default ShoppingBasket;