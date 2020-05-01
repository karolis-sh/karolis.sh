const URL = 'https://karolis.sh/';

module.exports = {
  siteMetadata: {
    siteUrl: URL,
  },
  plugins: [
    process.env.NODE_ENV === 'production' && 'gatsby-plugin-preact',
    'gatsby-plugin-favicon',
    'gatsby-plugin-postcss',

    {
      resolve: 'gatsby-plugin-next-seo',
      options: {
        language: 'en',
        openGraph: {
          type: 'website',
          locale: 'en_US',
          url: URL,
          title: 'Karolis Šarapnickis',
          description: 'I build neat things using JavaScript.',
        },
        twitter: {
          handle: '@karolis_sh',
          cardType: 'summary_large_image',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/', disallow: ['/*.pdf'] }],
      },
    },
    'gatsby-plugin-advanced-sitemap',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-120203619-1',
        anonymize: true,
      },
    },

    {
      resolve: 'gatsby-plugin-s3',
      options: { bucketName: 'karolis.sh' },
    },
    'gatsby-plugin-remove-serviceworker',
    'gatsby-plugin-no-sourcemaps',
  ].filter(Boolean),
};
