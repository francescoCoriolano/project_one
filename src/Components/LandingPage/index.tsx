import * as React from "react";
import Header from "../Header";
import ProductsOverview from "../ProductsOverview";
import ShopSection from "../ShopSection";
import RecomendedItems from "../RecomendedItems";
import "./style.scss";
import { IAddToCart } from "../../helpers/interfaces";

const LandingPage = ({ addItemToCart }: { addItemToCart: IAddToCart }) => {
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
