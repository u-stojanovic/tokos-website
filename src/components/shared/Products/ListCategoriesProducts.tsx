"use client";

import Link from "next/link";
import Image from "next/image";
import AddToCartButton from "../Cart/AddToCartButton";
import { useFetchProductsFromCategories } from "@/lib/hooks/products/useGetProductsFromCategories";
import ListingProductsSkeletonLoader from "./ListingProductsSkeletonLoader";

const truncateText = (text: string, limit: number) => {
  if (text.length > limit) {
    return text.substring(0, limit) + "...";
  }
  return text;
};

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
              <div
                key={product.id}
                className="relative flex flex-col items-center text-center bg-lightMode-background dark:bg-darkMode-background rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 transform-gpu will-change-transform hover:-translate-y-2"
              >
                <div className="relative w-full h-80 font-semibold rounded-t-lg overflow-hidden group">
                  <Link href={`/products/${product.id}`}>
                    <Image
                      src={
                        product.images.length > 0
                          ? product.images[0].imageUrl
                          : "/placeholder-image-url"
                      }
                      alt={product.name}
                      layout="fill"
                      objectFit="cover"
                      className="object-cover opacity-95 transition-transform duration-300 transform group-hover:scale-105"
                    />
                  </Link>
                </div>
                <div className="p-4 w-full flex flex-col items-center">
                  <h3 className="text-lightMode-text dark:text-darkMode-text font-bold text-xl mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2 text-lg">
                    {truncateText(product.description, 100)}{" "}
                    {/* Adjust the character limit as needed */}
                  </p>
                  <p className="text-blue-500 font-semibold mb-4 text-lg">
                    {product.price
                      ? `${product.price.toFixed(2)} dinara`
                      : "150 dinara"}
                  </p>
                  <AddToCartButton product={product} />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
