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
  decrementItem,
  incrementItem
} from "../../redux/cart/cart-actions";
import { useSelector } from "react-redux";

const Cart = ({removeItem, clearItem}) => {
  // const value = useContext(DataContext);
  const cartItem = useSelector((state) => state.cart.cartItems);
  const [cart, setCart] = useState([cartItem]);
  const [total, setTotal] = useState(0);


  //Total price
  useEffect(() => {
    const getTotal = () => {
      const res = cartItem.reduce((prev, item) => {
        return prev + item.preco * item.count;
      }, 0);
      const totalValue = res.toFixed(2).toString().replace(".", ",");
      setTotal(totalValue);
    };
    getTotal();
  }, [cartItem]);

  //Items Quantity
  const decrement = (id) => {
    cartItem.forEach((item) => {
      if (item.id === id) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }
    });
    setCart([...cartItem]);
  };

  const increment = (id) => {
    cartItem.forEach((item) => {
      if (item.id === id) {
        item.count += 1;
      }
    });
    setCart([...cartItem]);
  };

//   const removeProduct = (id) => {
//     if (window.confirm("Deseja mesmo remover?")) {
//       cartItem.forEach((item, index) => {
//         if (item.id === id) {
//           cartItem.splice(index, 1);
//         }
//       });
//       setCart([...cartItem]);
//     }
//   };

  if (cartItem.length === 0)
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
        {cartItem &&
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

                <div
                  className="delete"
                  onClick={() => clearItem(product)}
                >
                  <AiOutlineClose />
                </div>
              </div>
            );
          })}
      </div>

      <div className="total-price">
        <h3>Total: R$: {total}</h3>
        <Checkout product={cartItem} total={total} />
      </div>
    </div>
  );
};

// const mapStateToProps = createStructuredSelector ({
//   cartItems: selectCartItems
// });

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  incrementItem: (item) => dispatch(incrementItem(item)),
  decrementItem: (item) => dispatch(decrementItem(item))
  // addItem: item => dispatch(addItem(item)),
//   removeItem: (item) => dispatch(removeItem(item))
});


export default connect(null, mapDispatchToProps)(Cart);

// export default Cart 
