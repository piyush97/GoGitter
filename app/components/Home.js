import React, { Component } from "react";
import Link from "react-router-dom";
export default class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <h1>Battle GitHub Profile</h1>
        <Link className="button" to="/battle">
          Battle
        </Link>
      </div>
    );
  }
}
