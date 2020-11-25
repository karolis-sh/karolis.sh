import React from 'react';
import PropTypes from 'prop-types';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import { SVG } from '~/assets';

export default function Twitter({ className }) {
  return (
    <OutboundLink
      className={className}
      href="https://twitter.com/karolis_sh"
      rel="noopener noreferrer"
      target="_blank"
      title="Twitter profile"
    >
      <SVG.Twitter />
    </OutboundLink>
  );
}

Twitter.propTypes = {
  className: PropTypes.string,
};
