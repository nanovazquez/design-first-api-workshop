import React, { Component, PureComponent } from 'react';
// import logo from './logo.svg';
import './App.css';

import {DefaultApi} from 'nodeconf-api';

const api = new DefaultApi();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      speakers: null
    };
  }

  componentDidMount() {
    api.editionsEditionIdSpeakersGet(18)
      .then(speakers => this.setState({speakers}))
    ;
  }

  render() {
    const speakers = this.state.speakers;

    if (!speakers) {
      return <Loading entity='speakers' />;
    }

    return <SpeakersList speakers={speakers} />;
  }
}

class Loading extends PureComponent {
  render() {
    const entity = this.props.entity;
    return <div>Loading {entity}...</div>;
  }
}

class SpeakersList extends PureComponent {
  makeSpeaker(speaker) {
    return (
      <div>
        { speaker.name }
      </div>
    );
  }

  render() {
    const {speakers} = this.props;

    return (
      <div>
        { this.makeSpeaker(speakers[0]) }
        {/* { ...speakers.map(this.makeSpeaker) } */}
      </div>
    );
  }
}

export default App;
