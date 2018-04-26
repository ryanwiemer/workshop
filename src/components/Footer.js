import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Up from '../components/Up'
import topography from '../images/topography.png'

const Wrapper = styled.div`
  background: url(${topography});
  border-top: 1px solid ${props => props.theme.colors.tertiary};
`

const List = styled.ul`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  height: 6rem;
`

const Item = styled.li`
  color: white;
  font-weight: 600;
  font-size: 1.1em;
  a {
    margin: 0 1rem 0 0;
  }
`

const Footer = (props) => (
  <Wrapper>
    <List>
      <Item>
        <a href="https://www.contentful.com/" rel="nofollow" target="_blank"><img src="https://images.ctfassets.net/fo9twyrwpveg/44baP9Gtm8qE2Umm8CQwQk/c43325463d1cb5db2ef97fca0788ea55/PoweredByContentful_LightBackground.svg" style={{width:"100px"}} alt="Powered by Contentful" /></a>
      </Item>
      <Item><Up/></Item>
    </List>
  </Wrapper>
)

export default Footer
