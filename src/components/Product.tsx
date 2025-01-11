//  import Image from 'next/image'
//  import React from 'react'

//  const Product: React.FC = () => {
//    return (
//      <div className="flex flex-col items-center p-0 relative w-full h-[2500px] bg-[#F9F9F9]">
//         {/* Banners */}
//        <div className="w-full h-[41px] bg-[#2A254B] flex-none order-0 flex-grow-0 relative">
//           {/* Close */}
//           <div className="absolute w-[24px] h-[24px] right-[16px] top-[12px] bg-blend-multiply">
//             <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http:www.w3.org/2000/svg">
//               <path d="M12 1.05L10.95 0L6 4.95L1.05 0L0 1.05L4.95 6L0 10.95L1.05 12L6 7.05L10.95 12L12 10.95L7.05 6L12 1.05Z" fill="white" />
//             </svg>
//           </div>
//           {/* Frame 21 */}
//           <div className="absolute flex flex-row items-center gap-[8px] w-[407px] h-[19px] left-[calc(50%-203.5px)] top-[11px]">
//             {/* Delivery */}
//             <div className="w-[16px] h-[16px] bg-blend-multiply flex-none order-0 flex-grow-0">
//               <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http:www.w3.org/2000/svg">
//                 <rect width="16" height="16" transform="translate(0 0.5)" fill="white" style={{ mixBlendMode: 'multiply' }} />
//                 <path d="M8 8.5H2V9.5H8V8.5Z" fill="white" />
//                 <path d="M6 6H1V7H6V6Z" fill="white" />
//                 <path d="M14.9594 8.8032L13.4594 5.3032C13.421 5.21319 13.357 5.13646 13.2753 5.08256C13.1936 5.02865 13.0979 4.99994 13 5H11.5V4C11.5 3.86739 11.4473 3.74021 11.3536 3.64645C11.2598 3.55268 11.1326 3.5 11 3.5H3V4.5H10.5V10.7781C10.2722 10.9104 10.0728 11.0865 9.91339 11.2962C9.75395 11.5059 9.6376 11.7451 9.57105 12H6.42895C6.30725 11.5287 6.01784 11.1179 5.61495 10.8447C5.21206 10.5715 4.72336 10.4546 4.24045 10.5159C3.75754 10.5773 3.31358 10.8126 2.99179 11.1779C2.66999 11.5431 2.49246 12.0132 2.49246 12.5C2.49246 12.9868 2.66999 13.4569 2.99179 13.8221C3.31358 14.1874 3.75754 14.4227 4.24045 14.4841C4.72336 14.5454 5.21206 14.4285 5.61495 14.1553C6.01784 13.8821 6.30725 13.4713 6.42895 13H9.57105C9.68007 13.4289 9.92892 13.8092 10.2783 14.0808C10.6276 14.3525 11.0575 14.4999 11.5 14.4999C11.9425 14.4999 12.3724 14.3525 12.7217 14.0808C13.0711 13.8092 13.3199 13.4289 13.429 13H14.5C14.6326 13 14.7598 12.9473 14.8536 12.8536C14.9473 12.7598 15 12.6326 15 12.5V9C15 8.93233 14.9862 8.86537 14.9594 8.8032ZM4.5 13.5C4.30222 13.5 4.10888 13.4414 3.94443 13.3315C3.77998 13.2216 3.65181 13.0654 3.57612 12.8827C3.50043 12.7 3.48063 12.4989 3.51921 12.3049C3.5578 12.1109 3.65304 11.9327 3.79289 11.7929C3.93275 11.653 4.11093 11.5578 4.30491 11.5192C4.49889 11.4806 4.69996 11.5004 4.88268 11.5761C5.06541 11.6518 5.22159 11.78 5.33147 11.9444C5.44135 12.1089 5.5 12.3022 5.5 12.5C5.4997 12.7651 5.39424 13.0193 5.20677 13.2068C5.0193 13.3942 4.76512 13.4997 4.5 13.5ZM11.5 6H12.6704L13.742 8.5H11.5V6ZM11.5 13.5C11.3022 13.5 11.1089 13.4414 10.9444 13.3315C10.78 13.2216 10.6518 13.0654 10.5761 12.8827C10.5004 12.7 10.4806 12.4989 10.5192 12.3049C10.5578 12.1109 10.653 11.9327 10.7929 11.7929C10.9327 11.653 11.1109 11.5578 11.3049 11.5192C11.4989 11.4806 11.7 11.5004 11.8827 11.5761C12.0654 11.6518 12.2216 11.78 12.3315 11.9444C12.4414 12.1089 12.5 12.3022 12.5 12.5C12.4997 12.7651 12.3942 13.0193 12.2068 13.2068C12.0193 13.3942 11.7651 13.4997 11.5 13.5ZM14 12H13.429C13.3188 11.5717 13.0696 11.1921 12.7206 10.9207C12.3715 10.6492 11.9422 10.5013 11.5 10.5V9.5H14V12Z" fill="white" />
//               </svg>
//             </div>
//             {/* Free delivery text */}
//             <div className="w-[399px] h-[19px] font-[family-name:var(--font-satoshi-light)] text-[14px] leading-[19px] text-white flex-none order-1 flex-grow-0">
//               Free delivery on all orders over £50 with code easter checkout
//             </div>
//           </div>
//         </div>
//        {/* Product Details */}
//        <div className="relative w-full h-[759px] bg-white flex-none order-2 flex-grow-0">
//          {/* Image Left */}
//          <div className="absolute w-[721px] h-[759px] left-0 top-0 bg-[url('/photos/dandy3.png')]"></div>
//          {/* Wrapper */}
//          <div className="absolute w-[602px] h-[657px] left-[783px] top-[51px] bg-white">
//            {/* Frame 154 */}
//            <div className="absolute flex flex-col items-start p-0 gap-[13px] w-[281px] h-[89px] left-[40px] top-[40px]">
//              {/* The Dandy Chair */}
//              <div className="w-[281px] h-[44px] font-[family-name:var(--font-clash-display)] text-[36px] leading-[44px] text-[#2A254B] flex-none order-0 flex-grow-0">
//                The Dandy Chair
//              </div>
//              {/* £250 */}
//              <div className="w-[59px] h-[32px] font-[family-name:var(--font-satoshi-light)] text-[24px] leading-[32px] text-[#12131A] flex-none order-1 flex-grow-0">
//                £250
//              </div>
//            </div>
//            {/* Description */}
//            <div className="absolute flex flex-col items-start p-[40px] gap-[16px] w-[602px] h-[251px] left-0 top-[143px]">
//              {/* Description Text */}
//              <div className="flex flex-col items-start p-0 gap-[16px] w-[522px] h-[188px] flex-none order-0 flex-grow-0">
//                {/* Description */}
//                <div className="w-[88px] h-[20px] font-[family-name:var(--font-clash-display)] text-[16px] leading-[20px] text-[#2A254B] flex-none order-0 flex-grow-0">
//                  Description
//                </div>
//                {/* Frame 51 */}
//                <div className="flex flex-col items-start p-0 gap-[12px] w-[522px] h-[152px] flex-none order-1 flex-grow-0">
//                  {/* Frame 50 */}
//                  <div className="flex flex-col items-start p-0 gap-[20px] w-[498px] h-[152px] flex-none order-0 flex-grow-0">
//                    {/* A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery. */}
//                    <div className="w-[498px] h-[66px] font-[family-name:var(--font-satoshi-light)] text-[16px] leading-[22px] text-[#505977] flex-none order-0 flex-grow-0">
//                      A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.
//                    </div>
//                    {/* Premium material Handmade upholstery Quality timeless classic */}
//                    <div className="w-[498px] h-[66px] font-[family-name:var(--font-satoshi-light)] text-[16px] leading-[22px] text-[#505977] flex-none order-1 flex-grow-0">
//                      Premium material Handmade upholstery Quality timeless classic
//                    </div>
//                  </div>
//                </div>
//              </div>
//            </div>
//            {/* Dimensions */}
//            <div className="absolute w-[602px] h-[134px] left-0 top-[401px]">
//              {/* Dimensions Text */}
//              <div className="absolute flex flex-col items-start p-0 gap-[28px] w-[241px] h-[99px] left-[40px] top-[20px]">
//                {/* Dimensions */}
//                <div className="w-[89px] h-[20px] font-[family-name:var(--font-clash-display)] text-[16px] leading-[20px] text-[#2A254B] flex-none order-0 flex-grow-0">
//                  Dimensions
//                </div>
//                {/* Metrics */}
//                <div className="flex flex-row items-start p-0 gap-[57px] w-[241px] h-[51px] flex-none order-1 flex-grow-0">
//                  {/* Height */}
//                  <div className="flex flex-col items-start p-0 gap-[12px] w-[44px] h-[51px] flex-none order-0 flex-grow-0">
//                    {/* Height */}
//                    <div className="w-[43px] h-[17px] font-[family-name:var(--font-clash-display)] text-[14px] leading-[17px] text-[#2A254B] flex-none order-0 flex-grow-0">
//                      Height
//                    </div>
//                    {/* 110cm */}
//                    <div className="w-[44px] h-[22px] font-[family-name:var(--font-satoshi-light)] text-[16px] leading-[22px] text-[#505977] flex-none order-1 flex-grow-0">
//                      110cm
//                    </div>
//                  </div>
//                  {/* Width */}
//                  <div className="flex flex-col items-start p-0 gap-[12px] w-[40px] h-[51px] flex-none order-1 flex-grow-0">
//                    {/* Width */}
//                    <div className="w-[40px] h-[17px] font-[family-name:var(--font-clash-display)] text-[14px] leading-[17px] text-[#2A254B] flex-none order-0 flex-grow-0">
//                      Width
//                    </div>
//                    {/* 75cm */}
//                    <div className="w-[39px] h-[22px] font-[family-name:var(--font-satoshi-light)] text-[16px] leading-[22px] text-[#505977] flex-none order-1 flex-grow-0">
//                      75cm
//                    </div>
//                  </div>
//                  {/* Depth */}
//                  <div className="flex flex-col items-start p-0 gap-[12px] w-[43px] h-[51px] flex-none order-2 flex-grow-0">
//                    {/* Depth */}
//                    <div className="w-[41px] h-[17px] font-[family-name:var(--font-clash-display)] text-[14px] leading-[17px] text-[#2A254B] flex-none order-0 flex-grow-0">
//                      Depth
//                    </div>
//                    {/* 50cm */}
//                    <div className="w-[43px] h-[22px] font-[family-name:var(--font-satoshi-light)] text-[16px] leading-[22px] text-[#505977] flex-none order-1 flex-grow-0">
//                      50cm
//                    </div>
//                  </div>
//                </div>
//              </div>
//            </div>
//            {/* Amount */}
//            <div className="absolute box-border w-[602px] h-[115px] left-0 top-[542px]">
//              {/* Quantity */}
//              <div className="absolute flex flex-row items-center p-0 gap-[22px] w-[209px] h-[46px] left-[40px] top-[27px]">
//                {/* Amount: */}
//                <div className="w-[65px] h-[20px] font-[family-name:var(--font-clash-display)] text-[16px] leading-[20px] text-[#2A254B] flex-none order-0 flex-grow-0">
//                  Amount:
//                </div>
//                {/* Stepper */}
//                <div className="box-border flex flex-row justify-between items-center p-[12px_16px] gap-[33px] w-[122px] h-[46px] bg-[#F9F9F9] flex-none order-1 flex-grow-0">
//                  {/* - */}
//                  <div className="m-auto w-[7px] h-[22px] font-[family-name:var(--font-satoshi-light)] text-[16px] leading-[22px] text-[#CAC6DA] flex-none order-0 flex-grow-0">
//                    -
//                  </div>
//                  {/* 1 */}
//                  <div className="m-auto w-[6px] h-[22px] font-[family-name:var(--font-satoshi-light)] text-[16px] leading-[22px] text-[#2A254B] flex-none order-1 flex-grow-0">
//                    1
//                  </div>
//                  {/* + */}
//                  <div className="m-auto w-[11px] h-[22px] font-[family-name:var(--font-satoshi-light)] text-[16px] leading-[22px] text-[#CAC6DA] flex-none order-2 flex-grow-0">
//                    +
//                  </div>
//                </div>
//              </div>
//              {/* Button light */}
//              <div className="box-border flex flex-row items-start p-[16px_32px] gap-[10px] absolute w-[143px] h-[56px] left-[419px] top-[27px] bg-[#2A254B]">
//                {/* Button */}
//                <div className="w-[82px] h-[24px] font-[family-name:var(--font-satoshi-light)] text-[16px] leading-[150%] text-white flex-none order-0 flex-grow-0">
//                  Add to cart
//                </div>
//              </div>
//            </div>
//          </div>
//        </div>
//         {/* Listings */}
//        <section className="relative w-full h-[761px] bg-white flex-none order-3 flex-grow-0">
//          {/* Listings Heading */}
//          <div className="absolute w-[280px] h-[39px] left-[80px] top-[80px] font-[family-name:var(--font-clash-display)] text-[32px] leading-[39px] text-[#2A254B]">
//            You might also like
//          </div>
//          {/* Product Card 1 */}
//          <div className="absolute flex flex-col items-start p-0 gap-[24px] w-[305px] h-[462px] left-[calc(50%-487.5px)] top-[calc(50%-229px)]">
//            <div className="relative w-[305px] h-[375px] bg-[url('/photos/dandy-chair.png')] bg-cover"></div>
//            <div className="flex flex-col items-start p-0 gap-[8px] w-[154px] h-[63px]">
//              <div className="w-[154px] h-[28px] font-[family-name:var(--font-clash-display)] text-[20px] leading-[140%] text-[#2A254B]">
//                The Dandy chair
//              </div>
//              <div className="w-[44px] h-[27px] font-[family-name:var(--font-satoshi-light)] text-[18px] leading-[150%] text-[#2A254B]">
//                £250
//              </div>
//            </div>
//          </div>
//          {/* Product Card 2 */}
//          <div className="absolute flex flex-col items-start p-0 gap-[24px] w-[305px] h-[462px] left-[calc(50%-162.5px)] top-[calc(50%-229px)]">
//            <div className="relative w-[305px] h-[375px] bg-[url('/photos/three-vases.png')] bg-cover"></div>
//            <div className="flex flex-col items-start p-0 gap-[8px] w-[145px] h-[63px]">
//              <div className="w-[145px] h-[28px] font-[family-name:var(--font-clash-display)] text-[20px] leading-[140%] text-[#2A254B]">
//              Rustic Vase Set
//              </div>
//              <div className="w-[38px] h-[27px] font-[family-name:var(--font-satoshi-light)] text-[18px] leading-[150%] text-[#2A254B]">
//                £250
//              </div>
//            </div>
//          </div>
//          {/* Product Card 3 */}
//          <div className="absolute flex flex-col items-start p-0 gap-[24px] w-[305px] h-[462px] left-[calc(50%+162.5px)] top-[calc(50%-229px)]">
//            <div className="relative w-[305px] h-[375px] bg-[url('/photos/silky-vase.png')] bg-cover"></div>
//            <div className="flex flex-col items-start p-0 gap-[8px] w-[134px] h-[63px]">
//              <div className="w-[150px] h-[28px] font-[family-name:var(--font-clash-display)] text-[20px] leading-[140%] text-[#2A254B]">
//                The Silky Vase
//              </div>
//              <div className="w-[38px] h-[27px] font-[family-name:var(--font-satoshi-light)] text-[18px] leading-[150%] text-[#2A254B]">
//                £250
//              </div>
//            </div>
//          </div>
//          {/* Product Card 4 */}
//          <div className="absolute flex flex-col items-start p-0 gap-[24px] w-[305px] h-[462px] left-[calc(50%+487.5px)] top-[calc(50%-229px)]">
//            <div className="relative w-[305px] h-[375px] bg-[url('/photos/lucy-lamp.png')] bg-cover"></div>
//            <div className="flex flex-col items-start p-0 gap-[8px] w-[145px] h-[63px]">
//              <div className="w-[145px] h-[28px] font-[family-name:var(--font-clash-display)] text-[20px] leading-[140%] text-[#2A254B]">
//                The Lucy lamp
//              </div>
//              <div className="w-[43px] h-[27px] font-[family-name:var(--font-satoshi-light)] text-[18px] leading-[150%] text-[#2A254B]">
//                £250
//              </div>
//            </div>
//          </div>
//          {/* Button light */}
//          <div className="absolute flex flex-row items-center justify-center gap-[10px] w-[170px] h-[56px] left-[635px] top-[649px] bg-[#F9F9F9]">
//            <div className="w-[126px] h-[24px] font-[family-name:var(--font-satoshi-light)] text-[16px] leading-[150%] text-[#2A254B]">
//              View collection
//            </div>
//          </div>
//        </section>
//  {/* Features */}
//              <div className="relative w-full h-[355px] bg-white flex-none order-4 flex-grow-0">
//                {/* Features Heading */}
//                <div className="absolute w-[366px] h-[34px] left-[529px] top-[60px] font-[family-name:var(--font-clash-display)] text-[24px] leading-[140%] text-[#2A254B]">
//                  What makes our brand different
//                </div>
//                {/* Feature 1 */}
//                <div className="absolute flex flex-col items-start p-0 gap-[16px] w-[270px] h-[124px] left-[86px] top-[145px]">
//                  <div className="w-[24px] h-[24px] bg-white bg-blend-multiply flex-none order-0 flex-grow-0"></div>
//                  <div className="absolute left-[1.5px] top-[4.5px] h-[16.5px] w-[21px]">
//                    <Image src="/photos/delivery.png" alt="delivery" layout="fill" objectFit="cover"/>
//                  </div>
//                  <div className="flex flex-col items-start p-0 gap-[8px] w-[270px] h-[84px] flex-none order-1 flex-grow-0">
//                    <div className="w-[199px] h-[28px] font-[family-name:var(--font-clash-display)] text-[20px] leading-[140%] text-[#2A254B]">
//                      Next day as standard
//                    </div>
//                    <div className="w-[270px] h-[48px] font-[family-name:var(--font-satoshi-light)] text-[16px] leading-[150%] text-[#2A254B]">
//                      Order before 3pm and get your order the next day as standard
//                    </div>
//                  </div>
//                </div>
//                {/* Feature 2 */}
//                <div className="absolute flex flex-col items-start p-0 gap-[13px] w-[265px] h-[124px] left-[1065px] top-[145px]">
//                  <div className="w-[24px] h-[24px] bg-white bg-blend-multiply flex-none order-0 flex-grow-0"></div>
//                  <div className="absolute left-[4.5%] top-[1.5%] h-[21.42px] w-[16.5px]">
//                    <Image src="/photos/sprout.png" alt="sprout" layout="fill" objectFit="cover"/>
//                  </div>
//                  <div className="flex flex-col items-start p-0 gap-[11px] w-[265px] h-[87px] flex-none order-1 flex-grow-0">
//                    <div className="w-[196px] h-[28px] font-[family-name:var(--font-clash-display)] text-[20px] leading-[140%] text-[#2A254B]">
//                      Recycled packaging
//                    </div>
//                    <div className="w-[265px] h-[48px] font-[family-name:var(--font-satoshi-light)] text-[16px] leading-[150%] text-[#2A254B]">
//                      We use 100% recycled packaging to ensure our footprint is manageable
//                    </div>
//                  </div>
//                </div>
//                {/* Feature 3 */}
//                <div className="absolute flex flex-col items-start p-0 gap-[16px] w-[235px] h-[124px] left-[739px] top-[145px]">
//                  <div className="w-[24px] h-[24px] bg-white bg-blend-multiply flex-none order-0 flex-grow-0"></div>
//                  <div className="absolute left-[1.5px] top-[4.5px] h-[15px] w-[21px]">
//                    <Image src="/photos/purchase.png" alt="purchase" layout="fill" objectFit="cover"/>
//                  </div>
//                  <div className="flex flex-col items-start p-0 gap-[8px] w-[235px] h-[84px] flex-none order-1 flex-grow-0">
//                    <div className="w-[196px] h-[28px] font-[family-name:var(--font-clash-display)] text-[20px] leading-[140%] text-[#2A254B]">
//                      Unbeatable prices
//                    </div>
//                    <div className="w-[235px] h-[48px] font-[family-name:var(--font-satoshi-light)] text-[16px] leading-[150%] text-[#2A254B]">
//                      For our materials and quality you won’t find better prices anywhere
//                    </div>
//                  </div>
//                </div>
//                {/* Feature 4 */}
//                <div className="absolute flex flex-col items-start p-0 gap-[16px] w-[266px] h-[124px] left-[415px] top-[145px]">
//                  <div className="w-[24px] h-[24px] bg-white bg-blend-multiply flex-none order-0 flex-grow-0"></div>
//                  <div className="absolute left-[1.5px] top-[1.5px] h-[21px] w-[21px]">
//                    <Image src="/photos/checkMark.png" alt="checkMark" layout="fill" objectFit="cover"/>
//                  </div>
//                  <div className="flex flex-col items-start p-0 gap-[8px] w-[266px] h-[84px] flex-none order-1 flex-grow-0">
//                    <div className="w-[205px] h-[28px] font-[family-name:var(--font-clash-display)] text-[20px] leading-[140%] text-[#2A254B]">
//                      Made by true artisans
//                    </div>
//                    <div className="w-[266px] h-[48px] font-[family-name:var(--font-satoshi-light)] text-[16px] leading-[150%] text-[#2A254B]">
//                      Handmade crafted goods made with real passion and craftsmanship
//                    </div>
//                  </div>
//                </div>
//              </div>
//                    {/* Email sign-up */}
//        <section className="relative w-full h-[481px] bg-[#F9F9F9] flex-none order-5 flex-grow-0">
//          <div className="absolute w-[1273px] h-[364px] left-[93px] top-[52px] bg-white">
//            {/* Text Content */}
//            <div className="absolute flex flex-col items-center p-0 gap-[16px] w-[571px] h-[114px] left-[351px] top-[68px]">
//              <div className="w-[571px] h-[50px] font-[family-name:var(--font-clash-display)] text-[36px] leading-[140%] text-center text-[#2A254B]">
//                Join the club and get the benefits
//              </div>
//              <div className="w-[470px] h-[48px] font-[family-name:var(--font-satoshi-light)] text-[16px] leading-[150%] text-center text-[#2A254B]">
//                Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more
//              </div>
//            </div>
//            {/* Text input */}
//            <div className="absolute flex flex-row items-start p-0 w-[472px] h-[56px] left-[400px] top-[254px]">
//              <div className="box-border w-[354px] h-[56px] bg-[#F9F9F9] flex-none order-0 flex-grow">
//                <div className="absolute w-[117px] h-[22px] left-[32px] top-[17px] font-[family-name:var(--font-satoshi-light)] text-[16px] leading-[22px] text-[#2A254B] opacity-20">
//                  your@email.com
//                </div>
//              </div>
//              <button className="box-border flex flex-row items-center justify-center gap-[10px] w-[118px] h-[56px] bg-[#2A254B] flex-none order-1 flex-grow-0">
//                <span className="w-[60px] h-[24px] font-[family-name:var(--font-satoshi-light)] text-[16px] leading-[150%] text-white">
//                  Sign up
//                </span>
//              </button>
//            </div>
//          </div>
//        </section>
//      </div>
//    )
//  }

