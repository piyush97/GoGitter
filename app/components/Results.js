import React from "react";
import queryString from "query-string";
import api from "../utils/api";

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      winner: null,
      loser: null,
      error: null,
      loading: true
    };
  }
  componentDidMount() {
    var players = queryString.parse(this.props.location.search);
    api
      .battle([players.playerOneName, players.playerTwoName])
      .then(function(results) {
        console.log(results);
      });
  }

  render() {
    return <div>Results!</div>;
  }
}

export default Results;
