import React from 'react';
import PropTypes from 'prop-types';

import { SVG } from '~/assets';

export default function LinkedIn({ className }) {
  return (
    <a
      className={className}
      href="https://www.linkedin.com/in/karolis-šarapnickis/"
      rel="noopener noreferrer"
      target="_blank"
      title="LinkedIn profile"
    >
      <SVG.Linkedin />
    </a>
  );
}

LinkedIn.propTypes = {
  className: PropTypes.string,
};
