import { Link } from "react-router-dom";
import { Product } from "@/data/ShirtData";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link to={`/product/${product.slug}`} className="group">
      <div className="bg-card border border-border overflow-hidden transition-all duration-300 hover:shadow-lg">
        <div className="aspect-square bg-muted overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h3 className="text-sm font-medium text-foreground mb-1 line-clamp-1">
            {product.name}
          </h3>
          <p className="text-lg font-semibold text-foreground">
            ${product.price.toFixed(2)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
