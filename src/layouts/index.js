import React from 'react'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import favicon from '../images/favicon.png'
import theme from '../styles/theme'
import '../styles/global'

const TemplateWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <div>
      <Helmet>
        <title>Workshop In The Woods</title>
        <link rel="icon" href={favicon} />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="A photography workshop in Lake Tahoe"
        />
        <meta property="og:title" content="Workshop In The Woods" />
        <meta
          property="og:description"
          content="A photography workshop in Lake Tahoe"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Workshop In The Woods" />
        <meta
          property="og:url"
          content="https://www.workshop-in-the-woods.com/"
        />
        <link
          href="https://fonts.googleapis.com/css?family=PT+Serif:400,700|Source+Sans+Pro:400,600"
          rel="stylesheet"
        />
      </Helmet>
      {children()}
    </div>
  </ThemeProvider>
)

export default TemplateWrapper
