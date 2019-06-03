import React, {Component} from 'react';
import './Search.scss';
import Maps from '../Maps/Maps';
import { Redirect } from "react-router-dom";
import { toggleFavorite } from '../../actions';
import { connect } from 'react-redux';

class Search extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            city: '',
            path: {} || ''
        }
    }



    handleSubmit = (e) => {
        e.preventDefault();
        const { bikePaths } = this.props;
        const pathChosen = bikePaths.filter(path => path.location.city === this.state.city);
        if(!pathChosen.length) {
            this.setState({path: 'Your city was not found'})
        } else {
            this.setState({path: pathChosen.pop()})
        }
    }

    handleChange = e => {
        const { name, value} = e.target;
        this.setState({[name]: value})
    }

    returnToHomePage = () => {
        return <Redirect to="/"/>;
    }

    toggleFavorite = (id) => {
        this.props.toggleFavorite(id);
    }


    render() {
        let search =  <form onSubmit={this.handleSubmit} className='search-box'>
                            <input onChange={this.handleChange} 
                                className='search-text' 
                                type='text' 
                                name='city' 
                                placeholder='Find your city...'
                            />
                            <button  className='search-btn'>
                                <i className="fas fa-search"></i>  
                            </button>
                        </form>            
        let notFound;
        if (typeof this.state.path === 'string') {
            notFound = <p className='not-found'>{this.state.path}</p>
            return (
                <div>
                    {search}
                    {notFound}
                </div>
                )
        }
        if (!Object.entries(this.state.path).length) {
            return (
                <div>
                    {search}
                </div>
                )
        } else {
            return (<Maps path={this.state.path}
                          redirect={this.returnToHomePage}
                          toggleFavorite={this.toggleFavorite}
            />)
        }
        
    }
}


export const mapDispatchToProps = dispatch => ({
    toggleFavorite: id => dispatch(toggleFavorite(id))
  })


  export default connect(null, mapDispatchToProps)(Search);