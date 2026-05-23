/* eslint-disable react-refresh/only-export-components */

import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("ec-cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "ec-cart",
      JSON.stringify(cartItems)
    );
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const exists = prev.find(
        (item) => item.id === product.id
      );

      if (exists) return prev;

      return [...prev, product];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) =>
      prev.filter((item) => item.id !== id)
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
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}