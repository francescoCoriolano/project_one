import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import "./App.scss";
import Footer from "./components/Footer";

function App() {
  const [cart, setCart] = useState([]);

  const addItemToCart = (id) => {
    setCart([...cart, id]);
    localStorage.setItem("cartData", JSON.stringify([...cart, id]));
  };

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cartData"));
    if (cartItems) {
      setCart(cartItems);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <div className="App">
        <Navbar cart={cart} />
        <LandingPage addItemToCart={addItemToCart} cart={cart} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
