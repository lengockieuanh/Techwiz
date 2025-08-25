import React from "react";
import "./homepage.css";

function About() {
  return (
    <section className="banner-section">
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
<img src="homepage-images/image1.jpg" alt="product1" />
<img src="homepage-images/image2.jpg" alt="product2" />
      </div>
    </section>
  );
}

export default About;
