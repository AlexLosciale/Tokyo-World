import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (manga) => {
    setCart((prev) => [...prev, manga]);
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + (item.price || 0), 0);
  };

  const removeFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };
  

  return (
    <CartContext.Provider value={{ cart, addToCart, getTotal, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}