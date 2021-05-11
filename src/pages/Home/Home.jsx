import React, { useContext } from "react";
import { DataContext } from "../../data/DataProvider";
import "../../App.css";
// import { useSelector, useDispatch } from "react-redux";
import LandingPage from "../../components/LandingPage/LandingPage";
// import {fetchProductsStart} from '../../redux/products/products-actions'
import useFilteredProds from "../../custom-hooks/useFilteredProds"
import ProductCard from "../../components/ProductsCard/ProductsCard";

const Home = () => {
  const value = useContext(DataContext);
  const apiData = value.products
  const [filteredProds, setSearch, setSearchMarca] = useFilteredProds(apiData);

  return (
    <div className="home">
      <LandingPage />
      <div className="home-content" id="xd">
        <div className="products-header">
          <h1>Mais Vendidos</h1>
        </div>
        <div className="filters">
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Pesquise por um produto..."
          />
          <div className="marcas">
            <p>Marcas: </p>
            <select
              defaultValue={"DEFAULT"}
              onChange={(e) => setSearchMarca(e.target.value)}
            >
              <option value="DEFAULT" disabled>
                Selecione
              </option>
              <option value="Apple">Apple</option>
              <option value="Samsung">Samsung</option>
              <option value="Asus">Asus</option>
              <option value="Motorola">Motorola</option>
            </select>
          </div>
        </div>
        <ProductCard productName={filteredProds} />
      </div>
    </div>
  );
};

export default Home;
