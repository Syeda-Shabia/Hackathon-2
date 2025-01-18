import { useEffect, useState } from 'react';
import { getAllCategories } from '../utils/queries';

interface Category {
  _id: string;
  name: string;
  slug: { current: string };
}

const CategoriesPage = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getAllCategories();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-[family-name:var(--font-clash-display)] font-bold text-center mb-8">Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div key={category._id} className="bg-white rounded-lg shadow-md overflow-hidden p-6">
            <h2 className="text-xl font-[family-name:var(--font-satoshi-light)] font-semibold mb-2">{category.name}</h2>
            <a
              href={`/categories/${category.slug.current}`}
              className="text-blue-500 font-[family-name:var(--font-satoshi-light)] hover:underline"
            >
              View Products
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;