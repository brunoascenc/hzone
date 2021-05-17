import React from "react";
import "../../App.css";
import motoBanner from "../../img/motobanner.jpg";
import ProductCard from "../../components/ProductsCard/ProductsCard";

const Motorola = () => {
  const bannerStyle = {
    background: `url(${motoBanner})center no-repeat`,
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

export default Motorola;
