// import Image from 'next/image';
// import React from 'react'

// const Listing = () => {
//   return (
//     <div className="flex flex-col items-center overflow-x-hidden p-0 relative w-full h-[2000px] bg-white">
//       {/* Cover */}
//       <div className="w-full h-[209px] bg-[url('/photos/cover.png')] bg-no-repeat bg-cover order-1 relative">
//       </div>

//       {/* Filters */}
//       <div className="w-full h-[64px] bg-white flex-none order-2 flex-grow-0 relative">
//         <div className="flex flex-row items-start p-0 gap-[12px] absolute w-[557px] h-[48px] left-[24px] top-[calc(50%-24px)]">
//           {/* Category */}
//           <div className="box-border flex flex-row items-center p-[12px_24px] gap-[8px] w-[137px] h-[48px] bg-white flex-none order-0 flex-grow-0">
//             <span className="w-[65px] h-[24px] font-[family-name:var(--font-satoshi-light)] text-[16px] leading-[150%] text-[#2A254B] flex-none order-0 flex-grow-0">Category</span>
//             <div className="w-[16px] h-[16px] bg-white flex-none order-1 flex-grow-0 relative">
//               <div>
//                 <svg width="8" height="5" viewBox="0 0 8 5" responsive="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M8 0L4 5L0 0H8Z" responsive="#2A254B" />
//                 </svg>
//               </div>
//             </div>
//           </div>
//           {/* Price */}
//           <div className="box-border flex flex-row items-center p-[12px_24px] gap-[8px] w-[108px] h-[48px] bg-white flex-none order-2 flex-grow-0">
//             <span className="w-[36px] h-[24px] font-[family-name:var(--font-satoshi-light)] text-[16px] leading-[150%] text-[#2A254B] flex-none order-0 flex-grow-0">Price</span>
//             <div className="w-[16px] h-[16px] bg-white flex-none order-1 flex-grow-0 relative">
//               <div>
//                 <svg width="8" height="5" viewBox="0 0 8 5" responsive="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M8 0L4 5L0 0H8Z" responsive="#2A254B" />
//                 </svg>
//               </div>
//             </div>
//           </div>
//           {/* Brand */}
//           <div className="box-border flex flex-row items-center p-[12px_24px] gap-[8px] w-[114px] h-[48px] bg-white flex-none order-3 flex-grow-0">
//             <span className="w-[42px] h-[24px] font-[family-name:var(--font-satoshi-light)] text-[16px] leading-[150%] text-[#2A254B] flex-none order-0 flex-grow-0">Brand</span>
//             <div className="w-[16px] h-[16px] bg-white flex-none order-1 flex-grow-0 relative">
//               <div>
//                 <svg width="8" height="5" viewBox="0 0 8 5" responsive="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M8 0L4 5L0 0H8Z" responsive="#2A254B" />
//                 </svg>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-row items-center p-0 gap-[16px] absolute w-[237px] h-[48px] right-[24px] top-[calc(50%-24px)]">
//           <span className="w-[67px] h-[21px] font-[family-name:var(--font-satoshi-light)] text-[14px] leading-[150%] text-[#2A254B] flex-none order-0 flex-grow-0">Sorting by:</span>
//           {/* Date */}
//           <div className="box-border flex flex-row items-center p-[12px_24px] gap-[8px] w-[154px] h-[48px] bg-white flex-none order-1 flex-grow-0">
//             <span className="w-[88px] h-[24px] font-[family-name:var(--font-satoshi-light)] text-[16px] leading-[150%] text-[#2A254B] flex-none order-0 flex-grow-0">Date added</span>
//             <div className="w-[16px] h-[16px] bg-white flex-none order-1 flex-grow-0 relative">
//               <div>
//                 <svg width="8" height="5" viewBox="0 0 8 5" responsive="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M8 0L4 5L0 0H8Z" responsive="#2A254B" />
//                 </svg>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Listing 1 */}
//       <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 order-3">
//         {/* Product Card 1 */}
//         <div className="w-full">
//           <div className="mb-4 overflow-hidden relative">
//             <Image
//               src="/photos/dandy-chair.png"
//               alt="chair"
//               objectFit="cover"
//               objectPosition="center"
//               width={305}
//               height={357}
//               className="w-full h-auto"
//             />
//           </div>
//           <div className="flex flex-col gap-2">
//             <h4 className="text-xl md:text-2xl font-[family-name:var(--font-clash-display)] text-[#2A254B]">
//               The Dandy chair
//             </h4>
//             <p className="text-lg md:text-xl font-[family-name:var(--font-satoshi-light)] text-[#2A254B]">£250</p>
//           </div>
//         </div>

