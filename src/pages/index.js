import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Container from  '../components/Container'
import Hero from  '../components/Hero'

const IndexPage = ({data}) =>  {

  const {
    title,
    id,
    cover,
  } = data.contentfulSection;

  return (
    <div>

      <Hero
        image={cover}
        title="test"
        height="100vh"
      />

      <Container>







      </Container>
    </div>
  )
}

export const query = graphql`
  query Index {
    contentfulPage {
      title
  
  }
`


export default IndexPage
