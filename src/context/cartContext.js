import { useState, createContext, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [itemsCart, setItemsCart] = useState([]);

  const addToCart = (id) => {
    setItemsCart([...itemsCart, id]);
    localStorage.setItem("itemsCart", JSON.stringify([...itemsCart, id]));
    console.log("cart", itemsCart);
  };
  useEffect(() => {
    const cartItemsLocal = JSON.parse(localStorage.getItem("itemsCart"));
    if (cartItemsLocal) {
      setItemsCart(cartItemsLocal);
      console.log("jjjj", itemsCart);
    }
    console.log("localStorageItemss", localStorage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <CartContext.Provider value={{ itemsCart, setItemsCart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
