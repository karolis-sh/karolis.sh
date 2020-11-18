import React from 'react';
import PropTypes from 'prop-types';
import { GatsbySeo } from 'gatsby-plugin-next-seo';

import App from '~/app';
import './index.css';

export default function SplitLayout({ first, second }) {
  return (
    <App>
      <GatsbySeo />
      <main className="Layout flex flex-col sm:flex-row">
        <div className="Layout__first bg-teal-500 flex flex-col justify-center items-center p-4 sm:items-end sm:px-8 sm:py-0">
          {first}
        </div>
        <div className="Layout__second flex-1 flex flex-col justify-center sm:items-start p-4 sm:px-8 sm:py-0">
          {second}
        </div>
      </main>
    </App>
  );
}

SplitLayout.propTypes = {
  first: PropTypes.node,
  second: PropTypes.node,
};
