import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import '../style';
import data from '../data';
import imgSmall from '../style/img/milky-way-small.jpg';

function Body({ children }) {
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />

        <title>{data.metaTitle}</title>
        <meta name="description" content={data.metaDescription} />
        <link rel="alternate" href="https://karolis.sh/" hrefLang="en-us" />

        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-icon-180x180.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <meta name="msapplication-TileColor" content="#000" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#000" />

        <meta property="og:url" content="https://karolis.sh/" />
        <meta property="og:title" content={data.metaTitle} />
        <meta property="og:description" content={data.metaDescription} />
        <meta property="og:image" content={`https://karolis.sh${imgSmall}`} />
        <meta
          property="og:image:url"
          content={`https://karolis.sh${imgSmall}`}
        />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="400" />
        {process.env.GATSBY_ENV === 'test' && (
          <meta name="robots" content="noindex" />
        )}

        <meta
          name="google-site-verification"
          content="BVDwAzvOMXmHaSZhaNF4VAAncsb2ylb9I6xYAlIjh7c"
        />
      </Helmet>
      {children()}
    </div>
  );
}

Body.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Body;
