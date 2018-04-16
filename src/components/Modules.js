import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Hero from  './Hero'
import BodyText from  './BodyText'
import IntroText from  './IntroText'
import Biography from  './Biography'

const Modules = (props) => {
  return (
    <ul>
      {props.modules.map(( module, index ) => (
        <li key={index}>

          {module.__typename == "ContentfulHero" && (
            <Hero
              title={module.title}
              logo={module.logo}
              image={module.cover}
              links={module.links}
              height="100vh"
            />
          )}

          {module.__typename == "ContentfulBiography" && (

            <Biography
              title={module.title}
              portfolio={module.portfolio}
              profileImage={module.profileImage}
              text={module.text}
              filmStrip={module.filmStrip}
              switch={module.switch}
            />

          )}

          {module.__typename == "ContentfulBodyText" && (
            <div>
            <h2>{module.title} ---{module.__typename}</h2>
            <BodyText text={module.text}/>
          </div>
          )}

          {module.__typename == "ContentfulIntroText" && (
            <div>
            <IntroText text={module.text}/>
          </div>
          )}

        </li>
       ))}
     </ul>
  )
}

export default Modules
