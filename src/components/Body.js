import React from 'react'
import styled from 'styled-components'
import Reveal from 'react-reveal/Reveal'

const Text = styled.div`
  font-size: 1.1em;
  line-height: 1.5;
  margin: 0 auto;
  padding: 4rem 2rem 2rem;
  max-width: 800px;
  p {
    margin: 0 0 2rem 0;
    &:last-child {
      margin: 0;
    }
  }
`

const Body = props => {
  return (
    <Reveal>
      <Text
        dangerouslySetInnerHTML={{
          __html: props.text.childMarkdownRemark.html,
        }}
      />
    </Reveal>
  )
}

export default Body
