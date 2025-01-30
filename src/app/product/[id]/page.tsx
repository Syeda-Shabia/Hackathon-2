// "use client";

// import { useCart } from "@/context/CartContext";
// import { client } from "@/sanity/lib/client";
// import { getProductByIdQuery } from "utils/queries";
// import { notFound } from "next/navigation";
// import Image from "next/image";
// import { urlFor } from "@/sanity/lib/image";
// import { useState, useEffect } from "react";
// import React from "react"; // Import React to use React.use()

// export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
//   // Unwrap the params Promise using React.use()
//   const { id } = React.use(params);

//   const { addToCart } = useCart();
//   const [product, setProduct] = useState<any>(null);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       const productData = await client.fetch(getProductByIdQuery(id), { id });
//       if (!productData) {
//         notFound();
//       }
//       setProduct(productData);
//     };
//     fetchProduct();
//   }, [id]);

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   const handleAddToCart = () => {
//     addToCart({
//       _id: product._id,
//       name: product.name,
//       price: product.price,
//       mainImage: urlFor(product.mainImage).url(),
//       quantity: 1, // Set initial quantity to 1
//     });
//     alert("Product added to cart!"); // Optional: Add a confirmation message
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Product Image */}
//         <div className="relative h-96 w-full mt-10">
//           <Image
//             src={urlFor(product.mainImage).url()}
//             alt={product.name}
//             layout="responsive"
//             width={100}
//             height={500}
//             className="object-cover rounded-lg"
//           />
//         </div>

//         {/* Product Details */}
//         <div>
//           <h1 className="text-3xl font-bold font-[family-name:var(--font-clash-display)] mb-6">
//             {product.name}
//           </h1>
//           <p className="text-gray-600 font-[family-name:var(--font-satoshi-light)] mb-4">
//             {product.description}
//           </p>
//           <p className="text-2xl font-[family-name:var(--font-satoshi-light)] font-bold mb-2">
//             ${product.price}
//           </p>
//           {product.discount > 0 && (
//             <p className="text-sm font-[family-name:var(--font-satoshi-light)] text-red mb-4">
//               {product.discount}% off (Original: ${product.originalPrice})
//             </p>
//           )}

//           {/* Additional Details */}
//           <div className="space-y-2">
//             <p>
//               <span className="font-semibold font-[family-name:var(--font-satoshi-light)]">
//                 Category:
//               </span>{" "}
//               {product.category}
//             </p>
//             <p>
//               <span className="font-semibold font-[family-name:var(--font-satoshi-light)]">
//                 Material:
//               </span>{" "}
//               {product.material}
//             </p>
//             <p>
//               <span className="font-semibold font-[family-name:var(--font-satoshi-light)]">
//                 Origin:
//               </span>{" "}
//               {product.originOfManufacture}
//             </p>
//             <p>
//               <span className="font-semibold font-[family-name:var(--font-satoshi-light)]">
//                 Stock:
//               </span>{" "}
//               {product.stock} available
//             </p>
//           </div>

//           {/* Features */}
//           <div className="mt-6">
//             <h2 className="text-xl font-[family-name:var(--font-satoshi-light)] font-semibold mb-2">
//               Features
//             </h2>
//             <ul className="list-disc list-inside">
//               {product.features.map((feature: string, index: number) => (
//                 <li key={index} className="text-gray-600 font-[family-name:var(--font-satoshi-light)]">
//                   {feature}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Dimensions */}
//           <div className="mt-6">
//   <h2 className="text-xl font-[family-name:var(--font-satoshi-light)] font-semibold mb-2">
//     Dimensions
//   </h2>
//   <p className="text-gray-600 font-[family-name:var(--font-satoshi-light)]">
//     Width: {product.dimensions.width}
//   </p>
//   <p className="text-gray-600 font-[family-name:var(--font-satoshi-light)]">
//     Height: {product.dimensions.height}
//   </p>
//   <p className="text-gray-600 font-[family-name:var(--font-satoshi-light)]">
//     Depth: {product.dimensions.depth}
//   </p>
//   <p className="text-gray-600 font-[family-name:var(--font-satoshi-light)]">
//     Weight: {product.dimensions.weight}
//   </p>
//   <p className="text-gray-600 font-[family-name:var(--font-satoshi-light)]">
//     Seat Height: {product.dimensions.seatHeight}
//   </p>
//   <p className="text-gray-600 font-[family-name:var(--font-satoshi-light)]">
//     Leg Height: {product.dimensions.legHeight}
//   </p>
// </div>
//           {/* Warranty */}
//           <div className="mt-6">
//   <h2 className="text-xl font-[family-name:var(--font-satoshi-light)] font-semibold mb-2">
//     Warranty
//   </h2>
//   <p className="text-gray-600 font-[family-name:var(--font-satoshi-light)]">
//     Summary: {product.warranty.summary}
//   </p>
//   <p className="text-gray-600 font-[family-name:var(--font-satoshi-light)]">
//     Service Type: {product.warranty.serviceType}
//   </p>
//   <p className="text-gray-600 font-[family-name:var(--font-satoshi-light)]">
//     Covered: {product.warranty.covered}
//   </p>
//   <p className="text-gray-600 font-[family-name:var(--font-satoshi-light)]">
//     Not Covered: {product.warranty.notCovered}
//   </p>
//   <p className="text-gray-600 font-[family-name:var(--font-satoshi-light)]">
//     Domestic Warranty: {product.warranty.domesticWarranty}
//   </p>
// </div>
//           {/* Ratings */}
//           <div className="mt-6">
//   <h2 className="text-xl font-[family-name:var(--font-satoshi-light)] font-semibold mb-2">
//     Ratings
//   </h2>
//   <p className="text-gray-600 font-[family-name:var(--font-satoshi-light)]">
//     Average Rating: {product.rating.average} / 5
//   </p>
//   <div className="mt-2">
//     <p className="text-gray-600 font-[family-name:var(--font-satoshi-light)]">
//       Breakdown:
//     </p>
//     <ul className="list-disc list-inside">
//       <li>5 Stars: {product.rating.breakdown.fiveStars}</li>
//       <li>4 Stars: {product.rating.breakdown.fourStars}</li>
//       <li>3 Stars: {product.rating.breakdown.threeStars}</li>
//       <li>2 Stars: {product.rating.breakdown.twoStars}</li>
//       <li>1 Star: {product.rating.breakdown.oneStar}</li>
//     </ul>
//   </div>
// </div>
// {/* Tags */}
// <div className="mt-6">
//   <h2 className="text-xl font-[family-name:var(--font-satoshi-light)] font-semibold mb-2">
//     Tags
//   </h2>
//   <div className="flex flex-wrap gap-2">
//     {product.tags.map((tag: string, index: number) => (
//       <span key={index} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
//         {tag}
//       </span>
//     ))}
//   </div>
// </div>

