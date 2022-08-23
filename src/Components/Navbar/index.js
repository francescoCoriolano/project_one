import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";
import CartContext from "../../context/cartContext";

const Navbar = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [matchingItems, setMatchingItems] = useState([]);
  const [input, setInput] = useState("");
  const { productsList } = useSelector((store) => store.producstListReducer);
  const { itemsCart } = useContext(CartContext);

  useEffect(() => {
    const getItemSuggestions = (input) => {
      let matches = productsList.filter((item) =>
        item.title.toLowerCase().startsWith(input.toLowerCase())
      );
      setMatchingItems(matches);
    };
    getItemSuggestions(input);
  }, [input, productsList, setMatchingItems]);

  const triggerSearchBar = () => {
    setShowSearchBar(!showSearchBar);
    setInput("");
  };

  return (
    <nav className="navbar">
      <div className="nav-top">
        <ul>
          <div className="nav-top-left">
            <li className="nav-item">
              <a href="about">About</a>
            </li>
            <li className="nav-item">
              <a href="consultation">Consultation</a>
            </li>
          </div>
          <div className="nav-item-center">
            <li className="nav-item">sooth</li>
          </div>
          <div className="nav-top-right">
            <li className="nav-item search-wrapper">
              <input
                className={`search-txt ${showSearchBar ? "open" : ""} `}
                type="text"
                name=""
                placeholder="Type to Search"
                onChange={(e) => setInput(e.target.value)}
                value={input}
              />
              {input !== "" &&
                matchingItems.map((item) => (
                  <div className="list-item" key={item.title}>
                    <img
                      src={item.image}
                      alt="item-img"
                      className="img-searchBar"
                    />
                    <div className="name-searchBar">{item.title}</div>
                  </div>
                ))}
            </li>
            <li className="nav-item">
              <a className="search-btn" href="#a">
                <FontAwesomeIcon
                  icon={faSearch}
                  onClick={() => triggerSearchBar()}
                  className={` ${showSearchBar ? "hide" : "show"} `}
                />
                <FontAwesomeIcon
                  icon={faX}
                  onClick={() => triggerSearchBar()}
                  className={` ${showSearchBar ? "show" : "hide"} `}
                />
              </a>
            </li>
            <li className="nav-item ">
              <a href="cart">
                Cart
                {itemsCart?.length !== 0 && (
                  <span href="cart-item">({itemsCart?.length})</span>
                )}
              </a>
            </li>

            <li className="nav-item">
              <a href="login">Login</a>
            </li>
          </div>
        </ul>
      </div>
      <div className="nav-bottom">
        <ul>
          <li className="nav-item-bottom">
            <a href="acne">Acne</a>
          </li>
          <li className="nav-item-bottom">
            <a href="sun">Sun</a>
          </li>
          <li className="nav-item-bottom">
            <a href="ezcema">Ezcema</a>
          </li>
          <li className="nav-item-bottom">
            <a href="psoriasis">Psoriasis</a>
          </li>
          <li className="nav-item-bottom">
            <a href="vitiligio">Vitiligio</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
