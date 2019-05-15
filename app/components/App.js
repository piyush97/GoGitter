import React from "react";
import Popular from "./Popular";
var ReactRouter = require("react-router-dom");
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
import Home from "./Home";
import Nav from "./Nav";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Nav />
          <Route path="/popular" component={Popular} />
          <Route path="/" component={Home} />
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
