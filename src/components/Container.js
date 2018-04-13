import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  position: relative;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 2rem auto;
  padding: 0 1.5rem;
  height: 100%;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    padding: 0 3rem;
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
