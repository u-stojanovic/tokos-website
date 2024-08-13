"use client";

import ProductPage from "@/components/shared/Products/IndividualProduct";
import { useFetchProductById } from "@/lib/hooks/useGetProductById";
import ProductDetailsSkeleton from "./ProductDetailsSkeleton";

export default function Slug({ params }: { params: { id: number } }) {
  const { data: product, isLoading } = useFetchProductById(params.id);

  if (!product && !isLoading) {
    return (
      <div className="flex flex-col items-center justify-center m-4">
        <h1 className="text-3xl font-bold text-lightMode-text dark:text-darkMode-text mb-6">
          Product not found
        </h1>
      </div>
    );
  }

  if (!product && isLoading) {
    return <ProductDetailsSkeleton />;
  }

  return (
    <div className="flex flex-col items-center justify-center m-4">
      <ProductPage product={product as any} />
    </div>
  );
}
