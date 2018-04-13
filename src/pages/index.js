import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Container from  '../components/Container'
import Modules from  '../components/Modules'

const Title = styled.h1`
  font-size: 1.5em;
   margin: 0 0 .5rem 0;
  font-weight: bold
`;

const Section = styled.section`
  background: #EEE;
  padding: 1em;
  margin: 0 0 1rem 0;
`;

const IndexPage = ({data}) =>  {

  const sections = data.allContentfulSection.edges;

  return (
    <div>
      <Container>
        {sections.map(({node: section}) => (
          <Section key={section.id} id={section.slug}>
            <Title>{section.title}</Title>
            <Modules modules={section.modules} />
          </Section>
        ))}
      </Container>
    </div>
  )
}

export const query = graphql`
query Index {
  allContentfulSection {
    edges {
      node {
        id
        title
        slug
        modules {
          __typename
          ... on ContentfulHero {
            title
            subtitle
            cover {
              title
              sizes(maxWidth: 1800) {
                ...GatsbyContentfulSizes_withWebp_noBase64
              }
            }
            links {
              title
              id
              slug
            }
          }
          ... on ContentfulGallery {
            title
          }
        }
      }
    }
  }
}
`


export default IndexPage
