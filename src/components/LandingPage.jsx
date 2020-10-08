import React, { useRef, useEffect } from "react";
import "../App.css";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { IconContext } from "react-icons";
import banner from "../img/iphones.png";
import { TweenMax, Power3 } from "gsap";
import { Link } from "react-scroll";

const LandingPage = () => {
  let landingImg,
    bgLeft,
    landingTxt,
    loader,
    loaderTxt,
    socials = useRef(null);

  // GSAP animations
  useEffect(() => {
    TweenMax.from(landingImg, 4, {
      opacity: 0,
      rotation: -360,
      scale: 0.6,
      delay: 3.5,
      ease: Power3.easeOut,
    });
    TweenMax.to(bgLeft, 2, {
      opacity: 1,
      height: "100vh",
      delay: 1.5,
      background: "#f1324c",
      ease: Power3.easeInOut,
    });
    TweenMax.from(landingTxt, 2, {
      opacity: 0,
      delay: 3.5,
      x: -20,
      ease: Power3.easeInOut,
    });
    TweenMax.from(socials, 2, {
      opacity: 0,
      delay: 4.5,
      x: 20,
      ease: Power3.easeInOut,
    });
    TweenMax.to(loader, 2, {
      delay: 0.5,
      height: "0",
      top: "0%",
      ease: Power3.easeInOut,
    });
    TweenMax.to(loaderTxt, 2, {
      opacity: 0,
      delay: 0.5,
      ease: Power3.easeInOut,
    });
  }, [landingImg, bgLeft, landingTxt, loader, loaderTxt, socials]);

  return (
    <div className="landing-page">
      <div ref={(el) => (bgLeft = el)} className="bg-left">
        <div ref={(el) => (landingTxt = el)} className="landing-txt">
          <h2>
            Iphone <span>11</span>
          </h2>
          <Link
            activeClass="active"
            to="xd"
            offset={-150}
            spy={true}
            smooth={true}
            duration={1000}
          >
            <button>Compre ja</button>
          </Link>
        </div>
      </div>
      <div className="bg-right">
        <div ref={(el) => (socials = el)} className="socials">
          <ul>
            <IconContext.Provider
              value={{
                style: { fontSize: "25px" },
              }}
            >
              <li>
                <FaInstagram />
              </li>
              <li>
                <FaFacebook />
              </li>
              <li>
                <FaTwitter />
              </li>
            </IconContext.Provider>
          </ul>
        </div>
      </div>
      <div className="landing-img">
        <img ref={(el) => (landingImg = el)} src={banner} alt="iphones" />
      </div>
      <div ref={(el) => (loader = el)} className="loader">
        <h1 ref={(el) => (loaderTxt = el)}>hzone</h1>
      </div>
    </div>
  );
};

export default LandingPage;
