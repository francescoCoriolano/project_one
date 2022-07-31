import React, { useState } from "react";
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

  //APPLY 15% DISCOUNT
  const applyDiscount = (mostRated) => {
    for (let i = 0; i < mostRated.length; i++) {
      if (mostRated[i].title.includes("womam")) {
        setDiscount(true);
        const price = mostRated[i].price;
        const discountedPrice = price - price * 0.15;
        //to be continued
      }
    }
  };

  return (
    <div>
      <div className="card-item">
        <div className="card-img">
          {category === "jewelery" && <div className="new-label">New!</div>}
          {/* check this */}
          {discount && <div className="discount">15%</div>}
          <img src={image} alt="product-img" />
        </div>
        <div className="item-description-wrapper">
          <h3 className="item-name">{name}</h3>
          <p className="item-description">{description}</p>
          <div className="price-wrapper">
            <span className={`item-price ${discount ? "discount" : ""} `}>
              ${price}
            </span>
            {priceBeforeDiscount && (
              <span className="item-price-reduced">{priceBeforeDiscount}</span>
            )}
          </div>
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
