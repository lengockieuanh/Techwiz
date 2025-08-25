import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./homepage.css";

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

export default Offers;
