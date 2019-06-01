import React, {Component} from 'react';
import './Search.scss';

class Search extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            city: ''
        }
    }



    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.city)
    }

    handleChange = (e) => {
        const { name, value} = e.target;
        this.setState({[name]: value})
    }


    render() {
        console.log(this.state.city)
        console.log(this.props.bikePaths)
        return (
        <div>
            <form onSubmit={this.handleSubmit} className='search-box'>
            <input onChange={this.handleChange} className='search-text' type='text' name='city' placeholder='Find your city'/>
            <button  className='search-btn'>
            {/* <a className='search-btn'> */}
             <i className="fas fa-search"></i>  
            {/* </a> */}
            </button>
            </form>
        </div>
        )
    }
}


export default Search;