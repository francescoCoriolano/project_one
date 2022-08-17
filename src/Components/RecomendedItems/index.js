import React, { useEffect, useState } from "react";
import "./style.scss";
import CardItem from "../CardItem";
import { useSelector } from "react-redux";

const RecomendedItems = ({ addItemToCart }) => {
  const [mostPopular, setMostPopular] = useState([]);

  const productsList = useSelector((store) => store.producstListReducer);

  useEffect(() => {
    let products = [...productsList.productsList];

    setMostPopular(
      products?.sort((a, b) => b.rating.rate - a.rating.rate).splice(0, 8)
    );
  }, [productsList]);
  return (
    <div className="recomended-items">
      <div className="recomended-products">
        <span className="top-product">Top-rated</span>
        <span className="all-products">Shop all products</span>
      </div>
      <div className="products-container">
        {mostPopular?.map((item) => {
          return (
            <CardItem
              category={item.category}
              name={item.title}
              image={item.image}
              description={item.description}
              price={item.price}
              key={item.id}
              id={item.id}
              addItemToCart={addItemToCart}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RecomendedItems;
