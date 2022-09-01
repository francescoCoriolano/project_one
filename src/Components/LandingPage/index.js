import React from "react";
import Header from "../Header";
import ProductsOverview from "../ProductsOverview";
import ShopSection from "../ShopSection";
import RecomendedItems from "../RecomendedItems";
import Footer from "../Footer";

const LandingPage = () => {
  return (
    <>
      <Header />
      <ProductsOverview />
      <ShopSection />
      <RecomendedItems />
      <Footer />
    </>
  );
};

export default LandingPage;
