/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config = require('./config');

module.exports = {
  siteMetadata: {
    siteUrl: config.siteUrl,
    title: config.siteTitle,
    description: config.siteDescription,
    social: {
      github: config.githubHandle,
      twitter: config.twitterHandle,
      linkedin: config.linkedinHandle,
    },
  },
  plugins: [
    process.env.NODE_ENV === 'production' && 'gatsby-plugin-preact',
    'gatsby-plugin-favicon',
    'gatsby-plugin-postcss',

    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/BlogLayout'),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: { className: 'header-link' },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 720,
              withWebp: true,
              linkImagesToOriginal: false,
              wrapperStyle: 'margin-top: 2.5rem; margin-bottom: 2.5rem',
            },
          },
        ],
        remarkPlugins: [require('remark-external-links')],
      },
    },
    'gatsby-plugin-catch-links',
    'gatsby-plugin-force-trailing-slashes',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages/blog`,
        name: 'blog',
      },
    },
    'gatsby-remark-images',

    {
      resolve: 'gatsby-plugin-next-seo',
      options: {
        language: 'en',
        title: config.siteTitle,
        titleTemplate: config.siteTitleTemplate,
        description: config.siteDescription,
        openGraph: {
          type: 'website',
          locale: 'en_US',
          url: config.siteUrl,
          title: config.siteTitle,
          description: config.siteDescription,
          site_name: config.siteName,
        },
        twitter: {
          handle: `@${config.twitterHandle}`,
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
        trackingId: config.googleAnalyticsID,
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
