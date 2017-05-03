import React from 'react';

import './stylesheets/side-element.scss';

const SideElement = ({ children, title }) => (
  <div title={title} className="side-element">
    {children}
  </div>
);

export default SideElement;
