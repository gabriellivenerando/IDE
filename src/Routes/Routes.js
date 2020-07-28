import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from "../Paginas/Home/Home";
import ProjetoEsperanca from "../Paginas/ProjetoEsperanca/ProjetoEsperanca"



const Routes = () => {
  return (
    <BrowserRouter>
    <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/projetoesperanca" component={ProjetoEsperanca} />
    </Switch>
</ BrowserRouter>
  );
}

export default Routes;