import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Wrapper = styled.div`
  position: relative;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto 6rem;
  padding: 0 1.5rem;
  height: 100%;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    padding: 0 3rem;
  }
`;


const About = styled.div`
  margin: 0 0 2rem 0;
  padding: 2em 0 0 0;
  width: 100%;
  display: flex;
  flex: row wrap;
  justify-content: space-between;
`;


const Profile = styled.div`
  margin: 0 0 2rem 0;
  width: 49%;
`;

const Text = styled.div`
  margin: 0 0 2rem 0;
  width: 49%;
  p {
    line-height: 1.5;
  }
`;

const FilmStrip = styled.ul`
  display: flex;
  flex-flow: row wrap;
  li {
    width: 25%;
  }
`;




const Biography = (props) => {
  return (
    <Wrapper>

      <About>
        <Profile>
          <Img sizes={props.profileImage.sizes} alt={props.profileImage.title} title={props.profileImage.title} />
        </Profile>
        <Text dangerouslySetInnerHTML={{ __html: props.text.childMarkdownRemark.html }}/>
      </About>

      <FilmStrip>
        {props.filmStrip && (
          props.filmStrip.map((photo, index) => (
          <li key={index}>
            <Img sizes={photo.sizes} alt={photo.title} title={photo.title} />
          </li>
          ))
        )}
      </FilmStrip>

    </Wrapper>
  )
}

export default Biography
