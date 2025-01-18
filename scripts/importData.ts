import { createClient, SanityClient } from '@sanity/client';
import axios from 'axios';

// Initialize Sanity client
const client: SanityClient = createClient({
  projectId: 'v39xtyke', // Replace with your Sanity project ID
  dataset: 'production', // Replace with your dataset name
  useCdn: false, // Set to true if you want to use the CDN
  apiVersion: '2025-01-13', // Use the latest API version
  token: 'sk8Tfl18IKUeihrWysknunvXTqWcUdwjFdiENJeCFDNib7CjHYWCqXUE7ttqnrPZr8oSWs07QBmMpgz98wd9A4ySMAH2pQb0V8ypiJ5TA7C81ORgStEumitUSxtQ8VzeH5NKhDnUD4d6GKkWuGMGweNCuIf00cthjI9RpOLtoIIDQMyXr9oC', // Replace with your Sanity token
});

/**
 * Uploads an image to Sanity and returns the asset ID.
 * @param {string} imageUrl - The URL of the image to upload.
 * @returns {Promise<string|null>} - The asset ID or null if upload fails.
 */
async function uploadImageToSanity(imageUrl: string): Promise<string | null> {
  try {
    console.log(`Uploading image: ${imageUrl}`);

    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    if (response.status !== 200) {
      throw new Error(`Failed to fetch image: ${imageUrl}`);
    }

    const bufferImage = Buffer.from(response.data);

    const asset = await client.assets.upload('image', bufferImage, {
      filename: imageUrl.split('/').pop(),
    });

    console.log(`Image uploaded successfully: ${asset._id}`);
    return asset._id;
  } catch (error) {
    console.error('Failed to upload image:', imageUrl, error);
    return null;
  }
}

/**
 * Uploads a product to Sanity.
 * @param {Object} product - The product data to upload.
 */
async function uploadProduct(product: any): Promise<void> {
  try {
    const imageId = await uploadImageToSanity(product.image);

    if (imageId) {
      const document = {
        _type: 'product', // Replace with your Sanity schema type name
        title: product.name,
        description: product.description,
        productImage: {
          _type: 'image',
          asset: {
            _ref: imageId,
          },
        },
        price: product.price,
        tags: product.tags,
        isNew: product.tags?.includes('new ceramics') || false, // Set isNew based on tags
        slug: {
          _type: 'slug',
          current: product.name.toLowerCase().replace(/ /g, '-'), // Generate slug from name
        },
        inStock: true, // Default to true, update as needed
        stock: 100, // Default stock value, update as needed
        reviews: Math.floor(Math.random() * 5) + 1, // Random reviews between 1 and 5
        colors: ['#FF0000', '#00FF00', '#0000FF'], // Default colors, update as needed
        discountPrice: product.price * 0.9, // Example: 10% discount
        category: {
          _type: 'reference',
          _ref: product.categoryId, // Replace with the correct category reference
        },
      };

      const createdProduct = await client.create(document);
      console.log(`Product ${product.name} uploaded successfully:`, createdProduct);
    } else {
      console.log(`Product ${product.name} skipped due to image upload failure.`);
    }
  } catch (error) {
    console.error('Error uploading product:', error);
  }
}

/**
 * Fetches products from the API and imports them into Sanity.
 * @param {string} apiUrl - The URL of the API to fetch products from.
 */
async function importProducts(apiUrl: string): Promise<void> {
  try {
    const response = await axios.get(apiUrl);

    if (response.status !== 200) {
      throw new Error(`Failed to fetch products from API: ${response.status}`);
    }

    const products = response.data;

    for (const product of products) {
      await uploadProduct(product);
    }
  } catch (error) {
    console.error('Error fetching or importing products:', error);
  }
}

// API URL to fetch products
const apiUrl = 'https://hackathon-apis.vercel.app/api/products'; // Replace with your API endpoint

// Start the migration
importProducts(apiUrl);