"use client";

import React, { useMemo } from "react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ShoppingBagIcon, MinusIcon, PlusIcon, TrashIcon } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";

export default function Cart() {
  const { cartItems, addToCart, removeFromCart, decrementQuantity } = useCart();

  // Calculate total price and total quantity with useMemo to avoid recalculating on every render
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

  if (cartItems.length === 0) {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="relative p-2 hover:bg-transparent hover:text-darkMode-text inline-flex items-center justify-center"
            style={{ width: "auto", minWidth: "auto" }}
          >
            <ShoppingBagIcon />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="h-auto w-[450px] sm:w-[500px] bg-lightMode-surface dark:bg-darkMode-surface shadow-lg flex flex-col justify-between"
        >
          <SheetHeader className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 px-6 py-4">
            <SheetTitle className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              Your Cart
            </SheetTitle>
          </SheetHeader>
          <div className="p-6 text-gray-900 dark:text-gray-100">
            <p>Your cart is empty.</p>
          </div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative p-2 hover:bg-transparent hover:text-darkMode-text inline-flex items-center justify-center"
          style={{ width: "auto", minWidth: "auto" }}
        >
          <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-red-600 text-white rounded-full w-4 h-4 flex justify-center items-center text-xs">
            {totalQuantity}
          </span>
          <ShoppingBagIcon />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="h-auto w-[450px] sm:w-[500px] bg-lightMode-surface dark:bg-darkMode-surface shadow-lg flex flex-col justify-between"
      >
        <SheetHeader className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 px-6 py-4">
          <SheetTitle className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            Your Cart
          </SheetTitle>
        </SheetHeader>
        <div className="p-6 space-y-6 text-gray-900 dark:text-gray-100 flex-grow overflow-auto">
          <ul className="space-y-6">
            {cartItems.map((item) => (
              <li
                key={item.product.id}
                className="flex justify-between items-center"
              >
                <Image
                  src={item.product.images[0]?.imageUrl}
                  alt={item.product.name}
                  width={200}
                  height={200}
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div className="flex flex-col justify-between w-full pl-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-lg">
                      {item.product.name}
                    </span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="hover:bg-transparent"
                      onClick={() => removeFromCart(item.product.id)}
                    >
                      <TrashIcon className="h-5 w-5 text-red-500" />
                    </Button>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="hover:bg-transparent"
                        onClick={() => decrementQuantity(item.product.id)}
                      >
                        <MinusIcon className="h-5 w-5 text-red-500" />
                      </Button>
                      <span className="mx-4 font-medium text-lg">
                        {item.quantity}
                      </span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="hover:bg-transparent"
                        onClick={() =>
                          addToCart(item.product, item.description)
                        }
                      >
                        <PlusIcon className="h-5 w-5 text-green-500" />
                      </Button>
                    </div>
                    <span className="inline-flex text-lg font-semibold">
                      {item.product.price?.toFixed(2)} RSD
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 text-lg font-semibold text-right">
            Total: {totalPrice.toFixed(2)} RSD
          </div>
          <Link href="/porudzbine">
            <Button className="w-full mt-4 bg-pink-500 hover:bg-pink-700 text-white dark:bg-pink-500 dark:hover:bg-pink-600">
              Nastavi
            </Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
