import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";


import Home from './Pages/Home';

import Carrinho from "./components/Cart";
import Sobre from "./components/About";
import Contato from "./components/Contact";
import NavBar from "./components/Navbar"
import Header from "./components/Header";
import Produto from "./components/Produto";


function Routes() {
  return (
    <BrowserRouter>

    <Header/>
    <NavBar />
    <Produto/>
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