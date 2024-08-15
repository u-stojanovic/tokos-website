import React, { useEffect } from "react";

// Define a type for the cart items
type CartItem = {
  productId: number;
  quantity: number;
};

// Custom Hook for Cart Management
export function useCart() {
  const [cart, setCart] = React.useState<CartItem[]>([]);

  // Load cart from local storage when the component mounts
  React.useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Save cart to local storage whenever it changes
  React.useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add an item to the cart
  const addToCart = (productId: number) => {
    console.log("productId: ", productId);
    setCart((prevCart) => {
      const existingItem = prevCart.find((i) => i.productId === productId);
      if (existingItem) {
        return prevCart.map((i) =>
          i.productId === productId ? { ...i, quantity: i.quantity + 1 } : i,
        );
      }
      return [...prevCart, { productId, quantity: 1 }];
    });
  };

  useEffect(() => {
    console.log("cart: ", cart);
  }, [cart]);

  // Remove an item from the cart
  const removeFromCart = (productId: number) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.productId !== productId),
    );
  };

  // Clear the cart
  const clearCart = () => {
    setCart([]);
  };

  return { cart, addToCart, removeFromCart, clearCart };
}
