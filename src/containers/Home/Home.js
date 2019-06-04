import React, { Component } from 'react';
import Search from '../../components/Search/Search';
import './Home.scss';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { addBikePaths, hasErrored, isLoading } from '../../actions';
import { cleanBikePaths } from '../../util/cleanBikePaths';
import Favorites from '../../components/Favorites/Favorites';


export class Home extends Component {
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
        .then(results => cleanBikePaths(results))
        .then(bikePaths => this.props.addPath(bikePaths.filter(network => network.location.country === 'US')))
        .catch(error => this.setState({error: error.message}))
    }
  
  
  
    render() {
    const { bikePaths, isLoading } = this.props
    if (this.state.error !== '') {
      return(<p>There was an error fetching the data. Please try refreshing your page.</p>)
    }
    if (isLoading && !bikePaths.length) {
      return(<div className="loader"></div>)
    } else {
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
  }


export const mapStateToProps = (state) => ({
  bikePaths: state.bikePaths,
  hasErrored: state.hasErrored,
  isLoading: state.isLoading
})

export const mapDispatchToProps = dispatch => ({
  addPath: obj => dispatch(addBikePaths(obj)),
  hasErrored: string =>  dispatch(hasErrored(string)),
  isLoading: bool => dispatch(isLoading(bool))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);


