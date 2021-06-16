import React from 'react';
import useFilteredProds from './useFilteredProds';

const FilterOptions = () => {
  const [setSearch, setSearchMarca] = useFilteredProds();

  return (
    <div>
      <div className="filters">
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Pesquise por um produto..."
        />
        <div className="marcas">
          <h3>Ordenar por: </h3>
          <select>
            <option value="asc">Maior preço</option>
            <option value="desc">Menor preço</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterOptions;
