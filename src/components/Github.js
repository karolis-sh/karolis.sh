import React from 'react';
import PropTypes from 'prop-types';

import { Github as SVG } from './svgs';

export default function Github({ className }) {
  return (
    <a
      className={className}
      href="https://github.com/karolis-sh"
      rel="noopener noreferrer"
      target="_blank"
      title="GitHub profile"
    >
      <SVG />
    </a>
  );
}

Github.propTypes = {
  className: PropTypes.string,
};
