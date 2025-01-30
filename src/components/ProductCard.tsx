// import { urlFor } from '@/sanity/lib/image'; // Import the urlFor function
// import Image from 'next/image';
// import Link from 'next/link';

// interface Product {
//   _id: string;
//   id: string;
//   name: string;
//   description: string;
//   price: number;
//   originalPrice: number;
//   discount: number;
//   category: string;
//   tags: string[];
//   mainImage: {
//     asset: {
//       url: string;
//     };
//   };
//   color: string[];
//   sizes: string[];
//   stock: number;
//   dimensions: {
//     width: string;
//     height: string;
//     depth: string;
//     weight: string;
//     seatHeight: string;
//     legHeight: string;
//   };
//   material: string;
//   secondaryMaterial: string;
//   configuration: string;
//   upholsteryMaterial: string;
//   upholsteryColor: string;
//   fillingMaterial: string;
//   finishType: string;
//   originOfManufacture: string;
//   warranty: {
//     summary: string;
//     serviceType: string;
//     covered: string;
//     notCovered: string;
//     domesticWarranty: string;
//   };
//   rating: {
//     average: number;
//     breakdown: {
//       fiveStars: number;
//       fourStars: number;
//       threeStars: number;
//       twoStars: number;
//       oneStar: number;
//     };
//   };
//   salesPackage: string;
//   modelNumber: string;
//   sku: string;
//   features: string[];
// }
// export default function ProductCard({ product }: { product: Product }) {
//   return (
//     <Link href={`/product/${product.id}`}>
//       <div className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
//         <div className="relative h-48 w-full mb-4">
//           <Image
//             src={urlFor(product.mainImage).url()} // Use urlFor to construct the URL
//             alt={product.name}
//             fill
//             className="object-cover rounded-lg"
//           />
//         </div>
//         <h2 className="text-xl font-[family-name:var(--font-clash-display)] font-semibold">{product.name}</h2>
//         <p className="text-gray-600 font-[family-name:var(--font-satoshi-light)]">{product.description}</p>
//         <p className="text-lg font-bold font-[family-name:var(--font-satoshi-light)]">${product.price}</p>
//         {product.discount > 0 && (
//           <p className="text-sm text-gray-500 font-[family-name:var(--font-satoshi-light)]">
//             {product.discount}% off (Original: ${product.originalPrice})
//           </p>
//         )}
//         <div className="mt-4">
//           <span className="text-sm text-gray-600 font-[family-name:var(--font-satoshi-light)]">Category: {product.category}</span>
//         </div>
//       </div>
//     </Link>
//   );
// }
"use client"
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image';

interface Product {
  _id: string;
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  discount: number;
  category: string;
  tags: string[];
  mainImage: {
    asset: {
      url: string;
    };
  };
  color: string[];
  sizes: string[];
  stock: number;
  dimensions: {
    width: string;
    height: string;
    depth: string;
    weight: string;
    seatHeight: string;
    legHeight: string;
  };
  material: string;
  secondaryMaterial: string;
  configuration: string;
  upholsteryMaterial: string;
  upholsteryColor: string;
  fillingMaterial: string;
  finishType: string;
  originOfManufacture: string;
  warranty: {
    summary: string;
    serviceType: string;
    covered: string;
    notCovered: string;
    domesticWarranty: string;
  };
  rating: {
    average: number;
    breakdown: {
      fiveStars: number;
      fourStars: number;
      threeStars: number;
      twoStars: number;
      oneStar: number;
    };
  };
  salesPackage: string;
  modelNumber: string;
  sku: string;
  features: string[];
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
        <div className="relative mb-4">
          <Image
            src={urlFor(product.mainImage).url()} // Use urlFor to construct the URL
            alt={product.name}
            layout='responsive'
            width={500}
            height={500}
            className="object-contain relative rounded-lg"
          />
        </div>
        <h2 className="text-xl font-[family-name:var(--font-clash-display)] font-semibold">{product.name}</h2>
        <p className="text-gray-600 font-[family-name:var(--font-satoshi-light)]">{product.description}</p>
        <p className="text-lg font-bold font-[family-name:var(--font-satoshi-light)]">${product.price}</p>
        {product.discount > 0 && (
          <p className="text-sm text-gray-500 font-[family-name:var(--font-satoshi-light)]">
            {product.discount}% off (Original: ${product.originalPrice})
          </p>
        )}
        <div className="mt-4">
          <span className="text-sm text-gray-600 font-[family-name:var(--font-satoshi-light)]">Category: {product.category}</span>
        </div>
      </div>
    </Link>
  );
}