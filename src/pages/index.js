import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Container from  '../components/Container'

const IndexPage = ({data}) =>  {

  const projects = data.allContentfulProject.edges;
  const about = data.contentfulAbout;

  return (
    <div>
      <Helmet>
        <meta property="og:image" content={about.cover.sizes.src} />
      </Helmet>
      <Container>
        <Work projects={projects}/>
      </Container>
      <Footer/>
    </div>
  )
}

export const query = graphql`
  query HomeQuery {

  }
`

export default IndexPage
