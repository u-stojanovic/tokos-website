"use client";

import ListingProductsSkeletonLoader from "./ListingProductsSkeletonLoader";
import { useGetAllProducts } from "@/lib/hooks/products/useGetProducts";
import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ListProducts({ page }: { page: number }) {
  const [currentPage, setCurrentPage] = useState(page);
  const router = useRouter();

  const { data, isLoading, isError } = useGetAllProducts(currentPage);

  useEffect(() => {
    setCurrentPage(page);
  }, [page]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    router.push(`?page=${newPage}`, undefined);
  };

  if (isLoading) {
    return <ListingProductsSkeletonLoader />;
  }

  if (isError) {
    return <p>Failed to fetch products</p>;
  }

  const totalPages = Math.ceil(data ? data.totalProducts / 12 : 0);

  return (
    <div className="relative w-screen py-16 h-full md:py-24 text-lightMode-text dark:text-darkMode-text bg-lightMode-surface dark:bg-darkMode-surface">
      <div className="relative z-10 container mx-auto grid gap-12 px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data?.products &&
            data.products.map((product: any) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
        <div className="flex justify-center mt-8">
          <button
            onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 mr-2 bg-gray-200 dark:bg-gray-700 rounded"
          >
            Previous
          </button>
          <span className="px-4 py-2">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() =>
              handlePageChange(Math.min(currentPage + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-4 py-2 ml-2 bg-gray-200 dark:bg-gray-700 rounded"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
