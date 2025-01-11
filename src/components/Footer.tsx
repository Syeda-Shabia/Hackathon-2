import { FaTwitter, FaPinterest, FaFacebook, FaInstagram, FaLinkedin, FaSkype } from 'react-icons/fa';
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full bg-[#2A254B] text-white overflow-x-hidden">
      {/* Mobile and Small Devices Layout */}
      <div className="md:hidden flex flex-col p-6 space-y-8">
        {/* First Row: Menu and Categories */}
        <div className="flex flex-row gap-8">
          {/* Menu Section */}
          <div className="flex flex-col space-y-3 flex-1">
            <h3 className="font-[family-name:var(--font-clash-display)] text-lg">Menu</h3>
            <Link href="#" className="font-[family-name:var(--font-satoshi-light)] text-base">New arrivals</Link>
            <Link href="#" className="font-[family-name:var(--font-satoshi-light)] text-base">Best sellers</Link>
            <Link href="#" className="font-[family-name:var(--font-satoshi-light)] text-base">Recently viewed</Link>
            <Link href="#" className="font-[family-name:var(--font-satoshi-light)] text-base">Popular this week</Link>
            <Link href="#" className="font-[family-name:var(--font-satoshi-light)] text-base">All products</Link>
          </div>

          {/* Categories Section */}
          <div className="flex flex-col space-y-3 flex-1">
            <h3 className="font-[family-name:var(--font-clash-display)] text-lg">Categories</h3>
            <Link href="#" className="font-[family-name:var(--font-satoshi-light)] text-base">Crockery</Link>
            <Link href="#" className="font-[family-name:var(--font-satoshi-light)] text-base">Furniture</Link>
            <Link href="#" className="font-[family-name:var(--font-satoshi-light)] text-base">Homeware</Link>
            <Link href="#" className="font-[family-name:var(--font-satoshi-light)] text-base">Plant pots</Link>
            <Link href="#" className="font-[family-name:var(--font-satoshi-light)] text-base">Chairs</Link>
          </div>
        </div>

        {/* Second Row: Our Company */}
        <div className="flex flex-col space-y-3">
          <h3 className="font-[family-name:var(--font-clash-display)] text-lg">Our company</h3>
          <Link href="#" className="font-[family-name:var(--font-satoshi-light)] text-base">About us</Link>
          <Link href="#" className="font-[family-name:var(--font-satoshi-light)] text-base">Vacancies</Link>
          <Link href="#" className="font-[family-name:var(--font-satoshi-light)] text-base">Contact us</Link>
          <Link href="#" className="font-[family-name:var(--font-satoshi-light)] text-base">Privacy</Link>
          <Link href="#" className="font-[family-name:var(--font-satoshi-light)] text-base">Returns policy</Link>
        </div>

        {/* Mailing List Section */}
        <div className="flex flex-col space-y-3">
          <h3 className="font-[family-name:var(--font-clash-display)] text-lg">Join our mailing list</h3>
          <div className="flex w-full">
            <input
              type="email"
              placeholder="your@email.com"
              className="w-[70%] h-14 bg-white bg-opacity-15 pl-4 placeholder-white"
            />
            <button className="w-[30%] h-14 bg-white text-[#2A254B] font-[family-name:var(--font-satoshi-light)] text-base">
              Sign up
            </button>
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full border-t border-[#4E4D93]"></div>

        {/* Copyright Section */}
        <div className="font-[family-name:var(--font-satoshi-light)] text-sm text-center">
          Copyright 2022 Avion LTD
        </div>
      </div>

      {/* Large Devices Layout */}
      <div className="hidden md:flex flex-col p-12 space-y-8 max-w-7xl mx-auto">
        {/* Top Row: Split into Two Halves */}
        <div className="flex w-full">
          {/* Left Half: Menu, Categories, and Our Company */}
          <div className="w-[50%] flex gap-8">
            {/* Menu Section */}
            <div className="flex flex-col space-y-3 flex-1">
              <h3 className="font-[family-name:var(--font-clash-display)] text-lg">Menu</h3>
              <Link href="#" className="font-[family-name:var(--font-satoshi-light)] text-base">New arrivals</Link>
              <Link href="#" className="font-[family-name:var(--font-satoshi-light)] text-base">Best sellers</Link>
              <Link href="#" className="font-[family-name:var(--font-satoshi-light)] text-base">Recently viewed</Link>
              <Link href="#" className="font-[family-name:var(--font-satoshi-light)] text-base">Popular this week</Link>
              <Link href="#" className="font-[family-name:var(--font-satoshi-light)] text-base">All products</Link>
            </div>

            {/* Categories Section */}
            <div className="flex flex-col space-y-3 flex-1">
              <h3 className="font-[family-name:var(--font-clash-display)] text-lg">Categories</h3>
              <Link href="#" className="font-[family-name:var(--font-satoshi-light)] text-base">Crockery</Link>
              <Link href="#" className="font-[family-name:var(--font-satoshi-light)] text-base">Furniture</Link>
              <Link href="#" className="font-[family-name:var(--font-satoshi-light)] text-base">Homeware</Link>
              <Link href="#" className="font-[family-name:var(--font-satoshi-light)] text-base">Plant pots</Link>
              <Link href="#" className="font-[family-name:var(--font-satoshi-light)] text-base">Chairs</Link>
            </div>

            {/* Our Company Section */}
            <div className="flex flex-col space-y-3 flex-1">
              <h3 className="font-[family-name:var(--font-clash-display)] text-lg">Our company</h3>
              <Link href="#" className="font-[family-name:var(--font-satoshi-light)] text-base">About us</Link>
              <Link href="#" className="font-[family-name:var(--font-satoshi-light)] text-base">Vacancies</Link>
              <Link href="#" className="font-[family-name:var(--font-satoshi-light)] text-base">Contact us</Link>
              <Link href="#" className="font-[family-name:var(--font-satoshi-light)] text-base">Privacy</Link>
              <Link href="#" className="font-[family-name:var(--font-satoshi-light)] text-base">Returns policy</Link>
            </div>
          </div>

          {/* Right Half: Join our mailing list */}
          <div className="w-[50%] flex flex-col space-y-3 pl-8">
            <h3 className="font-[family-name:var(--font-clash-display)] text-lg">Join our mailing list</h3>
            <div className="flex w-full">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-[70%] h-14 bg-white bg-opacity-15 pl-4 placeholder-white"
              />
              <button className="w-[30%] h-14 bg-white text-[#2A254B] font-[family-name:var(--font-satoshi-light)] text-base">
                Sign up
              </button>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full border-t border-[#4E4D93]"></div>

        {/* Copyright and Social Links Section */}
        <div className="flex justify-between items-center">
          <div className="font-[family-name:var(--font-satoshi-light)] text-sm">
            Copyright 2022 Avion LTD
          </div>
          <div className="flex space-x-6">
              <Link href={"#"} className='text-white/60 hover:text-white transition-colors'>
                <FaLinkedin size={20} />
              </Link>
              <Link href={"#"} className='text-white/60 hover:text-white transition-colors'>
                <FaFacebook size={20} />
              </Link>
              <Link href={"#"} className='text-white/60 hover:text-white transition-colors'>
                <FaInstagram size={20} />
              </Link>
              <Link href={"#"} className='text-white/60 hover:text-white transition-colors'>
                <FaSkype size={20} />
              </Link>
              <Link href={"#"} className='text-white/60 hover:text-white transition-colors'>
                <FaTwitter size={20} />
              </Link>
              <Link href={"#"} className='text-white/60 hover:text-white transition-colors'>
                <FaPinterest size={20} />
              </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;