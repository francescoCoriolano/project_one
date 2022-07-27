import React from "react";
import CardItem from "../CardItem";
import "./style.scss";
import { dataProducts } from "../../utils/data";
const ProductsOverview = () => {
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
          return <CardItem {...item} />;
        })}
      </div>
    </div>
  );
};

export default ProductsOverview;
