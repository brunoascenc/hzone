import React, {useState, useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user-selector";
import { Link } from "react-router-dom";
// import { DataContext } from "../../data/DataProvider";
import Dropdown from "../Dropdown/Dropdown";
import "../../App.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IconContext } from "react-icons";
import { VscMenu, VscClose } from "react-icons/vsc";
import { IoIosArrowDown } from "react-icons/io";
import { signOutStart } from "../../redux/user/user-actions";
import { selectCartItems } from "../../redux/cart/cart-selector";

const Header = ({ currentUser, signOutStart, cartItems}) => {
  // const value = useContext(DataContext);
  // const [cart] = value.cart;
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  //Mobile menu
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  //Sticky nav
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  let sticky = ["navbar"];
  if (scrolled) {
    sticky.push("scrolled");
  }

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
    <div>
      <header className={sticky.join(" ")}>
        <nav className="navbar">
          <Link to="/">
            <h1>hzone</h1>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <VscClose /> : <VscMenu />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
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
                      marginLeft: "5px",
                      marginTop: "2px",
                      color: "rgb(83, 82, 82)",
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
                SIGN OUT
              </Link>
            ) : (
              <Link to="/signin" onClick={closeMobileMenu}>
                <li className="nav-link">Entrar</li>
              </Link>
            )}
            <div className="cart">
              <Link to="/cart" onClick={closeMobileMenu}>
                <IconContext.Provider
                  value={{
                    style: { fontSize: "35px" },
                  }}
                >
                  <li>
                    <AiOutlineShoppingCart />
                  </li>
                </IconContext.Provider>
                <span className="cart-qtd">{cartItems.length}</span>
              </Link>
            </div>
          </ul>
        </nav>
      </header>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartItems: selectCartItems
});

const mapDipatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDipatchToProps)(Header);
