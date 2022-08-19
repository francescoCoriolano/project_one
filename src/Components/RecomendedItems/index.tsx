import * as React from "react";
import { useEffect, useState } from "react";
import "./style.scss";
import CardItem from "../CardItem";
import { IItem, IAddToCart } from "../../helpers/interfaces";
import { useAppSelector } from "../../helpers/hooks";

const RecomendedItems = ({ addItemToCart }: { addItemToCart: IAddToCart }) => {
  const [mostPopular, setMostPopular] = useState<IItem[]>([]);

  const productsList = useAppSelector((store) => store.producstListReducer);

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
              title={item.title}
              image={item.image}
              description={item.description}
              price={item.price}
              key={item.id}
              id={item.id}
              rating={item.rating}
              addItemToCart={addItemToCart}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RecomendedItems;
