import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Link from 'gatsby-link'
import Reveal from 'react-reveal/Reveal'

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 2rem;
  max-width: ${props => props.theme.sizes.maxWidth};
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    margin: 0 auto 4rem;
    display: flex;
    justify-content: space-between;
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    margin: 2rem auto 4rem;
  }
`;

const Box = styled.div`
  width: 100%;
  text-align: center;
  padding: .5em;
  border-bottom: 1px solid ${props => props.theme.colors.secondary};
  border-radius: 2px;
  &:last-child {
    border: none;
  }
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: 0 1 33.333%;
    border: none;
    border-right: 1px solid ${props => props.theme.colors.secondary};
  }
  &:hover {
    svg {
      transform: scale(1.075);
      path {
        fill: ${props => props.theme.colors.highlight};
      }
    }
  }
  @media (hover: none) {
    svg {
      transform: none;
      path {
        fill: ${props => props.theme.colors.tertiary};
      }
    }
  }
`;

const Heading = styled.h3`
  font-family: 'PT Serif', serif;
  font-size: 1.25em;
  font-weight: 600;
  margin: 1rem 0;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    font-size: 1.75em;
  }
`;

const Cover = styled.div`
  margin: 0 0 1rem 0;
  svg {
    transition: .3s;
    width: 100px;
    path {
      transition: .3s;
      fill: ${props => props.theme.colors.tertiary};
    }
    @media screen and (min-width: ${props => props.theme.responsive.small}) {
      width: 50px;
    }
    @media screen and (min-width: ${props => props.theme.responsive.medium}) {
      width: 75px;
    }
  }
`;


const Subheading = styled.h4`
  font-size: 1.1em;
  line-height: 1.4;
  font-weight: 600;
  margin: 1rem 0;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    font-size: 1.25em;
  }
`;

const CTA = styled.div`
  margin: 4rem 0
  padding: 2rem;
  display: flex;
  flex-flow: column;
  text-align: center;
  p {
    line-height: 1.5;
    margin: 0 0 2rem 0;
    font-size: 1.1em;
  }
  a {
    text-decoration: none;
    transition: .3s;
    text-align: center;
    font-size: 1.1em;
    font-weight: 600;
    display: inline-block;
    margin: 0 auto;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 1em;
    border-radius: 2px;
    background: ${props => props.theme.colors.base};
    color: white;
    &:hover {
      opacity: .75;
    }
    @media (hover: none) {
      opacity: 1 !important;
    }
  }
`


const Highlight = (props) => {
  return (
    <Reveal>
      <Wrapper>
          <Box>
            <Heading>{props.heading1}</Heading>
            <Cover>
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g>
                	<path d="M10.9,6.6c2,0,3.6,1.7,3.6,3.6s-1.7,3.6-3.6,3.6s-3.6-1.7-3.6-3.6S8.9,6.6,10.9,6.6 M10.9,4.8c-3,0-5.4,2.4-5.4,5.4
                		s2.4,5.4,5.4,5.4s5.4-2.4,5.4-5.4S13.9,4.8,10.9,4.8z"/>
                	<path d="M16.3,19.2h-3.6v-1.1c1.5-0.3,2.9-1.1,3.9-2.2c1.5-1.5,2.4-3.6,2.4-5.7c0-1.9-0.6-3.6-1.8-5l0.6-0.6c0.4-0.4,0.4-0.9,0-1.3
                		s-0.9-0.4-1.3,0l-1.9,1.9l0.6,0.6c1.3,1.1,2,2.8,2,4.4s-0.7,3.3-1.9,4.4s-2.8,1.9-4.4,1.9s-3.3-0.7-4.4-1.9c-0.4-0.4-0.9-0.4-1.3,0
                		s-0.4,0.9,0,1.3c1.5,1.5,3.6,2.4,5.7,2.4v0.9H7.3c-0.5,0-0.9,0.4-0.9,0.9c0,0.5,0.4,0.9,0.9,0.9h9c0.5,0,0.9-0.4,0.9-0.9
                		S16.9,19.2,16.3,19.2z"/>
                </g>
              </svg>
            </Cover>
            <Subheading>{props.subheading1}</Subheading>
          </Box>
          <Box>
            <Heading>{props.heading2}</Heading>
            <Cover>
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M19,6.2V6c0-1.7-1.3-3-3-3s-3,1.3-3,3h-2c0-1.7-1.3-3-3-3S5,4.3,5,6v0.2C3.8,6.6,3,7.7,3,9v9c0,1.7,1.3,3,3,3h12
                	c1.7,0,3-1.3,3-3V9C21,7.7,20.2,6.6,19,6.2z M15,6c0-0.6,0.4-1,1-1c0.6,0,1,0.4,1,1v2c0,0.6-0.4,1-1,1s-1-0.4-1-1V6z M7,6
                	c0-0.6,0.4-1,1-1s1,0.4,1,1v2c0,0.6-0.4,1-1,1S7,8.6,7,8V6z M19,18c0,0.6-0.4,1-1,1H6c-0.6,0-1-0.4-1-1v-6h14V18z M19,11H5V9
                	c0-0.6,0.4-1,1-1c0,1.1,0.9,2,2,2s2-0.9,2-2h4c0,1.1,0.9,2,2,2s2-0.9,2-2c0.6,0,1,0.4,1,1V11z"/>
              </svg>
            </Cover>
            <Subheading>{props.subheading2}</Subheading>
          </Box>
          <Box>
            <Heading>{props.heading3}</Heading>
            <Cover>
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g>
                	<path d="M17.8,5.1H6.1c-1.8,0-3.2,1.4-3.2,3.2v7.5c0,1.8,1.4,3.2,3.2,3.2h11.7c1.8,0,3.2-1.4,3.2-3.2V8.2C21,6.5,19.5,5.1,17.8,5.1
                		z M18.9,15.8c0,0.6-0.4,1.1-1.1,1.1H6.2c-0.6,0-1.1-0.4-1.1-1.1v-4.2H19 M18.8,9.3H5.1V8.2c0-0.6,0.4-1.1,1.1-1.1h11.7
                		c0.6,0,1.1,0.4,1.1,1.1L18.8,9.3L18.8,9.3z"/>
                	<path d="M14.6,14.7h2.1c0.3,0,0.5-0.3,0.5-0.5s-0.2-0.5-0.5-0.5h-2.1c-0.3,0-0.5,0.3-0.5,0.5S14.3,14.7,14.6,14.7z"/>
                </g>
              </svg>
            </Cover>
            <Subheading>{props.subheading3}</Subheading>
          </Box>
      </Wrapper>

      <CTA>
        <p>Registration is limited so be sure to reserve your spot today!</p>
        <Link to="/register/">Register Now</Link>
      </CTA>

    </Reveal>
  )
}

export default Highlight
