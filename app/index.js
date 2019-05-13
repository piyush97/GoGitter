import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Badge extends React.Component {
  render() {
    return (
      <div>
        <img
          src={this.props.img}
          alt="avatar"
          style={{ width: 100, heigth: 100 }}
        />
        <h1>Name: {this.props.name}</h1>
        <h3>username: {this.props.username}</h3>
      </div>
    );
  }
}

ReactDOM.render(
  <Badge
    name="Piyush Mehta"
    username="piyush97"
    img="https://via.placeholder.com/300.png"
  />,
  document.getElementById("app")
);
