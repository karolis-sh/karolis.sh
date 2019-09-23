const siteUrl = 'https://karolis.sh';

module.exports = {
  siteMetadata: {
    siteUrl,
  },
  plugins: [
    'gatsby-plugin-preact',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-120203619-1',
        anonymize: true,
      },
    },
    'gatsby-plugin-remove-serviceworker',
    'gatsby-plugin-advanced-sitemap',
    'gatsby-plugin-layout',
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [{ family: 'Varela+Round' }],
        fontDisplay: 'swap',
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/', disallow: ['/*.pdf'] }],
      },
    },
    {
      resolve: 'gatsby-plugin-s3',
      options: { bucketName: 'karolis.sh' },
    },
  ],
};
