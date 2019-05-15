import React from "react";
import Popular from "./Popular";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Nav from "./Nav";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Nav />
          <Route path="/popular" component={Popular} />
        </div>
      </Router>
    );
  }
}
