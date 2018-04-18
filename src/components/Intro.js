import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Wrapper = styled.div`
  background: #3E3F3A;
  position: relative;
  padding: 4em 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1em solid white;
  color: white;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    border: 1.5em solid white;
    padding: 4em 2em;
    min-height: 100vh;
  }
`;

const IntroImg = styled.div`
  position: absolute;
  top: 4em;
  width: 10%;
  margin: 0 0 0 -3em;
  opacity: .5;
  transform: rotate(20deg);
`;

const Heading = styled.h3`
  font-family: 'PT Serif', serif;
  font-size: 1.75em;
  font-weight: bold;
  line-height: 1.4;
  margin: 0 0 2rem 0;
  max-width: 750px;
  position: relative;
`;

const Text = styled.div`
  margin: 0 auto;
  max-width: 750px;
  z-index: 99;
  position: relative;
  p {
    font-size: 1.25em;
    line-height: 1.5;
    margin: 0 0 2rem 0;
    &:last-child {
      margin: 0 0 0 0;
    }
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    p {
      margin: 0 0 2rem 3rem;
      &:last-child {
        margin: 0 0 0 3rem;
      }
    }
  }
`;

const Intro = (props) => {
  return (
    <Wrapper>
      <div>
        <IntroImg><Img sizes={props.image.sizes} alt={props.image.title} title={props.image.title} /></IntroImg>
        <Heading>{props.heading}</Heading>
        <Text dangerouslySetInnerHTML={{ __html: props.text.childMarkdownRemark.html }}/>
      </div>
    </Wrapper>
  )
}

export default Intro
