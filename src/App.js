import React, { useEffect, lazy, Suspense } from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectCurrentUser } from "./redux/user/user-selector";
import { checkUserSession } from "./redux/user/user-actions";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Spinner from "./components/Spinner/Spinner";
import { DataProvider } from "./data/DataProvider";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ScrollToTop from "./custom-hooks/ScrollToTop";
import "./App.css";

const Home = lazy(() => import("./pages/Home/Home"));
const Apple = lazy(() => import("./pages/Apple/Apple"));
const Samsung = lazy(() => import("./pages/Samsung/Samsung"));
const Asus = lazy(() => import("./pages/Asus/Asus"));
const Motorola = lazy(() => import("./pages/Motorola/Motorola"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const Cart = lazy(() => import("./pages/Cart/Cart"));
const Details = lazy(() => import("./pages/Details/Details"));
const SignInAndSignUp = lazy(() =>
  import("./pages/SignIn-SignUp/SignIn-SignUp")
);

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <DataProvider>
      <Router>
        <ScrollToTop>
          <div className="App">
            <Suspense fallback={<Spinner delay={2000}/>}>
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
            </Suspense>
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
