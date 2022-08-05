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
          LoremasdsdsdsadsLoremasdsdsdsaLoremasdsdsdsa<br></br>
          LoremasdsdsdsadsLoremasdsdsdsaLoremasdsdsdsa
        </p>
        <form>
          <input type="email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      <div className="footer-main">
        <div className="footer-main-wrapper">
          <div className="footer-main-top">
            <div className="left">
              <h2>shoot</h2>
              <p>Explore our innovative skincare products</p>
              <form>
                <input type="email" />
                <button type="submit" placeholder="Your email...">
                  Subscribe
                </button>
              </form>
            </div>
            <div className="right">
              <ul>
                <li>shop</li>
                <li>shop</li>
                <li>shop</li>
                <li>shop</li>
                <li>shop</li>
                <li>shop</li>
              </ul>
              <ul>
                <li>shop</li>
                <li>shop</li>
                <li>shop</li>
                <li>shop</li>
                <li>shop</li>
                <li>shop</li>
              </ul>
              <ul>
                <li>shop</li>
                <li>shop</li>
                <li>shop</li>
                <li>shop</li>
                <li>shop</li>
                <li>shop</li>
              </ul>
            </div>
          </div>
          <div className="footer-main-bottom"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
