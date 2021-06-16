import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../App.css';
import { DataContext } from '../../data/DataProvider';
import useFilteredProds from '../../custom-hooks/useFilteredProds';
import OrderBy from '../../custom-hooks/OrderBy';
import SearchError from '../SearchError/SearchError';

const ProductsCard = () => {
  const value = useContext(DataContext);
  const apiData = value.products;
  const location = useLocation();
  const urlPath = location.pathname.substring(1);
  const pageName = urlPath[0].toUpperCase() + urlPath.slice(1).toLowerCase();
  const [filteredProds, setSearch] = useFilteredProds(apiData);
  const products = filteredProds.filter((cel) => cel.marca === pageName);
  const [sorted, handleOrderBy] = OrderBy(products);

  return (
    <>
      <div className="products-header">
        <h1>{pageName}</h1>
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
      <div className="card-container">
        {sorted.length === 0 ? (
          <SearchError />
        ) : (
          sorted.map((product) => {
            return (
              <div key={product.id} className="card">
                <Link to={`/details/${product.id}`}>
                  <img src={product.imagem} alt={product.titulo} />
                  <div>
                    <span>{product.titulo}</span>
                  </div>
                </Link>
                <span className="preco">
                  R$: {product.preco.toFixed(2).toString().replace('.', ',')} à
                  vista
                </span>
                <span className="parcela">ou {product.parcela}</span>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default ProductsCard;
