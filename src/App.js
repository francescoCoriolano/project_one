import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProductsList } from "./store/producstListReducer";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import "./App.scss";
import Footer from "./components/Footer";
import { CartProvider } from "./context/cartContext";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsList());
  }, [dispatch]);

  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<LandingPage />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
