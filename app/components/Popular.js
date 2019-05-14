import React, { Component } from "react";

export default class Popular extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectLanguage: "All"
    };
  }
  render() {
    var languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];
    return (
      <ul className="languages">
        {languages.map(function(lang) {
          return <li key={lang}>{lang}</li>;
        })}
      </ul>
    );
  }
}
