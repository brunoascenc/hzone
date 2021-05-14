import React, { createContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductsStart } from "../redux/products/products-actions";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const apiData = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsStart());
  }, [dispatch]);

  const value = {
    products: apiData,
  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};
