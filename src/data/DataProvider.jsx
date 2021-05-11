import React, { createContext, useState, useEffect } from "react";
// import { firestore } from "../firebase/firebase-utils";
import useData from "./useData";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [products, setProducts] = useData();
  const [cart, setCart] = useState([]);

  // //firebase transformed data
  // const convertCollectionsSnapshotToMap = (collections) => {
  //   const transformedCollection = collections.docs.map((doc) => {
  //     const data = doc.data();

  //     return data;
  //   });

  //   setProducts(transformedCollection);
  // };

  //firebase transformed data
  // useEffect(() => {
  //   const collectionRef = firestore.collection("collections");

  //   collectionRef.onSnapshot(async (snapshot) => {
  //     convertCollectionsSnapshotToMap(snapshot);
  //   });
  // }, []);

  //Adicionar ao carrinho
  const addCart = (id) => {
    const check = cart.every((item) => {
      return item.id !== id;
    });
    if (check) {
      const data = products.filter((product) => {
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
    products: [products, setProducts],
    cart: [cart, setCart],
    addCart: addCart,
  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};
