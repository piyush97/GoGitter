import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <h1>GoGitter Profile Battle</h1>
        <h4>Battle with friends</h4>
        <Link className="button" to="/battle">
          Battle
        </Link>
      </div>
    );
  }
}
