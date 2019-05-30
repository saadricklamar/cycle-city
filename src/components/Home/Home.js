import React, { Component } from 'react';
import Search from '../../components/Search/Search';
import './Home.scss';
import { Route, Switch, Link, Redirect } from "react-router-dom";

class Home extends Component {
    constructor() {
      super()
      this.state = {
        bikePaths: [],
        error: ''
      }
    }
  
  
    componentDidMount() {
      const bikePathsURL = 'http://api.citybik.es/v2/networks';
      fetch(bikePathsURL)
        .then(response => response.json())
        .then(results => this.setState({bikePaths: results.networks}))
        .catch(err => this.setState({error: err}))
    }
  
  
  
    render() {
    return (
      <div className="home">
        <header>
          <h1>Cycle-City</h1>
          <nav>
            <Link className="favorite-link" to="/Favorites">
                  Favorites
            </Link>
            <Link className="about-link" to="/About">
                  About
            </Link>
          </nav>
        </header>
        <Search/>
      </div>
    );
    }
  }

  export default Home;