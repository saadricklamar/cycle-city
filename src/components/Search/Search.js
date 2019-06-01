import React, {Component} from 'react';
import './Search.scss';
import Maps from '../Maps/Maps';

class Search extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            city: '',
            path: {}
        }
    }



    handleSubmit = (e) => {
        e.preventDefault();
        const { bikePaths } = this.props;
        const pathChosen = bikePaths.filter(path => path.location.city === this.state.city);
        this.setState({path: pathChosen.pop()})
    }

    handleChange = (e) => {
        const { name, value} = e.target;
        this.setState({[name]: value})
    }


    render() {
        if(!Object.entries(this.state.path).length) {
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
        } else {
            return (<Maps path={this.state.path}/>)
        }
        
    }
}


export default Search;