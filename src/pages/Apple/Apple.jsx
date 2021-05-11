import React, {useEffect} from "react";
import "../../App.css";
import appleBanner from "../../img/applebanner.png"
import { useSelector, useDispatch } from "react-redux";
import {fetchProductsStart} from '../../redux/products/products-actions'

import useFilteredProds from "../../custom-hooks/useFilteredProds"
import OrderBy from "../../custom-hooks/OrderBy";
import ProductCard from "../../components/ProductsCard/ProductsCard";

const Apple = () => {
  const [filteredProds, setSearch] = useFilteredProds();
  // const xd = useSelector((state) => state.products.results);
  const appleProd = filteredProds.filter((cel) => cel.marca === "Apple");
  const [sorted, handleOrderBy] = OrderBy(appleProd);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsStart());
  }, [dispatch]);

  const bannerStyle = {
    background: `url(${appleBanner}) no-repeat`,
    width: "100%",
    backgroundSize: "cover",
  };

  return (
    <div className="container">
      <div className="banner" style={bannerStyle}></div>
      <div className="products-header">
        <h1>Apple</h1>
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

export default Apple;
