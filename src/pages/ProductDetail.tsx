import { useParams } from "react-router-dom";
import { useState } from "react";
import { AllProducts } from "@/data/AllProducts";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { Check } from "lucide-react";

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
              ${product.price.toFixed(2)}
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

            {/* Product Details */}
            <div className="border-t border-border pt-8 space-y-4">
              <div>
                <h4 className="text-sm font-medium text-foreground mb-2">
                  Product Details
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Category: {product.category}</li>
                  <li>Available Sizes: {product.sizes.join(", ")}</li>
                  <li>Status: {product.inStock ? "In Stock" : "Out of Stock"}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
