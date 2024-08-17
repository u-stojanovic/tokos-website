"use client";

import React from "react";
import { Product } from "@/lib/types";

import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

interface Props {
  product: Product;
}

export default function AddToCartButtonWithDialog({ product }: Props) {
  const { addToCart } = useCart();
  const [additionalDetails, setAdditionalDetails] = React.useState("");

  const handleAddToCart = () => {
    addToCart(product, additionalDetails);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className="bg-darkMode-primary text-lightMode-text w-full text-lg font-bold rounded-lg shadow-md transition-all duration-300 transform-gpu will-change-transform hover:shadow-xl hover:-translate-y-1 dark:hover:bg-darkMode-primary"
        >
          Dodaj u korpu
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-lightMode-background dark:bg-darkMode-background text-card-foreground rounded-lg shadow-xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-black dark:text-white">
            Dodaj u korpu
          </DialogTitle>
          <DialogDescription className="text-lightMode-text dark:text-darkMode-text text-sm sm:text-base">
            Napomena: Ukoliko želite drugačije detalje u odnosu na prikazanu
            dekoraciju torte, molimo Vas da to navedete ovde:
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Textarea
            placeholder="Unesite dodatne detalje"
            value={additionalDetails}
            onChange={(e) => setAdditionalDetails(e.target.value)}
            className="text-md font-semibold p-3 sm:p-4 min-h-[150px] sm:min-h-[200px] bg-muted text-muted-foreground border-none rounded-md"
          />
        </div>
        <DialogFooter>
          <Button
            size="lg"
            variant="ghost"
            className="w-fit text-lightMode-text dark:text-darkMode-text text-lg py-3 font-bold rounded-md"
            onClick={handleAddToCart}
          >
            Dodaj
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
