import React, { useEffect, useState } from "react";
import axios from "axios";
import CardItem from "../CardItem";
import "./style.scss";
import { dataProducts } from "../../utils/data";

const ProductsOverview = () => {
  const [productsData, setProductsData] = useState([]);

  const getProductsData = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then(function (response) {
        console.log(response.data);
        setProductsData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getProductsData();
  }, []);

  localStorage.setItem("productsData", JSON.stringify(productsData));

  const localStorageData = JSON.parse(localStorage.getItem("productsData"));

  console.log(localStorageData, "local storage data ");

  return (
    <div className="products-overview">
      <div className="title-container">
        <h2 className="products-title"> Solutions for all skin</h2>
        <p className="title-text">Explore our innovative skincare products</p>
      </div>
      <div className="category-products">
        <span className="popular-product">Most popular</span>
        <span className="all-products">Shop all products</span>
      </div>
      <div className="products-container">
        {dataProducts.map((item) => {
          return <CardItem {...item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default ProductsOverview;
