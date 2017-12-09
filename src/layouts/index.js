import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import '../style';
import imgSmall from '../style/img/milky-way-small.jpg';

function Body({ children }) {
  return (
    <div>
      <Helmet>
        <html lang='en' />
        <meta httpEquiv='Cache-control' content='public' />
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />

        <title>Karolis Šarapnickis</title>
        <meta name='description' content='My personal page - who I am, my resume and social links.' />
        <link rel='alternate' href='https://kode.lt/' hrefLang='en-us' />

        <link rel='shortcut icon' href='/favicon.ico' />
        <link rel='apple-touch-icon' href='/apple-icon-180x180.png' />
        <link rel='icon' type='image/png' sizes='192x192' href='/android-icon-192x192.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='96x96' href='/favicon-96x96.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <meta name='msapplication-TileColor' content='#000' />
        <meta name='msapplication-TileImage' content='/ms-icon-144x144.png' />
        <meta name='theme-color' content='#000' />

        <meta property='og:url' content='https://kode.lt/' />
        <meta property='og:title' content='Karolis Šarapnickis' />
        <meta property='og:description' content='My personal page - who I am, my resume and social links.' />
        <meta property='og:image' content={`https://kode.lt${imgSmall}`} />
        <meta property='og:image:url' content={`https://kode.lt${imgSmall}`} />
        <meta property='og:image:type' content='image/jpeg' />
        <meta property='og:image:width' content='600' />
        <meta property='og:image:height' content='400' />

        <meta name='google-site-verification' content='bh9kyOfmJfPsonP1Rf_UiKiAvzlnw6Jao5CUEs28NdA' />
      </Helmet>
      {children()}
    </div>
  );
}

Body.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Body;