//  export default Product;

//  import React from 'react';
//  import Link from 'next/link';

//  const Product = () => {
//    return (
//      <div className="flex flex-col items-center bg-[#F9F9F9] w-full min-h-screen">
//        {/* Banner Section */}
//        <div className="w-full h-[41px] bg-[#2A254B] flex items-center justify-between px-4">
//          <div className="flex items-center gap-2">
//            <div className="w-4 h-4 bg-white bg-opacity-20"></div>
//            <p className="text-white text-sm font-['Satoshi']">
//              Free delivery on all orders over £50 with code easter checkout
//            </p>
//          </div>
//          <div className="w-6 h-6 bg-white bg-opacity-20"></div>
//        </div>

//        {/* Top Navigation */}
//        <div className="w-full h-[80px] bg-white flex items-center justify-between px-8">
//          <h1 className="text-2xl font-['Clash_Display'] text-[#22202E]">Avion</h1>
//          <div className="flex gap-10">
//            <Link href="#" className="text-[#726E8D] text-base font-['Satoshi']">Plant pots</Link>
//            <Link href="#" className="text-[#726E8D] text-base font-['Satoshi']">Ceramics</Link>
//            <Link href="#" className="text-[#726E8D] text-base font-['Satoshi']">Tables</Link>
//            <Link href="#" className="text-[#726E8D] text-base font-['Satoshi']">Chairs</Link>
//            <Link href="#" className="text-[#726E8D] text-base font-['Satoshi']">Crockery</Link>
//            <Link href="#" className="text-[#726E8D] text-base font-['Satoshi']">Tableware</Link>
//            <Link href="#" className="text-[#726E8D] text-base font-['Satoshi']">Cutlery</Link>
//          </div>
//          <div className="flex gap-4">
//            <div className="w-4 h-4 bg-[#2A254B]"></div>
//            <div className="w-4 h-4 bg-[#2A254B]"></div>
//            <div className="w-4 h-4 bg-[#2A254B]"></div>
//          </div>
//        </div>

