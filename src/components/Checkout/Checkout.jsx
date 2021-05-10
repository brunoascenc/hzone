import React, { useState, useContext } from "react";
import Modal from "react-modal";
import { DataContext } from "../../data/DataProvider";
import { VscClose } from "react-icons/vsc";
import "../../App.css";
import StripeCheckout from "react-stripe-checkout";
import { Link } from "react-router-dom";

const Checkout = ({ total, product }) => {
  const value = useContext(DataContext);
  const [cart] = value.cart;
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  const handleCheckout = () => {
    openModal();
    window.localStorage.clear();
  };

  //Reset cart
  function closeModal() {
    setIsOpen(false);
    cart.length = 0;
  }

  return (
    <div>
      <Modal
        closeTimeoutMS={200}
        className="modal"
        isOpen={modalIsOpen}
        ariaHideApp={false}
      >
        <div className="modal-content">
          <button onClick={closeModal}>
            <Link to="/">
              <VscClose />
            </Link>
          </button>
          <h1>Compra realizada</h1>
          <p>Seu pedido está a caminho!</p>
        </div>
      </Modal>
      <StripeCheckout
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        token={handleCheckout}
        name="Pagamento"
        amount={total * 100}
        shippingAddress
        billingAddress
        alipay
      >
        <button>Finalizar Compra</button>
      </StripeCheckout>
    </div>
  );
};

export default Checkout;
