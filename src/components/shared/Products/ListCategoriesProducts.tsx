"use client";

import { useFetchProductsFromCategories } from "@/lib/hooks/products/useProductsByCategoryQuery";
import ListingProductsSkeletonLoader from "./ListingProductsSkeletonLoader";
import ProductCard from "./ProductCard";

interface Props {
  category: string;
}

export default function ListCategoryProducts({ category }: Props) {
  const { data: products, isLoading } =
    useFetchProductsFromCategories(category);

  if (!products && isLoading) {
    return <ListingProductsSkeletonLoader />;
  }

  if (!products && !isLoading) {
    return <p>Failed to fetch products</p>;
  }

  return (
    <div className="relative w-screen py-16 h-full md:py-24 text-lightMode-text dark:text-darkMode-text bg-lightMode-surface dark:bg-darkMode-surface">
      <div className="relative z-10 container mx-auto grid gap-12 px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products &&
            products.map((product: any) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    </div>
  );
}
