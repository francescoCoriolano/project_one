import React, { useEffect, useState } from "react";
import axios from "axios";
import CardItem from "../CardItem";
import "./style.scss";

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
  const mostRated = localStorageData
    .sort((a, b) => b.rating.rate - a.rating.rate)
    .splice(0, 4);
  console.log(mostRated, "w");

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
        {mostRated.map((item) => {
          return (
            <CardItem
              category={item.category}
              name={item.title}
              image={item.image}
              description={item.description}
              price={item.price}
              key={item.id}
              mostRated={mostRated}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductsOverview;
