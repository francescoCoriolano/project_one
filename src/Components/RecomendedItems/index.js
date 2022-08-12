import React, { useEffect } from "react";
import "./style.scss";
import CardItem from "../CardItem";
import { useDispatch, useSelector } from "react-redux";
import { getMostPopular } from "../../store/producstListReducer";

const RecomendedItems = ({ addItemToCart }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMostPopular());
  }, [dispatch]);
  const { productsList } = useSelector((store) => store.producstListReducer);

  return (
    <div className="recomended-items">
      <div className="recomended-products">
        <span className="top-product">Top-rated</span>
        <span className="all-products">Shop all products</span>
      </div>
      <div className="products-container">
        {productsList?.map((item) => {
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
