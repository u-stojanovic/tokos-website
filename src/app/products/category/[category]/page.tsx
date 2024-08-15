"use client";

import ListProducts from "@/components/shared/Products/ListProducts";
import ProductsTitle from "@/components/shared/Products/ProductsTitle";
import { useFetchProductsFromCategories } from "@/lib/hooks/products/useGetProductsFromCategories";
import ListingProductsSkeletonLoader from "@/components/shared/Products/ListingProductsSkeletonLoader";

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
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

  const { data: products, isLoading } =
    useFetchProductsFromCategories(category);

  console.log("products: ", products);

  if (!products && !isLoading) {
    return <div>No products available</div>;
  }

  if (!products && isLoading) {
    return <ListingProductsSkeletonLoader />;
  }

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-left">
        <ProductsTitle title={transformCategoryName(category)} />
        <ListProducts products={products as any} />
      </div>
    </div>
  );
}
