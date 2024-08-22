"use client";

import Link from "next/link";
import Image from "next/image";
import AddToCartButtonWithDialog from "../Cart/AddToCartWithDialog";
import {
  Product as PrismaProduct,
  Image as PrismaProductImage,
} from "@prisma/client";

const truncateText = (text: string, limit: number) => {
  if (text.length > limit) {
    return text.substring(0, limit) + "...";
  }
  return text;
};

interface Product extends PrismaProduct {
  images: PrismaProductImage[];
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
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
      <div className="p-4 w-full flex flex-col items-center justify-between flex-1">
        <div className="mb-4">
          <h3 className="text-lightMode-text dark:text-darkMode-text font-bold text-xl mb-2">
            {product.name}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-2 text-lg">
            {truncateText(product.description, 100)}
          </p>
          <p className="text-blue-500 font-semibold mb-4 text-lg">
            {product.price ? `${product.price.toFixed(2)} RSD` : "N/A"}
          </p>
        </div>
        <AddToCartButtonWithDialog product={product as any} />
      </div>
    </div>
  );
}
