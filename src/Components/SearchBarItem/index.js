import React from "react";
import "./style.scss";
const SearchBarItem = ({ name, image }) => {
  return (
    <div className="searchBar-item">
      <div className="searchBar-item-img">
        <img src={image} alt="item-img" />
      </div>
      <div className="searchBar-item-name">
        <p>{name}</p>
      </div>
    </div>
  );
};

export default SearchBarItem;
