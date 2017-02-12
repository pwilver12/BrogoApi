/** App component */
import React, { Component } from 'react';

import Homepage from './homepage';
import GameDetails from './gameDetails';
import TeamDetails from './teamDetails';
import Standings from './standings';

import { Router, Route, hashHistory } from 'react-router';

export default class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Homepage} />
        <Route path="/games" component={GameDetails} />
        <Route path="/teams" component={TeamDetails} />
        <Route path="/overview" component={Standings} />
      </Router>
    );
  }
}
