import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Reveal from 'react-reveal/Reveal'

const Wrapper = styled.div`
  margin: 2rem auto 0;
  max-width: ${props => props.theme.sizes.maxWidth};
`;

const Border = styled.div`
  margin: 0 2rem;
  border: 1px solid ${props => props.theme.colors.tertiary};
  border-radius: 2px;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    display: flex;
    justify-content: space-between;
    flex-direction: ${props => props.switch ? 'row' : 'row-reverse'};
  }
`;

const Cover = styled.div`
  width: 100%;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    width: 50%;
  }
`;

const Details = styled.div`
  padding: 2em;
  width: 100%;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    width: 50%;
  }
`;

const Heading = styled.h3`
  font-family: 'PT Serif', serif;
  font-size: 1.25em;
  font-weight: 600;
  margin: 0 0 1rem 0;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    font-size: 1.75em;
  }
`;

const Text = styled.div`
  font-size: 1.1em;
  line-height: 1.5;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {}
`;

const Highlight = (props) => {
  return (
    <Reveal>
      <Wrapper>

        <Border switch={props.switch}>

          <Cover>
            <Img sizes={props.image.sizes} alt={props.image.title} title={props.image.title} backgroundColor={"#aaaea2"}/>
          </Cover>

          <Details>
            <Heading>{props.heading}</Heading>
            <Text dangerouslySetInnerHTML={{ __html: props.text.childMarkdownRemark.html }}/>
          </Details>

        </Border>

      </Wrapper>
    </Reveal>
  )
}

export default Highlight
