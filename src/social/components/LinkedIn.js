import React from 'react';
import PropTypes from 'prop-types';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import { SVG } from '~/assets';

export default function LinkedIn({ className }) {
  return (
    <OutboundLink
      className={className}
      href="https://www.linkedin.com/in/karolis-šarapnickis/"
      rel="noopener noreferrer"
      target="_blank"
      title="LinkedIn profile"
    >
      <SVG.Linkedin />
    </OutboundLink>
  );
}

LinkedIn.propTypes = {
  className: PropTypes.string,
};
