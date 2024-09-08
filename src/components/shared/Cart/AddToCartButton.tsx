"use client";

import { Button } from "@/components/ui/button";
import { Product } from "@/lib/types";
import { useCart } from "@/context/CartContext";
import { CakeSize, CookieSize } from "@prisma/client";

interface Props {
  product: Product;
  description?: string;
  option?: CakeSize | CookieSize;
  selectedSize?: CakeSize | CookieSize | undefined;
}

export default function AddToCartButton({
  product,
  description,
  option,
  selectedSize,
}: Props) {
  const { addToCart } = useCart();

  let disabled = false;

  if (!selectedSize && (product.categoryId == 3 || product.category.id == 1)) {
    disabled = true;
  }

  const handleAddToCart = () => {
    addToCart(product, description, option);
  };

  return (
    <Button
      size="lg"
      disabled={disabled}
      className={`${
        disabled
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-darkMode-primary text-lightMode-text"
      } w-full text-lg font-bold rounded-lg shadow-md transition-all duration-300 transform-gpu will-change-transform hover:shadow-xl hover:-translate-y-1 dark:hover:bg-darkMode-primary`}
      onClick={handleAddToCart}
    >
      Dodaj u korpu
    </Button>
  );
}
