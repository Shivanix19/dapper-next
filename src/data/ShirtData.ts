export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  description: string;
  category: string;
  images: string[];
  sizes: string[];
  inStock: boolean;
  material?: string;
  care?: string;
  fit?: string;
}

export const ShirtData: Product[] = [
  {
    id: 101,
    name: "Premium White Oxford Shirt",
    slug: "premium-white-oxford-shirt",
    price: 6639,
    description: "Classic white Oxford shirt crafted from premium cotton. Perfect for both formal and casual occasions with a timeless design.",
    category: "shirts",
    images: ["/src/assets/shirt-1.jpg"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
    material: "100% Premium Egyptian Cotton",
    care: "Machine wash cold, tumble dry low, iron on medium heat",
    fit: "Regular Fit",
  },
  {
    id: 102,
    name: "Navy Blue Formal Shirt",
    slug: "navy-blue-formal-shirt",
    price: 5805,
    description: "Elegant navy blue formal shirt with a modern slim fit. Made from breathable fabric for all-day comfort.",
    category: "shirts",
    images: ["/src/assets/shirt-3.jpg"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
    material: "Cotton Blend with Stretch",
    care: "Machine wash cold, do not bleach, iron on low heat",
    fit: "Slim Fit",
  },
  {
    id: 103,
    name: "Black Linen Casual Shirt",
    slug: "black-linen-casual-shirt",
    price: 7472,
    description: "Sophisticated black linen shirt perfect for summer. Lightweight and breathable with a relaxed fit.",
    category: "shirts",
    images: ["/src/assets/shirt-2.jpg"],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    material: "Pure Linen",
    care: "Dry clean recommended, can be hand washed",
    fit: "Relaxed Fit",
  },
  {
    id: 104,
    name: "Checkered Cotton Shirt",
    slug: "checkered-cotton-shirt",
    price: 5389,
    description: "Classic checkered pattern on premium cotton. Versatile design suitable for casual and smart-casual settings.",
    category: "shirts",
    images: ["/src/assets/shirt-4.jpg"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
    material: "100% Cotton Poplin",
    care: "Machine wash warm, tumble dry medium",
    fit: "Regular Fit",
  },
];
