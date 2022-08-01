import React, { useEffect, useState } from "react";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const CardItem = ({
  image,
  name,
  description,
  price,
  category,
  priceBeforeDiscount,
  mostRated,
}) => {
  const [discount, setDiscount] = useState(false);
  const [discountedPrice, setDiscountedPrice] = useState();
  //APPLY 15% DISCOUNT
  const applyDiscount = (mostRated) => {
    for (let i = 0; i < mostRated.length; i++) {
      if (mostRated[i].title.includes("womam")) {
        setDiscount(true);
        const price = mostRated[i].price;
        const newPrice = price - price * 0.15;
        setDiscountedPrice(newPrice);
        //to be continued
      }
    }
  };

  return (
    <div>
      <div className="card-item">
        <div className="card-img">
          {category === "jewelery" && <div className="new-label">New!</div>}
          {/* check code below*/}
          {discount && <div className=" new-label discount">15%</div>}
          <img src={image} alt="product-img" />
        </div>
        <div className="item-description-wrapper">
          <h3 className="item-name">{name}</h3>
          <p className="item-description">{description}</p>
          {/* ////////////////// */}
          <div className="price-wrapper">
            {discountedPrice && (
              <span className="discount">{discountedPrice}</span>
            )}
            <span
              className={`item-price ${discount ? "item-price-reduced" : ""} `}
            >
              ${price}
            </span>
          </div>
          {/* ////////////////// */}
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
