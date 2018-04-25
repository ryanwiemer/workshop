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
  padding: 2em 10% 2rem;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    padding: 2em 20% 0;
  }
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
            <Subheading>{props.subheading1}</Subheading>
            <Cover>
              <Img style={{borderRadius: '50%'}} sizes={props.image1.sizes} alt={props.image1.title} title={props.image1.title} backgroundColor={"#f5efe9"}/>
            </Cover>
          </Box>

          <Box>
            <Heading>{props.heading2}</Heading>
            <Subheading>{props.subheading2}</Subheading>
            <Cover>
              <Img style={{borderRadius: '50%'}} sizes={props.image2.sizes} alt={props.image2.title} title={props.image2.title} backgroundColor={"#f5efe9"}/>
            </Cover>
          </Box>

      </Wrapper>
    </Reveal>
  )
}

export default Highlight
