import React, { useEffect, useState } from "react";
import axios from "axios";
import CardItem from "../CardItem";
import "./style.scss";
import { localStorageData } from "../../helpers/const";

const ProductsOverview = () => {
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

  localStorage.setItem("productsData", JSON.stringify(productsData));
  const localStorageData = JSON.parse(localStorage.getItem("productsData"));

  const mostRated = localStorageData
    .sort((a, b) => b.rating.rate - a.rating.rate)
    .splice(0, 4);

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
        {mostRated.map((item, index) => {
          return (
            <CardItem
              category={item.category}
              name={item.title}
              image={item.image}
              description={item.description}
              price={item.price}
              key={item.id}
              mostRated={mostRated}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductsOverview;
