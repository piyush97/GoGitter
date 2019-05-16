import React, { Component } from "react";
import PropTypes from "prop-types";

const styles = {
  content: {
    textAlign: "center",
    fontSize: "35px"
  }
};

export default class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text
    };
  }

  render() {
    return <p style={styles.content}>{this.state.text}</p>;
  }
}
Loading.propTypes = {
  loading: PropTypes.string.isRequired
};
Loading.defaultProps = {
  text: "Loading"
};
