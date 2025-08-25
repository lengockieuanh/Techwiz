import React from "react";
import "./homepage.css";

function ProductList2() {
  return (
    <section className="bag-grid">
      <div className="left-large">
        <img src="/homepage-images/image1.jpg" alt="image1" />
        <div className="text-overlay">
          <h3>BACKPACK</h3>
          <a href="#">SHOP NOW</a>
        </div>
      </div>

      <div className="right-small">
        <div className="small-box">
          <img src="/homepage-images/image1.jpg" alt="image2" />
          <div className="text-overlay">
            <h3>SATCHELS</h3>
            <a href="#">SHOP NOW</a>
          </div>
        </div>

        <div className="small-row">
          <div className="small-box">
           <img src="/homepage-images/image1.jpg" alt="image3" />
            <div className="text-overlay">
              <h3>HOBO</h3>
              <a href="#">SHOP NOW</a>
            </div>
          </div>

          <div className="small-box">
           <img src="/homepage-images/image1.jpg" alt="image4" />
            <div className="text-overlay">
              <h3>TOTE</h3>
              <a href="#">SHOP NOW</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductList2;
