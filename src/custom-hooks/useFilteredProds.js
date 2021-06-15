import { useState, useEffect } from 'react';

const useFilteredProds = (apiData) => {
  const [search, setSearch] = useState('');
  const [filteredProds, setFilteredProds] = useState(apiData);
  const [searchMarca, setSearchMarca] = useState([]);

  useEffect(() => {
    setFilteredProds(
      apiData.filter((product) =>
        product.titulo.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, apiData]);

  useEffect(() => {
    setFilteredProds(
      apiData.filter((product) => product.marca.includes(searchMarca))
    );
  }, [searchMarca, apiData]);

  return [filteredProds, setSearch, setSearchMarca];
};

export default useFilteredProds;
