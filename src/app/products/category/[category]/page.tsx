import ListCategoryProducts from "@/components/shared/Products/ListCategoriesProducts";
import ListingProductsSkeletonLoader from "@/components/shared/Products/ListingProductsSkeletonLoader";
import ProductsTitle from "@/components/shared/Products/ProductsTitle";
import { Suspense } from "react";

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

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-left">
        <ProductsTitle title={transformCategoryName(category)} />
        <Suspense fallback={<ListingProductsSkeletonLoader />}>
          <ListCategoryProducts category={category} />
        </Suspense>
      </div>
    </div>
  );
}
