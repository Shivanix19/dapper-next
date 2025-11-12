import { useParams } from "react-router-dom";
import { useState } from "react";
import { AllProducts } from "@/data/AllProducts";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { Check, Package, Truck, RefreshCw } from "lucide-react";
import ProductCard from "@/components/ProductCard";

const ProductDetail = () => {
  const { slug } = useParams();
  const product = AllProducts.find((p) => p.slug === slug);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const { addToCart } = useCart();
  const { toast } = useToast();

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-foreground">Product not found</p>
      </div>
    );
  }

  // Get related products from the same category
  const relatedProducts = AllProducts.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: "Please select a size",
        variant: "destructive",
      });
      return;
    }

    addToCart(product, selectedSize);
    toast({
      title: "Added to cart",
      description: `${product.name} (${selectedSize}) added to your cart`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="aspect-square bg-muted">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              {product.name}
            </h1>
            <p className="text-3xl font-semibold text-foreground mb-6">
              ₹{product.price.toLocaleString('en-IN')}
            </p>
            <p className="text-muted-foreground mb-8">{product.description}</p>

            {/* Size Selection */}
            <div className="mb-8">
              <h3 className="text-sm font-medium text-foreground mb-4">
                Select Size
              </h3>
              <div className="grid grid-cols-6 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`border border-border px-4 py-2 text-sm font-medium transition-colors relative ${
                      selectedSize === size
                        ? "bg-primary text-primary-foreground"
                        : "bg-background text-foreground hover:bg-muted"
                    }`}
                  >
                    {size}
                    {selectedSize === size && (
                      <Check className="absolute top-1 right-1 h-3 w-3" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart Button */}
            <Button
              onClick={handleAddToCart}
              className="w-full mb-4"
              size="lg"
            >
              Add to Cart
            </Button>

            {/* Product Features */}
            <div className="grid grid-cols-3 gap-4 mb-8 py-6 border-y border-border">
              <div className="flex flex-col items-center text-center">
                <Package className="h-6 w-6 text-foreground mb-2" />
                <p className="text-xs text-muted-foreground">Free Shipping</p>
                <p className="text-xs text-muted-foreground">on orders above ₹2000</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Truck className="h-6 w-6 text-foreground mb-2" />
                <p className="text-xs text-muted-foreground">Fast Delivery</p>
                <p className="text-xs text-muted-foreground">2-5 business days</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <RefreshCw className="h-6 w-6 text-foreground mb-2" />
                <p className="text-xs text-muted-foreground">Easy Returns</p>
                <p className="text-xs text-muted-foreground">30-day return policy</p>
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-medium text-foreground mb-3">
                  Product Information
                </h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex justify-between border-b border-border pb-2">
                    <span>Category:</span>
                    <span className="font-medium text-foreground capitalize">{product.category}</span>
                  </li>
                  {product.material && (
                    <li className="flex justify-between border-b border-border pb-2">
                      <span>Material:</span>
                      <span className="font-medium text-foreground">{product.material}</span>
                    </li>
                  )}
                  {product.fit && (
                    <li className="flex justify-between border-b border-border pb-2">
                      <span>Fit:</span>
                      <span className="font-medium text-foreground">{product.fit}</span>
                    </li>
                  )}
                  <li className="flex justify-between border-b border-border pb-2">
                    <span>Available Sizes:</span>
                    <span className="font-medium text-foreground">{product.sizes.join(", ")}</span>
                  </li>
                  <li className="flex justify-between border-b border-border pb-2">
                    <span>Status:</span>
                    <span className={`font-medium ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                      {product.inStock ? "In Stock" : "Out of Stock"}
                    </span>
                  </li>
                </ul>
              </div>

              {product.care && (
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-3">
                    Care Instructions
                  </h4>
                  <p className="text-sm text-muted-foreground">{product.care}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
