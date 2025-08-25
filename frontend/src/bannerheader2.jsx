import React from "react";
import "./homepage.css"; // ✅ đã tách CSS riêng

function Banner2() {
  return (
    <section className="banner2">
      <div className="image-container">
        <img src="/homepage-images/image1.jpg" alt="" />
      </div>

      <div className="banner2-text">
        <p className="label">Featured Product</p>
        <h2 className="title-banner">Large Stowaway in Cream</h2>
        <p className="price">$547.99</p>
        <p className="old-price">$620.00</p>
        <button className="add-to-cart">ADD TO CART</button>
      </div>
    </section>
  );
}

export default Banner2;
