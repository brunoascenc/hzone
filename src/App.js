import React, { useEffect } from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectCurrentUser } from "./redux/user/user-selector";
import { checkUserSession } from "./redux/user/user-actions";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Apple from "./pages/Apple/Apple";
import Samsung from "./pages/Samsung/Samsung";
import Asus from "./pages/Asus/Asus";
import Motorola from "./pages/Motorola/Motorola";
import Contact from "./pages/Contact/Contact";
import Cart from "./pages/Cart/Cart";
import Details from "./pages/Details/Details";
import Footer from "./components/Footer/Footer";
import SignInAndSignUp from "./pages/SignIn-SignUp/SignIn-SignUp";
import { DataProvider } from "./data/DataProvider";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ScrollToTop from "./custom-hooks/ScrollToTop";

import "./App.css";

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <DataProvider>
      <Router>
        <ScrollToTop>
          <div className="App">
            <Header />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/apple" component={Apple} />
              <Route path="/asus" component={Asus} />
              <Route path="/samsung" component={Samsung} />
              <Route path="/motorola" component={Motorola} />
              <Route path="/contact" component={Contact} />
              <Route path="/cart" component={Cart} />
              <Route path="/details/:id" component={Details} />
              <Route
                exact
                path="/signin"
                render={() =>
                  currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
                }
              />
            </Switch>
            <Footer />
          </div>
        </ScrollToTop>
      </Router>
    </DataProvider>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);