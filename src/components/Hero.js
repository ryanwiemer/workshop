import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Wrapper = styled.div`
  position: relative;
`

const BgImg = styled(Img)`
  @supports (object-fit: cover) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 400px;
    @media (min-width: ${props => props.theme.responsive.medium}) {
      height: 100vh;
    }
    & > img {
      object-fit: ${props => props.fit || 'cover'} !important;
      object-position: ${props => props.position || '50% 50%'} !important;
    }
    &:before {
      content: '';
      background: rgba(0,0,0,.25);
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      height: 100%;
      width: 100%;
      z-index: 1;
    }
  }
`

const Logo = styled.div`
  z-index: 2;
  width: 60%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 350px;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    width: 50%;
    max-width: 400px;
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    width: 50%;
  }
`

const Hero = (props) => {
  return (
    <Wrapper>
      <BgImg sizes={props.image.sizes} position={props.position} alt={props.image.title} title={props.image.title} backgroundColor={"#aaaea2"} />
      {props.logo && (<Logo id="start"><Img sizes={props.logo.sizes} alt={props.logo.title} title={props.logo.title} /></Logo>)}
    </Wrapper>
  )
}

export default Hero
