import React from 'react'
import styled from 'styled-components'

const Text = styled.div`
  font-family: 'PT Serif', serif;
  font-size: 1.25em;
  font-weight: bold;
  line-height: 1.4;
  margin: 2rem auto;
  padding: 0 1.5em;
  max-width: 750px;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
      font-size: 1.75em;
  }
`;

const Quote = (props) => {
  return (
    <Text dangerouslySetInnerHTML={{ __html: props.text.childMarkdownRemark.html }}/>
  )
}

export default Quote
