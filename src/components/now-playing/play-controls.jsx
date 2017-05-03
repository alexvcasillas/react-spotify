import React from 'react';

import './stylesheets/play-controls.scss';

const PlayControls = () => (
  <div id="PlayControls">
    <div className="track-controls">
      <div className="dislike-song">
        <span className="lnr lnr-thumbs-down" />
      </div>
      <div className="previous">
        <span className="lnr lnr-chevron-left-circle" />
      </div>
      <div className="play-pause">
        <span className="lnr lnr-menu" />
      </div>
      <div className="next">
        <span className="lnr lnr-chevron-right-circle" />
      </div>
      <div className="like-song">
        <span className="lnr lnr-thumbs-up" />
      </div>
    </div>
    <div className="track-progress">
      <span className="time current">03:12</span>
      <div className="progress">
        <div className="bar" />
      </div>
      <span className="time total">04:20</span>
    </div>
  </div>
);

export default PlayControls;
