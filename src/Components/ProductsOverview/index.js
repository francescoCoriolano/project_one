import React, { useEffect, useState } from "react";
import axios from "axios";
import CardItem from "../CardItem";
import "./style.scss";
import { dataProducts } from "../../utils/data";

const ProductsOverview = () => {
  const [productsData, setProductsData] = useState([]);

  //GET DATA FROM API
  const getProductsData = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then(function (response) {
        console.log(response.data, "FIRST");
        setProductsData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  //SHOW DATA ON PAGE LOAD
  useEffect(() => {
    getProductsData();
  }, []);

  //STORE API DATA TO LOCAL STORAGE
  localStorage.setItem("productsData", JSON.stringify(productsData));

  const localStorageData = JSON.parse(localStorage.getItem("productsData"));

  console.log(localStorageData, "local storage data ");

  //FILTER MOST RATED
  console.log(
    "filter RATE",
    productsData.sort((a, b) => b.rating.rate - a.rating.rate).splice(0, 4)
  );
  const mostRated = productsData
    .sort((a, b) => b.rating.rate - a.rating.rate)
    .splice(0, 4);

  // console.log(
  //   "filter COUNT",
  //   productsData
  //     .sort((a, b) => b.rating.count - a.rating.conut)
  //     .map((item) => item.rating.count)
  //     .splice(0, 4)
  // );

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
      {/* <div className="products-container">
        {dataProducts.map((item) => {
          return <CardItem {...item} key={item.id} />;
        })}
      </div> */}
      <div className="products-container">
        {mostRated.map((item) => {
          return (
            <CardItem
              name={item.title}
              image={item.image}
              description={item.description}
              price={item.price}
              key={item.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductsOverview;
