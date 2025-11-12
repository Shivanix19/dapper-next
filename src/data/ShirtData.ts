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
}

export const ShirtData: Product[] = [
  {
    id: 101,
    name: "Premium White Oxford Shirt",
    slug: "premium-white-oxford-shirt",
    price: 79.99,
    description: "Classic white Oxford shirt crafted from premium cotton. Perfect for both formal and casual occasions with a timeless design.",
    category: "shirts",
    images: ["/placeholder.svg"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
  },
  {
    id: 102,
    name: "Navy Blue Formal Shirt",
    slug: "navy-blue-formal-shirt",
    price: 69.99,
    description: "Elegant navy blue formal shirt with a modern slim fit. Made from breathable fabric for all-day comfort.",
    category: "shirts",
    images: ["/placeholder.svg"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
  },
  {
    id: 103,
    name: "Black Linen Casual Shirt",
    slug: "black-linen-casual-shirt",
    price: 89.99,
    description: "Sophisticated black linen shirt perfect for summer. Lightweight and breathable with a relaxed fit.",
    category: "shirts",
    images: ["/placeholder.svg"],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
  },
  {
    id: 104,
    name: "Checkered Cotton Shirt",
    slug: "checkered-cotton-shirt",
    price: 64.99,
    description: "Classic checkered pattern on premium cotton. Versatile design suitable for casual and smart-casual settings.",
    category: "shirts",
    images: ["/placeholder.svg"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
  },
];
