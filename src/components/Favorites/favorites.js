import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Favorites.scss';
import { connect } from 'react-redux';
import Card from '../Card/Card';

export class Favorites extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    // fetch = async (url, options) => {
    //     const response = await fetch(url, options)
    //     const result = response.json()
    //     if(!response.ok) {
    //         throw Error('Error fetching data')
    //     } else {
    //         return result
    //     }
    // }

    render() {
    const { bikePaths } = this.props;
    const displayFavorites = bikePaths.filter(path => path.favorited === true).map(favorite => {
        return(<Card {...favorite} key={favorite.id}/>)
    })
    return (
        <div className='favorites-container'>
            <header>
                <h1 className='favorites'>Favorites</h1>
                <Link className='return-home' to="/">
                    Return Home
                </Link>
            </header>
            <main className='favorites-main'>
                {displayFavorites}
            </main>
        </div>
    )
}
    
}

export const mapStateToProps = state => ({
    bikePaths: state.bikePaths
});

export default connect(mapStateToProps)(Favorites);
