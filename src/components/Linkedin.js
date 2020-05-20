import React from 'react';
import PropTypes from 'prop-types';

import { Linkedin as SVG } from './svgs';

export default function Linkedin({ className }) {
  return (
    <a
      className={className}
      href="https://www.linkedin.com/in/karolis-šarapnickis/"
      rel="noopener noreferrer"
      target="_blank"
      title="Linkedin profile"
    >
      <SVG />
    </a>
  );
}

Linkedin.propTypes = {
  className: PropTypes.string,
};
