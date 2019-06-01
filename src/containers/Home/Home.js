import React, { Component } from 'react';
import Search from '../../components/Search/Search';
import './Home.scss';
import { Link } from "react-router-dom";
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
        .then(results => this.props.addPath(results.networks.filter(network => network.location.country === 'US')))
        .catch(err => this.setState({error: err}))
    }
  
  
  
    render() {
    const { bikePaths } = this.props
    console.log(bikePaths);
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
        <Search bikePaths={bikePaths}/>
      </div>
    );
    }
  }


export const mapStateToProps = (state) => ({
  bikePaths: state.bikePaths
})

export const mapDispatchToProps = dispatch => ({
  addPath: obj => dispatch(addBikePaths(obj))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
