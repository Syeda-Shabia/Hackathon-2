import { useEffect, useState } from 'react';
import { getAllProducts } from '../utils/queries';

interface Product {
  _id: string;
  title: string;
  slug: { current: string };
  productImage: { asset: { url: string } } | null;
  price: number;
  discountPrice?: number;
  quantity: number;
  stock: number;
  inStock: boolean;
  isNew: boolean;
  colors?: string[];
  tags: string[];
  description: string;
  features: string[];
  dimensions?: {
    height: string;
    width: string;
    depth: string;
  };
  reviews?: number;
  category: {
    _id: string;
    name: string;
    slug: { current: string };
  } | null;
}

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold font-[family-name:var(--font-clash-display)] text-center mb-8">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product._id} className="bg-white rounded-lg shadow-md overflow-hidden">
            {product.productImage && product.productImage.asset && (
              <img
                src={product.productImage.asset.url}
                alt={product.title}
                className="w-full h-64 object-cover"
              />
            )}
            <div className="p-6">
              <h2 className="text-xl font-semibold font-[family-name:var(--font-satoshi-light)] mb-2">{product.title}</h2>
              <p className="text-gray-600 font-[family-name:var(--font-satoshi-light)] mb-4">{product.description}</p>
              <div className="flex justify-between items-center mb-4">
                <p className="text-lg font-[family-name:var(--font-satoshi-light)] font-bold">${product.price}</p>
                {product.discountPrice && (
                  <p className="text-sm text-gray-500 font-[family-name:var(--font-satoshi-light)] line-through">${product.discountPrice}</p>
                )}
              </div>
              <div className="mb-4">
                <p className="text-sm font-[family-name:var(--font-satoshi-light)] text-gray-600">Quantity: {product.quantity}</p>
                <p className="text-sm font-[family-name:var(--font-satoshi-light)] text-gray-600">Stock: {product.stock}</p>
                <p className="text-sm font-[family-name:var(--font-satoshi-light)] text-gray-600">
                  In Stock: {product.inStock ? 'Yes' : 'No'}
                </p>
                <p className="text-sm font-[family-name:var(--font-satoshi-light)] text-gray-600">New Arrival: {product.isNew ? 'Yes' : 'No'}</p>
              </div>
              {product.colors && (
                <p className="text-sm font-[family-name:var(--font-satoshi-light)] text-gray-600">Colors: {product.colors.join(', ')}</p>
              )}
              {product.dimensions && (
                <p className="text-sm font-[family-name:var(--font-satoshi-light)] text-gray-600">
                  Dimensions: {product.dimensions.height} (H) x {product.dimensions.width} (W) x{' '}
                  {product.dimensions.depth} (D)
                </p>
              )}
              {product.reviews && (
                <p className="text-sm font-[family-name:var(--font-satoshi-light)] text-gray-600">Reviews: {product.reviews}/5</p>
              )}
              {product.category && (
                <p className="text-sm font-[family-name:var(--font-satoshi-light)] text-gray-600">Category: {product.category.name}</p>
              )}
              <button className="mt-4 w-full font-[family-name:var(--font-satoshi-light)] bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;