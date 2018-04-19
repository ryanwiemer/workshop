import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
  display: inline-block;
  width: 49%;
  padding: 1em;
  margin: 0 0 1rem 0;
  border-radius: 2px;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {}
`;

const Heading = styled.h3`
  font-size: 1.5em;
  font-family: 'PT Serif', serif;
  font-weight: bold;
  margin: 0 0 1rem 0;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {}
`;

const Text = styled.div`
  ul {

  }
  li {
    list-style: disc;
    list-style-position: inside;
  }





  @media screen and (min-width: ${props => props.theme.responsive.medium}) {}
`;

const List = (props) => {
  return (
    <Wrapper>
      <Heading>{props.heading}</Heading>
      <Text dangerouslySetInnerHTML={{ __html: props.items.childMarkdownRemark.html }}/>
    </Wrapper>
  )
}

export default List
