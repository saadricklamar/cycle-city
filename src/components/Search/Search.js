import React, {Component} from 'react';
import './Search.scss';

class Search extends Component {
    constructor() {
        super() 
        this.state = {

        }
    }











    render() {
        return (
        <div>
            <div className='search-box'>
            <input className='search-text' type='text' name='' placeholder='Find your state'/>
            <a className='search-btn' href='#'>
                <i class="fas fa-search"></i> 
            </a>
            </div>
        </div>
        )
    }
}


export default Search;