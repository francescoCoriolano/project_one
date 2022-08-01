import "./App.scss";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ProductsOverview from "./components/ProductsOverview";
import ShopSection from "./components/ShopSection";
import RecomendedItems from "./components/RecomendedItems";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <div className="App">
        <Navbar />
        <Header />
        <ProductsOverview />
        <ShopSection />
        <RecomendedItems />
      </div>
    </BrowserRouter>
  );
}

export default App;
