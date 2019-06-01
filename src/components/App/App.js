import React from 'react';
import Home from '../../containers/Home/Home';
import { Route, Switch, Link, Redirect } from "react-router-dom";
import About from '../About/About';
import Favorites from '../Favorites';
import Maps from '../Maps';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Favorites" component={Favorites} />
          <Route path="/Maps" component={Maps} />
          <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
