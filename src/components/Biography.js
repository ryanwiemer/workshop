import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Reveal from 'react-reveal/Reveal'

const About = styled.div`
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 2rem 2rem 2rem;
  width: 100%;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    flex-direction: ${props => (props.switch ? 'row-reverse' : 'row')};
  }
`

const Profile = styled.div`
  border-radius: 2px;
  margin: 0 0 2rem 0;
  position: relative;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    width: 59%;
  }
`

const Details = styled.div`
  margin: 0 0 2rem 0;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    width: 38%;
  }
`

const Name = styled.h2`
  font-family: 'PT Serif', serif;
  font-weight: 600;
  display: inline-block;
  font-size: 1.25em;
  margin: 0 0 1rem 0;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    font-size: 1.75em;
  }
`

const Text = styled.div`
  margin: 0 0 2rem 0;
  font-size: 1.1em;
  p {
    line-height: 1.5;
  }
`

const ExternalLinks = styled.div`
  display: flex;
  a {
    transition: 0.3s;
    color: ${props => props.theme.colors.base};
    display: inline-block;
    border: 1px solid ${props => props.theme.colors.tertiary};
    border-radius: 2px;
    font-size: 1.1em;
    margin: 0 0.5rem 0 0;
    padding: 0.75em;
    &:hover {
      border-color: ${props => props.theme.colors.secondary};
      background: ${props => props.theme.colors.secondary};
    }
    @media (hover: none) {
      border-color: ${props => props.theme.colors.tertiary} !important;
      background: none !important;
    }
    &:first-child {
      padding: 1em;
    }
  }
  svg {
    fill: ${props => props.theme.colors.base};
    display: inline-block;
    height: 1.5em;
    width: 1.5em;
  }
`

const Biography = props => {
  return (
    <Reveal>
      <About switch={props.switch}>
        <Profile>
          <Img
            sizes={props.image.sizes}
            alt={props.image.title}
            title={props.image.title}
            backgroundColor={'#aaaea2'}
            style={{ borderRadius: '2px' }}
          />
        </Profile>

        <Details>
          <Name>{props.name}</Name>
          <Text
            dangerouslySetInnerHTML={{
              __html: props.text.childMarkdownRemark.html,
            }}
          />
          <ExternalLinks>
            <a href={props.portfolio} target="_blank" rel="noopener">
              {props.portfolio}
            </a>
            {props.instagram && (
              <a href={props.instagram} target="_blank" rel="noopener">
                <svg viewBox="0 0 512 512">
                  <g>
                    <path d="M256 109.3c47.8 0 53.4 0.2 72.3 1 17.4 0.8 26.9 3.7 33.2 6.2 8.4 3.2 14.3 7.1 20.6 13.4 6.3 6.3 10.1 12.2 13.4 20.6 2.5 6.3 5.4 15.8 6.2 33.2 0.9 18.9 1 24.5 1 72.3s-0.2 53.4-1 72.3c-0.8 17.4-3.7 26.9-6.2 33.2 -3.2 8.4-7.1 14.3-13.4 20.6 -6.3 6.3-12.2 10.1-20.6 13.4 -6.3 2.5-15.8 5.4-33.2 6.2 -18.9 0.9-24.5 1-72.3 1s-53.4-0.2-72.3-1c-17.4-0.8-26.9-3.7-33.2-6.2 -8.4-3.2-14.3-7.1-20.6-13.4 -6.3-6.3-10.1-12.2-13.4-20.6 -2.5-6.3-5.4-15.8-6.2-33.2 -0.9-18.9-1-24.5-1-72.3s0.2-53.4 1-72.3c0.8-17.4 3.7-26.9 6.2-33.2 3.2-8.4 7.1-14.3 13.4-20.6 6.3-6.3 12.2-10.1 20.6-13.4 6.3-2.5 15.8-5.4 33.2-6.2C202.6 109.5 208.2 109.3 256 109.3M256 77.1c-48.6 0-54.7 0.2-73.8 1.1 -19 0.9-32.1 3.9-43.4 8.3 -11.8 4.6-21.7 10.7-31.7 20.6 -9.9 9.9-16.1 19.9-20.6 31.7 -4.4 11.4-7.4 24.4-8.3 43.4 -0.9 19.1-1.1 25.2-1.1 73.8 0 48.6 0.2 54.7 1.1 73.8 0.9 19 3.9 32.1 8.3 43.4 4.6 11.8 10.7 21.7 20.6 31.7 9.9 9.9 19.9 16.1 31.7 20.6 11.4 4.4 24.4 7.4 43.4 8.3 19.1 0.9 25.2 1.1 73.8 1.1s54.7-0.2 73.8-1.1c19-0.9 32.1-3.9 43.4-8.3 11.8-4.6 21.7-10.7 31.7-20.6 9.9-9.9 16.1-19.9 20.6-31.7 4.4-11.4 7.4-24.4 8.3-43.4 0.9-19.1 1.1-25.2 1.1-73.8s-0.2-54.7-1.1-73.8c-0.9-19-3.9-32.1-8.3-43.4 -4.6-11.8-10.7-21.7-20.6-31.7 -9.9-9.9-19.9-16.1-31.7-20.6 -11.4-4.4-24.4-7.4-43.4-8.3C310.7 77.3 304.6 77.1 256 77.1L256 77.1z" />
                    <path d="M256 164.1c-50.7 0-91.9 41.1-91.9 91.9s41.1 91.9 91.9 91.9 91.9-41.1 91.9-91.9S306.7 164.1 256 164.1zM256 315.6c-32.9 0-59.6-26.7-59.6-59.6s26.7-59.6 59.6-59.6 59.6 26.7 59.6 59.6S288.9 315.6 256 315.6z" />
                    <circle cx="351.5" cy="160.5" r="21.5" />
                  </g>
                </svg>
              </a>
            )}
            {props.facebook && (
              <a href={props.facebook} target="_blank" rel="noopener">
                <svg viewBox="0 0 512 512">
                  <path d="M211.9 197.4h-36.7v59.9h36.7V433.1h70.5V256.5h49.2l5.2-59.1h-54.4c0 0 0-22.1 0-33.7 0-13.9 2.8-19.5 16.3-19.5 10.9 0 38.2 0 38.2 0V82.9c0 0-40.2 0-48.8 0 -52.5 0-76.1 23.1-76.1 67.3C211.9 188.8 211.9 197.4 211.9 197.4z" />
                </svg>
              </a>
            )}
          </ExternalLinks>
        </Details>
      </About>
    </Reveal>
  )
}

export default Biography
