import React, { createContext, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductsStart } from "../redux/products/products-actions";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const apiData = useSelector((state) => state.products.products);
  const [cart, setCart] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsStart());
  }, [dispatch]);

  //Adicionar ao carrinho
  const addCart = (id) => {
    const check = cart.every((item) => {
      return item.id !== id;
    });
    if (check) {
      const data = apiData.filter((product) => {
        return product.id === id;
      });
      setCart([...cart, ...data]);
    } else {
      console.log("tudo certo");
    }
  };

  //Armazenar no local storage
  useEffect(() => {
    const dataCart = JSON.parse(localStorage.getItem("dataCart"));
    if (dataCart) setCart(dataCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("dataCart", JSON.stringify(cart));
  }, [cart]);

  const value = {
    products: apiData,
    cart: [cart, setCart],
    addCart: addCart,
  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};
