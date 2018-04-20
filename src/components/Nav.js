import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Scrollspy from 'react-scrollspy'

const Wrapper = styled.nav`
  display: none;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    background: white;
    position: fixed;
    top: 0;
    left: 0;
    display: block;
    z-index: 99;
    width: 100vh;
    transform-origin: left top;
    transform: rotate(-90deg) translateX(-100%);
    border-bottom: 1px solid ${props => props.theme.colors.tertiary};
    }
`;

const List = styled(Scrollspy)`
  height: 4em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row-reverse;
`;

const ScrollLink = styled.a`
    font-size: 1.25em;
    font-weight: bold;
    margin: 0 1rem;
    text-decoration: none;
`;


const scrollTo = (e) => {
  document.querySelector('.' + e.target.id ).scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

const Nav = (props) => {
  return (
    <Wrapper>
      <List>
        <List items={props.links.slug} currentClassName="is-active" offset={0}>
          {props.links && (
            props.links.map((link) => (
              <li key={link.id}>
                <ScrollLink href={`#${link.slug}`}>{link.title}</ScrollLink>
              </li>
            ))
          )}
          <li>
            <ScrollLink href="#register">Register</ScrollLink>
          </li>
        </List>
      </List>
    </Wrapper>
  )
}

export default Nav
