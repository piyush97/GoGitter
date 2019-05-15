import React from "react";
import Popular from "./Popular";
import ReactRouter from "react-router-dom";
const Router = ReactRouter.BrowserRouter;
const Router = ReactRouter.Route;

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Popular />
      </div>
    );
  }
}
