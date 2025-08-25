// App.js
import React from "react";
import "./homepage.css";
import "./App.css";
import Navbar from "./Navbar";
import ProductList from "./ProductList";
import Banner2 from "./bannerheader2";
import ProductList2 from "./ProductList2";
import Offers from "./Offer";
import Testimonials from "./testimonials";
import RequestForm from "./requestform";
import About from "./Aboutus";
import Footer from "./Footer";


function App() {
  return (
    <div>
      <Navbar />
      <About />
      <ProductList />
      <Banner2 />
       <ProductList2 />
       <Offers />
        <Testimonials />
        <RequestForm />
        <Footer/>
       
    </div>
  );
}

export default App;
