import React from 'react';
import PropTypes from 'prop-types';

import { SVG } from '~/assets';

export default function Linkedin({ className }) {
  return (
    <a className={className} href="mailto:pastas.k@gmail.com" title="Personal email">
      <SVG.Email />
    </a>
  );
}

Linkedin.propTypes = {
  className: PropTypes.string,
};