//        {/* Product Details Section */}
//        <div className="w-full bg-white flex">
//          {/* Image Section */}
//          <div className="w-1/2 h-[759px] bg-gray-200"></div>

//          {/* Description Section */}
//          <div className="w-1/2 p-12">
//            <h2 className="text-4xl font-['Clash_Display'] text-[#2A254B]">The Dandy Chair</h2>
//            <p className="text-2xl font-['Satoshi'] text-[#12131A] mt-4">£250</p>

//            {/* Description */}
//            <div className="mt-8">
//              <h3 className="text-lg font-['Clash_Display'] text-[#2A254B]">Description</h3>
//              <p className="text-base font-['Satoshi'] text-[#505977] mt-4">
//                A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.
//              </p>
//              <ul className="list-disc list-inside mt-4 text-base font-['Satoshi'] text-[#505977]">
//                <li>Premium material</li>
//                <li>Handmade upholstery</li>
//                <li>Quality timeless classic</li>
//              </ul>
//            </div>

//            {/* Dimensions */}
//            <div className="mt-8">
//              <h3 className="text-lg font-['Clash_Display'] text-[#2A254B]">Dimensions</h3>
//              <div className="flex gap-8 mt-4">
//                <div>
//                  <p className="text-sm font-['Clash_Display'] text-[#2A254B]">Height</p>
//                  <p className="text-base font-['Satoshi'] text-[#505977]">110cm</p>
//                </div>
//                <div>
//                  <p className="text-sm font-['Clash_Display'] text-[#2A254B]">Width</p>
//                  <p className="text-base font-['Satoshi'] text-[#505977]">75cm</p>
//                </div>
//                <div>
//                  <p className="text-sm font-['Clash_Display'] text-[#2A254B]">Depth</p>
//                  <p className="text-base font-['Satoshi'] text-[#505977]">50cm</p>
//                </div>
//              </div>
//            </div>

