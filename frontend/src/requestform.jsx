import React from "react";
import "./homepage.css";

function RequestForm() {
  return (
    <section className="quote-section">
      <div className="quote-left">
        <p className="quote-subtitle">ADVANTAGES</p>
        <h2 className="quote-title">Request a<br />Free Quote</h2>
        <p className="quote-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
          Nunc iaculis purus at lectus viverra rutrum ut vel eros.
        </p>
      </div>

      <form className="quote-form">
        <div className="input-row">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Company" />
        </div>
        <div className="input-row">
          <input type="email" placeholder="E-mail Address" />
          <input type="text" placeholder="Phone" />
        </div>
        <textarea placeholder="How can we help?" rows="4"></textarea>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default RequestForm;
