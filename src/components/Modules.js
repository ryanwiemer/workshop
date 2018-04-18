import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Hero from  './Hero'
import BodyText from  './BodyText'
import IntroText from  './IntroText'
import Biography from  './Biography'
import PhotoGrid from  './PhotoGrid'

const Modules = (props) => {
  return (
    <ul>
      {props.modules.map(( module, index ) => (
        <li key={index}>

          {module.__typename == "ContentfulPhotoGrid" && (
            <PhotoGrid
              title={module.title}
              images={module.images}
            />
          )}

          {module.__typename == "ContentfulHero" && (
            <Hero
              title={module.title}
              logo={module.logo}
              image={module.cover}
              links={module.links}
            />
          )}

          {module.__typename == "ContentfulBiography" && (

            <Biography
              title={module.title}
              portfolio={module.portfolio}
              instagram={module.instagram}
              facebook={module.facebook}
              profileImage={module.profileImage}
              text={module.text}
              switch={module.switch}
            />

          )}

          {module.__typename == "ContentfulBodyText" && (
            <div>
              <BodyText text={module.text}/>
            </div>
          )}

          {module.__typename == "ContentfulIntroText" && (
            <div>
            <IntroText
              image={module.cover}
              text={module.text}
            />
          </div>
          )}

        </li>
       ))}
     </ul>
  )
}

export default Modules
