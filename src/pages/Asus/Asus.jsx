import React, { useEffect } from "react";
import "../../App.css";
import asusBanner from "../../img/asusbanner.jpg";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductsStart } from "../../redux/products/products-actions";
import useFilteredProds from "../../custom-hooks/useFilteredProds";
import OrderBy from "../../custom-hooks/OrderBy";
import ProductCard from "../../components/ProductsCard/ProductsCard";

const Asus = () => {
  const apiData = useSelector((state) => state.products.products);
  const [filteredProds, setSearch] = useFilteredProds(apiData);
  const asusProd = filteredProds.filter((cel) => cel.marca === "Asus");
  const [sorted, handleOrderBy] = OrderBy(asusProd);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsStart());
  }, [dispatch]);

  const bannerStyle = {
    background: `url(${asusBanner})center no-repeat`,
    width: "100%",
    backgroundSize: "cover",
  };

  return (
    <div>
      <div className="banner" style={bannerStyle}></div>
      <div className="products-header">
        <h1>Asus</h1>
      </div>
      <div className="filters">
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Pesquise por um produto..."
        />
        <div className="marcas">
          <p>Ordenar por: </p>
          <select onChange={(e) => handleOrderBy(e.target.value)}>
            <option value="">Mais vendidos</option>
            <option value="desc">Menor preço</option>
            <option value="asc">Maior preço</option>
          </select>
        </div>
      </div>
      <ProductCard productName={sorted} />
    </div>
  );
};

export default Asus;
