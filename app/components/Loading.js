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
  componentDidMount() {
    let stopper = this.props.text + "...";
    this.interval = window.setInterval(
      function() {
        if (this.state.text === stopper) {
          this.setState({ text: this.props.text });
        } else {
          this.setState(function(prevState) {
            return { text: prevState.text + "." };
          });
        }
      }.bind(this),
      300
    );
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
