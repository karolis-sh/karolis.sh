const rootDir = 'public';

module.exports = {
  plugins: [
    'gatsby-plugin-preact',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Varela+Round'],
      },
    },
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
  ],
};
