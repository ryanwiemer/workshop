import React from 'react'
import styled from 'styled-components'

const Heading = styled.h3`
  font-size: 1.5em;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {}
`;

const Text = styled.div`
  font-family: 'PT Serif', serif;
  font-size: 1.75em;
  font-weight: bold;
  line-height: 1.4;
  margin: 0 auto 2rem auto;
  max-width: 750px;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {}
`;

const List = (props) => {
  return (
    <div>
      <Heading>{props.heading}</Heading>
      <Text dangerouslySetInnerHTML={{ __html: props.items.childMarkdownRemark.html }}/>
    </div>
  )
}

export default List
