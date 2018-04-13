import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Hero from  './Hero'

const Modules = (props) => {
  return (
    <ul>
      {props.modules.map(( module ) => (
        <li key={module.title}>

          {module.__typename == "ContentfulHero" && (
            <Hero
              title={module.title}
              image={module.cover}
              links={module.links}
              height="50vh"
            />
          )}

          {module.__typename == "ContentfulGallery" && (

            <h2>{module.title} ---{module.__typename}</h2>

          )}

        </li>
       ))}
    </ul>
  )
}

export default Modules
