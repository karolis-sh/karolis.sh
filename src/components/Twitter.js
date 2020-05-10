import React from 'react';
import PropTypes from 'prop-types';

import { Twitter as SVG } from './svgs';

export default function Twitter({ className }) {
  return (
    <a
      className={className}
      href="https://twitter.com/karolis_sh"
      rel="noopener noreferrer"
      target="_blank"
      title="Twitter profile"
    >
      <SVG />
    </a>
  );
}

Twitter.propTypes = {
  className: PropTypes.string,
};
