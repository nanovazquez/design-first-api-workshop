import React from "react";
import "./Speakers.css";

const Speaker = ({ speaker }) => (
  <div className="speaker">
    <img className="speaker-image" src={speaker.imageUrl} alt={speaker.name} />
    <h5 className="speaker-name">{speaker.name}</h5>
    <p className="speaker-description">{speaker.description}</p>
  </div>
);

export default class Speakers extends React.PureComponent {
  render() {
    const { speakers } = this.props;
    console.log(JSON.stringify(speakers));

    return (
      <div className="speakers">
        {speakers.map(item => (
          <Speaker key={item.id} speaker={item} />
        ))}
      </div>
    );
  }
}
