import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Checkout from "../../components/Checkout/Checkout";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  selectCartItems,
  selectCartItemsCount,
  selectCartTotal,
} from "../../redux/cart/cart-selector";
import {
  clearItemFromCart,
  decrementItem,
  incrementItem,
} from "../../redux/cart/cart-actions";
import { useSelector } from "react-redux";

const Cart = ({ totalPrice, clearItem, decrementItem, incrementItem }) => {
  const cartItem = useSelector((state) => state.cart.cartItems);
  const fixedTotalPrice = totalPrice.toFixed(2).toString().replace(".", ",");

  return (
    <div className="cart-container">
      <div>
        {cartItem.length === 0 ? (
          <div className="empty-cart">
            <div className="message">
              <h1>Carrinho Vazio :(</h1>
              <p>
                De uma olhada em nossos <Link to="/">produtos</Link>
              </p>
            </div>
          </div>
        ) : (
          cartItem.map((product) => {
            return (
              <div key={product.id} className="cart-card">
                <img src={product.imagem} alt={product.titulo} />
                <div className="prod-cart">
                  <h3>Produto</h3>
                  <span>{product.titulo}</span>
                </div>
                <div className="preco-cart">
                  <h3>Preço</h3>
                  <span>
                    R$ {product.preco.toFixed(2).toString().replace(".", ",")}
                  </span>
                </div>

                <div className="quantity">
                  <h3>Quantidade</h3>
                  <div className="count">
                    <button onClick={() => decrementItem(product)}> - </button>
                    <span>{product.count}</span>
                    <button onClick={() => incrementItem(product)}> + </button>
                  </div>
                </div>

                <div className="delete" onClick={() => clearItem(product)}>
                  <AiOutlineClose />
                </div>
              </div>
            );
          })
        )}
      </div>

      <div className="total-price">
        <h3>Total: R$: {fixedTotalPrice}</h3>
        <Checkout product={cartItem} total={fixedTotalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  quantity: selectCartItemsCount,
  totalPrice: selectCartTotal,
});

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  incrementItem: (item) => dispatch(incrementItem(item)),
  decrementItem: (item) => dispatch(decrementItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