//         {/* Product Card 2 */}
//         <div className="w-full">
//           <div className="mb-4 overflow-hidden relative">
//             <Image
//               src="/photos/three-vases.png"
//               alt="Vases"
//               objectFit="cover"
//               objectPosition="center"
//               width={305}
//               height={357}
//               className="w-full h-auto"
//             />
//           </div>
//           <div className="flex flex-col gap-2">
//             <h4 className="text-xl md:text-2xl font-[family-name:var(--font-clash-display)] text-[#2A254B]">
//               Rustic Vase Set
//             </h4>
//             <p className="text-lg md:text-xl font-[family-name:var(--font-satoshi-light)] text-[#2A254B]">£155</p>
//           </div>
//         </div>

//         {/* Product Card 3 */}
//         <div className="w-full">
//           <div className="mb-4 overflow-hidden relative">
//             <Image
//               src="/photos/silky-vase.png"
//               alt="Vase"
//               width={305}
//               height={357}
//               objectFit="cover"
//               objectPosition="center"
//               className="w-full h-auto"
//             />
//           </div>
//           <div className="flex flex-col gap-2">
//             <h4 className="text-xl md:text-2xl font-[family-name:var(--font-clash-display)] text-[#2A254B]">
//               The Silky Vase
//             </h4>
//             <p className="text-lg md:text-xl font-[family-name:var(--font-satoshi-light)] text-[#2A254B]">£125</p>
//           </div>
//         </div>

