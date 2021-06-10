import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay, Pagination } from "swiper";
import { Link } from "react-router-dom";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
SwiperCore.use([Navigation, Autoplay, Pagination]);

const Slider = () => {
  return (
    <div className="swiper-wrapper">
      <Swiper
        slidesPerView={1}
        navigation={{ nextEl: ".right-arrow", prevEl: ".left-arrow" }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        className="slider"
      >
        <SwiperSlide
          className="slider-card"
          style={{
            background: `linear-gradient(rgba(31, 28, 28, 0.329),rgba(14, 14, 13, 0.89)), url(
              "https://images.unsplash.com/photo-1551764046-eadb20826deb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
            ) center no-repeat`,
          }}
        >
          <div className="container">
            <div>
              <h2>Samsung Galaxy s20</h2>
              <Link to="/samsung">Compre agora</Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="slider-card"
          style={{
            background: `linear-gradient(rgba(31, 28, 28, 0.329),rgba(14, 14, 13, 0.89)), url(
              "https://images.unsplash.com/photo-1608022625050-82683640e5a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1503&q=80"
            ) center no-repeat`,
          }}
        >
          <div className="container">
            <div>
              <h2>Novo Iphone 12</h2>
              <Link to="/apple">Compre agora</Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="slider-card"
          style={{
            background: `linear-gradient(rgba(31, 28, 28, 0.329),rgba(22, 22, 21, 0.527)), url(
              "https://images.unsplash.com/photo-1590653956132-7124afce5a9d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
            ) center no-repeat`,
          }}
        >
          <div className="container">
            <div>
              <h2>Asus aog</h2>
              <Link to="/asus">Compre agora</Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <RiArrowLeftSLine className="left-arrow" />
      <RiArrowRightSLine className="right-arrow" />
    </div>
  );
};

export default Slider;
