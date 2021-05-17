import React from "react";
import "../../App.css";
import samBanner from "../../img/sambanner.jpg";
import ProductCard from "../../components/ProductsCard/ProductsCard";

const Samsung = () => {
  const bannerStyle = {
    background: `url(${samBanner}) no-repeat`,
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

export default Samsung;
