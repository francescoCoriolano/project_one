import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";

const Navbar = ({ cart }) => {
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
            <li className="nav-item">
              <FontAwesomeIcon icon={faSearch} />
            </li>
            <li className="nav-item">
              <a href="cart">
                Cart
                {cart.length !== 0 && (
                  <span href="cart-item">({cart?.length || cart})</span>
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
