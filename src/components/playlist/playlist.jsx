import React from 'react';

import Language from '../language/language';
import SongItem from './song-item';

import songList from '../../data/playlist';

import './stylesheets/playlist.scss';

const Playlist = ({ songs }) => (
  <div id="Playlist">
    <div className="header">
      <div className="title">
        <Language resource="PLAYLIST.TITLE" />
      </div>
      <div className="artist">
        <Language resource="PLAYLIST.ARTIST" />
      </div>
      <div className="album">
        <Language resource="PLAYLIST.ALBUM" />
      </div>
      <div className="released">
        <Language resource="PLAYLIST.RELEASED" />
      </div>
      <div className="duration">
        <Language resource="PLAYLIST.DURATION" />
      </div>
    </div>
    <div className="songs-list">
      {songList.map((song, i) => <SongItem key={i} meta={song} />)}
    </div>
  </div>
);

export default Playlist;
