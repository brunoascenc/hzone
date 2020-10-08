import React from "react";
import "../../App.css";
import LandingPage from "../LandingPage";
import useFilteredProds from "../hooks/useFilteredProds";
import ProductCard from "../ProductsCard";

const Home = () => {
  const [filteredProds, setSearch, setSearchMarca] = useFilteredProds();

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
