import React from 'react';

import './stylesheets/song-data.scss';

const SongData = ({ meta }) => (
  <div id="SongData">
    <div className="picture">
      <img src={meta.picture} role="presentation" />
    </div>
    <div className="meta-info">
      <strong className="title" title={meta.title}>{meta.title}</strong>
      <span className="author">{meta.author}</span>
    </div>
  </div>
);

export default SongData;
