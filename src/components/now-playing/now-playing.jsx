import React from 'react';

import SongData from './song-data';
import PlayControls from './play-controls';
import VolumeControls from './volume-controls';

import Picture from '../../data/images/divide.jpg';

import './stylesheets/now-playing.scss';

const NowPlaying = () => (
  <div id="NowPlaying">
    <div className="content">
      <SongData
        meta={{
          title: 'Shape of you - Acoustic Version',
          author: 'Ed Sheeran',
          picture: Picture
        }}
      />
      <PlayControls />
      <VolumeControls />
    </div>
  </div>
);

export default NowPlaying;
