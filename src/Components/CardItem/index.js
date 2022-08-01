import React, { useEffect } from "react";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const CardItem = ({
  image,
  name,
  description,
  price,
  category,
  mostRated,
  index,
}) => {
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

  // console.log("mostrated", mostRated);

  return (
    <div>
      {/* <div className="card-item">
        <div className="card-img">
          {category === "jewelery" && <div className="new-label">New!</div>}
          {isWoman ? <div className=" new-label discount">15%</div> : ""}
          <img src={image} alt="product-img" />
        </div>
        <div className="item-description-wrapper">
          <h3 className="item-name">{name}</h3>
          <p className="item-description">{description}</p>
          <div className="price-wrapper">
            {isWoman ? (
              <span className="discount item-price">
                ${applyDiscount(mostRated[index].price).toFixed(2)}
              </span>
            ) : (
              ""
            )}
            <span
              className={`item-price ${isWoman ? "item-price-reduced" : ""} `}
            >
              ${price}
            </span>
          </div>

          <button className="add-product-btn">
            <FontAwesomeIcon icon={faCartShopping} />
            <span>Add to cart</span>
          </button>
        </div>
      </div> */}
      <div className="card-item">
        <div className="card-img">
          {category === "jewelery" && <div className="new-label">New!</div>}

          <img src={image} alt="product-img" />
        </div>
        <div className="item-description-wrapper">
          <h3 className="item-name">{name}</h3>
          <p className="item-description">{description}</p>
          <div className="price-wrapper"></div>

          <button className="add-product-btn">
            <FontAwesomeIcon icon={faCartShopping} />
            <span>Add to cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
