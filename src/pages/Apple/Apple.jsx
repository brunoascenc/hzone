import React from "react";
import "../../App.css";
import appleBanner from "../../img/applebanner.png";
import ProductCard from "../../components/ProductsCard/ProductsCard";

const Apple = () => {
  const bannerStyle = {
    background: `url(${appleBanner}) no-repeat`,
    width: "100%",
    backgroundSize: "cover",
  };

  return (
    <div className="container">
      <div className="banner" style={bannerStyle}></div>
      <ProductCard />
    </div>
  );
};

export default Apple;
