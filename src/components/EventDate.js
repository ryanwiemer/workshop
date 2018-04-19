import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  text-align: center;
  margin: 0 auto 2rem;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {}
`;

const Heading = styled.h3`
  text-transform: uppercase;
  font-weight: bold;
  margin: 0 0 1rem 0;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {}
`;

const Date = styled.h4`
  font-weight: bold;
  font-size: 3em;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {}
`;

const EventDate = (props) => {
  return (
    <Wrapper>
      <Heading>{props.heading}</Heading>
      <Date>{props.start} - {props.finish}</Date>
    </Wrapper>
  )
}

export default EventDate