//         {/* Product Card 4 */}
//         <div className="w-full">
//           <div className="mb-4 overflow-hidden relative">
//             <Image
//               src="/photos/lucy-lamp.png"
//               alt="Lamp"
//               width={305}
//               height={357}
//               objectFit="cover"
//               objectPosition="center"
//               className="w-full h-auto"
//             />
//           </div>
//           <div className="flex flex-col gap-2">
//             <h4 className="text-xl md:text-2xl font-[family-name:var(--font-clash-display)] text-[#2A254B]">
//               The Lucy Lamp
//             </h4>
//             <p className="text-lg md:text-xl font-[family-name:var(--font-satoshi-light)] text-[#2A254B]">£399</p>
//           </div>
//         </div>
//       </div>     
//         {/* Listing 2 */}
//       <div className="w-full h-[510px] bg-white flex-none order-4 flex-grow-0 relative">
//         {/* Product Card 1 */}
//         <div className="flex flex-col items-start p-0 gap-[24px] absolute w-[305px] h-[462px] left-[calc(50%-305px/2-487.5px)] top-[calc(50%-462px/2+4px)]">
//           <div className="w-[305px] h-[375px] bg-[url('/photos/multiple_chairs.png')] flex-none order-0 flex-grow-0"></div>
//           <div className="flex flex-col items-start p-0 gap-[8px] w-[154px] h-[63px] flex-none order-1 flex-grow-0">
//             <span className="w-[154px] h-[28px] font-[family-name:var(--font-satoshi-light)] text-[20px] leading-[140%] text-[#2A254B] flex-none order-0 flex-grow-0">The Dandy chair</span>
//             <span className="w-[44px] h-[27px] font-[family-name:var(--font-satoshi-light)] text-[18px] leading-[150%] text-[#2A254B] flex-none order-1 flex-grow-0">£250</span>
//           </div>
//         </div>
//         {/* Product Card 2 */}
//         <div className="flex flex-col items-start p-0 gap-[24px] absolute w-[305px] h-[462px] left-[calc(50%-305px/2-162.5px)] top-[calc(50%-462px/2+4px)]">
//           <div className="w-[305px] h-[375px] bg-[url('/photos/stool.png')] flex-none order-0 flex-grow-0"></div>
//           <div className="flex flex-col items-start p-0 gap-[8px] w-[145px] h-[63px] flex-none order-1 flex-grow-0">
//             <span className="w-[145px] h-[28px] font-[family-name:var(--font-satoshi-light)] text-[20px] leading-[140%] text-[#2A254B] flex-none order-0 flex-grow-0">Rustic Vase Set</span>
//             <span className="w-[38px] h-[27px] font-[family-name:var(--font-satoshi-light)] text-[18px] leading-[150%] text-[#2A254B] flex-none order-1 flex-grow-0">£155</span>
//           </div>
//         </div>
//         {/* Product Card 3 */}
//         <div className="flex flex-col items-start p-0 gap-[24px] absolute w-[305px] h-[462px] left-[calc(50%-305px/2+162.5px)] top-[calc(50%-462px/2+4px)]">
//           <div className="w-[305px] h-[375px] bg-[url('/photos/rustic_vase.png')] flex-none order-0 flex-grow-0"></div>
//           <div className="flex flex-col items-start p-0 gap-[8px] w-[134px] h-[63px] flex-none order-1 flex-grow-0">
//             <span className="w-[134px] h-[28px] font-[family-name:var(--font-satoshi-light)] text-[20px] leading-[140%] text-[#2A254B] flex-none order-0 flex-grow-0">The Silky Vase</span>
//             <span className="w-[38px] h-[27px] font-[family-name:var(--font-satoshi-light)] text-[18px] leading-[150%] text-[#2A254B] flex-none order-1 flex-grow-0">£125</span>
//           </div>
//         </div>
//         {/* Product Card 4 */}
//         <div className="flex flex-col items-start p-0 gap-[24px] absolute w-[305px] h-[462px] left-[calc(50%-305px/2+487.5px)] top-[calc(50%-462px/2+4px)]">
//           <div className="w-[305px] h-[375px] bg-[url('/photos/multiple_lamps.png')] flex-none order-0 flex-grow-0"></div>
//           <div className="flex flex-col items-start p-0 gap-[8px] w-[145px] h-[63px] flex-none order-1 flex-grow-0">
//             <span className="w-[145px] h-[28px] font-[family-name:var(--font-satoshi-light)] text-[20px] leading-[140%] text-[#2A254B] flex-none order-0 flex-grow-0">The Lucy lamp</span>
//             <span className="w-[43px] h-[27px] font-[family-name:var(--font-satoshi-light)] text-[18px] leading-[150%] text-[#2A254B] flex-none order-1 flex-grow-0">£399</span>
//           </div>
//         </div>
//       </div>
//       {/* Listing 3 */}
//       <div className="w-full h-[510px] bg-white flex-none order-5 flex-grow-0 relative">
//         {/* Product Card 1 */}
//         <div className="flex flex-col items-start p-0 gap-[24px] absolute w-[305px] h-[462px] left-[calc(50%-305px/2-487.5px)] top-[calc(50%-462px/2+4px)]">
//           <div className="w-[305px] h-[375px] bg-[url('/photos/dandy-chair.png')] flex-none order-0 flex-grow-0"></div>
//           <div className="flex flex-col items-start p-0 gap-[8px] w-[154px] h-[63px] flex-none order-1 flex-grow-0">
//             <span className="w-[154px] h-[28px] font-[family-name:var(--font-satoshi-light)] text-[20px] leading-[140%] text-[#2A254B] flex-none order-0 flex-grow-0">The Dandy chair</span>
//             <span className="w-[44px] h-[27px] font-[family-name:var(--font-satoshi-light)] text-[18px] leading-[150%] text-[#2A254B] flex-none order-1 flex-grow-0">£250</span>
//           </div>
//         </div>
//         {/* Product Card 2 */}
//         <div className="flex flex-col items-start p-0 gap-[24px] absolute w-[305px] h-[462px] left-[calc(50%-305px/2-162.5px)] top-[calc(50%-462px/2+4px)]">
//           <div className="w-[305px] h-[375px] bg-[url('/photos/three-vases.png')] flex-none order-0 flex-grow-0"></div>
//           <div className="flex flex-col items-start p-0 gap-[8px] w-[145px] h-[63px] flex-none order-1 flex-grow-0">
//             <span className="w-[145px] h-[28px] font-[family-name:var(--font-satoshi-light)] text-[20px] leading-[140%] text-[#2A254B] flex-none order-0 flex-grow-0">Rustic Vase Set</span>
//             <span className="w-[38px] h-[27px] font-[family-name:var(--font-satoshi-light)] text-[18px] leading-[150%] text-[#2A254B] flex-none order-1 flex-grow-0">£155</span>
//           </div>
//         </div>
//         {/* Product Card 3 */}
//         <div className="flex flex-col items-start p-0 gap-[24px] absolute w-[305px] h-[462px] left-[calc(50%-305px/2+162.5px)] top-[calc(50%-462px/2+4px)]">
//           <div className="w-[305px] h-[375px] bg-[url('/photos/silky-vase.png')] flex-none order-0 flex-grow-0"></div>
//           <div className="flex flex-col items-start p-0 gap-[8px] w-[134px] h-[63px] flex-none order-1 flex-grow-0">
//             <span className="w-[134px] h-[28px] font-[family-name:var(--font-satoshi-light)] text-[20px] leading-[140%] text-[#2A254B] flex-none order-0 flex-grow-0">The Silky Vase</span>
//             <span className="w-[38px] h-[27px] font-[family-name:var(--font-satoshi-light)] text-[18px] leading-[150%] text-[#2A254B] flex-none order-1 flex-grow-0">£125</span>
//           </div>
//         </div>
//         {/* Product Card 4 */}
//         <div className="flex flex-col items-start p-0 gap-[24px] absolute w-[305px] h-[462px] left-[calc(50%-305px/2+487.5px)] top-[calc(50%-462px/2+4px)]">
//           <div className="w-[305px] h-[375px] bg-[url('/photos/lucy-lamp.png')] flex-none order-0 flex-grow-0"></div>
//           <div className="flex flex-col items-start p-0 gap-[8px] w-[145px] h-[63px] flex-none order-1 flex-grow-0">
//             <span className="w-[145px] h-[28px] font-[family-name:var(--font-satoshi-light)] text-[20px] leading-[140%] text-[#2A254B] flex-none order-0 flex-grow-0">The Lucy lamp</span>
//             <span className="w-[43px] h-[27px] font-[family-name:var(--font-satoshi-light)] text-[18px] leading-[150%] text-[#2A254B] flex-none order-1 flex-grow-0">£399</span>
//           </div>
//         </div>
//         {/* Button */}
//         <div className="absolute flex flex-row p-[16px_39px] justify-center gap-[10px] w-[190px] h-[56px] left-[740px] top-[550px] bg-[#F9F9F9]">
//           <div className="w-[166px] h-[24px] font-[family-name:var(--font-satoshi-light)] text-[16px] leading-[150%] text-[#2A254B]">
//             View collection
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Listing;
import Image from 'next/image';
import Link from 'next/link';

