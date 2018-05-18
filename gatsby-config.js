require('dotenv').config()

// If the contentfulConfig can't be found assume the site is being built via Netlify with production environment variables
try {
  var contentfulConfig = require('./.contentful')
} catch (e) {
  // eslint-disable-next-line
  var contentfulConfig = {
    production: {
      spaceId: process.env.SPACE_ID,
      accessToken: process.env.DELIVERY_API_TOKEN,
    },
  }
}

module.exports = {
  plugins: [
    'gatsby-plugin-react-next',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Workshop In The Woods',
        short_name: 'Workshop',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#fffff',
        display: 'minimal-ui',
        icon: 'logos/logo-512.png', // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.workshop-in-the-woods.com`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS,
        anonymize: false,
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#4a4a4a',
        showSpinner: false,
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options:
        process.env.NODE_ENV === 'development'
          ? contentfulConfig.development
          : contentfulConfig.production,
    },
    'gatsby-plugin-netlify',
  ],
}
