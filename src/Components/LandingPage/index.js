import React from "react";
import Header from "../Header";
import ProductsOverview from "../ProductsOverview";
import ShopSection from "../ShopSection";
import RecomendedItems from "../RecomendedItems";
import "./style.scss";

const LandingPage = ({ addItemToCart }) => {
  return (
    <div>
      <Header />
      <ProductsOverview />
      <ShopSection />
      <RecomendedItems addItemToCart={addItemToCart} />
    </div>
  );
};

export default LandingPage;
