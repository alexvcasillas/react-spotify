import React from 'react';
import DevTools from 'mobx-react-devtools';
import { Route, Switch } from 'react-router-dom';

import SideNav from '../components/sidenav/sidenav';
import NowPlaying from '../components/now-playing/now-playing';
import Playlist from '../components/playlist/playlist';

// Import Common Stylesheets
import '../stylesheets/common.scss';

const App = () => (
  <div id="app">
    <DevTools />
    <SideNav />
    <div id="MainContent">
      <Switch>
        <Route path="/" component={null} />
        <Route exact path="/playlist/:id" component={Playlist} />
        <Route path="/settings" component={null} />
        <Route path="/local-files" component={null} />
        <Route component={null} />
      </Switch>
    </div>
    <NowPlaying />
  </div>
);

export default App;
