import React from "react";
import "./style.scss";
import CardItem from "../CardItem";

const RecomendedItems = () => {
  const products = JSON.parse(localStorage.getItem("productsData"));

  const mostPopular = products
    .sort((a, b) => b.rating.rate - a.rating.rate)
    .splice(0, 8);

  return (
    <div className="recomended-items">
      <div className="recomended-products">
        <span className="top-product">Top-rated</span>
        <span className="all-products">Shop all products</span>
      </div>
      <div className="products-container">
        {mostPopular.map((item) => {
          return (
            <CardItem
              category={item.category}
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

export default RecomendedItems;