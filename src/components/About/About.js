import React from 'react';
import './About.scss';
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className='about'>
            <header>
                <h1>About Cycle-City</h1>
                <Link className='return-home' to="/">
                    Return Home
                </Link>
            </header>
            <main>
                <p>Cycle-City was made for bike enthusiasts in the United States 
                <br/>who are looking for their next city to bike, but also for people
                <br/>traveling to a new state or city that want to see their available
                <br/>biking options.</p>
                <p>The data was made possible by the <a href='https://api.citybik.es/v2/' target='blank'>CityBikes</a> API,
                <br/> which containsbike friendly cities from around the world.
                </p>
            </main>
        </div>
    )
}

export default About;