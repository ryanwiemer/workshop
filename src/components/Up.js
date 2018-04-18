import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
if (typeof window !== `undefined`) {require('smoothscroll-polyfill').polyfill(); window.__forceSmoothScrollPolyfill__ = true;}

const Arrow = styled.div`
  color: ${props => props.theme.colors.base};
  font-weight: bold;
  cursor: pointer;
  text-decoration: underline;
`

const scrollUp = () => {
  scroll({ top: 0, left: 0, behavior: 'smooth' });
}

const Up = () => (
  <Arrow onClick={scrollUp}>
    Back to Top
  </Arrow>
)

export default Up
