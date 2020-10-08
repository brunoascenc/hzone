import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const ProductsCard = ({ productName }) => {
  return (
    <div className="card-container">
      {productName &&
        productName.map((product) => {
          return (
            <div key={product.id} className="card">
              <Link to={`/details/${product.id}`}>
                <img src={product.imagem} alt={product.titulo} />
                <div>
                  <span>{product.titulo}</span>
                </div>
              </Link>
              <span className="preco">
                R$: {product.preco.toFixed(2).toString().replace(".", ",")} à
                vista
              </span>
              <span className="parcela">ou {product.parcela}</span>
            </div>
          );
        })}
    </div>
  );
};

export default ProductsCard;