//            {/* Quantity and Add to Cart */}
//            <div className="mt-8">
//              <h3 className="text-lg font-['Clash_Display'] text-[#2A254B]">Quantity</h3>
//              <div className="flex items-center gap-4 mt-4">
//                <div className="flex items-center gap-4 bg-[#F9F9F9] p-2">
//                  <button className="text-[#CAC6DA] text-base">-</button>
//                  <span className="text-[#2A254B] text-base">1</span>
//                  <button className="text-[#CAC6DA] text-base">+</button>
//                </div>
//                <button className="bg-[#2A254B] text-white px-8 py-4 text-base font-['Satoshi']">
//                  Add to cart
//                </button>
//              </div>
//            </div>
//          </div>
//        </div>

//        {/* Product Listings */}
//        <div className="w-full bg-white py-12">
//          <h2 className="text-3xl font-['Clash_Display'] text-[#2A254B] text-center">New ceramics</h2>
//          <div className="grid grid-cols-4 gap-8 mt-8 px-12">
//            {/* Product Card */}
//            {[1, 2, 3, 4].map((item) => (
//              <div key={item} className="flex flex-col gap-4">
//                <div className="w-full h-[375px] bg-gray-200"></div>
//                <h3 className="text-xl font-['Clash_Display'] text-[#2A254B]">The Dandy Chair</h3>
//                <p className="text-lg font-['Satoshi'] text-[#2A254B]">£250</p>
//              </div>
//            ))}
//          </div>
//          <button className="bg-[#F9F9F9] text-[#2A254B] px-8 py-4 text-base font-['Satoshi'] mx-auto block mt-8">
//            View collection
//          </button>
//        </div>