// {/* Color */}
// <div className="mt-6">
//   <h2 className="text-xl font-[family-name:var(--font-satoshi-light)] font-semibold mb-2">
//     Color
//   </h2>
//   <p className="text-gray-600 font-[family-name:var(--font-satoshi-light)]">
//     {product.color}
//   </p>
// </div>

// {/* Sizes */}
// <div className="mt-6">
//   <h2 className="text-xl font-[family-name:var(--font-satoshi-light)] font-semibold mb-2">
//     Sizes
//   </h2>
//   <div className="flex flex-wrap gap-2">
//     {product.sizes.map((size: string, index: number) => (
//       <span key={index} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
//         {size}
//       </span>
//     ))}
//   </div>
// </div>

// {/* Sales Package */}
// <div className="mt-6">
//   <h2 className="text-xl font-[family-name:var(--font-satoshi-light)] font-semibold mb-2">
//     Sales Package
//   </h2>
//   <p className="text-gray-600 font-[family-name:var(--font-satoshi-light)]">
//     {product.salesPackage}
//   </p>
// </div>

// {/* Model Number */}
// <div className="mt-6">
//   <h2 className="text-xl font-[family-name:var(--font-satoshi-light)] font-semibold mb-2">
//     Model Number
//   </h2>
//   <p className="text-gray-600 font-[family-name:var(--font-satoshi-light)]">
//     {product.modelNumber}
//   </p>
// </div>

