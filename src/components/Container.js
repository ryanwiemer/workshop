import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
      margin: 0 0 0 4em;
  }
`;

const Container = (props) => {
  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  )
}

export default Container
