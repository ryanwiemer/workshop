import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Modules from '../components/Modules'
import Register from '../components/Register'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Container from '../components/Container'
import { Element, scrollSpy, Events } from 'react-scroll'

const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-size: 2em;
  padding: 4rem 0 4rem 0;
  z-index: 99;
  position: relative;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    font-size: 2.25em;
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    font-size: 5em;
    font-size: 5vw;
  }
`;

class IndexPage extends React.Component {

  render() {
    const sections = this.props.data.allContentfulSection.edges;
    const navigation = this.props.data.contentfulNavigation;

      return (
        <Container>

          <Nav links={navigation.links}/>

          {sections.map(({node: section}) => (
            <Element key={section.id} name={section.slug}>
              {section.heading && (<Title>{section.heading}</Title>)}
              <Modules modules={section.modules} />
            </Element>
          ))}

          <Element name="register">
            <Title>Register</Title>
            <Register/>
          </Element>

          <Footer/>
        </Container>
      )
    }
}

IndexPage.propTypes = {
  data: PropTypes.object,
}

export const query = graphql`
query Index {
  contentfulNavigation {
        title
        links {
          title
          id
          slug
        }
      }
  allContentfulSection(sort: { fields: [sortOrder], order: ASC }) {
    edges {
      node {
        id
        title
        slug
        sortOrder
        heading
        modules {
          __typename
          ... on ContentfulHero {
            title
            heading
            image {
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
          ... on ContentfulIntro {
            title
            heading
            image {
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
          }
          ... on ContentfulBiography {
            title
            name
            portfolio
            instagram
            facebook
            switch
            image {
              title
              sizes(maxWidth: 800) {
                ...GatsbyContentfulSizes_withWebp_noBase64
              }
            }
            text {
              childMarkdownRemark {
                html
              }
            }
          }
          ... on ContentfulFilmStrip {
            title
            heading
            images {
              title
              sizes(maxWidth: 400) {
                ...GatsbyContentfulSizes_withWebp_noBase64
              }
            }
          }
          ... on ContentfulBody {
            title
            text {
              childMarkdownRemark {
                html
              }
            }
          }
          ... on ContentfulAgenda {
            title
            heading1
            text1 {
              childMarkdownRemark {
                html
              }
            }
            heading2
            text2 {
              childMarkdownRemark {
                html
              }
            }
            heading3
            text3 {
              childMarkdownRemark {
                html
              }
            }
          }
          ... on ContentfulHighlight {
            title
            heading
            text {
              childMarkdownRemark {
                html
              }
            }
            image {
              title
              sizes(maxWidth: 800) {
                ...GatsbyContentfulSizes_withWebp_noBase64
              }
            }
            switch
          }
          ... on ContentfulDivider {
            title
            image {
              title
              sizes(maxWidth: 1800) {
                ...GatsbyContentfulSizes_withWebp_noBase64
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
