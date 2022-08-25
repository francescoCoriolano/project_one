import { useState, createContext, useEffect } from "react";
import app from "../firebase";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [itemsCart, setItemsCart] = useState([]);

  const addToCart = (id) => {
    setItemsCart([...itemsCart, id]);
    localStorage.setItem("itemsCart", JSON.stringify([...itemsCart, id]));
  };

  useEffect(() => {
    const cartItemsLocal = JSON.parse(localStorage.getItem("itemsCart"));
    if (cartItemsLocal) {
      setItemsCart(cartItemsLocal);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <CartContext.Provider value={{ itemsCart, setItemsCart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
