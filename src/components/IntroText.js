import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background: ${props => props.theme.colors.base};
  position: relative;
  margin: 0 auto;
  width: 100%;
  padding: 2em 1em;
  min-height: 75vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    padding: 4em 2em;
  }
`;

const Text = styled.div`
  margin: 0 auto;
  color: white;
  max-width: 750px;
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
      <Text dangerouslySetInnerHTML={{ __html: props.text.childMarkdownRemark.html }}/>
    </Wrapper>
  )
}

export default IntroText
