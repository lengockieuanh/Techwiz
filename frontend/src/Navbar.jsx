import React, { useState } from "react";
import "./homepage.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="navbar-top">
        Fast delivery to your door from £4.95
      </div>

      <div className="navbar-main">
        <div className="navbar-left">
          <h2 className="navbar-logo">MADE<sup>®</sup></h2>
          <div className="search-container">
            <input type="text" placeholder="Search" className="search-input" />
            <span className="search-icon">🔍</span>
          </div>
        </div>

        <div className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        <div className={`navbar-menu ${menuOpen ? "show" : ""}`}>
          <a href="#">Shop All</a>
          <a href="#">Sofas & Furniture</a>
          <a href="#">Lighting</a>
          <a href="#">Soft Furnishings</a>
          <a href="#">Home Accessories</a>
          <a href="#">Garden</a>
          <a href="#">Inspiration</a>
          <a href="#" className="navbar-sale">Sale</a>
        </div>

        <div className="navbar-icons">
          <span>👤</span>
          <span>🤍</span>
          <button className="checkout-btn">Checkout</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
