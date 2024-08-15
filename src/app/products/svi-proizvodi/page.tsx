"use client";

import ListProducts from "@/components/shared/Products/ListProducts";
import ProductsTitle from "@/components/shared/Products/ProductsTitle";
import ListingProductsSkeletonLoader from "@/components/shared/Products/ListingProductsSkeletonLoader";
import { useFetchProducts } from "@/lib/hooks/products/useGetProducts";

export default function AllProducts() {
  const { data: products, isLoading } = useFetchProducts();

  if (!products && isLoading) {
    return <ListingProductsSkeletonLoader />;
  }

  if (!products && !isLoading) {
    return <p>Failed to fetch products</p>;
  }

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-left">
        <ProductsTitle title="Svi Proizvodi" />
        <ListProducts products={products as any} />
      </div>
    </div>
  );
}