// {/* SKU */}
// <div className="mt-6">
//   <h2 className="text-xl font-[family-name:var(--font-satoshi-light)] font-semibold mb-2">
//     SKU
//   </h2>
//   <p className="text-gray-600 font-[family-name:var(--font-satoshi-light)]">
//     {product.sku}
//   </p>
// </div>
// <div className="mt-6">
//   <h2 className="text-xl font-[family-name:var(--font-satoshi-light)] font-semibold mb-2">
//     Additional Details
//   </h2>
//   <p className="text-gray-600 font-[family-name:var(--font-satoshi-light)]">
//     Material: {product.material}
//   </p>
//   <p className="text-gray-600 font-[family-name:var(--font-satoshi-light)]">
//     Secondary Material: {product.secondaryMaterial}
//   </p>
//   <p className="text-gray-600 font-[family-name:var(--font-satoshi-light)]">
//     Configuration: {product.configuration}
//   </p>
//   <p className="text-gray-600 font-[family-name:var(--font-satoshi-light)]">
//     Upholstery Material: {product.upholsteryMaterial}
//   </p>
//   <p className="text-gray-600 font-[family-name:var(--font-satoshi-light)]">
//     Upholstery Color: {product.upholsteryColor}
//   </p>
//   <p className="text-gray-600 font-[family-name:var(--font-satoshi-light)]">
//     Filling Material: {product.fillingMaterial}
//   </p>
//   <p className="text-gray-600 font-[family-name:var(--font-satoshi-light)]">
//     Finish Type: {product.finishType}
//   </p>
// </div>
//           {/* Add to Cart Button */}
//           <button
//             onClick={handleAddToCart}
//             className="mt-6 px-6 py-3 bg-[#2A254B] text-white rounded-none hover:bg-slate-50 hover:border-2 hover:border-[#2A254B] hover:text-[#2A254B] transition-colors"
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import { useCart } from "@/context/CartContext";
import { client } from "@/sanity/lib/client";
import { getProductByIdQuery } from "utils/queries";
import { notFound } from "next/navigation";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { useState, useEffect } from "react";
import React from "react";

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params);
  const { addToCart } = useCart();
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const productData = await client.fetch(getProductByIdQuery(id), { id });
      if (!productData) {
        notFound();
      }
      setProduct(productData);
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    addToCart({
      _id: product._id,
      name: product.name,
      price: product.price,
      mainImage: urlFor(product.mainImage).url(),
      quantity: 1,
    });
    alert("Product added to cart!");
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="relative h-96 w-full mt-10">
          <Image
            src={urlFor(product.mainImage).url()}
            alt={product.name}
            layout="responsive"
            width={100}
            height={500}
            className="object-cover rounded-lg"
          />
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <h1 className="text-3xl justify-items-center font-bold font-[family-name:var(--font-clash-display)] mb-6">
            {product.name}
          </h1>
          <p className="text-gray-600 font-[family-name:var(--font-satoshi-light)] mb-4">
            {product.description}
          </p>
          <p className="text-2xl font-[family-name:var(--font-satoshi-light)] font-bold mb-2">
            ${product.price}
          </p>
          {product.discount > 0 && (
            <p className="text-sm font-[family-name:var(--font-satoshi-light)] text-red mb-4">
              {product.discount}% off (Original: ${product.originalPrice})
            </p>
          )}

          {/* Additional Details */}
          <div className="grid grid-cols-2 gap-4">
            <p>
              <span className="font-semibold">Category:</span> {product.category}
            </p>
            <p>
              <span className="font-semibold">Material:</span> {product.material}
            </p>
            <p>
              <span className="font-semibold">Origin:</span> {product.originOfManufacture}
            </p>
            <p>
              <span className="font-semibold">Stock:</span> {product.stock} available
            </p>
          </div>

          {/* Features */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Features</h2>
            <ul className="list-disc list-inside">
              {product.features.map((feature: string, index: number) => (
                <li key={index} className="text-gray-600">
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Dimensions */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Dimensions</h2>
            <div className="grid grid-cols-2 gap-4">
              <p>Width: {product.dimensions.width}</p>
              <p>Height: {product.dimensions.height}</p>
              <p>Depth: {product.dimensions.depth}</p>
              <p>Weight: {product.dimensions.weight}</p>
              <p>Seat Height: {product.dimensions.seatHeight}</p>
              <p>Leg Height: {product.dimensions.legHeight}</p>
            </div>
          </div>

          {/* Warranty */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Warranty</h2>
            <div className="grid grid-cols-2 gap-4">
              <p>Summary: {product.warranty.summary}</p>
              <p>Service Type: {product.warranty.serviceType}</p>
              <p>Covered: {product.warranty.covered}</p>
              <p>Not Covered: {product.warranty.notCovered}</p>
              <p>Domestic Warranty: {product.warranty.domesticWarranty}</p>
            </div>
          </div>

          {/* Ratings */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Ratings</h2>
            <p>Average Rating: {product.rating.average} / 5</p>
            <div className="mt-2">
              <p>Breakdown:</p>
              <ul className="list-disc list-inside">
                <li>5 Stars: {product.rating.breakdown.fiveStars}</li>
                <li>4 Stars: {product.rating.breakdown.fourStars}</li>
                <li>3 Stars: {product.rating.breakdown.threeStars}</li>
                <li>2 Stars: {product.rating.breakdown.twoStars}</li>
                <li>1 Star: {product.rating.breakdown.oneStar}</li>
              </ul>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Tags</h2>
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag: string, index: number) => (
                <span key={index} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Color */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Color</h2>
            <p>{product.color}</p>
          </div>

          {/* Sizes */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Sizes</h2>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size: string, index: number) => (
                <span key={index} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
                  {size}
                </span>
              ))}
            </div>
          </div>

          {/* Sales Package */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Sales Package</h2>
            <p>{product.salesPackage}</p>
          </div>

          {/* Model Number */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Model Number</h2>
            <p>{product.modelNumber}</p>
          </div>

          {/* SKU */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">SKU</h2>
            <p>{product.sku}</p>
          </div>

          {/* Additional Details */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Additional Details</h2>
            <div className="grid grid-cols-2 gap-4">
              <p>Material: {product.material}</p>
              <p>Secondary Material: {product.secondaryMaterial}</p>
              <p>Configuration: {product.configuration}</p>
              <p>Upholstery Material: {product.upholsteryMaterial}</p>
              <p>Upholstery Color: {product.upholsteryColor}</p>
              <p>Filling Material: {product.fillingMaterial}</p>
              <p>Finish Type: {product.finishType}</p>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="mt-6 px-6 py-3 bg-[#2A254B] text-white rounded-none hover:bg-slate-50 hover:border-2 hover:border-[#2A254B] hover:text-[#2A254B] transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}