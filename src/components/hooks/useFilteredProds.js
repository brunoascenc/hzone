import { useContext, useState, useEffect } from "react";
import { DataContext } from "../../data/DataProvider";

const useFilteredProds = () => {
  const value = useContext(DataContext);
  const [products] = value.products;
  const [search, setSearch] = useState("");
  const [filteredProds, setFilteredProds] = useState([]);
  const [searchMarca, setSearchMarca] = useState([]);

  useEffect(() => {
    setFilteredProds(
      products.filter((product) =>
        product.titulo.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, products]);

  useEffect(() => {
    setFilteredProds(
      products.filter((product) => product.marca.includes(searchMarca))
    );
  }, [searchMarca, products]);

  return [filteredProds, setSearch, setSearchMarca];
};

export default useFilteredProds;
