import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Menu from "./components/Menu";
import Home from "./containers/Home";
import Characters from "./containers/Characters";
import Character from "./containers/Character";
import Comics from "./containers/Comics";

function App({ data, setData }) {
  return (
    <div>
      <Router>
        <Header />
        <Menu />
        <Switch>
          <Route path="/characters">
            <Characters />
          </Route>
          <Route path="/characters/:id">
            {/* apres le offer on dit dans le one post que la parametre de use params c lui qui est dans le lien apres avoir cliquer sur une des cartes */}
            <Character data={data} setData={setData} />
          </Route>
          <Route path="/comics">
            <Comics />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
