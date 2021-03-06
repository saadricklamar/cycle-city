import React from "react";
import { PropTypes } from "prop-types";

const Card = ({ name, location }) => {
  return (
    <article className="favorite-bike-path">
      <h4>{name}</h4>
      <hr />
      <p className="favorite-info">City: {location.city}</p>
      <br />
      <p className="favorite-info">Country: {location.country}</p>
      <p className="favorite-info">Latitiude: {location.latitude}</p>
      <p className="favorite-info">Longitude: {location.longitude}</p>
      <p className="favorite-info">Website: </p>
    </article>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  location: PropTypes.object
}

export default Card;
