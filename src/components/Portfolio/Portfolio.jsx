import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import { themeContext } from "../../Context";
import { Navigation, Pagination } from "swiper";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio container" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={true}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://terra-rentacar-sales.vercel.app/">
            <img src="/portfolio-1.png" alt="portfolio" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://real-auto-admin.vercel.app/login">
            <img src="/portfolio-2.png" alt="portfolio" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://motion-shoes-ecommerce.vercel.app/">
            <img src="/portfolio-3.png" alt="portfolio" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://get-pin.vercel.app/">
            <img src="/portfolio-4.png" alt="portfolio" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://logo-ai-eight.vercel.app/">
            <img src="/portfolio-5.png" alt="portfolio" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
