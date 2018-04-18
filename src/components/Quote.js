import React from 'react'
import styled from 'styled-components'

const Text = styled.div`
  font-family: 'PT Serif', serif;
  font-size: 1.75em;
  font-weight: bold;
  line-height: 1.4;
  margin: 0 auto 2rem auto;
  max-width: 750px;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {}
`;

const Quote = (props) => {
  return (
    <Text dangerouslySetInnerHTML={{ __html: props.text.childMarkdownRemark.html }}/>
  )
}

export default Quote
