import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background: ${props => props.theme.colors.base};
  position: relative;
  margin: 0 auto;
  width: 100%;
  padding: 4em 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    padding: 4em 2em;
    min-height: 100vh;
  }
`;

const Title = styled.h2`
  font-size: 3em;
  margin: 0 0 2rem 0;
  color: white;
  font-weight: bold;
  max-width: 1000px;
  display: none;
`;

const Text = styled.div`
  margin: 0 auto;
  color: white;
  max-width: 750px;
  font-family: 'PT Serif', serif;
  z-index: 99;
  p {
    font-size: 1.25em;
    line-height: 1.5;
    margin: 0 0 2rem 0;
    &:last-child {
      margin: 0;
    }
  }
`;

const IntroText = (props) => {
  return (
    <Wrapper>
      <div>
        <Title>{props.title}</Title>
        <Text dangerouslySetInnerHTML={{ __html: props.text.childMarkdownRemark.html }}/>
      </div>
    </Wrapper>
  )
}

export default IntroText
