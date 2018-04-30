import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Link from 'gatsby-link'
import topography from '../images/topography.svg'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  z-index: 0;
  text-align: center;
  font-weight: 600;
  &:before {
    content: '';
    background-image: url(${topography});
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: .15;
    z-index: -3;
  }
  a {
    font-size: 1.1em;
  }
`

const Title = styled.h2`
  margin: 0 0 1rem 0;
  font-size: 2em;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    font-size: 2.5em;
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    font-size: 4em;
    margin: 0 0 2rem 0;
  }
`

const ErrorPage = () => {
  return (
    <Wrapper>
      <div>
        <Title>404 - Not Found</Title>
        <Link to="/">Return Home</Link>
      </div>
    </Wrapper>
  )
}

export default ErrorPage
