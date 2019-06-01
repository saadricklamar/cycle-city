import React, { Component } from 'react';
import Search from '../../components/Search/Search';
import './Home.scss';
import { Route, Switch, Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { addBikePaths } from '../../actions';


class Home extends Component {
    constructor() {
      super()
      this.state = {
        error: ''
      }
    }
  
  
    componentDidMount() {
      const bikePathsURL = 'http://api.citybik.es/v2/networks';
      fetch(bikePathsURL)
        .then(response => response.json())
        .then(results => this.props.addPath(results.networks))
        .catch(err => this.setState({error: err}))
    }
  
  
  
    render() {
      console.log(this.state.bikePaths)
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
        <Search cities={this.state.bikePaths}/>
      </div>
    );
    }
  }


export const mapDispatchToProps = dispatch => ({
  addPath: obj => dispatch(addBikePaths(obj))
})

export default connect(null, mapDispatchToProps)(Home)
