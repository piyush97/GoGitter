import React from "react";
import PropTypes from "prop-types";
import queryString from "query-string";
import api from "../utils/api";
import { Link } from "react-router-dom";
import PlayerPreview from "./PlayerPreview";
import Loading from "./Loading";

function Profile(props) {
  var info = props.info;

  return (
    <PlayerPreview username={info.login} avatar={info.avatar_url}>
      {" "}
      <ul className="space-list-items">
        {info.name && <li>{info.name}</li>}
        {info.location && <li>{info.location}</li>}
        {info.company && <li>{info.company}</li>}
        <li>Followers: {info.followers}</li>
        <li>Following: {info.following}</li>
        <li>Public Repos: {info.public_repos}</li>
        {info.blog && (
          <li>
            <a href={info.blog}>{info.blog}</a>
          </li>
        )}
      </ul>
    </PlayerPreview>
  );
}

Profile.propTypes = {
  info: PropTypes.object.isRequired
};

function Player(props) {
  return (
    <div>
      <h1 className="header">{props.label}</h1>
      <h3 style={{ textAlign: "center" }}>Score: {props.score}</h3>
      <Profile info={props.profile} />
    </div>
  );
}

Player.propTypes = {
  label: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  profile: PropTypes.object.isRequired
};

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

    api.battle([players.playerOneName, players.playerTwoName]).then(
      function(players) {
        if (players === null) {
          return this.setState(function() {
            return {
              error:
                "Looks like there was an error. Check that both users exist on Github.",
              loading: false
            };
          });
        }

        this.setState(function() {
          return {
            error: null,
            winner: players[0],
            loser: players[1],
            loading: false
          };
        });
      }.bind(this)
    );
  }

  render() {
    var error = this.state.error;
    var winner = this.state.winner;
    var loser = this.state.loser;
    var loading = this.state.loading;
    var players = queryString.parse(this.props.location.search);

    if (loading === true) {
      return <Loading text="Wait Madi❗" speed={200} />;
    }

    if (error) {
      return (
        <div>
          <p>{error}</p>
          <Link to="/battle">Reset</Link>
        </div>
      );
    }
    if (players.playerOneName === players.playerTwoName) {
      return (
        <div className="row">
          <Player
            label="We know the truth"
            score={winner.score}
            profile={winner.profile}
          />
        </div>
      );
    } else {
      return (
        <div>
          <div className="row">
            <Player
              label="Winner"
              score={winner.score}
              profile={winner.profile}
            />
            <Player label="Loser" score={loser.score} profile={loser.profile} />
          </div>
          <Link to="/battle">
            <button className="button"> Again🔥</button>
          </Link>
        </div>
      );
    }
  }
}

export default Results;
