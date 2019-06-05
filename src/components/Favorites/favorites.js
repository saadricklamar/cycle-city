import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Favorites.scss";
import { connect } from "react-redux";
import Card from "../Card/Card";
import { PropTypes } from "prop-types";

export class Favorites extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { bikePaths } = this.props;
    const displayFavorites = bikePaths
      .filter(path => path.favorited === true)
      .map(favorite => {
        return <Card {...favorite} key={favorite.id} />;
      });
    return (
      <div className="favorites-container">
        <header>
          <h1 className="favorites">Favorites</h1>
          <Link className="return-home" to="/">
            Return Home
          </Link>
        </header>
        <main className="favorites-main">{displayFavorites}</main>
      </div>
    );
  }
}

Favorites.propTypes = {
  bikePaths: PropTypes.array.isRequired
}

export const mapStateToProps = state => ({
  bikePaths: state.bikePaths
});

export default connect(mapStateToProps)(Favorites);
