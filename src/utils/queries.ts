import { createClient, SanityClient } from '@sanity/client';

// Initialize Sanity client
const client: SanityClient = createClient({
  projectId: 'v39xtyke', // Replace with your Sanity project ID
  dataset: 'production', // Replace with your dataset name
  apiVersion: '2025-01-13', // Use the latest API version
  useCdn: true, // Set to false if you want fresh data
});

// Fetch all products
export async function getAllProducts() {
  const query = `*[_type == "product"] {
    _id,
    name,
    slug,
    productImage {
      asset -> {
        url
      }
    },
    price,
    quantity,
    tags,
    description,
    features,
    dimensions {
      height,
      width,
      depth
    },
    category -> {
      _id,
      name,
      slug
    }
  }`;

  return await client.fetch(query);
}

// Fetch a single product by slug
export const getProductBySlug = `*[_type == "product" && slug.current == $slug][0] {
  _id,
  name,
  slug,
  productImage {
    asset -> {
      url
    }
  },
  price,
  quantity,
  tags,
  description,
  features,
  dimensions {
    height,
    width,
    depth
  },
  category -> {
    _id,
    name,
    slug
  }
}`;
 
// Fetch all categories
export async function getAllCategories() {
  const query = `*[_type == "category"] {
    _id,
    name,
    slug
  }`;

  return await client.fetch(query);
}

// Fetch a single category by slug
export async function getCategoryBySlug(slug: string) {
  const query = `*[_type == "category" && slug.current == $slug][0] {
    _id,
    name,
    slug
  }`;

  const params = { slug };
  return await client.fetch(query, params);
}

// Fetch products by category slug
export async function getProductsByCategorySlug(categorySlug: string) {
  const query = `*[_type == "product" && category->slug.current == $categorySlug] {
    _id,
    name,
    slug,
    productImage {
      asset -> {
        url
      }
    },
    price,
    quantity,
    tags,
    description,
    features,
    dimensions {
      height,
      width,
      depth
    },
    category -> {
      _id,
      name,
      slug
    }
  }`;

  const params = { categorySlug };
  return await client.fetch(query, params);
}

// Fetch products by category ID
export async function getProductsByCategoryId(categoryId: string) {
  const query = `*[_type == "product" && category._ref == $categoryId] {
    _id,
    name,
    slug,
    productImage {
      asset -> {
        url
      }
    },
    price,
    quantity,
    tags,
    description,
    features,
    dimensions {
      height,
      width,
      depth
    },
    category -> {
      _id,
      name,
      slug
    }
  }`;

  const params = { categoryId };
  return await client.fetch(query, params);
}