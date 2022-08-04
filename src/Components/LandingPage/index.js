import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../Header";
import ProductsOverview from "../ProductsOverview";
import ShopSection from "../ShopSection";
import RecomendedItems from "../RecomendedItems";
import "./style.scss";

const LandingPage = ({ addItemToCart }) => {
  const [productsData, setProductsData] = useState([]);

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
