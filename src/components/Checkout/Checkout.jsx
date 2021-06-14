import React, { useState } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { VscClose } from 'react-icons/vsc';
import '../../App.css';
import StripeCheckout from 'react-stripe-checkout';
import { Link } from 'react-router-dom';
import { clearCart } from '../../redux/cart/cart-actions';

const Checkout = ({ total, clearCart }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  const handleCheckout = () => {
    openModal();
    clearCart();
  };

  //Reset cart
  function closeModal() {
    setIsOpen(false);
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

const mapDispatchToProps = (dispatch) => ({
  clearCart: () => dispatch(clearCart()),
});

export default connect(null, mapDispatchToProps)(Checkout);
