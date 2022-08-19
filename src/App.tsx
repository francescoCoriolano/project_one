import * as React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getProductsList } from "./store/producstListReducer";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import "./App.scss";
import Footer from "./components/Footer";
import { useAppDispatch } from "./store/producstListReducer";

function App() {
  const [cart, setCart] = useState<number[]>([]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProductsList());
  }, [dispatch]);

  const addItemToCart = (id: number) => {
    setCart([...cart, id]);
    localStorage.setItem("cartData", JSON.stringify([...cart, id]));
  };

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cartData") || "");
    if (cartItems) {
      setCart(cartItems);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar cart={cart} />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={<LandingPage addItemToCart={addItemToCart} />}
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
