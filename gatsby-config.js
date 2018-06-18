const rootDir = 'public';
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
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        staticFileGlobs: [
          `${rootDir}/**/*.{woff2}`,
          `${rootDir}/__static-commons-*js`,
          `${rootDir}/__static-app-*js`,
          `${rootDir}/index.html`,
          `${rootDir}/manifest.json`,
          `${rootDir}/manifest.webmanifest`,
          `${rootDir}/offline-plugin-app-shell-fallback/index.html`,
        ],
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}/sitemap.xml`,
        policy: [{ userAgent: '*', allow: '/', disallow: ['/*.pdf'] }],
      },
    },
  ],
};
