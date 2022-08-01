import React, { useEffect, useState } from "react";
import axios from "axios";
import CardItem from "../CardItem";
import "./style.scss";

const ProductsOverview = () => {
  // const [productsData, setProductsData] = useState([]);

  // const getProductsData = () => {
  //   axios
  //     .get("https://fakestoreapi.com/products")
  //     .then(function (response) {
  //       setProductsData(response.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };

  // useEffect(() => {
  //   getProductsData();
  // }, []);

  // localStorage.setItem("productsData", JSON.stringify(productsData));
  const localStorageData = JSON.parse(localStorage.getItem("productsData"));
  console.log("lcd", localStorageData);

  const mostRated = localStorageData
    .sort((a, b) => b.rating.rate - a.rating.rate)
    .splice(0, 4);
  console.log("mr", mostRated);

  // const applyDiscount = (mostRated) => {
  //   for (let i = 0; i < mostRated.length; i++) {
  //     if (mostRated[i].title.includes("Women")) {
  //       const price = mostRated[i].price;

  //       return price;
  //     }
  //   }
  //   const newPrice = price - price * 0.15;
  //   return newPrice;
  // };
  // // best way to resolve this warning?
  // useEffect(() => {
  //   applyDiscount(mostRated);
  // }, []);

  // const isWoman = mostRated[index].title.includes("Women");

  console.log("mostrated", mostRated);
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