const Listing = () => {
  // List 1 Products
  const list1Products = [
    { id: 1, name: 'The Dandy Chair', price: '£250', image: '/photos/dandy-chair.png' },
    { id: 2, name: 'Rustic Vase Set', price: '£155', image: '/photos/three-vases.png' },
    { id: 3, name: 'The Silky Vase', price: '£125', image: '/photos/silky-vase.png' },
    { id: 4, name: 'The Lucy Lamp', price: '£399', image: '/photos/lucy-lamp.png' },
  ];

  // List 2 Products
  const list2Products = [
    { id: 5, name: 'Multiple Chairs', price: '£300', image: '/photos/multiple_chairs.png' },
    { id: 6, name: 'Stool', price: '£120', image: '/photos/stool.png' },
    { id: 7, name: 'Rustic Vase', price: '£90', image: '/photos/rustic_vase.png' },
    { id: 8, name: 'Multiple Lamps', price: '£450', image: '/photos/multiple_lamps.png' },
  ];

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
                <path d="M4 6L8 10L12 6" stroke="#2A254B" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded">
              <span className="font-[family-name:var(--font-satoshi-light)]  text-dark-primary">Product type</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6L8 10L12 6" stroke="#2A254B" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded">
              <span className="font-[family-name:var(--font-satoshi-light)]  text-dark-primary">Price</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6L8 10L12 6" stroke="#2A254B" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded">
              <span className="font-[family-name:var(--font-satoshi-light)]  text-dark-primary">Brand</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6L8 10L12 6" stroke="#2A254B" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </div>

          {/* Sorting */}
          <div className="flex flex-row items-center gap-4">
            <span className="font-[family-name:var(--font-satoshi-light)] ml-4 text-dark-primary">Sorting by:</span>
            <button className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded">
              <span className="font-[family-name:var(--font-satoshi-light)]  text-dark-primary">Date added</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6L8 10L12 6" stroke="#2A254B" stroke-linecap="round" stroke-linejoin="round" />
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