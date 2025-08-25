import React from "react";
import "./homepage.css"; // giữ đúng tên và đường dẫn

function ProductList() {
  const ProductCard = ({ image, title, price, oldPrice, discount, review, badge }) => (
    <div className="product-card">
      <div className="image-container">
        {badge && <span className="badge">HOT</span>}
        <img src={image} alt={title} className="product-image" />
      </div>
      <div className="review">★★★★★ <span className="review-text">({review} reviews)</span></div>
      <h3 className="title">{title}</h3>
      <div className="price-box">
        <span className="price">${price.toFixed(2)}</span>
        <span className="old-price">${oldPrice.toFixed(2)}</span>
        <span className="discount">{discount}% OFF</span>
      </div>
      <div className="color-label">Color:</div>
    </div>
  );

  const products = [
    { image: "/homepage-images/image1.jpg", title: "Beats Solo", price: 150, oldPrice: 200, discount: 25, review: 1, badge: "HOT" },
    { image: "/images/sony.png", title: "Sony WH–1000XM5", price: 200, oldPrice: 230, discount: 13, review: 1 },
    { image: "/images/mark.png", title: "Mark Drop Tee V3", price: 120, oldPrice: 150, discount: 20, review: 2 },
    { image: "/images/extra1.png", title: "New Product 1", price: 99, oldPrice: 120, discount: 18, review: 4 }
  ];

  return (
    <section className="product-row">
      {products.map((p, i) => (
        <ProductCard key={i} {...p} />
      ))}
    </section>
  );
}

export default ProductList;
