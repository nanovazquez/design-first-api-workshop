import React from "react";
import "./Speakers.css";

const Speaker = ({ name }) => (
  <div className="speaker">
    <span className="name">{name}</span>
  </div>
);

export default class Speakers extends React.PureComponent {
  render() {
    const { speakers = [] } = this.props;

    return (
      <div className="speakers-list">
        {speakers.map(item => (
          <Speaker speaker={item} />
        ))}
      </div>
    );
  }
}
