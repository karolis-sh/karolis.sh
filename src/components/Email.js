import React from 'react';
import PropTypes from 'prop-types';

import { Email as SVG } from './svgs';

export default function Linkedin({ className }) {
  return (
    <a className={className} href="mailto:pastas.k@gmail.com" title="Personal email">
      <SVG />
    </a>
  );
}

Linkedin.propTypes = {
  className: PropTypes.string,
};
