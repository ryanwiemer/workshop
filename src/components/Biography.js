import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import ScrollMagic from 'ScrollMagic';

const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 4em 0 0 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;


const About = styled.figure`
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto 1em;
  padding: 2em;
  width: 100%;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    display: flex;
    flex: row wrap;
    justify-content: space-between;
    flex-direction: ${props => props.switch ? 'row-reverse' : 'row'}
  }
`;


const Profile = styled.div`
  border-radius: 2px;
  margin: 0 0 2rem 0;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    width: 48%;
    margin: 0;
  }
  img {
    border: 1em solid ${props => props.theme.colors.secondary};
  }
`;

const Text = styled.div`
  margin: 0 0 2rem 0;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    width: 48%;
    margin: 0;
  }
  p {
    line-height: 1.5;
  }

`;

const FilmStrip = styled.ul`
  display: flex;
  width: 200%;
  li {
    margin: 0 0 0 .5em;
    height: 100%;
    width: 100%;
    .gatsby-image-wrapper {
      height: 0;
      padding-bottom: 100%;
    }
  }
`;


const Biography = (props) => {
  return (
    <Wrapper>

      <About>
        <Profile>
          <Img sizes={props.profileImage.sizes} alt={props.profileImage.title} title={props.profileImage.title} backgroundColor={'#eeeeee'}/>
        </Profile>
        <Text dangerouslySetInnerHTML={{ __html: props.text.childMarkdownRemark.html }}/>
      </About>

      <FilmStrip>
        {props.filmStrip && (
          props.filmStrip.map((photo, index) => (
          <li key={index}>
            <Img sizes={photo.sizes} alt={photo.title} title={photo.title} backgroundColor={'#eeeeee'}/>
          </li>
          ))
        )}
      </FilmStrip>

    </Wrapper>
  )
}

export default Biography
