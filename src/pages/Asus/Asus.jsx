import React from "react";
import "../../App.css";
import asusBanner from "../../img/asusbanner.jpg";
import ProductCard from "../../components/ProductsCard/ProductsCard";

const Asus = () => {
  const bannerStyle = {
    background: `url(${asusBanner})center no-repeat`,
    width: "100%",
    backgroundSize: "cover",
  };

  return (
    <div>
      <div className="banner" style={bannerStyle}></div>
      <ProductCard />
    </div>
  );
};

export default Asus;
