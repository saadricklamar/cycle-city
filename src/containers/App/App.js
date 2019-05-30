import React from 'react';
import Home from '../../components/Home/Home';
import { Route, Switch, Link, Redirect } from "react-router-dom";
import About from '../../components/About/About';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          {/* <Route path="/MapContainer" component={MapContainer} /> */}
          <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
