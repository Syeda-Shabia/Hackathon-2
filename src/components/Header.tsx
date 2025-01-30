"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext"; // Import useCart
import { client } from "@/sanity/lib/client"; // Import Sanity client
import { getProductsBySearchQuery } from "utils/queries"; // Import the search query
import { UserButton, SignInButton, SignedIn, SignedOut } from '@clerk/nextjs';

// Defined the type for navLinks
type NavLink = {
  name: string;
  slug: string;
};

const navLinks: NavLink[] = [
  { name: "Home", slug: "/" },
  { name: "About", slug: "/about" },
  { name: "Listing", slug: "/listing" },
  { name: "Products", slug: "/products" },
  { name: "Cart", slug: "/cart" },
  { name: "Check Out", slug: "/checkout" },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility
  const [searchQuery, setSearchQuery] = useState(""); // State to manage search query
  const [searchResults, setSearchResults] = useState<any[]>([]); // State to store search results
  const [isSearchOpen, setIsSearchOpen] = useState(false); // State to manage search dropdown visibility
  const [isProfileOpen, setIsProfileOpen] = useState(false); // State to manage profile dropdown visibility
  const menuRef = useRef<HTMLDivElement>(null); // Ref for the mobile menu
  const searchRef = useRef<HTMLDivElement>(null); // Ref for the search dropdown
  const profileRef = useRef<HTMLDivElement>(null); // Ref for the profile dropdown
  const { cart } = useCart(); // Access the cart state

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
  };

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen); // Toggle profile dropdown visibility
  };

  // Fetch products based on search query
  const handleSearch = async (query: string) => {
    if (query.trim() === "") {
      setSearchResults([]);
      return;
    }

    const products = await client.fetch(getProductsBySearchQuery(query));
    setSearchResults(products);
  };

  // Close the menu, search dropdown, and profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="w-full bg-white shadow-sm">
      {/* Logo - Centered at the top for mobile */}
      <div className="flex justify-center py-4 ">
        <div className="font-[family-name:var(--font-clash-display)] text-4xl md:text-5xl font-bold text-[#2A254B]">
          <Link href="/">Avion</Link>
        </div>
      </div>

      {/* Main Header Content */}
      <div className="flex flex-col md:flex-row items-center justify-between px-2 py-3 md:px-8">
        {/* Search Bar - Below Logo on Mobile */}
        <div className="relative w-full md:w-auto" ref={searchRef}>
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              handleSearch(e.target.value);
            }}
            onFocus={() => setIsSearchOpen(true)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2A254B]"
          />
          {/* Search Results Dropdown */}
          {isSearchOpen && searchResults.length > 0 && (
            <div className="absolute top-full left-0 w-full bg-white border border-gray-200 rounded-lg shadow-lg mt-2 z-50">
              {searchResults.map((product) => (
                <Link
                  key={product._id}
                  href={`/product/${product.id}`} // Use product.id instead of product._id
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => {
                    setIsSearchOpen(false);
                    setSearchQuery("");
                  }}
                >
                  {product.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Right Section: Icons - Below Search Bar on Mobile */}
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal" />
        </SignedOut>
          {/* Cart Icon with Count */}
          <Link href="/cart" className="relative text-gray-700">
            <svg width="30" height="30" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="16" height="16" fill="white" style={{ mixBlendMode: "multiply" } as React.CSSProperties} />
              <path d="M5 15C5.55228 15 6 14.5523 6 14C6 13.4477 5.55228 13 5 13C4.44772 13 4 13.4477 4 14C4 14.5523 4.44772 15 5 15Z" fill="#2A254B" />
              <path d="M12 15C12.5523 15 13 14.5523 13 14C13 13.4477 12.5523 13 12 13C11.4477 13 11 13.4477 11 14C11 14.5523 11.4477 15 12 15Z" fill="#2A254B" />
              <path d="M14 3.50001H2.91L2.5 1.40001C2.47662 1.28537 2.41379 1.18256 2.32243 1.10947C2.23107 1.03639 2.11697 0.997651 2 1.00001H0V2.00001H1.59L3.5 11.6C3.52338 11.7146 3.58621 11.8175 3.67757 11.8905C3.76893 11.9636 3.88303 12.0024 4 12H13V11H4.41L4 9.00001H13C13.1156 9.00284 13.2286 8.96552 13.3197 8.89441C13.4109 8.8233 13.4746 8.7228 13.5 8.61001L14.5 4.11001C14.5168 4.03582 14.5164 3.95879 14.4989 3.88478C14.4814 3.81076 14.4472 3.74172 14.399 3.6829C14.3508 3.62407 14.2898 3.57703 14.2206 3.54534C14.1515 3.51364 14.076 3.49814 14 3.50001ZM12.6 8.00001H3.81L3.11 4.50001H13.375L12.6 8.00001Z" fill="#2A254B" />
            </svg>
            {cart.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
                {cart.length}
              </span>
            )}
          </Link>
                </div>
              </div>
      {/* Divider */}
      <div className="mx-4 my-3 border-t border-gray-200" />

      {/* Navigation for Medium and Larger Screens */}
      <nav className="hidden md:flex items-center justify-center space-x-10">
        {navLinks.map((link) => (
          <Link key={link.slug} href={link.slug} className="text-[#2A254B] hover:text-[#6054a5] font-[family-name:var(--font-satoshi-light)] font-semibold text-2xl">
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden" ref={menuRef}>
        <button
          className="text-gray-700"
          onClick={toggleMenu} // Toggle menu visibility
        >
          {isMenuOpen ? (
            // X mark when the menu is open
            <svg width="12" height="12" viewBox="0 0 12 12" fill="#2A254B" xmlns="http:www.w3.org/2000/svg">
              <path d="M12 1.05L10.95 0L6 4.95L1.05 0L0 1.05L4.95 6L0 10.95L1.05 12L6 7.05L10.95 12L12 10.95L7.05 6L12 1.05Z" fill="#2A254B" />
            </svg>
          ) : (
            // Hamburger icon when the menu is closed
            <svg width="14" height="14" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0H0V1H12V0Z" fill="#2A254B" />
              <path d="M12 9H0V10H12V9Z" fill="#2A254B" />
              <path d="M12 3H0V4H12V3Z" fill="#2A254B" />
              <path d="M12 6H0V7H12V6Z" fill="#2A254B" />
            </svg>
          )}
        </button>

        {/* Conditional rendering of the mobile menu */}
        <ul
          className={`${isMenuOpen ? "block" : "hidden"
            } flex flex-col items-center py-4 space-y-4 bg-white`}
        >
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.slug}
                className="block text-[#2A254B] hover:text-[#6054a5] font-[family-name:var(--font-satoshi-light)]"
                onClick={() => setIsMenuOpen(false)} // Close menu on link click
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;