import React from "react";
import "./Loading.css";

export default class Loading extends React.PureComponent {
  render() {
    const { text } = this.props;
    return (
      <div className="loading">
        <span>{text}</span>
        <div className="loader" />
      </div>
    );
  }
}
