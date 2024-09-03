"use client";

import React from "react";
import { Product } from "@/lib/types";
import { CakeSize, CookieSize } from "@prisma/client";
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
import { RectangleHorizontal, Square } from "lucide-react";

interface Props {
  product: Product;
}

export default function AddToCartButtonWithDialog({ product }: Props) {
  const [isOpen, setIsOpen] = React.useState(false);
  const { addToCart } = useCart();
  const [additionalDetails, setAdditionalDetails] = React.useState("");
  const [selectedSize, setSelectedSize] = React.useState<
    CakeSize | CookieSize | undefined
  >(undefined);
  const [error, setError] = React.useState<string | null>(null);

  const handleAddToCart = () => {
    if (
      !selectedSize &&
      (product.category.id == 3 || product.category.id == 1)
    ) {
      setError("Molimo vas izaberite opciju za proizvod");
      return;
    }
    addToCart(product, additionalDetails, selectedSize);
    setError(null);
    setIsOpen(false);
  };

  const handleSizeSelection = (size: CakeSize | CookieSize) => {
    setSelectedSize(size);
    setError(null);
  };

  const renderSizeOptions = () => {
    if (product.category.name === "kolaci") {
      return (
        <div className="flex flex-row gap-4 mt-4">
          {[
            { label: "1 kg", value: CookieSize.ONE_KG },
            { label: "2 kg", value: CookieSize.TWO_KG },
            { label: "3 kg", value: CookieSize.THREE_KG },
          ].map(({ label, value }, index) => (
            <div
              key={index}
              className={`group flex flex-col items-center cursor-pointer hover:drop-shadow-md hover:bg-lightMode-surface dark:hover:bg-darkMode-surface rounded-lg ${
                selectedSize === value
                  ? "bg-lightMode-surface dark:bg-darkMode-surface"
                  : ""
              }`}
              onClick={() => handleSizeSelection(value)}
            >
              <div className="flex items-center justify-center text-lightMode-text dark:text-darkMode-text rounded-lg w-20 h-20">
                <span className="text-2xl font-bold">{label}</span>
              </div>
            </div>
          ))}
        </div>
      );
    } else if (product.category.name === "torte") {
      return (
        <div className="flex flex-row gap-4 mt-4">
          <div
            className={`group flex flex-col items-center cursor-pointer hover:drop-shadow-md hover:bg-lightMode-surface dark:hover:bg-darkMode-surface rounded-lg ${
              selectedSize === CakeSize.SMALL
                ? "bg-lightMode-surface dark:bg-darkMode-surface"
                : ""
            }`}
            onClick={() => handleSizeSelection(CakeSize.SMALL)}
          >
            <div className="flex items-center justify-center text-lightMode-text dark:text-darkMode-text rounded-lg w-20 h-20">
              <RectangleHorizontal className="w-12 h-12 stroke-[1.5]" />
            </div>
            <span className="text-lightMode-text dark:text-darkMode-text mt-1">
              Mala
            </span>
          </div>
          <div
            className={`group flex flex-col items-center cursor-pointer hover:drop-shadow-md hover:bg-lightMode-surface dark:hover:bg-darkMode-surface rounded-lg ${
              selectedSize === CakeSize.BIG
                ? "bg-lightMode-surface dark:bg-darkMode-surface"
                : ""
            }`}
            onClick={() => handleSizeSelection(CakeSize.BIG)}
          >
            <div className="flex items-center justify-center text-lightMode-text dark:text-darkMode-text rounded-lg w-20 h-20">
              <Square className="w-16 h-16 stroke-[1.5]" />
            </div>
            <span className="text-lightMode-text dark:text-darkMode-text mt-1">
              Velika
            </span>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className="bg-darkMode-primary text-lightMode-text w-full text-lg font-bold rounded-lg shadow-md transition-all duration-300 transform-gpu will-change-transform hover:shadow-xl hover:-translate-y-1 dark:hover:bg-darkMode-primary"
          onClick={() => setIsOpen(true)}
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
          {renderSizeOptions()}
          {error && (
            <div className="text-red-500 text-sm sm:text-base">{error}</div>
          )}
          <Textarea
            placeholder="Unesite dodatne detalje"
            value={additionalDetails}
            onChange={(e) => setAdditionalDetails(e.target.value)}
            className="p-4 min-h-[200px] bg-lightMode-background dark:bg-darkMode-background dark:border-darkMode-primary dark:text-white dark:placeholder-darkMode-text"
          />
        </div>
        <DialogFooter>
          <Button
            size="lg"
            className="bg-darkMode-primary text-lightMode-text w-fit text-lg rounded-lg shadow-md transition-all duration-300 transform-gpu will-change-transform hover:shadow-xl hover:-translate-y-1 dark:hover:bg-darkMode-primary"
            onClick={handleAddToCart}
          >
            Dodaj
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
