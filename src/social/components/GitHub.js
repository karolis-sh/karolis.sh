import React from 'react';
import PropTypes from 'prop-types';

import { SVG } from '~/assets';

export default function GitHub({ className }) {
  return (
    <a
      className={className}
      href="https://github.com/karolis-sh"
      rel="noopener noreferrer"
      target="_blank"
      title="GitHub profile"
    >
      <SVG.Github />
    </a>
  );
}

GitHub.propTypes = {
  className: PropTypes.string,
};
