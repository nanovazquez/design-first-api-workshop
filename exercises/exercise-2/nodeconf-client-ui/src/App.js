import React, { Component, PureComponent } from 'react';
import './App.css';

/* Import the client SDK */
import {DefaultApi} from 'nodeconf-api';

const TWITTER_ICON = 'https://pbs.twimg.com/profile_images/1013798240683266048/zRim1x6M_400x400.jpg';
const GITHUB_ICON = 'https://slack-files2.s3-us-west-2.amazonaws.com/avatars/2017-12-19/288981919427_f45f04edd92902a96859_512.png';
const NODECONF_ICON = 'https://scontent.faep5-1.fna.fbcdn.net/v/t1.0-9/32337176_1971167233213188_8410774291854917632_n.png?_nc_cat=111&oh=b5f8b9ca353ba0d99b61ded0a3108fc8&oe=5C509FE1';


/* Instantiate the SDK */
const api = new DefaultApi();


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      speakers: null
    };
  }

  componentDidMount() {
    /* Use the client SDK to call the Backend */
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
            <img className='social-icon' src={TWITTER_ICON} alt='twitter'/>
          </a>

          <a href={'https://github.com/' + speaker.githubAccount.replace('@', '')}>
            <img className='social-icon' src={GITHUB_ICON} alt='github'/>
          </a>
        </div>
        <img className='speaker-pic' src={speaker.imageUrl} alt='speaker profile pic'/>
      </div>
    );
  }

  render() {
    const {speakers} = this.props;

    return (
      <div className='speakers-list'>
        <img className='nodeconf-icon' src={NODECONF_ICON} alt='nodeconf icon'/>
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
