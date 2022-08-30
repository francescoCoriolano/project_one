import React from "react";
import "./style.scss";

const Header = () => {
  return (
    <div className="header" id="header">
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
      <div className="header-img-container"></div>
    </div>
  );
};

export default Header;
