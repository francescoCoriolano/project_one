import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProductsList } from "./reducers/producstListReducer";
import Login from "./components/Login";
import { CartProvider } from "./context/cartContext";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";
import "./App.scss";

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
