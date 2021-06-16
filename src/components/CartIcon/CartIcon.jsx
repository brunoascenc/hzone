import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';

const CartIcon = ({ closeMobileMenu, cartItem }) => {
  return (
    <div className="cart">
      <Link to="/cart" onClick={closeMobileMenu}>
        <IconContext.Provider
          value={{
            style: { fontSize: '35px' },
          }}
        >
          <li className="carticon">
            <AiOutlineShoppingCart />
          </li>
        </IconContext.Provider>
        <span className="cart-qtd">{cartItem.length}</span>
      </Link>
    </div>
  );
};

export default CartIcon;
