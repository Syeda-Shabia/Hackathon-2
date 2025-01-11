import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <div className="bg-white ">
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
      {/* Page Header */}
      <div className="p-6 md:p-12">
        <h1 className="font-[family-name:var(--font-clash-display)] font-semibold md:text-4xl text-3xl text-[#2A254B] mb-8">
          A brand built on the love of craftmanship, quality and outstanding customer service
        </h1>
        <Link href="/listing" className="bg-[#F9F9F9] text-[#2A254B] py-4 px-8 inline-block">
          View our products
        </Link>
      </div>

      {/* Features Section */}
      <div className="flex flex-col md:flex-row p-4 md:p-8 gap-8">
        <div className="bg-[#2A254B] text-white p-8 flex-1">
          <h2 className="font-[family-name:var(--font-clash-display)] text-2xl mb-4">It started with a small idea</h2>
          <p className="font-[family-name:var(--font-satoshi-light)] text-sm mb-8">
            A global brand with local beginnings, our story began in a small studio in South London in early 2014
          </p>
          <Link href="#" className="bg-[rgba(249,249,249,0.15)] text-white py-4 px-8 inline-block">
            View collection
          </Link>
        </div>
        <div className="flex-1">
          <Image src="/photos/Image_block.png" alt="Our story" width={600} height={400} layout='responsive' className="w-full h-auto" />
        </div>
      </div>

      {/* Service Section */}
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 w-full">
          <Image src="/photos/feature2.png" alt="Our service" width={600} height={400} layout='responsive' className="w-full h-auto" />
        </div>
        <div className="flex-1 p-4">
          <h2 className="font-[family-name:var(--font-clash-display)] text-2xl text-[#2A254B] mb-4">
            Our service isn’t just personal, it’s actually hyper personally exquisite
          </h2>
          <p className="font-[family-name:var(--font-satoshi-light)] text-sm text-[#505977] mb-8">
            When we started Avion, the idea was simple. Make high-quality furniture affordable and available for the mass market.
            Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become
            the hotbed for the London interior design community.
          </p>
          <Link href="#" className="bg-white text-[#2A254B] py-4 px-8 inline-block">
            Get in touch
          </Link>
        </div>
      </div>

      {/* Brand Differentiators */}
      <div className="p-8">
        <h2 className="font-[family-name:var(--font-clash-display)] text-2xl text-[#2A254B] text-center mb-8">What makes our brand different</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="bg-[#F9F9F9] p-8">
            <div className="relative w-6 h-6 bg-white bg-blend-multiply">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http:www.w3.org/2000/svg">
                <rect width="24" height="24" fill="white" style={{ mixBlendMode: 'multiply' }} />
                <path d="M12 12H3V13.5H12V12Z" fill="#2A254B" />
                <path d="M9 8.25H1.5V9.75H9V8.25Z" fill="#2A254B" />
                <path d="M22.4392 12.4548L20.1892 7.2048C20.1315 7.06979 20.0355 6.95469 19.9129 6.87383C19.7904 6.79297 19.6468 6.74991 19.5 6.75H17.25V5.25C17.25 5.05109 17.171 4.86032 17.0303 4.71967C16.8897 4.57902 16.6989 4.5 16.5 4.5H4.5V6H15.75V15.4172C15.4083 15.6156 15.1092 15.8797 14.8701 16.1943C14.6309 16.5089 14.4564 16.8677 14.3566 17.25H9.64342C9.46088 16.543 9.02675 15.9269 8.42242 15.517C7.81809 15.1072 7.08504 14.9319 6.36067 15.0239C5.63631 15.1159 4.97038 15.4689 4.48768 16.0168C4.00499 16.5647 3.73869 17.2698 3.73869 18C3.73869 18.7302 4.00499 19.4353 4.48768 19.9832C4.97038 20.5311 5.63631 20.8841 6.36067 20.9761C7.08504 21.0681 7.81809 20.8928 8.42242 20.483C9.02675 20.0731 9.46088 19.457 9.64342 18.75H14.3566C14.5201 19.3933 14.8934 19.9638 15.4174 20.3712C15.9414 20.7787 16.5862 20.9999 17.25 20.9999C17.9138 20.9999 18.5586 20.7787 19.0826 20.3712C19.6066 19.9638 19.9799 19.3933 20.1434 18.75H21.75C21.9489 18.75 22.1397 18.671 22.2803 18.5303C22.421 18.3897 22.5 18.1989 22.5 18V12.75C22.5 12.6485 22.4793 12.548 22.4392 12.4548ZM6.75 19.5C6.45333 19.5 6.16332 19.412 5.91665 19.2472C5.66997 19.0824 5.47771 18.8481 5.36418 18.574C5.25065 18.2999 5.22094 17.9983 5.27882 17.7074C5.3367 17.4164 5.47956 17.1491 5.68934 16.9393C5.89912 16.7296 6.16639 16.5867 6.45736 16.5288C6.74834 16.4709 7.04994 16.5006 7.32403 16.6142C7.59811 16.7277 7.83238 16.92 7.9972 17.1666C8.16203 17.4133 8.25 17.7033 8.25 18C8.24954 18.3977 8.09136 18.779 7.81016 19.0602C7.52895 19.3414 7.14768 19.4995 6.75 19.5ZM17.25 8.25H19.0056L20.6129 12H17.25V8.25ZM17.25 19.5C16.9533 19.5 16.6633 19.412 16.4166 19.2472C16.17 19.0824 15.9777 18.8481 15.8642 18.574C15.7506 18.2999 15.7209 17.9983 15.7788 17.7074C15.8367 17.4164 15.9796 17.1491 16.1893 16.9393C16.3991 16.7296 16.6664 16.5867 16.9574 16.5288C17.2483 16.4709 17.5499 16.5006 17.824 16.6142C18.0981 16.7277 18.3324 16.92 18.4972 17.1666C18.662 17.4133 18.75 17.7033 18.75 18C18.7495 18.3977 18.5914 18.779 18.3102 19.0602C18.0289 19.3414 17.6477 19.4995 17.25 19.5ZM21 17.25H20.1434C19.9782 16.6076 19.6045 16.0382 19.0808 15.631C18.5572 15.2239 17.9133 15.0019 17.25 15V13.5H21V17.25Z" fill="#2A254B" />
              </svg>
            </div>
            <h3 className="font-[family-name:var(--font-clash-display)] text-xl text-[#2A254B] mb-2">Next day as standard</h3>
            <p className="font-[family-name:var(--font-satoshi-light)] text-sm text-[#2A254B]">
              Order before 3pm and get your order the next day as standard
            </p>
          </div>
          <div className="bg-[#F9F9F9] p-8">
            <div className="relative w-6 h-6 bg-white bg-blend-multiply">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http:www.w3.org/2000/svg">
                <path d="M9.5 15.0605L5.75 11.3097L6.80976 10.25L9.5 12.9395L15.1888 7.25L16.25 8.31125L9.5 15.0605Z" fill="#2A254B" />
                <path d="M11 0.5C8.9233 0.5 6.89323 1.11581 5.16652 2.26957C3.4398 3.42332 2.09399 5.0632 1.29927 6.98182C0.504549 8.90045 0.296614 11.0116 0.701759 13.0484C1.1069 15.0852 2.10693 16.9562 3.57538 18.4246C5.04383 19.8931 6.91476 20.8931 8.95156 21.2982C10.9884 21.7034 13.0996 21.4955 15.0182 20.7007C16.9368 19.906 18.5767 18.5602 19.7304 16.8335C20.8842 15.1068 21.5 13.0767 21.5 11C21.5 8.21523 20.3938 5.54451 18.4246 3.57538C16.4555 1.60625 13.7848 0.5 11 0.5ZM11 20C9.21997 20 7.47992 19.4722 5.99987 18.4832C4.51983 17.4943 3.36628 16.0887 2.68509 14.4442C2.0039 12.7996 1.82567 10.99 2.17294 9.24419C2.5202 7.49836 3.37737 5.89471 4.63604 4.63604C5.89472 3.37737 7.49836 2.5202 9.24419 2.17293C10.99 1.82567 12.7996 2.0039 14.4442 2.68508C16.0887 3.36627 17.4943 4.51983 18.4832 5.99987C19.4722 7.47991 20 9.21997 20 11C20 13.3869 19.0518 15.6761 17.364 17.364C15.6761 19.0518 13.387 20 11 20Z" fill="#2A254B" />
              </svg>
            </div>
            <h3 className="font-[family-name:var(--font-clash-display)] text-xl text-[#2A254B] mb-2">Made by true artisans</h3>
            <p className="font-[family-name:var(--font-satoshi-light)] text-sm text-[#2A254B]">
              Handmade crafted goods made with real passion and craftmanship
            </p>
          </div>
          <div className="bg-[#F9F9F9] p-8">
            <div className="relative w-6 h-6 bg-white bg-blend-multiply">
              <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http:www.w3.org/2000/svg">
                <path d="M20 0.5H2C1.60218 0.5 1.22064 0.658035 0.93934 0.93934C0.658035 1.22064 0.5 1.60218 0.5 2V14C0.5 14.3978 0.658035 14.7794 0.93934 15.0607C1.22064 15.342 1.60218 15.5 2 15.5H20C20.3978 15.5 20.7794 15.342 21.0607 15.0607C21.342 14.7794 21.5 14.3978 21.5 14V2C21.5 1.60218 21.342 1.22064 21.0607 0.93934C20.7794 0.658035 20.3978 0.5 20 0.5ZM20 2V4.25H2V2H20ZM2 14V5.75H20V14H2Z" fill="#2A254B" />
                <path d="M11 11H3.5V12.5H11V11Z" fill="#2A254B" />
              </svg>
            </div>
            <h3 className="font-[family-name:var(--font-clash-display)] text-xl text-[#2A254B] mb-2">Unbeatable prices</h3>
            <p className="font-[family-name:var(--font-satoshi-light)] text-sm text-[#2A254B]">
              For our materials and quality you won’t find better prices anywhere
            </p>
          </div>
          <div className="bg-[#F9F9F9] p-8">
            <div className="relative w-6 h-6 bg-white bg-blend-multiply">
              <svg width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http:www.w3.org/2000/svg">
                <path d="M14.75 0.5C13.0878 0.502747 11.4651 1.00708 10.0942 1.94704C8.72323 2.887 7.66789 4.21881 7.06617 5.7683C6.58413 5.06903 5.93949 4.49727 5.18767 4.10216C4.43584 3.70705 3.59932 3.50041 2.75 3.5H0.5V5.75C0.501548 7.14191 1.05517 8.47637 2.0394 9.4606C3.02363 10.4448 4.35809 10.9985 5.75 11H6.5V17.787C4.7773 17.9554 3.16718 18.7191 1.94675 19.9465L3.00725 21.0071C3.63464 20.3798 4.39333 19.8995 5.22869 19.6006C6.06405 19.3018 6.95528 19.192 7.83819 19.279C8.7211 19.3661 9.57373 19.6478 10.3347 20.104C11.0956 20.5602 11.7459 21.1794 12.2387 21.9172L13.4849 21.0826C12.8701 20.1638 12.0593 19.3926 11.111 18.8244C10.1626 18.2562 9.10018 17.9052 8 17.7965V11H8.75C10.9373 10.9975 13.0343 10.1275 14.5809 8.58089C16.1275 7.03425 16.9975 4.93727 17 2.75V0.5H14.75ZM5.75 9.5C4.75579 9.49887 3.80262 9.10342 3.0996 8.4004C2.39658 7.69738 2.00113 6.74421 2 5.75V5H2.75C3.74423 5.00107 4.69744 5.3965 5.40047 6.09953C6.1035 6.80256 6.49893 7.75577 6.5 8.75V9.5H5.75ZM15.5 2.75C15.498 4.5396 14.7862 6.25534 13.5208 7.52078C12.2553 8.78622 10.5396 9.49801 8.75 9.5H8V8.75C8.00199 6.9604 8.71378 5.24466 9.97922 3.97922C11.2447 2.71378 12.9604 2.00199 14.75 2H15.5V2.75Z" fill="#2A254B" />
              </svg>
            </div>
            <h3 className="font-[family-name:var(--font-clash-display)] text-xl text-[#2A254B] mb-2">Recycled packaging</h3>
            <p className="font-[family-name:var(--font-satoshi-light)] text-sm text-[#2A254B]">
              We use 100% recycled to ensure our footprint is more manageable
            </p>
          </div>
        </div>
      </div>

      {/* Email Sign-up */}
      <div className="bg-[#F9F9F9] p-8">
        <div className="bg-white p-8 text-center">
          <h2 className="font-[family-name:var(--font-clash-display)] text-2xl text-[#2A254B] mb-4">Join the club and get the benefits</h2>
          <p className="font-[family-name:var(--font-satoshi-light)] text-sm text-[#2A254B] mb-8">
            Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more
          </p>
          <div className="flex flex-row gap-0 max-w-[472px] mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="py-4 px-6 font-[family-name:var(--font-satoshi-light)] text-[#2A254B] w-full bg-[#F9F9F9] focus:outline-none"
            />
            <button className="bg-[#2A254B] text-white py-4 px-4 font-[family-name:var(--font-satoshi-light)] whitespace-nowrap">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;