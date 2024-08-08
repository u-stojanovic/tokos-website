import { getProductsByCategory } from "@/lib/actions/getProducts";
import ListProducts from "@/components/shared/Products/ListProducts";
import ProductsTitle from "@/components/shared/Products/ProductsTitle";

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = params;

  const transformCategoryName = (category: string) => {
    switch (category) {
      case "kolaci":
        return "Kolači";
      case "slani-ketering":
        return "Slani Ketering";
      case "torte":
        return "Torte";
      case "poslastice":
        return "Poslastice";
      default:
        return category;
    }
  };

  const products = await getProductsByCategory(category);

  console.log("products: ", products);

  if (!products || !products.length) {
    return <div>No products available</div>;
  }

  return (
    <div className="flex flex-col items-center py-6">
      <div className="flex flex-col items-left gap-4">
        <ProductsTitle title={transformCategoryName(category)} />
        <ListProducts products={products} />
      </div>
    </div>
  );
}
