import React from "react";
import Popular from "./Popular";
var ReactRouter = require("react-router-dom");
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
import Home from "./Home";
import Nav from "./Nav";
import Battle from "./Battle";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Nav />
          <Route exact path="/" component={Home} />
          <Route path="/popular" component={Popular} />
          <Route path="/battle" component={Battle} />
          <Route
            render={function() {
              return <p>404...</p>;
            }}
          />
        </div>
      </Router>
    );
  }
}
