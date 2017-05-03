import React from 'react';

import './stylesheets/volume-controls.scss';

const VolumeControls = () => (
  <div id="VolumeControls">
    <div className="volume">
      <span className="lnr lnr-volume-medium" />
    </div>
    <div className="volume-line">
      <div className="bar" />
    </div>
  </div>
);

export default VolumeControls;
