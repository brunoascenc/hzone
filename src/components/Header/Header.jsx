import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user-selector";
import "../../App.css";
import { signOutStart } from "../../redux/user/user-actions";
import { useSelector } from "react-redux";
import Nav from "../Nav/Nav";

const Header = ({ currentUser, signOutStart }) => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const cartItem = useSelector((state) => state.cart.cartItems);

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
        <Nav
          click={click}
          dropdown={dropdown}
          cartItem={cartItem}
          handleClick={handleClick}
          closeMobileMenu={closeMobileMenu}
          signOutStart={signOutStart}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          currentUser={currentUser}
        />
      </header>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDipatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDipatchToProps)(Header);
