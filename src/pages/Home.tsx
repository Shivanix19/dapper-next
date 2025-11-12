import { AllProducts } from "@/data/AllProducts";
import ProductCard from "@/components/ProductCard";
import { Link } from "react-router-dom";

const Home = () => {
  const categories = [
    { name: "Shirts", path: "/shirts", count: 4 },
    { name: "T-Shirts", path: "/tshirts", count: 4 },
    { name: "Trousers", path: "/trousers", count: 4 },
    { name: "Shoes", path: "/shoes", count: 4 },
    { name: "Jeans", path: "/jeans", count: 4 },
    { name: "Blazers", path: "/blazers", count: 4 },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-muted flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4 tracking-tight">
            LUXE MENSWEAR
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Elevate Your Style with Premium Essentials
          </p>
          <Link
            to="/shirts"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Link
              key={category.path}
              to={category.path}
              className="group border border-border p-6 text-center hover:bg-muted transition-colors"
            >
              <h3 className="text-lg font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                {category.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {category.count} items
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
          All Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AllProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
