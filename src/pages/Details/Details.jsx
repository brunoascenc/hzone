import React, { useContext, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductsStart } from "../../redux/products/products-actions";
import { DataContext } from "../../data/DataProvider";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Details = (props) => {
  const apiData = useSelector((state) => state.products.products);
  const value = useContext(DataContext);
  const addCart = value.addCart;
  const productDetail = apiData.find(
    (item) => item.id === props.match.params.id
  );

  const [img, setImg] = useState(productDetail.imagem);

  const changeImg = (e) => {
    setImg(e.target.src);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsStart());
  }, [dispatch]);

  return (
    <div className="details-container">
      <div className="product-details">
        <div className="img-container">
          <img className="main-img" src={img} alt={productDetail.titulo} />
          <div className="img-options">
            <img
              onClick={changeImg}
              src={productDetail.imagem}
              alt={productDetail.titulo}
            />
            <img
              src={productDetail.lado}
              onClick={changeImg}
              alt={productDetail.titulo}
            />
            <img
              onClick={changeImg}
              src={productDetail.traseira}
              alt={productDetail.titulo}
            />
          </div>
        </div>
        <div className="info">
          <h1>{productDetail.titulo}</h1>
          <div className="preco">
            <p>à vista no cartão</p>
            <span>
              R$ {productDetail.preco.toFixed(2).toString().replace(".", ",")}
            </span>
            <p>vendido e entregue por hzone.com</p>
          </div>
          <div className="carrinho-btn">
            <span className="detalhe"> {productDetail.tituloDetalhe} </span>
            <Link to="/cart" onClick={() => addCart(productDetail.id)}>
              <button>
                Adicionar ao carrinho
                <span>
                  <AiOutlineShoppingCart />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="hardware">
        <h3>Ficha técnica</h3>
        <table>
          <tbody>
            <tr>
              <td>Marca:</td>
              <td>{productDetail.marca}</td>
            </tr>
            <tr>
              <td>Modelo:</td>
              <td>{productDetail.modelo}</td>
            </tr>
            <tr>
              <td>Cor:</td>
              <td>{productDetail.cor}</td>
            </tr>
            <tr>
              <td>Chip:</td>
              <td>{productDetail.chip}</td>
            </tr>
            <tr>
              <td>Quantidades Chip: </td>
              <td>{productDetail.qtd_chip}</td>
            </tr>
            <tr>
              <td>Memória:</td>
              <td>{productDetail.memoria_interna}</td>
            </tr>
            <tr>
              <td>RAM:</td>
              <td>{productDetail.memoria_ram}</td>
            </tr>
            <tr>
              <td>Processador:</td>
              <td>{productDetail.processador}</td>
            </tr>
            <tr>
              <td>Sistema:</td>
              <td>{productDetail.sistema}</td>
            </tr>
            <tr>
              <td>Versão:</td>
              <td>{productDetail.versao}</td>
            </tr>
            <tr>
              <td>Tela:</td>
              <td>{productDetail.tipo_tela}</td>
            </tr>
            <tr>
              <td>Tamanho:</td>
              <td>{productDetail.tamanho_display}</td>
            </tr>
            <tr>
              <td>Resolução:</td>
              <td>{productDetail.resolucao}</td>
            </tr>
            <tr>
              <td>Camera Traseira:</td>
              <td>{productDetail.camera_traseira}</td>
            </tr>
            <tr>
              <td>Camera Frontal:</td>
              <td>{productDetail.camera_frontal}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Details;
