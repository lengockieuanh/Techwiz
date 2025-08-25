import React from "react";
import "./homepage.css";

const testimonials = [
  {
    img: "/homepage-images/image1.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae nisi ligula. Vivamus consectetur risus pretium massa porta varius. Nam non justo sed leo venenatis lacinia. Mauris sodales facilisis cursus."
  },
  {
    img: "/images/client2.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae nisi ligula. Vivamus consectetur risus pretium massa porta varius. Nam non justo sed leo venenatis lacinia. Mauris sodales facilisis cursus."
  },
  {
    img: "/images/client3.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae nisi ligula. Vivamus consectetur risus pretium massa porta varius. Nam non justo sed leo venenatis lacinia. Mauris sodales facilisis cursus."
  },
  {
    img: "/images/client4.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae nisi ligula. Vivamus consectetur risus pretium massa porta varius. Nam non justo sed leo venenatis lacinia. Mauris sodales facilisis cursus."
  }
];

function Testimonials() {
  return (
    <section className="testimonial-section">
      <h2 className="testimonial-title">Client Testimonials</h2>
      <div className="testimonial-container">
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <div className="testimonial-img-wrapper">
              <img src={item.img} alt={`Client ${index + 1}`} />
            </div>
            <p className="testimonial-text">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
