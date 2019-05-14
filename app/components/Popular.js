import React, { Component } from "react";

export default class Popular extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectLanguage: "All"
    };
    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(lang) {
    this.setState(function() {
      return { selectLanguage: lang };
    });
  }

  render() {
    var languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];
    return (
      <ul className="languages">
        {languages.map(function(lang) {
          return (
            <li
              style={
                lang === this.state.selectLanguage ? { color: "#d0021b" } : null
              }
              onClick={this.updateLanguage.bind(null, lang)}
              key={lang}
            >
              {lang}
            </li>
          );
        }, this)}
      </ul>
    );
  }
}
