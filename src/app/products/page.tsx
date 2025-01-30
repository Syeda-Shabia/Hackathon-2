"use client";
import { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client';
import { getAllProductsQuery } from 'utils/queries';
import ProductFilters from '@/components/ProductFilters';
import ProductCard from '@/components/ProductCard';

export default function ProductsPage() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const initialProducts = await client.fetch(getAllProductsQuery);
      setProducts(initialProducts);
    };
    fetchProducts();
  }, []);

  return (
    <div className="bg-white">
      <ProductFilters initialProducts={products} />
      {/*All Products*/}
    <div className="container justify-items-center mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product: any) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
    </div>
  );
}
// import { client } from '@/sanity/lib/client';
// import { getAllProductsQuery } from 'utils/queries';
// import ProductCard from '@/components/ProductCard';

// export default async function ProductsPage() {
//   const products = await client.fetch(getAllProductsQuery);

//   return (
//     <div className="bg-white">
//         {/* Desktop Layout */}
//         <div className="hidden md:flex flex-row items-center justify-between p-6">
//           {/* Filters */}
//           <div className="flex flex-row gap-3">
//             <button className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded">
//               <span className="font-[family-name:var(--font-satoshi-light)]  text-dark-primary">Category</span>
//               <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M4 6L8 10L12 6" stroke="#2A254B" strokeLinecap="round" strokeLinejoin="round" />
//               </svg>
//             </button>
//             <button className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded">
//               <span className="font-[family-name:var(--font-satoshi-light)]  text-dark-primary">Origin</span>
//               <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M4 6L8 10L12 6" stroke="#2A254B" strokeLinecap="round" strokeLinejoin="round" />
//               </svg>
//             </button>
//             <button className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded">
//               <span className="font-[family-name:var(--font-satoshi-light)]  text-dark-primary">Price</span>
//               <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M4 6L8 10L12 6" stroke="#2A254B" strokeLinecap="round" strokeLinejoin="round" />
//               </svg>
//             </button>
//             <button className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded">
//               <span className="font-[family-name:var(--font-satoshi-light)]  text-dark-primary">Material</span>
//               <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M4 6L8 10L12 6" stroke="#2A254B" strokeLinecap="round" strokeLinejoin="round" />
//               </svg>
//             </button>
//           </div>

//           {/* Sorting */}
//           <div className="flex flex-row items-center gap-4">
//             <span className="font-[family-name:var(--font-satoshi-light)] ml-4 text-dark-primary">Sorting by:</span>
//             <button className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded">
//               <span className="font-[family-name:var(--font-satoshi-light)]  text-dark-primary">Date added</span>
//               <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M4 6L8 10L12 6" stroke="#2A254B" strokeLinecap="round" strokeLinejoin="round" />
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Mobile Layout */}
//         <div className="md:hidden flex flex-row justify-center gap-2 px-4 py-2">
//           <button className="flex items-center justify-center w-[90%] gap-2 px-8 py-4 bg-gray-50 rounded">
//             <span className="font-[family-name:var(--font-satoshi-light)] mx-3 text-dark-primary">Filters</span>
//             <span>
//               <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M8 0L4 5L0 0H8Z" fill="#2A254B" />
//               </svg>
//             </span>           
//           </button>
//           <button className="flex items-center gap-2 justify-center w-[90%] px-8 py-4 bg-gray-50 rounded">
//             <span className="font-[family-name:var(--font-satoshi-light)] mx-3 text-dark-primary">Sorting</span>
//             <span>
//               <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M8 0L4 5L0 0H8Z" fill="#2A254B" />
//               </svg>
//             </span>
//           </button>
//         </div>

  // </div>
//   );
// }