import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import Language from '../language/language';
import SideTitle from './sidetitle';
import SideElement from './side-element';
import Separator from './separator';

// Import demo data
import playlists from '../../data/playlists';

import './stylesheets/sidenav.scss';

const SideNav = () => (
  <div id="SideNav">
    <Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={200}>
      <div className="content">
        <SideTitle>
          <Language resource="SIDENAV.EXPLORE_CONTENT" />
        </SideTitle>
        <SideElement>
          <Language resource="SIDENAV.DISCOVER" />
        </SideElement>
        <Separator />
        <SideTitle>
          <Language resource="SIDENAV.YOUR_MUSIC" />
        </SideTitle>
        <SideElement>
          <Language resource="SIDENAV.FAVORITES" />
        </SideElement>
        <SideElement>
          <Language resource="SIDENAV.LOCAL_FILES" />
        </SideElement>
        <Separator />
        <SideTitle>
          <Language resource="SIDENAV.PLAYLISTS" />
        </SideTitle>
        {playlists.map((playlist, i) => (
          <SideElement title={playlist.title} key={i}>
            {playlist.title}
          </SideElement>
        ))}
      </div>
    </Scrollbars>
  </div>
);

export default SideNav;
