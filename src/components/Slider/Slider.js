import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay, Pagination } from 'swiper';
import { Link } from 'react-router-dom';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
SwiperCore.use([Navigation, Autoplay, Pagination]);

const Slider = () => {
  return (
    <div className="swiper-wrapper">
      <Swiper
        slidesPerView={1}
        navigation={{ nextEl: '.right-arrow', prevEl: '.left-arrow' }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        className="slider"
      >
        <SwiperSlide
          className="slider-card galaxy"
          style={{
            background: `linear-gradient(rgba(31, 28, 28, 0.329),rgba(14, 14, 13, 0.89)), url(
              "https://gizchina.it/wp-content/uploads/2021/01/Samsung-galaxy-s21-0.jpg"
            )100% center no-repeat`,
          }}
        >
          <div className="container">
            <div>
              <h2>Samsung Galaxy s21</h2>
              <Link to="/samsung">Compre agora</Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="slider-card apple"
          style={{
            background: `linear-gradient(rgba(31, 28, 28, 0.329),rgba(14, 14, 13, 0.89)), url(
              "https://i2.wp.com/ihelpbr.com/wp-content/uploads/2020/12/iPhone-12-e-12-Pro.png?resize=1920%2C1080&ssl=1"
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
          className="slider-card motorola"
          style={{
            background: `linear-gradient(rgba(31, 28, 28, 0.329),rgba(22, 22, 21, 0.527)), url(
              "https://tecnoblog.net/wp-content/uploads/2020/03/motorola-edge-plus-evleaks.jpg"
            ) top no-repeat`,
          }}
        >
          <div className="container">
            <div>
              <h2>Motorola Edge</h2>
              <Link to="/motorola">Compre agora</Link>
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
