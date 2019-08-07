import React from "react";
import Home from "../../containers/Home/Home";
import { Route, Switch, Redirect } from "react-router-dom";
import About from "../About/About";
import Favorites from "../Favorites/favorites";
import Maps from "../Maps/Maps";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Favorites" component={Favorites} />
        <Route exact path="/Maps" component={Maps} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
