import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 2rem auto;
  padding: 0 1.5rem;
  height: 100%;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    padding: 0 3rem;
  }
`;

const Text = styled.div`
  p {
    line-height: 1.6;
    margin: 0 0 2rem 0;
  }

  a {
    transition: .2s;
    &:hover {
      color: gray;
    }
  }

`;

const BodyText = (props) => {
  return (
    <Wrapper>
      <Text dangerouslySetInnerHTML={{ __html: props.text.childMarkdownRemark.html }}/>
    </Wrapper>
  )
}

export default BodyText
