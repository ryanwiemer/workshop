let contentfulConfig

try {
  contentfulConfig = require('./.contentful')
} catch (e) {
  contentfulConfig = {
    production: {
      spaceId: process.env.SPACE_ID,
      accessToken: process.env.ACCESS_TOKEN,
    },
  }
} finally {
  const { spaceId, accessToken } = contentfulConfig.production
  if (!spaceId || !accessToken) {
    throw new Error('Contentful space ID and access token need to be provided.')
  }
}

module.exports = {
  siteMetadata: {
    title: 'Workshop In The Woods',
    siteUrl: 'https://www.workshop-in-the-woods.com',
    description: 'A photography workshop in beautiful Lake Tahoe',
  },
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
        background_color: '#F7F0EB',
        theme_color: '#FFFFFF',
        display: 'minimal-ui',
        icon: 'static/logos/logo-512.png', // This path is relative to the root of the site.
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
