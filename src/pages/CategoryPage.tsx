import { useParams } from "react-router-dom";
import { ShirtData } from "@/data/ShirtData";
import { TshirtData } from "@/data/TshirtData";
import { TrouserData } from "@/data/TrouserData";
import { ShoeData } from "@/data/ShoeData";
import { JeanData } from "@/data/JeanData";
import { BlazerData } from "@/data/BlazerData";
import ProductCard from "@/components/ProductCard";

const CategoryPage = () => {
  const { category } = useParams();

  const getProducts = () => {
    switch (category) {
      case "shirts":
        return ShirtData;
      case "tshirts":
        return TshirtData;
      case "trousers":
        return TrouserData;
      case "shoes":
        return ShoeData;
      case "jeans":
        return JeanData;
      case "blazers":
        return BlazerData;
      default:
        return [];
    }
  };

  const products = getProducts();
  const categoryName = category?.charAt(0).toUpperCase() + category?.slice(1);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-foreground mb-8">{categoryName}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
