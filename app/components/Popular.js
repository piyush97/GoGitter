import React, { Component } from "react";
import api from "../utils/api";
import propTypes from "prop-types";
export default class Popular extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: "All",
      repos: null
    };
    this.updateLanguage = this.updateLanguage.bind(this);
  }

  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage);
  }

  updateLanguage(lang) {
    this.setState(function() {
      return { selectedLanguage: lang, repos: null };
    });
    api.fetchPopularRepos(lang).then(
      function(repos) {
        this.setState({ repos: repos });
      }.bind(this)
    );
  }

  render() {
    return (
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}
        />
        {!this.state.repos ? "" : <RepoGrid repos={this.state.repos} />}
      </div>
    );
  }
}

function RepoGrid(props) {
  return (
    <ul className="popular-list">
      {props.repos.map(function(repo, index) {
        return (
          <ul key={repo.name} className="popular-item">
            <div className="popular-rank">#{index + 1}</div>
            <ul className="space-list-items" />
            <li>
              <img
                className="avatar"
                src={repo.owner.avatar_url}
                alt={"Avatar for " + repo.owner.login}
              />
            </li>
            <li>
              <a href={repo.html_url}>{repo.name} 📘</a>
            </li>
            <li>@{repo.owner.login} 👨🏻‍💻</li>
            <li>{repo.stargazers_count} ⭐</li>
          </ul>
        );
      }, this)}
    </ul>
  );
}

RepoGrid.propTypes = {
  repos: propTypes.array.isRequired
};

function SelectLanguage(props) {
  var languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];

  return (
    <ul className="languages">
      {languages.map(lang => {
        return (
          <li
            style={
              lang === props.selectedLanguage ? { color: "#d0021b" } : null
            }
            onClick={props.onSelect.bind(null, lang)}
            key={lang}
          >
            {lang}
          </li>
        );
      })}
    </ul>
  );
}
