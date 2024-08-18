"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Product } from "@/lib/types";
import { useToast } from "@/components/ui/use-toast";
import { CakeSize, CookieSize } from "@prisma/client";

type CartItem = {
  product: Product;
  description?: string;
  option?: CakeSize | CookieSize;
  quantity: number;
};

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (
    product: Product,
    description?: string,
    option?: CakeSize | CookieSize,
  ) => void;
  decrementQuantity: (productId: number) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

type CartProviderProps = {
  children: ReactNode;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const { toast } = useToast();
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    if (typeof window !== "undefined") {
      const storedCartItems = localStorage.getItem("cartItems");
      return storedCartItems ? JSON.parse(storedCartItems) : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    console.log("cartItems: ", cartItems);
  }, [cartItems]);

  const addToCart = (
    product: Product,
    description?: string,
    option?: CakeSize | CookieSize,
  ) => {
    console.log("option: ", option);
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) =>
          item.product.id === product.id &&
          item.description === description &&
          item.option === option,
      );
      if (existingItem) {
        return prevItems.map((item) =>
          item.product.id === product.id &&
          item.description === description &&
          item.option === option
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      toast({
        title: "Korpa",
        description: "Proizvod je dodat u korpu",
      });
      return [...prevItems, { product, description, option, quantity: 1 }];
    });
  };

  const decrementQuantity = (productId: number) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.product.id === productId && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const removeFromCart = (productId: number) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.product.id !== productId),
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        decrementQuantity,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
