import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Hero from  './Hero'
import BodyText from  './BodyText'

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

          {module.__typename == "ContentfulGallery" && (

            <h2>{module.title} ---{module.__typename}</h2>

          )}

          {module.__typename == "ContentfulBodyText" && (
            <div>
            <h2>{module.title} ---{module.__typename}</h2>
            <BodyText text={module.text}/>
          </div>
          )}

        </li>
       ))}
    </ul>
  )
}

export default Modules
