import React, { Component, PureComponent } from 'react';
import './App.css';
import {DefaultApi} from 'nodeconf-api';

// ---

const TWITTER_ICON_URL = 'https://pbs.twimg.com/profile_images/1013798240683266048/zRim1x6M_400x400.jpg';
const GITHUB_ICON = 'https://slack-files2.s3-us-west-2.amazonaws.com/avatars/2017-12-19/288981919427_f45f04edd92902a96859_512.png';

// ---

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
    return (
      <div className='loading'>
        Loading {entity}...
      </div>
    );
  }
}

class SpeakersList extends PureComponent {
  makeSpeaker(speaker, number) {
    return (
      <div className='speaker' key={'speaker-' + number}>
        <div>
          <span className='speaker-name'>{speaker.name}</span>
          <a href={'https://twitter.com/' + speaker.twitterAccount}>
            <img className='social-icon' src={TWITTER_ICON_URL} alt='twitter'/>
          </a>
          <a href={'https://github.com/' + speaker.githubAccount.replace('@', '')}>
            <img className='social-icon' src={GITHUB_ICON} alt='github'/>
          </a>
        </div>
        <img src={speaker.imageUrl} alt='speaker profile pic'/>
      </div>
    );
  }

  render() {
    const {speakers} = this.props;

    return (
      <div className='speakers-list'>
        <div className='speakers-header'>
          Speakers
        </div>
        <div>
          { speakers.map(this.makeSpeaker) }
        </div>
      </div>
    );
  }
}

export default App;
