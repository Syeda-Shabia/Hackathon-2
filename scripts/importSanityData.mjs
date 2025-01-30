// import { createClient } from '@sanity/client';
// import axios from 'axios';
// import dotenv from 'dotenv';

// dotenv.config();

// const client = createClient({
//   projectId: 'yxvn5cvo',
//   dataset: 'production',
//   token: 'skHmPJGWRJPs2TSPj76cM1FH3GqbS3lblkr3bSJMytGtdytRzumwFUQiWqGdMLJVmorJMGbIMP75HOqtlZTXzCM7t41ymzt14Hw7sp5KVC2vBEUrmlkgAaI8C8MrcowqeVvz7Q53oLlIEuRfcVHDeFww4klzC14LnyoBxlyeSCvCufzixV3X',
//   useCdn: false,
//   apiVersion: '2021-08-31',
// });

// // Function to upload images
// async function uploadImageToSanity(url) {
//   try {
//     const response = await axios.get(url, { responseType: 'arraybuffer' });
//     const buffer = Buffer.from(response.data);
//     const asset = await client.assets.upload('image', buffer, {
//       filename: url.split('/').pop(),
//       published: true, // Ensure the asset is published immediately
//     });
//     return { _type: 'image', asset: { _ref: asset._id } };
//   } catch (error) {
//     console.error(`Failed to upload image: ${url}`, error.message);
//     return null;
//   }
// }

// // Fetch side angle images from the API
// async function fetchSideAngleImages(productId) {
//   try {
//     const response = await axios.get(`https://template-6-api.vercel.app/api/images?productId=${productId}`);
//     console.log('API Response:', response.data); // Log the API response
//     return response.data.images; // Return the array of images
//   } catch (error) {
//     console.error(`Failed to fetch side angle images for product ${productId}:`, error.message);
//     return []; // Return an empty array if the API call fails
//   }
// }

// // Upload product data
// async function importProducts() {
//   try {
//     const response = await axios.get('https://template-6-api.vercel.app/api/products');
//     const products = response.data;

//     for (const product of products) {
//       // Upload main image
//       const mainImage = await uploadImageToSanity(product.mainImage);

//       // Fetch side angle images for the product
//       const sideAngleImagesData = await fetchSideAngleImages(product.id);

//       // Ensure sideAngleImagesData is an array
//       if (!Array.isArray(sideAngleImagesData)) {
//         console.error(`Expected an array for sideAngleImagesData, but got:`, sideAngleImagesData);
//         continue; // Skip this product if the data is invalid
//       }

//       // Upload side angle images
//       const sideAngleImages = await Promise.all(
//         sideAngleImagesData.map(async (imageObj, index) => {
//           const { name, url } = imageObj;
//           const uploadedImage = await uploadImageToSanity(url);
//           return uploadedImage
//             ? {
//                 _key: `side${index + 1}`, // Generate a unique key
//                 key: name, // Use the image name as the key
//                 url: uploadedImage, // Use the uploaded image reference
//               }
//             : null;
//         })
//       );

//       // Filter out null values (failed uploads)
//       const validSideImages = sideAngleImages.filter(Boolean);

//       // Create the product document
//       const sanityProduct = {
//         _type: 'product',
//         id: product.id,
//         name: product.name,
//         description: product.description,
//         price: product.price,
//         originalPrice: product.originalPrice,
//         discount: product.discount,
//         category: product.category,
//         tags: product.tags,
//         mainImage,
//         sideAngleImages: validSideImages, // Assign the valid side images
//         color: product.color,
//         sizes: product.sizes,
//         stock: product.stock,
//         dimensions: product.dimensions,
//         material: product.material,
//         secondaryMaterial: product.secondaryMaterial,
//         configuration: product.configuration,
//         upholsteryMaterial: product.upholsteryMaterial,
//         upholsteryColor: product.upholsteryColor,
//         fillingMaterial: product.fillingMaterial,
//         finishType: product.finishType,
//         originOfManufacture: product.originOfManufacture,
//         warranty: product.warranty,
//         rating: product.rating,
//         salesPackage: product.salesPackage,
//         modelNumber: product.modelNumber,
//         sku: product.sku,
//         features: product.features,
//       };

//       // Upload the product to Sanity
//       const result = await client.create(sanityProduct);
//       console.log(`Uploaded product: ${result._id}`);
//     }
//   } catch (error) {
//     console.error('Error importing products:', error.message);
//   }
// }

// // Run the import function
// importProducts();
import { createClient } from '@sanity/client';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const client = createClient({
    projectId: "yxvn5cvo",
    dataset: "production",
    token: "skHmPJGWRJPs2TSPj76cM1FH3GqbS3lblkr3bSJMytGtdytRzumwFUQiWqGdMLJVmorJMGbIMP75HOqtlZTXzCM7t41ymzt14Hw7sp5KVC2vBEUrmlkgAaI8C8MrcowqeVvz7Q53oLlIEuRfcVHDeFww4klzC14LnyoBxlyeSCvCufzixV3X",
    useCdn: false,
    apiVersion: '2021-08-31',
  });

// Function to upload images
async function uploadImageToSanity(url) {
  try {
    const response = await axios.get(url, { responseType: 'arraybuffer' });
    const buffer = Buffer.from(response.data);
    const asset = await client.assets.upload('image', buffer, {
      filename: url.split('/').pop(),
      published: true, // Ensure the asset is published immediately
    });
    return { _type: 'image', asset: { _ref: asset._id } };
  } catch (error) {
    console.error(`Failed to upload image: ${url}`, error.message);
    return null;
  }
}

// Upload product data
async function importProducts() {
  try {
    const response = await axios.get('https://template-6-api.vercel.app/api/products');
    const products = response.data;

    for (const product of products) {
      const mainImage = await uploadImageToSanity(product.mainImage);

    
      const sanityProduct = {
        _type: 'product',
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        originalPrice: product.originalPrice,
        discount: product.discount,
        category: product.category,
        tags: product.tags,
        mainImage,
        color: product.color,
        sizes: product.sizes,
        stock: product.stock,
        dimensions: product.dimensions,
        material: product.material,
        secondaryMaterial: product.secondaryMaterial,
        configuration: product.configuration,
        upholsteryMaterial: product.upholsteryMaterial,
        upholsteryColor: product.upholsteryColor,
        fillingMaterial: product.fillingMaterial,
        finishType: product.finishType,
        originOfManufacture: product.originOfManufacture,
        warranty: product.warranty,
        rating: product.rating,
        salesPackage: product.salesPackage,
        modelNumber: product.modelNumber,
        sku: product.sku,
        features: product.features,
      };

      const result = await client.create(sanityProduct);
      console.log(`Uploaded product: ${result._id}`);
    }
  } catch (error) {
    console.error('Error importing products:', error.message);
  }
}

importProducts();
