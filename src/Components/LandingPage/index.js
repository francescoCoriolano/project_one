import React, { useEffect } from "react";
import Header from "../Header";
import ProductsOverview from "../ProductsOverview";
import ShopSection from "../ShopSection";
import RecomendedItems from "../RecomendedItems";
import "./style.scss";

const LandingPage = ({ addItemToCart, productsData }) => {
  useEffect(() => {
    localStorage.setItem("productsData", JSON.stringify(productsData));
  }, [productsData]);

  return (
    <div>
      <Header />
      <ProductsOverview addItemToCart={addItemToCart} />
      <ShopSection />
      <RecomendedItems addItemToCart={addItemToCart} />
    </div>
  );
};

export default LandingPage;
