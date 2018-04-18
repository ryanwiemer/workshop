import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {}
`;

const Heading = styled.h3`
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {}
`;

const Date = styled.h4`
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
