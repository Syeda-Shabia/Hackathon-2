import { defineType, defineField } from "sanity";

export const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (rule) => rule.required(),
      options: {
        source: "title", // Use the "title" field to generate the slug
      },
    }),
    defineField({
      name: "productImage",
      title: "Product Image",
      type: "image",
      validation: (rule) => rule.required(),
      options: {
        hotspot: true, // Enable image cropping
      },
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "discountPrice",
      title: "Discount Price",
      type: "number",
      validation: (rule) => rule.min(0),
    }),
    defineField({
      name: "quantity",
      title: "Quantity",
      type: "number",
      validation: (rule) => rule.min(0),
    }),
    defineField({
      name: "stock",
      title: "Stock",
      type: "number",
      validation: (rule) => rule.min(0),
    }),
    defineField({
      name: "inStock",
      title: "In Stock",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "isNew",
      title: "Is New",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "colors",
      title: "Colors",
      type: "array",
      of: [{ type: "string" }],
      description: "List of available colors for the product",
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "Detailed description of the product",
    }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "string" }],
      description: "List of key features of the product",
    }),
    defineField({
      name: "dimensions",
      title: "Dimensions",
      type: "object",
      fields: [
        { name: "height", title: "Height", type: "string" },
        { name: "width", title: "Width", type: "string" },
        { name: "depth", title: "Depth", type: "string" },
      ],
      description: "Dimensions of the product",
    }),
    defineField({
      name: "reviews",
      title: "Reviews",
      type: "number",
      validation: (rule) => rule.min(0).max(5),
      description: "Number of reviews (0 to 5)",
    }),
  ],
});