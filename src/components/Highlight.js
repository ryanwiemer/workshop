import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Reveal from 'react-reveal/Reveal'

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 2rem;
  max-width: ${props => props.theme.sizes.maxWidth};
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    display: flex;
    justify-content: space-between;
  }
`;


const Cover = styled.div`
  svg {
    background: gray;
    path {
      fill: ${props => props.theme.colors.tertiary};
    }
  }



  @media screen and (min-width: ${props => props.theme.responsive.medium}) {}
`;

const Box = styled.div`
  width: 100%;
  text-align: center;
  padding: .5em;
  border-bottom: 1px solid ${props => props.theme.colors.secondary};
  &:last-child {
    border: none;
  }
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: 0 1 50%;
    border: none;
    border-right: 1px solid ${props => props.theme.colors.secondary};
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

const Subheading = styled.h4`
  font-size: 1.1em;
  line-height: 1.4;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    font-size: 1.25em;
  }
`;


const Highlight = (props) => {
  return (
    <Reveal>
      <Wrapper>

          <Box>
            <Heading>{props.heading1}</Heading>
            <Cover>
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24">
                <path d="M11 6c2.206 0 4 1.794 4 4s-1.794 4-4 4c-2.204 0-3.998-1.794-3.998-4s1.794-4 3.998-4M11 4c-3.314 0-5.998 2.686-5.998 6s2.684 6 5.998 6c3.312 0 6-2.688 6-6 0-3.314-2.688-6-6-6z"></path>
                <path d="M17 20h-4v-1.23c1.641-0.371 3.146-1.188 4.363-2.406 1.699-1.699 2.637-3.96 2.637-6.363 0-2.067-0.691-4.028-1.968-5.619l0.675-0.673c0.391-0.391 0.391-1.023 0.001-1.415-0.392-0.392-1.024-0.39-1.415-0.001l-2.052 2.049 0.708 0.708c1.322 1.321 2.051 3.080 2.051 4.95s-0.729 3.627-2.051 4.949-3.079 2.051-4.949 2.051-3.627-0.729-4.949-2.051c-0.391-0.391-1.023-0.391-1.414 0-0.391 0.39-0.391 1.023 0 1.414 1.699 1.699 3.959 2.637 6.363 2.637v1h-4c-0.553 0-1 0.447-1 1s0.447 1 1 1h10c0.553 0 1-0.447 1-1s-0.447-1-1-1z"></path>
              </svg>
            </Cover>
            <Subheading>{props.subheading1}</Subheading>

          </Box>

          <Box>
            <Heading>{props.heading2}</Heading>
            <Cover>
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 26">
                <path d="M17 7h-11c-1.654 0-3 1.346-3 3v7c0 1.654 1.346 3 3 3h11c1.654 0 3-1.346 3-3v-7c0-1.654-1.346-3-3-3zM18 17c0 0.552-0.448 1-1 1h-11c-0.552 0-1-0.448-1-1v-4h13v4zM18 11h-13v-1c0-0.552 0.448-1 1-1h11c0.552 0 1 0.448 1 1v1z"></path>
                <path d="M14 16h2c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-2c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5z"></path>
              </svg>
            </Cover>
            <Subheading>{props.subheading2}</Subheading>
          </Box>

      </Wrapper>
    </Reveal>
  )
}

export default Highlight
