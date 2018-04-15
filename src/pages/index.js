import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Container from  '../components/Container'
import Modules from  '../components/Modules'
import SignUp from  '../components/SignUp'

const Title = styled.h1`
  font-size: 1.5em;
   margin: 0 0 .5rem 0;
  font-weight: bold
  display: none;
`;

const Section = styled.section`
  margin: 0 0 0 0;
`;

const IndexPage = ({data}) =>  {

  const sections = data.allContentfulSection.edges;

  return (
    <div>
      {sections.map(({node: section}) => (
        <Section key={section.id} className={section.slug}>
          <Title>{section.title}</Title>
          <Modules modules={section.modules} />
        </Section>
      ))}
      <Section className="sign-up">
        <Title>Sign Up</Title>

      </Section>
    </div>
  )
}

export const query = graphql`
query Index {
  allContentfulSection(sort: { fields: [sortOrder], order: ASC }) {
    edges {
      node {
        id
        title
        slug
        sortOrder
        modules {
          __typename
          ... on ContentfulHero {
            title
            cover {
              title
              sizes(maxWidth: 1800) {
                ...GatsbyContentfulSizes_withWebp_noBase64
              }
            }
            logo {
              title
              sizes(maxWidth: 1000) {
                ...GatsbyContentfulSizes_withWebp_noBase64
              }
            }
            links {
              title
              id
              slug
            }
          }
          ... on ContentfulBiography {
            title
            profileImage {
              title
              sizes(maxWidth: 1800) {
                ...GatsbyContentfulSizes_withWebp_noBase64
              }
            }
            text {
              childMarkdownRemark {
                html
              }
            }
            filmStrip {
              title
              sizes(maxWidth: 1800) {
                ...GatsbyContentfulSizes_withWebp_noBase64
              }
            }
          }
          ... on ContentfulBodyText {
            title
            text {
              childMarkdownRemark {
                html
              }
            }
          }
          ... on ContentfulIntroText {
            title
            text {
              childMarkdownRemark {
                html
              }
            }
          }
        }
      }
    }
  }
}
`


export default IndexPage
