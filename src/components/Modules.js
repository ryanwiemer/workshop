import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Hero from './Hero'
import Intro from './Intro'
import Biography from './Biography'
import FilmStrip from './FilmStrip'
import Quote from './Quote'
import List from './List'
import EventDate from './EventDate'
import Divider from './Divider'

const Modules = (props) => {
  return (
    <ul>
      {props.modules.map(( module, index ) => (
        <li key={index}>

          {module.__typename == "ContentfulHero" && (
            <Hero
              logo={module.logo}
              image={module.image}
              links={module.links}
            />
          )}

          {module.__typename == "ContentfulIntro" && (
            <div>
            <Intro
              image={module.image}
              heading={module.heading}
              text={module.text}
            />
          </div>
          )}

          {module.__typename == "ContentfulBiography" && (
            <Biography
              name={module.title}
              portfolio={module.portfolio}
              instagram={module.instagram}
              facebook={module.facebook}
              profileImage={module.profileImage}
              text={module.text}
              switch={module.switch}
            />
          )}

          {module.__typename == "ContentfulFilmStrip" && (
            <FilmStrip
              heading={module.heading}
              images={module.images}
            />
          )}

          {module.__typename == "ContentfulQuote" && (
            <Quote
              text={module.text}
            />
          )}

          {module.__typename == "ContentfulList" && (
            <List
              heading={module.heading}
              items={module.items}
            />
          )}

          {module.__typename == "ContentfulEventDate" && (
            <EventDate
              heading={module.heading}
              start={module.start}
              finish={module.finish}
            />
          )}

          {module.__typename == "ContentfulDivider" && (
            <Divider
              image={module.image}
            />
          )}

        </li>
       ))}
     </ul>
  )
}

export default Modules
