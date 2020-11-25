import React from 'react';
import PropTypes from 'prop-types';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import { SVG } from '~/assets';

export default function GitHub({ className }) {
  return (
    <OutboundLink
      className={className}
      href="https://github.com/karolis-sh"
      rel="noopener noreferrer"
      target="_blank"
      title="GitHub profile"
    >
      <SVG.Github />
    </OutboundLink>
  );
}

GitHub.propTypes = {
  className: PropTypes.string,
};
