import React, { Component } from 'react';
import Search from '../../components/Search/Search';
import './App.scss';

class App extends Component {
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
    <div className="App">
      <header>
        <h1>City-Cycle</h1>
        <nav>
          <h3>Favorites</h3>
          <h3>About</h3>
        </nav>
      </header>
      <Search/>
    </div>
  );
  }
}

export default App;
