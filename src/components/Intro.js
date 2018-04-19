import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Wrapper = styled.div`
  background: ${props => props.theme.colors.secondary};
  padding: 4em 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    padding: 4em 2em;
    min-height: 100vh;
  }
`;

const IntroImg = styled.div`
  width: 25%;
  margin: 0 0 0 -1em;
  z-index: 0;
  opacity: .25;
  display: none;
`;

const Info = styled.div`
  max-width: 750px;
`;

const Heading = styled.h3`
  font-family: 'PT Serif', serif;
  font-size: 1.75em;
  font-weight: bold;
  line-height: 1.4;
  margin: 0 0 2rem 0;
  position: relative;
`;

const Text = styled.div`
  position: relative;
  p {
    font-size: 1.25em;
    line-height: 1.5;
    margin: 0 0 2rem 0;
    &:last-child {
      margin: 0;
    }
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
  }
`;

const Intro = (props) => {
  return (

    <Wrapper>

      <IntroImg><Img sizes={props.image.sizes} alt={props.image.title} title={props.image.title} /></IntroImg>

      <Info>
        <Heading>{props.heading}</Heading>
        <Text dangerouslySetInnerHTML={{ __html: props.text.childMarkdownRemark.html }}/>
      </Info>

    </Wrapper>
  )
}

export default Intro
