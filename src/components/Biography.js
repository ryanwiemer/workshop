import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 0 0 0 0;
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
    flex-flow: row wrap;
    justify-content: space-between;
    flex-direction: ${props => props.switch ? 'row-reverse' : 'row'};
  }
`;


const Profile = styled.div`
  border-radius: 2px;
  margin: 0 0 2rem 0;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    width: 60%;
  }
  img {
    /*border: 1em solid ${props => props.theme.colors.secondary};*/
  }
`;





const Details = styled.div`

  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    width: 38%;
  }
`;

const Name = styled.h2`
  font-weight: bold;
  display: inline-block;
  font-size: 2.5em;
  margin: 0 0 1rem 0;
`;

const Text = styled.div`
  margin: 0 0 2rem 0;
  font-family: 'PT Serif', serif;

  p {
    line-height: 1.5;
  }
`;

const Portfolio = styled.a`
  display: inline-block;
  background: #eee;
  border-radius: 2px;
  padding: 1em;
  font-family: 'PT Serif', serif;
  font-size: 1.5em;
  margin: 0 0 1rem 0;
`;




const FilmStrip = styled.ul`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  display: none;
  li {
    height: 100%;
    width: 25%;
    .gatsby-image-wrapper {
      height: 0;
      padding-bottom: 100%;
    }
  }



`;


const Biography = (props) => {
  return (
    <Wrapper>

      <About switch={props.switch}>
        <Profile>
          <Img sizes={props.profileImage.sizes} alt={props.profileImage.title} title={props.profileImage.title} backgroundColor={'#eeeeee'}/>
        </Profile>

        <Details>
          <Name>{props.title}</Name>
            <Text dangerouslySetInnerHTML={{ __html: props.text.childMarkdownRemark.html }}/>
          <Portfolio href={props.portfolio} target="_blank">{props.portfolio}</Portfolio>
        </Details>

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
