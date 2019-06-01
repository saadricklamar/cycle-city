import React, {Component} from 'react';
import './Search.scss';

class Search extends Component {
    constructor(props) {
        super(props) 
        this.state = {

        }
    }



    submit = (e) => {
     console.log(e.target)
    }

    change = (e) => {
        console.log(e.target.value)
    }






    render() {
        return (
        <div>
            <div className='search-box'>
            <input onChange={this.change} className='search-text' type='text' name='' placeholder='Find your city'/>
            <button onClick={this.submit} className='search-btn'>
            {/* <a className='search-btn'> */}
             <i className="fas fa-search"></i>  
            {/* </a> */}
            </button>
            </div>
        </div>
        )
    }
}


export default Search;