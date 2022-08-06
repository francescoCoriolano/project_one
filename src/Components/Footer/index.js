import React from "react";
import "./style.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="join-wrapper">
        <h2>
          Join the <br></br>Sooth family
        </h2>
        <p>
          LoremasdsdsdsadsLoasdsdsdsaLo<br></br>
          Loremasdsdsdsadsrem
        </p>
        <form>
          <input type="email" />
          <button type="submit" className="btn-subscribe">
            Subscribe
          </button>
        </form>
      </div>
      <div className="footer-main">
        <div className="footer-main-wrapper">
          <div className="footer-main-top">
            <div className="left">
              <h2>sooth</h2>
              <p>Explore our innovative skincare products</p>
              <form>
                <input type="email" placeholder="Your email..." />
                <button type="submit">Subscribe</button>
              </form>
            </div>
            <div className="right">
              <ul>
                <h3>shop</h3>
                <li>Lorem ipsum</li>
                <li>Dolar at</li>
                <li>Veraotio</li>
                <li>Chauloe</li>
              </ul>
              <ul>
                <h3>about</h3>
                <li>About us</li>
                <li>Sooth Stories (Blog)</li>
                <li>Contact us</li>
                <li>Learn more</li>
                <li>Stores</li>
              </ul>
              <ul>
                <h3>more</h3>
                <li>Dolar at</li>
                <li>Lorem at al</li>
                <li>Veraotio</li>
              </ul>
            </div>
          </div>
          <div className="footer-main-bottom">
            <h3>soot all rights reserved</h3>
            <div className="links-wrapper">
              <div className="links">
                <span>Privacy policy</span>
                <span>Term of use</span>
                <span>Contact us</span>
              </div>
              <div className="footer__social__icons">
                <ul>
                  <li>
                    <i className="fab fa-facebook"></i>
                  </li>
                  <li>
                    <i className="fab fa-instagram"></i>
                  </li>

                  <li>
                    <i className="fab fa-twitter"></i>
                  </li>
                  <li>
                    <i className="fab fa-youtube"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
