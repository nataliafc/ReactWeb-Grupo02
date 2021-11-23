import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from './pages/Home';
import Carrinho from "./components/Cart";
import Sobre from "./components/About";
import Contato from "./components/Contact";
import Navbar from "./components/Navbar"


function Routes() {
  return (
    <BrowserRouter>
    <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/carrinho" exact component={Carrinho} />
        <Route path="/sobre" exact component={Sobre} />
        <Route path="/contato" exact component={Contato} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;