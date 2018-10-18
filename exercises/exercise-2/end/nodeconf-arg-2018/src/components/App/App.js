import React from "react";
import { Loading, Speakers } from "../";
import nodeconfService from "../../nodeconfService";
import "./App.css";

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { speakers: undefined };
  }

  componentDidMount() {
    return nodeconfService.getSpeakers().then(speakers => this.setState({ speakers }));
  }

  renderHeader() {
    return (
      <>
        <p>
          <a href="https://goo.gl/maps/EnygTg2SvyD2" target="_black" rel="noopener" className="app-header-location">
            ciudad cultural konex
          </a>
        </p>
        <h1 className="app-header-logo">
          <img src="https://2018.nodeconf.com.ar/assets/images/logo.svg" alt="nodeconf argentina" />
        </h1>
        <p className="app-header-date">OCTOBER 18th-20th, 2018</p>
      </>
    );
  }

  render() {
    const { speakers } = this.state;
    return (
      <div className="app">
        {this.renderHeader()}
        {speakers ? <Speakers speakers={speakers} /> : <Loading text="Loading speakers..." />}
      </div>
    );
  }
}
