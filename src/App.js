import React from "react";
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
import signInAndSignUp from "./pages/SignIn-SignUp/SignIn-SignUp";
import { DataProvider } from "./data/DataProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./custom-hooks/ScrollToTop";

import "./App.css";

function App() {

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
              <Route path="/signin" component={signInAndSignUp} />
            </Switch>
            <Footer />
          </div>
        </ScrollToTop>
      </Router>
    </DataProvider>
  );
}

export default App;
