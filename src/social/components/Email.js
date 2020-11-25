import React from 'react';
import PropTypes from 'prop-types';

import { SVG } from '~/assets';

export default function Email({ className }) {
  return (
    <a className={className} href="mailto:pastas.k@gmail.com" title="Personal email">
      <SVG.Email />
    </a>
  );
}

Email.propTypes = {
  className: PropTypes.string,
};
