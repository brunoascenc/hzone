import React from "react";
import "../../App.css";
import appleBanner from "../../img/applebanner.png";
import ProductCard from "../../components/ProductsCard/ProductsCard";

const Apple = () => {
  const bannerStyle = {
    background: `linear-gradient(rgba(31, 28, 28, 0.329),rgba(14, 14, 13, 0.89)), url(${appleBanner}) no-repeat`,
    width: "100%",
    backgroundSize: "cover",
  };

  return (
    <div className="product-page">
      <div className="banner" style={bannerStyle}></div>
      <ProductCard />
    </div>
  );
};

export default Apple;
