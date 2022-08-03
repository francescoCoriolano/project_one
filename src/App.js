import React, { useState, useEffect } from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";

function App() {
  const [cart, setCart] = useState([]);

  const addItemToCart = (id) => {
    setCart([...cart, id]);
  };
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <div className="App">
        <Navbar cart={cart} />
        <LandingPage addItemToCart={addItemToCart} cart={cart} />
      </div>
    </BrowserRouter>
  );
}

export default App;
