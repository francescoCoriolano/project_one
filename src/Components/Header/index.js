import React from "react";
import "./style.scss";
import headerImg from "../../assets/images/header-img2.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header-text-container">
        <div className="text-wrapper">
          <div className="new-label">New!</div>
          <h1 className="header-title">
            All Natural <br></br> Skin Remedies.{" "}
          </h1>
          <p className="header-text">
            A healthier you from the inside out. We've sourced the <br></br>{" "}
            cleanest ingredientes to create a line of clean skin care <br></br>{" "}
            treatments that leave you feeling your best
          </p>
          <button className="shop-btn">Shop products</button>
        </div>
      </div>
      <div className="header-img-container">
        <img src={headerImg} alt="product-img" />
      </div>
    </div>
  );
};

export default Header;
