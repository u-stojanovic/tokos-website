"use client";

import Image from "next/image";
import { useMemo } from "react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { PlusIcon, MinusIcon } from "lucide-react";

export default function OrderSummary() {
  const { cartItems, addToCart, decrementQuantity } = useCart();

  // Calculate total price and total quantity with useMemo to avoid recalculating on every render
  const totalPrice = useMemo(
    () =>
      cartItems.reduce(
        (total, item) => total + (item.product.price ?? 0) * item.quantity,
        0,
      ),
    [cartItems],
  );

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-md shadow-md w-full max-w-md">
      <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
        Order Summary
      </h2>
      <ul className="space-y-6">
        {cartItems.map((item) => (
          <li
            key={item.product.id}
            className="flex justify-between items-center"
          >
            <div className="flex items-center space-x-4">
              <Image
                src={item.product.images[0]?.imageUrl}
                alt={item.product.name}
                width={128}
                height={128}
                className="w-20 h-20 object-cover rounded-md"
              />
              <div className="flex-1">
                <h3 className="font-medium text-gray-900 dark:text-gray-100">
                  {item.product.name}
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Quantity: {item.quantity}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-end space-y-2">
              <div className="flex items-center">
                <Button
                  variant="outline"
                  size="icon"
                  className="p-1 border border-gray-300 dark:border-gray-600"
                  onClick={() => decrementQuantity(item.product.id)}
                >
                  <MinusIcon className="h-4 w-4 text-gray-700 dark:text-gray-300" />
                </Button>
                <span className="mx-2 font-medium text-lg text-gray-900 dark:text-gray-100">
                  {item.quantity}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  className="p-1 border border-gray-300 dark:border-gray-600"
                  onClick={() => addToCart(item.product)}
                >
                  <PlusIcon className="h-4 w-4 text-gray-700 dark:text-gray-300" />
                </Button>
              </div>
              <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {item.product.price?.toFixed(2)} RSD
              </span>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-6 border-t pt-4 text-lg font-semibold text-right text-gray-900 dark:text-gray-100">
        Total: {totalPrice.toFixed(2)} RSD
      </div>
    </div>
  );
}
