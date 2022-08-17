import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProductsList } from "./store/producstListReducer";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import "./App.scss";
import Footer from "./components/Footer";

function App() {
  const [cart, setCart] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsList());
  }, [dispatch]);

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
      <div className="App">
        <Navbar cart={cart} />
        <Routes>
          <Route path="/login" element={<Login cart={cart} />} />
          <Route
            path="/"
            element={<LandingPage addItemToCart={addItemToCart} cart={cart} />}
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
