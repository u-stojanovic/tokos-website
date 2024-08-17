"use client";

import Image from "next/image";
import { useMemo } from "react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { PlusIcon, MinusIcon, TrashIcon } from "lucide-react";

export default function OrderSummary() {
  const { cartItems, addToCart, decrementQuantity, removeFromCart } = useCart();

  const totalPrice = useMemo(
    () =>
      cartItems.reduce(
        (total, item) => total + (item.product.price ?? 0) * item.quantity,
        0,
      ),
    [cartItems],
  );

  const totalQuantity = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems],
  );

  return (
    <div className="flex flex-col text-nowrap p-6 bg-lightMode-background dark:bg-darkMode-background rounded-md shadow-md w-full">
      <div className="max-h-[50vh] overflow-y-auto">
        <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Order Summary
        </h2>
        <ul className="space-y-6">
          {cartItems.map((item) => (
            <li
              key={item.product.id}
              className="relative flex justify-between items-center"
            >
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Image
                    src={item.product.images[0]?.imageUrl}
                    alt={item.product.name}
                    width={500}
                    height={500}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <Button
                    variant="destructive"
                    size="sm"
                    className="absolute top-1 left-1 p-1 rounded-md"
                    onClick={() => removeFromCart(item.product.id)}
                  >
                    <TrashIcon className="h-4 w-4 text-white" />
                  </Button>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900 dark:text-gray-100">
                    {item.product.name}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Količina: {item.quantity}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-end space-y-2 p-2">
                <div className="flex items-center">
                  <Button
                    variant="outline"
                    size="icon"
                    className="p-1 border bg-lightMode-surface dark:bg-gray-950 border-gray-300 dark:border-gray-600"
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
                    className="p-1 border bg-lightMode-surface dark:bg-gray-950 border-gray-300 dark:border-gray-600"
                    onClick={() => addToCart(item.product, item.description)}
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
      </div>
      <div className="flex justify-between items-center mt-6 border-t pt-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
        <div className="flex flex-row gap-2">
          <span>Suma:</span>
          <span>{totalPrice.toFixed(2)} RSD</span>
        </div>
        <div className="flex flex-row gap-2 text-right">
          <span>Broj proizvoda:</span>
          <span>{totalQuantity}</span>
        </div>
      </div>
    </div>
  );
}
