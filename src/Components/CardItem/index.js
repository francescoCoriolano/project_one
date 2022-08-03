import React from "react";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const CardItem = ({ image, name, description, price, category }) => {
  const newPrice = price - price * 0.15;

  return (
    <div>
      <div className="card-item">
        <div className="card-img">
          {category === "jewelery" && <div className="new-label">New!</div>}
          {name.includes("Women") ? (
            <div className=" new-label discount">15%</div>
          ) : (
            ""
          )}
          <img src={image} alt="product-img" />
        </div>
        <div className="item-description-wrapper">
          <h3 className="item-name">{name}</h3>
          <p className="item-description">{description}</p>
          <div className="price-wrapper">
            {name.includes("Women") ? (
              <span className="discount item-price">
                ${newPrice.toFixed(2)}
              </span>
            ) : (
              ""
            )}

            <span
              className={`item-price ${
                name.includes("Women") ? "item-price-reduced" : ""
              } `}
            >
              ${price}
            </span>
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
