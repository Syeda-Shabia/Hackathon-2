"use client"; // Mark this as a Client Component

import { useState, useEffect } from 'react';
import { client } from '@/sanity/lib/client';
import {
  getAllProductsQuery,
  getProductsByCategoryQuery,
  getProductsByMaterialQuery,
  getProductsByOriginQuery,
  getProductsSortedByPriceQuery,
} from 'utils/queries';
import ProductCard from '@/components/ProductCard';

interface ProductFiltersProps {
  initialProducts: any[];
}

export default function ProductFilters({ initialProducts }: ProductFiltersProps) {
  const [products, setProducts] = useState(initialProducts);
  const [filters, setFilters] = useState({
    category: '',
    material: '',
    origin: '',
    sort: 'asc',
  });

  // Extract unique filter options from initialProducts
  const categories = Array.from(new Set(initialProducts.map((product) => product.category)));
  const materials = Array.from(new Set(initialProducts.map((product) => product.material)));
  const origins = Array.from(new Set(initialProducts.map((product) => product.originOfManufacture)));

  const handleFilterChange = async (filterType: string, value: string) => {
    const newFilters = { ...filters, [filterType]: value };
    setFilters(newFilters);

    let query;

    // Determine which query to use based on the filter type
    switch (filterType) {
      case 'category':
        query = getProductsByCategoryQuery(value);
        break;
      case 'material':
        query = getProductsByMaterialQuery(value);
        break;
      case 'origin':
        query = getProductsByOriginQuery(value);
        break;
      case 'sort':
        // Ensure the value is explicitly typed as 'asc' | 'desc'
        const order = value === 'asc' ? 'asc' : 'desc';
        query = getProductsSortedByPriceQuery(order);
        break;
      default:
        query = getAllProductsQuery;
    }

    // Fetch the filtered/sorted products
    const updatedProducts = await client.fetch(query);
    setProducts(updatedProducts);
  };

  return (
<div className="bg-white">
  {/* Desktop Layout */}
  <div className="hidden md:flex flex-row items-center justify-between p-6">
    {/* Filters */}
    <div className="flex flex-row gap-3">
      {/* Category Filter */}
      <div className="relative">
        <select
          onChange={(e) => handleFilterChange('category', e.target.value)}
          className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded appearance-none"
        >
          <option value="">Category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6L8 10L12 6" stroke="#2A254B" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Material Filter */}
      <div className="relative">
        <select
          onChange={(e) => handleFilterChange('material', e.target.value)}
          className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded appearance-none"
        >
          <option value="">Material</option>
          {materials.map((material) => (
            <option key={material} value={material}>
              {material}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6L8 10L12 6" stroke="#2A254B" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Origin Filter */}
      <div className="relative">
        <select
          onChange={(e) => handleFilterChange('origin', e.target.value)}
          className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded appearance-none"
        >
          <option value="">Origin</option>
          {origins.map((origin) => (
            <option key={origin} value={origin}>
              {origin}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6L8 10L12 6" stroke="#2A254B" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>

    {/* Sorting */}
    <div className="flex flex-row items-center gap-4">
      <span className="font-[family-name:var(--font-satoshi-light)] ml-4 text-dark-primary">Sorting by:</span>
      <button
        onClick={() => handleFilterChange('sort', filters.sort === 'asc' ? 'desc' : 'asc')}
        className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded"
      >
        <span className="font-[family-name:var(--font-satoshi-light)] text-dark-primary">
          Price {filters.sort === 'asc' ? 'Low to High' : 'High to Low'}
        </span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 6L8 10L12 6" stroke="#2A254B" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  </div>

  {/* Mobile Layout */}
  <div className="md:hidden p-4">
    <div className="flex flex-col gap-4">
      {/* Filters */}
      <div className="flex flex-col gap-3">
        {/* Category Filter */}
        <div className="relative">
          <select
            onChange={(e) => handleFilterChange('category', e.target.value)}
            className="w-full px-4 py-2 bg-white border border-gray-200 rounded appearance-none"
          >
            <option value="">Category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6L8 10L12 6" stroke="#2A254B" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Material Filter */}
        <div className="relative">
          <select
            onChange={(e) => handleFilterChange('material', e.target.value)}
            className="w-full px-4 py-2 bg-white border border-gray-200 rounded appearance-none"
          >
            <option value="">Material</option>
            {materials.map((material) => (
              <option key={material} value={material}>
                {material}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6L8 10L12 6" stroke="#2A254B" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Origin Filter */}
        <div className="relative">
          <select
            onChange={(e) => handleFilterChange('origin', e.target.value)}
            className="w-full px-4 py-2 bg-white border border-gray-200 rounded appearance-none"
          >
            <option value="">Origin</option>
            {origins.map((origin) => (
              <option key={origin} value={origin}>
                {origin}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6L8 10L12 6" stroke="#2A254B" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      {/* Sorting */}
      <div className="flex flex-col gap-2">
        <span className="font-[family-name:var(--font-satoshi-light)] text-dark-primary">Sorting by:</span>
        <button
          onClick={() => handleFilterChange('sort', filters.sort === 'asc' ? 'desc' : 'asc')}
          className="flex items-center justify-between w-full px-4 py-2 bg-white border border-gray-200 rounded"
        >
          <span className="font-[family-name:var(--font-satoshi-light)] text-dark-primary">
            Price {filters.sort === 'asc' ? 'Low to High' : 'High to Low'}
          </span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6L8 10L12 6" stroke="#2A254B" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  </div>
      {/* All Products */}
      <div className="container justify-items-center mx-auto p-4">
        <h1 className="text-3xl text-[#2A254B] font-[family-name:var(--font-clash-display)] font-bold mb-6">All Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product: any) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}