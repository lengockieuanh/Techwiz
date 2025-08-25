import React from "react";
import "./homepage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// About section
function About() {
  return (
    <section id="about-us" className="banner-section">
      <div className="banner-text">
        <h5>CHÀO MỪNG QUÝ KHÁCH ĐẾN VỚI</h5>
        <h1>Khách sạn <br />La Sapinette Đà Lạt</h1>
        <p>
          Khách sạn LA SAPINETTE ĐÀ LẠT với kiến trúc kiểu Pháp. Khách sạn tiêu chuẩn quốc tế 4 sao được trang bị hệ thống điều hòa nhiệt độ,
          hệ thống nhà hàng sang trọng với phục vụ các món ăn Âu, Á đa dạng và phong phú, hệ thống phòng họp và phòng hội thảo trang bị hiện đại
          và các dịch vụ giải trí khác...
        </p>
        <button>XEM THÊM</button>
      </div>

      <div className="banner-images">
        <img src="/homepage-images/image1.jpg" alt="product1" />
        <img src="/homepage-images/image2.jpg" alt="product2" />
      </div>
    </section>
  );
}
// ProductCard component
function ProductCard({ image, title, price, oldPrice, discount, review, badge }) {
  return (
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
}

// ProductList component
function ProductList() {
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

//Banner
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

//ProductList2 component
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

//Offers
function NextArrow({ onClick }) {
  return (
    <div className="slick-arrow slick-next" onClick={onClick}>
      <img src="/homepage-images/right-arrow.png" alt="next" />
    </div>
  );
}

function PrevArrow({ onClick }) {
  return (
    <div className="slick-arrow slick-prev" onClick={onClick}>
      <img src="/homepage-images/left-arrow.png" alt="prev" />
    </div>
  );
}

function Offers() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    swipe: true,
    touchMove: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }

    ]
  };

  const offers = [
    {
      image: "/homepage-images/image1.jpg",
      title: "MICE PACKAGE",
      desc: "Gói hội họp – sự kiện đẳng cấp"
    },
    {
      image: "/homepage-images/image2.jpg",
      title: "STAY AT SILK SENSE & ENJOY",
      desc: "Ưu đãi đặc biệt cho kỳ nghỉ"
    },
    {
      image: "/homepage-images/golden.jpg",
      title: "GOLDEN MEMORIES PACKAGE",
      desc: "Ẩm thực & nghỉ dưỡng"
    },
    {
      image: "/homepage-images/romantic.jpg",
      title: "ROMANTIC ESCAPE",
      desc: "Chuyến đi lãng mạn cho 2 người với ưu đãi lớn"
    },
    {
      image: "/homepage-images/family.jpg",
      title: "FAMILY GETAWAY",
      desc: "Trọn gói cho cả gia đình nghỉ dưỡng."
    }
  ];

  return (
    <section className="exclusive-section">
      <div className="exclusive-overlay">
        <h2 className="exclusive-title">ƯU ĐÃI ĐỘC QUYỀN</h2>
        <p className="exclusive-description">
          Hâm nóng đam mê bằng không gian đậm chất nghỉ dưỡng, cảm giác riêng tư và dịch vụ đặc quyền.
        </p>
        <button className="view-all-btn">Xem tất cả</button>

        <div className="slider-wrapper">
          <Slider {...settings} className="offers-slider">
            {offers.map((item, index) => (
              <div className="slick-slide-custom" key={index}>
                <div className="offer-card">
                  <img src={item.image} alt={item.title} />
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <button className="read-more-btn">ĐỌC THÊM</button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

//Testimonials
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
      {/* Đưa dòng tiêu đề vào trong phần nền xanh */}
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



//RequestForm
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

// Main
function Homepage() {
  return (
    <>
      <About />
      <ProductList />
      <Banner2 />
      <ProductList2 />
      <Offers />
      <Testimonials />
      <RequestForm />
    </>
  );
}



export default Homepage;
