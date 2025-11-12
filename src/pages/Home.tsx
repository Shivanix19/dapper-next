import { AllProducts } from "@/data/AllProducts";
import ProductCard from "@/components/ProductCard";
import { Link } from "react-router-dom";
import heroBanner from "@/assets/hero-banner.jpg";
import promoShirts from "@/assets/promo-shirts.jpg";
import promoNewArrivals from "@/assets/promo-new-arrivals.jpg";
import promoWinter from "@/assets/promo-winter.jpg";

const Home = () => {
  const categories = [
    { name: "Shirts", path: "/shirts", count: 4 },
    { name: "T-Shirts", path: "/tshirts", count: 4 },
    { name: "Trousers", path: "/trousers", count: 4 },
    { name: "Shoes", path: "/shoes", count: 4 },
    { name: "Jeans", path: "/jeans", count: 4 },
    { name: "Blazers", path: "/blazers", count: 4 },
    { name: "Winter", path: "/winter", count: 4 },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBanner})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            AETHER CO
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Elevate Your Style with Premium Essentials
          </p>
          <Link
            to="/shirts"
            className="inline-block bg-white text-black px-8 py-3 text-sm font-medium hover:bg-white/90 transition-colors"
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

      {/* Promotional Banner 1 - Winter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/winter" className="block relative h-64 md:h-96 overflow-hidden group">
          <img 
            src={promoWinter} 
            alt="Winter Collection - Premium Coats and Jackets" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="text-3xl md:text-5xl font-bold mb-2">Winter Collection</h3>
              <p className="text-lg md:text-xl mb-4">Embrace the Cold in Style</p>
              <span className="inline-block bg-white text-black px-6 py-2 text-sm font-medium hover:bg-white/90 transition-colors">
                Shop Winter
              </span>
            </div>
          </div>
        </Link>
      </section>

      {/* Promotional Banner 2 - Shirts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/shirts" className="block relative h-64 md:h-96 overflow-hidden group">
          <img 
            src={promoShirts} 
            alt="Premium Shirts Collection" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="text-3xl md:text-5xl font-bold mb-2">Premium Shirts</h3>
              <p className="text-lg md:text-xl">Timeless Elegance</p>
            </div>
          </div>
        </Link>
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

      {/* Promotional Banner 3 - New Arrivals */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative h-64 md:h-96 overflow-hidden group">
          <img 
            src={promoNewArrivals} 
            alt="New Arrivals" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="text-3xl md:text-5xl font-bold mb-2">New Arrivals</h3>
              <p className="text-lg md:text-xl mb-4">Discover the Latest Collection</p>
              <Link
                to="/shirts"
                className="inline-block bg-white text-black px-6 py-2 text-sm font-medium hover:bg-white/90 transition-colors"
              >
                Explore Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-foreground mb-2">Free Shipping</h3>
              <p className="text-muted-foreground">On orders above ₹2000</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-foreground mb-2">Easy Returns</h3>
              <p className="text-muted-foreground">30-day return policy</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-foreground mb-2">Premium Quality</h3>
              <p className="text-muted-foreground">Handpicked materials</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
