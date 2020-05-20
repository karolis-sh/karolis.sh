import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

export default function App({ children }) {
  return <div className="antialiased text-gray-900">{children}</div>;
}

App.propTypes = {
  children: PropTypes.node.isRequired,
};
