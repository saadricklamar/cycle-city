import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <header>
        <Link className="go-home" to="/">
          <i className="fas fa-arrow-circle-left" />
        </Link>
        <h1 className="about-header">About Cycle-City</h1>
        <Link className="return-home" to="/">
          Return Home
        </Link>
      </header>
      <main className="about-main">
        <p>
          Cycle-City was made for bike enthusiasts in the United States
          who are looking for their next city to bike, but also for people
          traveling to a new city that want to see their available
          biking options.
        </p>
        <br />
        <p>
          The data was made possible by the
          <a href="https://api.citybik.es/v2/" target="_blank">
            CityBikes
          </a>{" "}
          API,which contains bike friendly cities from around the world.
        </p>
      </main>
    </div>
  );
};

export default About;
