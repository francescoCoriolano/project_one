import { useState, createContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [itemsCart, setItemsCart] = useState([]);
  const addToCart = (id) => {
    setItemsCart((prevState) => [...prevState, { id }]);
  };
  return (
    <CartContext.Provider value={{ itemsCart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
