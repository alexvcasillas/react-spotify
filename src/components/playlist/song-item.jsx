import React from 'react';

import './stylesheets/song-item.scss';

const SongItem = ({ meta }) => (
  <div className="song-item">
    <div className="title">
      {meta.title}
    </div>
    <div className="artist">
      {meta.artist}
    </div>
    <div className="album">
      {meta.album}
    </div>
    <div className="released">
      {meta.released}
    </div>
    <div className="duration">
      {meta.duration}
    </div>
  </div>
);

export default SongItem;
