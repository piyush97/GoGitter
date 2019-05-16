import React from "react";
import queryString from "query-string";
import api from "../utils/api";
import { Link } from "react-router-dom";
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
      })
      .then(
        function(results) {
          if (results === null) {
            return this.setState({
              error:
                "Looks like there's an error. Check that both users exists on GitHub 😄",
              loading: false
            });
          }
          this.setState({
            error: null,
            winner: results[0],
            loser: results[1],
            loading: false
          });
        }.bind(this)
      );
  }

  render() {
    var error = this.state.error;
    var winner = this.state.winner;
    var loser = this.state.loser;
    var loading = this.state.loading;

    if (loading === true) {
      return <p> Loading </p>;
    }

    if (error) {
      return (
        <div>
          <p>{error}</p>
          <Link to="/battle">Reset</Link>
        </div>
      );
    }

    return <div>{JSON.stringify(this.state)}</div>;
  }
}

export default Results;