//        {/* Features Section */}
//        <div className="w-full bg-white py-12">
//          <h2 className="text-3xl font-['Clash_Display'] text-[#2A254B] text-center">
//            What makes our brand different
//          </h2>
//          <div className="grid grid-cols-4 gap-8 mt-8 px-12">
//            {/* Feature Block */}
//            {[1, 2, 3, 4].map((item) => (
//              <div key={item} className="flex flex-col gap-4">
//                <div className="w-6 h-6 bg-[#2A254B]"></div>
//                <h3 className="text-xl font-['Clash_Display'] text-[#2A254B]">Next day as standard</h3>
//                <p className="text-base font-['Satoshi'] text-[#2A254B]">
//                  Order before 3pm and get your order the next day as standard.
//                </p>
//              </div>
//            ))}
//          </div>
//        </div>

//        {/* Email Sign-up Section */}
//        <div className="w-full bg-[#F9F9F9] py-12">
//          <div className="bg-white p-12 mx-auto max-w-4xl">
//            <h2 className="text-4xl font-['Clash_Display'] text-[#2A254B] text-center">
//              Join the club and get the benefits
//            </h2>
//            <p className="text-base font-['Satoshi'] text-[#2A254B] text-center mt-4">
//              Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more.
//            </p>
//            <div className="flex mt-8">
//              <input
//                type="email"
//                placeholder="your@email.com"
//                className="w-[70%] h-14 bg-[#F9F9F9] pl-4 placeholder-[#2A254B] placeholder-opacity-20"
//              />
//              <button className="w-[30%] h-14 bg-[#2A254B] text-white text-base font-['Satoshi']">
//                Sign up
//              </button>
//            </div>
//          </div>
//        </div>

//        {/* Footer Section */}
//        <div className="w-full bg-[#2A254B] py-12">
//          <div className="max-w-7xl mx-auto px-8">
//            <div className="flex justify-between">
//              {/* Address */}
//              <div className="flex flex-col gap-3">
//                <h2 className="text-4xl font-['Clash_Display'] text-white">Avion</h2>
//                <p className="text-sm font-['Satoshi'] text-white">21 New York Street</p>
//                <p className="text-sm font-['Satoshi'] text-white">New York City</p>
//                <p className="text-sm font-['Satoshi'] text-white">United States of America</p>
//                <p className="text-sm font-['Satoshi'] text-white">432 34</p>
//              </div>

//              {/* Social Links */}
//              <div className="flex flex-col gap-3">
//                <h3 className="text-base font-['Clash_Display'] text-white">Social links</h3>
//                <div className="flex gap-6">
//                  {[1, 2, 3, 4, 5].map((item) => (
//                    <div key={item} className="w-6 h-6 bg-white"></div>
//                  ))}
//                </div>
//              </div>

//              {/* Menu */}
//              <div className="flex flex-col gap-3">
//                <h3 className="text-base font-['Clash_Display'] text-white">Menu</h3>
//                <Link href="#" className="text-sm font-['Satoshi'] text-white">New arrivals</Link>
//                <Link href="#" className="text-sm font-['Satoshi'] text-white">Best sellers</Link>
//                <Link href="#" className="text-sm font-['Satoshi'] text-white">Recently viewed</Link>
//                <Link href="#" className="text-sm font-['Satoshi'] text-white">Popular this week</Link>
//                <Link href="#" className="text-sm font-['Satoshi'] text-white">All products</Link>
//              </div>

//              {/* Categories */}
//              <div className="flex flex-col gap-3">
//                <h3 className="text-base font-['Clash_Display'] text-white">Categories</h3>
//                <Link href="#" className="text-sm font-['Satoshi'] text-white">Crockery</Link>
//                <Link href="#" className="text-sm font-['Satoshi'] text-white">Furniture</Link>
//                <Link href="#" className="text-sm font-['Satoshi'] text-white">Homeware</Link>
//                <Link href="#" className="text-sm font-['Satoshi'] text-white">Plant pots</Link>
//                <Link href="#" className="text-sm font-['Satoshi'] text-white">Chairs</Link>
//              </div>

//              {/* Our Company */}
//              <div className="flex flex-col gap-3">
//                <h3 className="text-base font-['Clash_Display'] text-white">Our company</h3>
//                <Link href="#" className="text-sm font-['Satoshi'] text-white">About us</Link>
//                <Link href="#" className="text-sm font-['Satoshi'] text-white">Vacancies</Link>
//                <Link href="#" className="text-sm font-['Satoshi'] text-white">Contact us</Link>
//                <Link href="#" className="text-sm font-['Satoshi'] text-white">Privacy</Link>
//                <Link href="#" className="text-sm font-['Satoshi'] text-white">Returns policy</Link>
//              </div>
//            </div>

