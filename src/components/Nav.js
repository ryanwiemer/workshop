import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Waypoint from 'react-waypoint'
import tree from '../images/tree.svg'

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

const List = styled.ul`
  height: 4em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row-reverse;
`;

const ScrollLink = styled.button`
  display: inline-block;
  font-size: 1.2em;
  font-weight: bold;
  margin: 0 1rem;
  text-decoration: none;
  color: ${props => props.theme.colors.base};
`;

const Tree = styled.svg`
  transform-origin: left top;
  transform: rotate(90deg) translateY(-100%) translateX(10%);
  fill: ${props => props.theme.colors.base};
  position: relative;
  pointer-events: none;
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
        <List>
          <li>
            <ScrollLink id="top" onClick={scrollTo} >
              <Tree version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M20.781 17.375l-2.7-3.375h0.919c0.373 0 0.715-0.207 0.887-0.538s0.146-0.729-0.068-1.035l-7-10c-0.317-0.452-0.94-0.562-1.393-0.246-0.091 0.063-0.158 0.146-0.221 0.231-0.025 0.015-7.025 10.015-7.025 10.015-0.214 0.306-0.24 0.704-0.068 1.035s0.515 0.538 0.888 0.538h0.919l-2.7 3.375c-0.24 0.301-0.287 0.712-0.121 1.059 0.167 0.345 0.518 0.566 0.902 0.566h7v3c0 0.553 0.448 1 1 1s1-0.447 1-1v-3h7c0.384 0 0.735-0.221 0.901-0.566 0.167-0.347 0.12-0.758-0.12-1.059zM13 17v-5c0-0.553-0.448-1-1-1s-1 0.447-1 1v5h-4.919l2.7-3.375c0.24-0.301 0.287-0.712 0.121-1.059-0.167-0.345-0.518-0.566-0.902-0.566h-1.080l5.080-7.256 5.080 7.256h-1.080c-0.384 0-0.735 0.221-0.901 0.566-0.167 0.347-0.12 0.758 0.121 1.059l2.7 3.375h-4.92z"></path>
              </Tree>
            </ScrollLink>
          </li>

          {props.links && (
            props.links.map((link) => (
              <li key={link.id}>
                <ScrollLink id={link.slug} onClick={scrollTo}>{link.title}</ScrollLink>
              </li>
            ))
          )}
          <li>
            <ScrollLink id="register" onClick={scrollTo}>Register</ScrollLink>
          </li>
        </List>
      </List>
    </Wrapper>
  )
}

export default Nav
