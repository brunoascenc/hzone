import React from "react";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import Apple from "./components/pages/Apple";
import Samsung from "./components/pages/Samsung";
import Asus from "./components/pages/Asus";
import Motorola from "./components/pages/Motorola";
import Contact from "./components/pages/Contact";
import Cart from "./components/pages/Cart";
import Details from "./components/pages/Details";
import Footer from "./components/Footer";
import { DataProvider } from "./data/DataProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/hooks/ScrollToTop";
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
            </Switch>
            <Footer />
          </div>
        </ScrollToTop>
      </Router>
    </DataProvider>
  );
}

export default App;
