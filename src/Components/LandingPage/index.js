import React from "react";
import Header from "../Header";
import ProductsOverview from "../ProductsOverview";
import ShopSection from "../ShopSection";
import RecomendedItems from "../RecomendedItems";
import "./style.scss";
import Footer from "../Footer";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <ProductsOverview />
      <ShopSection />
      <RecomendedItems />
      <Footer />
    </div>
  );
};

export default LandingPage;
