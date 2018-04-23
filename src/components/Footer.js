import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Up from '../components/Up'

const Wrapper = styled.div`
  margin: -4rem 0 0 0;
  position: relative;
`

const List = styled.ul`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
  height: 4rem;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    padding: 0 3rem;
  }
`

const Item = styled.li`
  color: white;
  font-weight: bold;
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
