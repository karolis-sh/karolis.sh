module.exports = {
  plugins: [
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
        trackingId: 'UA-97822720-1',
        anonymize: true,
      },
    },
  ],
};
