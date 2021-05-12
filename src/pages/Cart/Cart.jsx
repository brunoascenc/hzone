import React, {useState, useEffect } from "react";
import { connect } from "react-redux";
import {createStructuredSelector} from 'reselect'
// import { DataContext } from "../../data/DataProvider";
import Checkout from "../../components/Checkout/Checkout";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { selectCartItems } from "../../redux/cart/cart-selector";
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart-actions";

const Cart = ({cartItems}) => {
  // const value = useContext(DataContext);
  const [cart, setCart] = useState([cartItems]);
  const [total, setTotal] = useState(0);

  //Total price
  useEffect(() => {
    const getTotal = () => {
      const res = cartItems.reduce((prev, item) => {
        return prev + item.preco * item.count;
      }, 0);
      const totalValue = res.toFixed(2).toString().replace(".", ",");
      setTotal(totalValue);
    };
    getTotal();
  }, [cartItems]);

  //Items Quantity
  const decrement = (id) => {
    cartItems.forEach((item) => {
      if (item.id === id) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }
    });
    setCart([...cartItems]);
  };

  const increment = (id) => {
    cartItems.forEach((item) => {
      if (item.id === id) {
        item.count += 1;
      }
    });
    setCart([...cartItems]);
  };

  const removeProduct = (id) => {
    if (window.confirm("Deseja mesmo remover?")) {
      cartItems.forEach((item, index) => {
        if (item.id === id) {
          cartItems.splice(index, 1);
        }
      });
      setCart([...cartItems]);
    }
  };

  if (cartItems.length === 0)
    return (
      <div className="empty-cart">
        <div className="message">
          <h1>Carrinho Vazio :(</h1>
          <p>
            De uma olhada em nossos <Link to="/">produtos</Link>
          </p>
        </div>
      </div>
    );

  return (
    <div className="cart-container">
      <div>
        {cartItems &&
          cartItems.map((product) => {
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
                    <button onClick={() => decrement(product.id)}> - </button>
                    <span>{product.count}</span>
                    <button onClick={() => increment(product.id)}> + </button>
                  </div>
                </div>

                <div
                  className="delete"
                  onClick={() => removeProduct(product.id)}
                >
                  <AiOutlineClose />
                </div>
              </div>
            );
          })}
      </div>

      <div className="total-price">
        <h3>Total: R$: {total}</h3>
        <Checkout product={cartItems} total={total} />
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector ({
  cartItems: selectCartItems
});

// const mapDispatchToProps = (dispatch) => ({
//   clearItem: (item) => dispatch(clearItemFromCart(item)),
//   addItem: item => dispatch(addItem(item)),
//   removeItem: item => dispatch(removeItem(item))
// });


export default connect(mapStateToProps)(Cart);
