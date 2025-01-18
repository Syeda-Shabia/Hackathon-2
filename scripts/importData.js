"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@sanity/client");
var axios_1 = require("axios");
// Initialize Sanity client
var client = (0, client_1.createClient)({
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
function uploadImageToSanity(imageUrl) {
    return __awaiter(this, void 0, void 0, function () {
        var response, bufferImage, asset, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    console.log("Uploading image: ".concat(imageUrl));
                    return [4 /*yield*/, axios_1.default.get(imageUrl, { responseType: 'arraybuffer' })];
                case 1:
                    response = _a.sent();
                    if (response.status !== 200) {
                        throw new Error("Failed to fetch image: ".concat(imageUrl));
                    }
                    bufferImage = Buffer.from(response.data);
                    return [4 /*yield*/, client.assets.upload('image', bufferImage, {
                            filename: imageUrl.split('/').pop(),
                        })];
                case 2:
                    asset = _a.sent();
                    console.log("Image uploaded successfully: ".concat(asset._id));
                    return [2 /*return*/, asset._id];
                case 3:
                    error_1 = _a.sent();
                    console.error('Failed to upload image:', imageUrl, error_1);
                    return [2 /*return*/, null];
                case 4: return [2 /*return*/];
            }
        });
    });
}
/**
 * Uploads a product to Sanity.
 * @param {Object} product - The product data to upload.
 */
function uploadProduct(product) {
    return __awaiter(this, void 0, void 0, function () {
        var imageId, document_1, createdProduct, error_2;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 5, , 6]);
                    return [4 /*yield*/, uploadImageToSanity(product.image)];
                case 1:
                    imageId = _b.sent();
                    if (!imageId) return [3 /*break*/, 3];
                    document_1 = {
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
                        isNew: ((_a = product.tags) === null || _a === void 0 ? void 0 : _a.includes('new ceramics')) || false, // Set isNew based on tags
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
                    return [4 /*yield*/, client.create(document_1)];
                case 2:
                    createdProduct = _b.sent();
                    console.log("Product ".concat(product.name, " uploaded successfully:"), createdProduct);
                    return [3 /*break*/, 4];
                case 3:
                    console.log("Product ".concat(product.name, " skipped due to image upload failure."));
                    _b.label = 4;
                case 4: return [3 /*break*/, 6];
                case 5:
                    error_2 = _b.sent();
                    console.error('Error uploading product:', error_2);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
/**
 * Fetches products from the API and imports them into Sanity.
 * @param {string} apiUrl - The URL of the API to fetch products from.
 */
function importProducts(apiUrl) {
    return __awaiter(this, void 0, void 0, function () {
        var response, products, _i, products_1, product, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 6, , 7]);
                    return [4 /*yield*/, axios_1.default.get(apiUrl)];
                case 1:
                    response = _a.sent();
                    if (response.status !== 200) {
                        throw new Error("Failed to fetch products from API: ".concat(response.status));
                    }
                    products = response.data;
                    _i = 0, products_1 = products;
                    _a.label = 2;
                case 2:
                    if (!(_i < products_1.length)) return [3 /*break*/, 5];
                    product = products_1[_i];
                    return [4 /*yield*/, uploadProduct(product)];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    _i++;
                    return [3 /*break*/, 2];
                case 5: return [3 /*break*/, 7];
                case 6:
                    error_3 = _a.sent();
                    console.error('Error fetching or importing products:', error_3);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    });
}
// API URL to fetch products
var apiUrl = 'https://hackathon-apis.vercel.app/api/products'; // Replace with your API endpoint
// Start the migration
importProducts(apiUrl);
