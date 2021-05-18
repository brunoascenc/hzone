import React, { useContext } from "react";
import { DataContext } from "../../data/DataProvider";
import "../../App.css";
import LandingPage from "../../components/LandingPage/LandingPage";
import useFilteredProds from "../../custom-hooks/useFilteredProds";
import { Link } from "react-router-dom";
import SearchError from "../../components/SearchError/SearchError";


const Home = () => {
  const value = useContext(DataContext);
  const apiData = value.products;
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
        <div className="card-container">
          {filteredProds.length === 0 ? <SearchError/> :
            filteredProds.map((product) => {
              return (
                <div key={product.id} className="card">
                  <Link to={`/details/${product.id}`}>
                    <img src={product.imagem} alt={product.titulo} />
                    <div>
                      <span>{product.titulo}</span>
                    </div>
                  </Link>
                  <span className="preco">
                    R$: {product.preco.toFixed(2).toString().replace(".", ",")}{" "}
                    à vista
                  </span>
                  <span className="parcela">ou {product.parcela}</span>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Home;