//            {/* Divider */}
//            <div className="w-full border-t border-[#4E4D93] my-8"></div>

//            {/* Copyright */}
//            <p className="text-sm font-['Satoshi'] text-white text-center">
//              Copyright 2022 Avion LTD
//            </p>
//          </div>
//        </div>
//      </div>
//    );
//  };

//  export default Product;

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Product = () => {
  return (
    <div className="flex flex-col bg-[#F9F9F9] w-full min-h-screen">
       {/* Banner */}
       <section className="flex flex-row items-center justify-center p-2 w-full bg-[#2A254B] relative">
        {/* Delivery Icon */}
        <div className="w-4 h-4 bg-blend-multiply mb-2"><svg width="18" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" fill="none" />
          <path d="M12 12H3V13.5H12V12Z" fill="white" />
          <path d="M9 8.25H1.5V9.75H9V8.25Z" fill="white" />
          <path d="M22.4392 12.4548L20.1892 7.2048C20.1315 7.06979 20.0355 6.95469 19.9129 6.87383C19.7904 6.79297 19.6468 6.74991 19.5 6.75H17.25V5.25C17.25 5.05109 17.171 4.86032 17.0303 4.71967C16.8897 4.57902 16.6989 4.5 16.5 4.5H4.5V6H15.75V15.4172C15.4083 15.6156 15.1092 15.8797 14.8701 16.1943C14.6309 16.5089 14.4564 16.8677 14.3566 17.25H9.64342C9.46088 16.543 9.02675 15.9269 8.42242 15.517C7.81809 15.1072 7.08504 14.9319 6.36067 15.0239C5.63631 15.1159 4.97038 15.4689 4.48768 16.0168C4.00499 16.5647 3.73869 17.2698 3.73869 18C3.73869 18.7302 4.00499 19.4353 4.48768 19.9832C4.97038 20.5311 5.63631 20.8841 6.36067 20.9761C7.08504 21.0681 7.81809 20.8928 8.42242 20.483C9.02675 20.0731 9.46088 19.457 9.64342 18.75H14.3566C14.5201 19.3933 14.8934 19.9638 15.4174 20.3712C15.9414 20.7787 16.5862 20.9999 17.25 20.9999C17.9138 20.9999 18.5586 20.7787 19.0826 20.3712C19.6066 19.9638 19.9799 19.3933 20.1434 18.75H21.75C21.9489 18.75 22.1397 18.671 22.2803 18.5303C22.421 18.3897 22.5 18.1989 22.5 18V12.75C22.5 12.6485 22.4793 12.548 22.4392 12.4548ZM6.75 19.5C6.45333 19.5 6.16332 19.412 5.91665 19.2472C5.66997 19.0824 5.47771 18.8481 5.36418 18.574C5.25065 18.2999 5.22094 17.9983 5.27882 17.7074C5.3367 17.4164 5.47956 17.1491 5.68934 16.9393C5.89912 16.7296 6.16639 16.5867 6.45736 16.5288C6.74834 16.4709 7.04994 16.5006 7.32403 16.6142C7.59811 16.7277 7.83238 16.92 7.9972 17.1666C8.16203 17.4133 8.25 17.7033 8.25 18C8.24954 18.3977 8.09136 18.779 7.81016 19.0602C7.52895 19.3414 7.14768 19.4995 6.75 19.5ZM17.25 8.25H19.0056L20.6129 12H17.25V8.25ZM17.25 19.5C16.9533 19.5 16.6633 19.412 16.4166 19.2472C16.17 19.0824 15.9777 18.8481 15.8642 18.574C15.7506 18.2999 15.7209 17.9983 15.7788 17.7074C15.8367 17.4164 15.9796 17.1491 16.1893 16.9393C16.3991 16.7296 16.6664 16.5867 16.9574 16.5288C17.2483 16.4709 17.5499 16.5006 17.824 16.6142C18.0981 16.7277 18.3324 16.92 18.4972 17.1666C18.662 17.4133 18.75 17.7033 18.75 18C18.7495 18.3977 18.5914 18.779 18.3102 19.0602C18.0289 19.3414 17.6477 19.4995 17.25 19.5ZM21 17.25H20.1434C19.9782 16.6076 19.6045 16.0382 19.0808 15.631C18.5572 15.2239 17.9133 15.0019 17.25 15V13.5H21V17.25Z" fill="white" />
        </svg></div>

        {/* Text Content */}
        <p className="text-white font-[family-name:var(--font-satoshi-light)]  font-normal text-sm leading-[19px] mx-2">
          Free delivery on all orders over £50 with code easter checkout
        </p>

        {/* Close Icon (Positioned absolutely on desktop, inline on mobile) */}
        <div className="md:absolute md:right-4 md:top-3.5 w-6 h-6 bg-blend-multiply"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http:www.w3.org/2000/svg">
          <path d="M12 1.05L10.95 0L6 4.95L1.05 0L0 1.05L4.95 6L0 10.95L1.05 12L6 7.05L10.95 12L12 10.95L7.05 6L12 1.05Z" fill="white" />
        </svg>
        </div>
      </section>
      {/* Product Details Section */}
<div className="w-full bg-white flex flex-col md:flex-row">
  {/* Image Section */}
  <div className="w-full md:w-1/2 relative h-[400px] md:h-auto">
    <Image
      src="/photos/dandy3.png"
      alt="Description of the image"
      layout="fill"
      objectFit="cover"
      className="w-full h-full"
    />
  </div>

  {/* Description Section */}
  <div className="w-full md:w-1/2 p-6 md:px-12">
    <h2 className="text-3xl md:text-4xl font-['Clash_Display'] text-[#2A254B]">The Dandy Chair</h2>
    <p className="text-2xl font-['Satoshi'] text-[#12131A] mt-4">£250</p>

    {/* Description */}
    <div className="mt-8">
      <h3 className="text-lg font-['Clash_Display'] text-[#2A254B]">Description</h3>
      <p className="text-base font-['Satoshi'] text-[#505977] mt-4">
        A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.
      </p>
      <ul className="list-disc list-inside mt-4 text-base font-['Satoshi'] text-[#505977]">
        <li>Premium material</li>
        <li>Handmade upholstery</li>
        <li>Quality timeless classic</li>
      </ul>
    </div>

    {/* Dimensions */}
    <div className="mt-8">
      <h3 className="text-lg font-['Clash_Display'] text-[#2A254B]">Dimensions</h3>
      <div className="flex gap-8 mt-4">
        <div>
          <p className="text-sm font-['Clash_Display'] text-[#2A254B]">Height</p>
          <p className="text-base font-['Satoshi'] text-[#505977]">110cm</p>
        </div>
        <div>
          <p className="text-sm font-['Clash_Display'] text-[#2A254B]">Width</p>
          <p className="text-base font-['Satoshi'] text-[#505977]">75cm</p>
        </div>
        <div>
          <p className="text-sm font-['Clash_Display'] text-[#2A254B]">Depth</p>
          <p className="text-base font-['Satoshi'] text-[#505977]">50cm</p>
        </div>
      </div>
    </div>

    {/* Quantity and Add to Cart */}
    <div className="mt-8">
      <h3 className="text-lg font-['Clash_Display'] text-[#2A254B]">Quantity</h3>
      <div className="flex flex-col md:flex-row items-center gap-4 mt-4">
        <div className="flex items-center gap-4 bg-[#F9F9F9] p-2 w-full md:w-auto">
          <button className="text-[#CAC6DA] text-base">-</button>
          <span className="text-[#2A254B] text-base">1</span>
          <button className="text-[#CAC6DA] text-base">+</button>
        </div>
        <button className="bg-[#2A254B] text-white px-8 py-4 text-base font-['Satoshi'] w-full md:w-auto">
          Add to cart
        </button>
      </div>
    </div>
  </div>
</div>
      {/* New Ceramics Section */}
      <section className="px-6 py-12 md:px-20 lg:px-24">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-[family-name:var(--font-clash-display)] mb-8 text-left">New ceramics</h3>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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

        {/* View Collection Button */}
        <div className="flex justify-center">
          <Link
            href="#"
            className="bg-gray-100 py-4 px-8 font-[family-name:var(--font-satoshi-light)] text-[#2A254B] w-full sm:w-auto text-center hover:bg-gray-200 transition-colors"
          >
            View collection
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative w-full bg-white p-6 md:py-10 md:px-16 lg:px-24">
        {/* Features Heading */}
        <div className="text-center mx-auto font-[family-name:var(--font-clash-display)] text-xl md:text-2xl lg:text-3xl leading-[140%] text-[#2A254B] mb-8 md:mb-12">
          What makes our brand different
        </div>
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 lg:gap-8">
          {/* Feature 1 */}
          <div className="flex flex-col items-start gap-4 w-full md:w-[45%] lg:w-[22%]">
            <div className="flex flex-col items-start gap-2 w-full">
              <div className="relative w-6 h-6 bg-white bg-blend-multiply">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http:www.w3.org/2000/svg">
                  <rect width="24" height="24" fill="white" style={{ mixBlendMode: 'multiply' }} />
                  <path d="M12 12H3V13.5H12V12Z" fill="#2A254B" />
                  <path d="M9 8.25H1.5V9.75H9V8.25Z" fill="#2A254B" />
                  <path d="M22.4392 12.4548L20.1892 7.2048C20.1315 7.06979 20.0355 6.95469 19.9129 6.87383C19.7904 6.79297 19.6468 6.74991 19.5 6.75H17.25V5.25C17.25 5.05109 17.171 4.86032 17.0303 4.71967C16.8897 4.57902 16.6989 4.5 16.5 4.5H4.5V6H15.75V15.4172C15.4083 15.6156 15.1092 15.8797 14.8701 16.1943C14.6309 16.5089 14.4564 16.8677 14.3566 17.25H9.64342C9.46088 16.543 9.02675 15.9269 8.42242 15.517C7.81809 15.1072 7.08504 14.9319 6.36067 15.0239C5.63631 15.1159 4.97038 15.4689 4.48768 16.0168C4.00499 16.5647 3.73869 17.2698 3.73869 18C3.73869 18.7302 4.00499 19.4353 4.48768 19.9832C4.97038 20.5311 5.63631 20.8841 6.36067 20.9761C7.08504 21.0681 7.81809 20.8928 8.42242 20.483C9.02675 20.0731 9.46088 19.457 9.64342 18.75H14.3566C14.5201 19.3933 14.8934 19.9638 15.4174 20.3712C15.9414 20.7787 16.5862 20.9999 17.25 20.9999C17.9138 20.9999 18.5586 20.7787 19.0826 20.3712C19.6066 19.9638 19.9799 19.3933 20.1434 18.75H21.75C21.9489 18.75 22.1397 18.671 22.2803 18.5303C22.421 18.3897 22.5 18.1989 22.5 18V12.75C22.5 12.6485 22.4793 12.548 22.4392 12.4548ZM6.75 19.5C6.45333 19.5 6.16332 19.412 5.91665 19.2472C5.66997 19.0824 5.47771 18.8481 5.36418 18.574C5.25065 18.2999 5.22094 17.9983 5.27882 17.7074C5.3367 17.4164 5.47956 17.1491 5.68934 16.9393C5.89912 16.7296 6.16639 16.5867 6.45736 16.5288C6.74834 16.4709 7.04994 16.5006 7.32403 16.6142C7.59811 16.7277 7.83238 16.92 7.9972 17.1666C8.16203 17.4133 8.25 17.7033 8.25 18C8.24954 18.3977 8.09136 18.779 7.81016 19.0602C7.52895 19.3414 7.14768 19.4995 6.75 19.5ZM17.25 8.25H19.0056L20.6129 12H17.25V8.25ZM17.25 19.5C16.9533 19.5 16.6633 19.412 16.4166 19.2472C16.17 19.0824 15.9777 18.8481 15.8642 18.574C15.7506 18.2999 15.7209 17.9983 15.7788 17.7074C15.8367 17.4164 15.9796 17.1491 16.1893 16.9393C16.3991 16.7296 16.6664 16.5867 16.9574 16.5288C17.2483 16.4709 17.5499 16.5006 17.824 16.6142C18.0981 16.7277 18.3324 16.92 18.4972 17.1666C18.662 17.4133 18.75 17.7033 18.75 18C18.7495 18.3977 18.5914 18.779 18.3102 19.0602C18.0289 19.3414 17.6477 19.4995 17.25 19.5ZM21 17.25H20.1434C19.9782 16.6076 19.6045 16.0382 19.0808 15.631C18.5572 15.2239 17.9133 15.0019 17.25 15V13.5H21V17.25Z" fill="#2A254B" />
                </svg>
              </div>
              <div className="font-[family-name:var(--font-clash-display)] text-lg md:text-xl lg:text-2xl leading-[140%] text-[#2A254B]">
                Next day as standard
              </div>
              <div className="font-[family-name:var(--font-satoshi-light)] text-base md:text-lg leading-[150%] text-[#2A254B]">
                Order before 3pm and get your order the next day as standard
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-start gap-4 w-full md:w-[45%] lg:w-[22%]">
            <div className="flex flex-col items-start gap-2 w-full">
              <div className="relative w-6 h-6 bg-white bg-blend-multiply">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http:www.w3.org/2000/svg">
                  <path d="M9.5 15.0605L5.75 11.3097L6.80976 10.25L9.5 12.9395L15.1888 7.25L16.25 8.31125L9.5 15.0605Z" fill="#2A254B" />
                  <path d="M11 0.5C8.9233 0.5 6.89323 1.11581 5.16652 2.26957C3.4398 3.42332 2.09399 5.0632 1.29927 6.98182C0.504549 8.90045 0.296614 11.0116 0.701759 13.0484C1.1069 15.0852 2.10693 16.9562 3.57538 18.4246C5.04383 19.8931 6.91476 20.8931 8.95156 21.2982C10.9884 21.7034 13.0996 21.4955 15.0182 20.7007C16.9368 19.906 18.5767 18.5602 19.7304 16.8335C20.8842 15.1068 21.5 13.0767 21.5 11C21.5 8.21523 20.3938 5.54451 18.4246 3.57538C16.4555 1.60625 13.7848 0.5 11 0.5ZM11 20C9.21997 20 7.47992 19.4722 5.99987 18.4832C4.51983 17.4943 3.36628 16.0887 2.68509 14.4442C2.0039 12.7996 1.82567 10.99 2.17294 9.24419C2.5202 7.49836 3.37737 5.89471 4.63604 4.63604C5.89472 3.37737 7.49836 2.5202 9.24419 2.17293C10.99 1.82567 12.7996 2.0039 14.4442 2.68508C16.0887 3.36627 17.4943 4.51983 18.4832 5.99987C19.4722 7.47991 20 9.21997 20 11C20 13.3869 19.0518 15.6761 17.364 17.364C15.6761 19.0518 13.387 20 11 20Z" fill="#2A254B" />
                </svg>
              </div>
              <div className="font-[family-name:var(--font-clash-display)] text-lg md:text-xl lg:text-2xl leading-[140%] text-[#2A254B]">
                Made by true artisans
              </div>
              <div className="font-[family-name:var(--font-satoshi-light)] text-base md:text-lg leading-[150%] text-[#2A254B]">
                Handmade crafted goods made with real passion and craftsmanship
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-start gap-4 w-full md:w-[45%] lg:w-[22%]">
            <div className="flex flex-col items-start gap-2 w-full">
              <div className="relative w-6 h-6 bg-white bg-blend-multiply">
                <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http:www.w3.org/2000/svg">
                  <path d="M20 0.5H2C1.60218 0.5 1.22064 0.658035 0.93934 0.93934C0.658035 1.22064 0.5 1.60218 0.5 2V14C0.5 14.3978 0.658035 14.7794 0.93934 15.0607C1.22064 15.342 1.60218 15.5 2 15.5H20C20.3978 15.5 20.7794 15.342 21.0607 15.0607C21.342 14.7794 21.5 14.3978 21.5 14V2C21.5 1.60218 21.342 1.22064 21.0607 0.93934C20.7794 0.658035 20.3978 0.5 20 0.5ZM20 2V4.25H2V2H20ZM2 14V5.75H20V14H2Z" fill="#2A254B" />
                  <path d="M11 11H3.5V12.5H11V11Z" fill="#2A254B" />
                </svg>
              </div>
              <div className="font-[family-name:var(--font-clash-display)] text-lg md:text-xl lg:text-2xl leading-[140%] text-[#2A254B]">
                Unbeatable prices
              </div>
              <div className="font-[family-name:var(--font-satoshi-light)] text-base md:text-lg leading-[150%] text-[#2A254B]">
                For our materials and quality you won’t find better prices anywhere
              </div>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col items-start gap-4 w-full md:w-[45%] lg:w-[22%]">
            <div className="flex flex-col items-start gap-2 w-full">
              <div className="relative w-6 h-6 bg-white bg-blend-multiply">
                <svg width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http:www.w3.org/2000/svg">
                  <path d="M14.75 0.5C13.0878 0.502747 11.4651 1.00708 10.0942 1.94704C8.72323 2.887 7.66789 4.21881 7.06617 5.7683C6.58413 5.06903 5.93949 4.49727 5.18767 4.10216C4.43584 3.70705 3.59932 3.50041 2.75 3.5H0.5V5.75C0.501548 7.14191 1.05517 8.47637 2.0394 9.4606C3.02363 10.4448 4.35809 10.9985 5.75 11H6.5V17.787C4.7773 17.9554 3.16718 18.7191 1.94675 19.9465L3.00725 21.0071C3.63464 20.3798 4.39333 19.8995 5.22869 19.6006C6.06405 19.3018 6.95528 19.192 7.83819 19.279C8.7211 19.3661 9.57373 19.6478 10.3347 20.104C11.0956 20.5602 11.7459 21.1794 12.2387 21.9172L13.4849 21.0826C12.8701 20.1638 12.0593 19.3926 11.111 18.8244C10.1626 18.2562 9.10018 17.9052 8 17.7965V11H8.75C10.9373 10.9975 13.0343 10.1275 14.5809 8.58089C16.1275 7.03425 16.9975 4.93727 17 2.75V0.5H14.75ZM5.75 9.5C4.75579 9.49887 3.80262 9.10342 3.0996 8.4004C2.39658 7.69738 2.00113 6.74421 2 5.75V5H2.75C3.74423 5.00107 4.69744 5.3965 5.40047 6.09953C6.1035 6.80256 6.49893 7.75577 6.5 8.75V9.5H5.75ZM15.5 2.75C15.498 4.5396 14.7862 6.25534 13.5208 7.52078C12.2553 8.78622 10.5396 9.49801 8.75 9.5H8V8.75C8.00199 6.9604 8.71378 5.24466 9.97922 3.97922C11.2447 2.71378 12.9604 2.00199 14.75 2H15.5V2.75Z" fill="#2A254B" />
                </svg>
              </div>
              <div className="font-[family-name:var(--font-clash-display)] text-lg md:text-xl lg:text-2xl leading-[140%] text-[#2A254B]">
                Recycled packaging
              </div>
              <div className="font-[family-name:var(--font-satoshi-light)] text-base md:text-lg leading-[150%] text-[#2A254B]">
                We use 100% recycled packaging to ensure our footprint is manageable
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Email Sign-Up Section */}
      <section className="px-6 py-12 bg-[#F9F9F9] ">
        <div className="max-w-[1273px] mx-auto bg-white p-12">
          <div className="max-w-[571px] mx-auto text-center">
            <h4 className="text-[36px] font-[family-name:var(--font-clash-display)] text-[#2A254B] mb-4">
              Join the club and get the benefits
            </h4>
            <p className="text-[16px] font-[family-name:var(--font-satoshi-light)] text-[#2A254B] mb-8">
              Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more
            </p>
            <div className="flex flex-row gap-2 max-w-[472px] mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="py-4 px-6 font-[family-name:var(--font-satoshi-light)] text-[#2A254B] w-full bg-[#F9F9F9] focus:outline-none"
              />
              <button className="bg-[#2A254B] text-white py-4 px-8 font-[family-name:var(--font-satoshi-light)] whitespace-nowrap">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;