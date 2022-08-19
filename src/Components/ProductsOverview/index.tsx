import * as React from "react";
import { useEffect, useState } from "react";
import CardItem from "../CardItem";
import "./style.scss";
import { IItem } from "../../helpers/interfaces";
import { useAppSelector } from "../../helpers/hooks";
import { IAddToCart } from "../../helpers/interfaces";

const ProductsOverview = ({ addItemToCart }: { addItemToCart: IAddToCart }) => {
  const [mostRated, setMostRated] = useState<IItem[]>([]);

  const productsList = useAppSelector((store) => store.producstListReducer);

  useEffect(() => {
    let products = [...productsList.productsList];

    setMostRated(
      products?.sort((a, b) => b.rating.rate - a.rating.rate).splice(0, 4)
    );
  }, [productsList]);

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
      {productsList.isLoading ? (
        "loading products..."
      ) : (
        <div className="products-container">
          {mostRated?.map((item) => {
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
      )}
    </div>
  );
};

export default ProductsOverview;
