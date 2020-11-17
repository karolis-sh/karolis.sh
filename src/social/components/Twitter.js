import React from 'react';
import PropTypes from 'prop-types';

import { SVG } from '~/assets';

export default function Twitter({ className }) {
  return (
    <a
      className={className}
      href="https://twitter.com/karolis_sh"
      rel="noopener noreferrer"
      target="_blank"
      title="Twitter profile"
    >
      <SVG.Twitter />
    </a>
  );
}

Twitter.propTypes = {
  className: PropTypes.string,
};
