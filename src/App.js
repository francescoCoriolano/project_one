import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import "./App.scss";
import Footer from "./components/Footer";

function App() {
  const [productsData, setProductsData] = useState([]);
  const [cart, setCart] = useState([]);

  const getProductsData = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then(function (response) {
        setProductsData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getProductsData();
  }, []);

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
        <Navbar cart={cart} productsData={productsData} />
        <Routes>
          <Route path="/login" element={<Login cart={cart} />} />
        </Routes>
        <LandingPage
          addItemToCart={addItemToCart}
          cart={cart}
          productsData={productsData}
        />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
