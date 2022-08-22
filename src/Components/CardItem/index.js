import React, { useContext } from "react";
import CartContext from "../../context/cartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";

const CardItem = ({ image, name, description, price, category, id }) => {
  const newPrice = price - price * 0.15;
  const isWoman = name.includes("Women");
  const { addToCart } = useContext(CartContext);
  return (
    <div>
      <div className="card-item">
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
                ${newPrice.toFixed(2)}
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

          <button className="add-product-btn" onClick={() => addToCart(id)}>
            <FontAwesomeIcon icon={faCartShopping} />
            <span>Add to cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
