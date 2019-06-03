import React from 'react';
import { Link } from "react-router-dom";
import './Favorites.scss';

const Favorites = () => {
    return (
        <div className='about'>
            <header>
                <h1 className='favorites'>Favorites</h1>
                <Link className='return-home' to="/">
                    Return Home
                </Link>
            </header>
        </div>
    )
}

export default Favorites;