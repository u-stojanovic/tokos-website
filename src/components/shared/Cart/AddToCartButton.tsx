"use client";

import { Button } from "@/components/ui/button";
import { Product } from "@/lib/types";
import { useCart } from "@/context/CartContext";

interface Props {
  product: Product;
  description?: string;
}

export default function AddToCartButton({ product, description }: Props) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, description);
  };

  return (
    <Button
      size="lg"
      className="bg-darkMode-primary text-lightMode-text w-full text-lg font-bold rounded-lg shadow-md transition-all duration-300 transform-gpu will-change-transform hover:shadow-xl hover:-translate-y-1 dark:hover:bg-darkMode-primary"
      onClick={handleAddToCart}
    >
      Dodaj u korpu
    </Button>
  );
}
