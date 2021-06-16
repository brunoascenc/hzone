import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { VscMenu, VscClose } from 'react-icons/vsc';
import { IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown';
import CartIcon from '../CartIcon/CartIcon';

const Nav = ({ cartItem, signOutStart, currentUser }) => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <nav className="navbar">
      <Link to="/">
        <h1>hzone</h1>
      </Link>
      <div className="menu-icon" onClick={handleClick}>
        {click ? <VscClose /> : <VscMenu />}
      </div>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <h1 className="hidden-link">hzone</h1>
        <Link to="/" onClick={closeMobileMenu}>
          <li className="nav-link">Home</li>
        </Link>
        <Link to="/apple" onClick={closeMobileMenu}>
          <li className="hidden-link">Apple</li>
        </Link>
        <Link to="/samsung" onClick={closeMobileMenu}>
          <li className="hidden-link">Samsung</li>
        </Link>
        <Link to="/motorola" onClick={closeMobileMenu}>
          <li className="hidden-link">Motorola</li>
        </Link>
        <Link to="/asus" onClick={closeMobileMenu}>
          <li className="hidden-link">Asus</li>
        </Link>
        <li
          className="nav-item"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <Link to="/#" className="shop-link">
            Shop
            <IconContext.Provider
              value={{
                style: {
                  marginLeft: '5px',
                  marginTop: '2px',
                  color: 'rgb(83, 82, 82)',
                },
              }}
            >
              <IoIosArrowDown />
            </IconContext.Provider>
          </Link>
          {dropdown && <Dropdown />}
        </li>
        <Link to="/contact" onClick={closeMobileMenu}>
          <li className="nav-link">Contato</li>
        </Link>
        {currentUser ? (
          <Link to="/" onClick={signOutStart}>
            <li className="nav-link">
              <span>Olá, {currentUser.displayName.split(' ')[0]}</span>
              <br />
              Sair
            </li>
          </Link>
        ) : (
          <Link to="/signin" onClick={closeMobileMenu}>
            <li className="nav-link">
              <div className="user-link">
                <p>
                  <span>Olá, visitante</span>
                  <br />
                  Entrar
                </p>
              </div>
            </li>
          </Link>
        )}
        <CartIcon closeMobileMenu={closeMobileMenu} cartItem={cartItem} />
      </ul>
    </nav>
  );
};

export default Nav;
