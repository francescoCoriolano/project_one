import React from "react";
import CardItem from "../CardItem";
import "./style.scss";

const ProductsOverview = () => {
  const products = JSON.parse(localStorage.getItem("productsData"));

  const mostRated = products
    ?.sort((a, b) => b.rating.rate - a.rating.rate)
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
        {mostRated?.map((item, index) => {
          return (
            <CardItem
              category={item.category}
              name={item.title}
              image={item.image}
              description={item.description}
              price={item.price}
              key={item.id}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductsOverview;
