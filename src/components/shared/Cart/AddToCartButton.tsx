"use client";

import { Button } from "@/components/ui/button";
import { Product } from "@/lib/types";
import { useCart } from "@/context/CartContext";

interface Props {
  product: Product;
}

export default function AddToCartButton({ product }: Props) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <Button
      size="lg"
      className="bg-darkMode-primary text-lightMode-text w-full text-lg font-bold"
      onClick={handleAddToCart}
    >
      Dodaj u korpu
    </Button>
  );
}
