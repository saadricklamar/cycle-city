import React from 'react';
import './Card.scss';

const Card = ({name, location}) => {
    console.log(name)
    return (
        <article className='favorite-bike-path'>
            <h4>{name}</h4>
            <hr></hr>
            <p className='favorite-info'>City: {location.city}</p>
            <p className='favorite-info'>Country: {location.country}</p>
            <p className='favorite-info'>Latitiude: {location.latitude}</p>
            <p className='favorite-info'>Longitude: {location.longitude}</p>
            <p className='favorite-info'>Website: </p>
        </article>
    )
}

export default Card;