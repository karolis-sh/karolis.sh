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
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta httpEquiv='Cache-control' content='public' />

        <link rel='shortcut icon' href='/favicon.ico' />
        <link rel='apple-touch-icon' sizes='57x57' href='/apple-icon-57x57.png' />
        <link rel='apple-touch-icon' sizes='60x60' href='/apple-icon-60x60.png' />
        <link rel='apple-touch-icon' sizes='72x72' href='/apple-icon-72x72.png' />
        <link rel='apple-touch-icon' sizes='76x76' href='/apple-icon-76x76.png' />
        <link rel='apple-touch-icon' sizes='114x114' href='/apple-icon-114x114.png' />
        <link rel='apple-touch-icon' sizes='120x120' href='/apple-icon-120x120.png' />
        <link rel='apple-touch-icon' sizes='144x144' href='/apple-icon-144x144.png' />
        <link rel='apple-touch-icon' sizes='152x152' href='/apple-icon-152x152.png' />
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-icon-180x180.png' />
        <link rel='icon' type='image/png' sizes='192x192' href='/android-icon-192x192.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='96x96' href='/favicon-96x96.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='manifest' href='/manifest.json' />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta name='msapplication-TileImage' content='/ms-icon-144x144.png' />
        <meta name='theme-color' content='#ffffff' />

        <title>Karolis Šarapnickis</title>
        <meta name='description' content='My personal page - who I am, my resume and social links.' />

        <link rel='alternate' href='https://kode.lt/' hrefLang='en-us' />

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
