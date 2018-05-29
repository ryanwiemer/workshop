import React from 'react'
import styled from 'styled-components'
import 'whatwg-fetch' // Fetch Polyfill
import Recaptcha from 'react-google-recaptcha'
import Slide from 'react-reveal/Slide'
import Link from 'gatsby-link'
import topography from '../images/topography.svg'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 1rem;
  min-height: 100vh;
  overflow: hidden;
  z-index: 0;
  &::before {
    content: '';
    background-image: url(${topography});
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.15;
    z-index: -3;
  }
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    padding: 2rem;
  }
`

const ContactForm = styled.form`
  background: white;
  border-radius: 2px;
  padding: 1rem;
  max-width: 800px;
  border: 1px solid ${props => props.theme.colors.tertiary};
  font-size: 1.1em;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  z-index: 99;
  position: relative;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    padding: 2rem;
  }
  input[type='text'],
  input[type='email'],
  input[type='submit'],
  textarea {
    appearance: none;
    font-family: inherit;
    font-size: inherit;
    outline: none;
    background: white;
    border: 1px solid ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.base};
    border-radius: 2px;
    padding: 1em;
    &:focus {
      outline: none;
    }
    &:required {
      box-shadow: none;
    }
    &::-webkit-input-placeholder {
      color: gray;
    }
    &::-moz-placeholder {
      color: gray;
    }
    &:-ms-input-placeholder {
      color: gray;
    }
    &:-moz-placeholder {
      color: gray;
    }
  }
`

const Preface = styled.p`
  width: 100%;
  line-height: 1.5;
  margin: 0 0 2rem 0;
`

const Name = styled.input`
  margin: 0 0 1rem 0;
  width: 100%;
  flex: 0 1 100%;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: 0 1 49%;
  }
`

const Email = styled.input`
  margin: 0 0 1rem 0;
  width: 100%;
  flex: 0 1 100%;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: 0 1 49%;
  }
`

const Portfolio = styled.input`
  margin: 0 0 1rem 0;
  width: 100%;
  flex: 0 1 100%;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: 0 1 49%;
  }
`

const Experience = styled.input`
  margin: 0 0 1rem 0;
  width: 100%;
  flex: 0 1 100%;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: 0 1 49%;
  }
`

const Learning = styled.textarea`
  width: 100%;
  flex: 0 1 100%;
  margin: 0 0 1em 0;
  line-height: 1.6;
  min-height: 150px;
  resize: none;
`

const Questions = styled.textarea`
  width: 100%;
  margin: 0 0 1em 0;
  line-height: 1.6;
  min-height: 150px;
  resize: none;
`

const Dogs = styled.div`
  margin: 0 0 1rem 0;
  width: 100%;
  input:invalid {
    box-shadow: none;
  }
  span,
  label {
    margin: 0 1rem 0 0;
  }
`

const StyledRecaptcha = styled(Recaptcha)`
  margin: 0 0 1em 0;
  width: 100%;
  height: 80px;
`

const Submit = styled.input`
  background: ${props => props.theme.colors.base} !important;
  border: none !important;
  color: white !important;
  cursor: pointer;
  transition: 0.3s;
  &:disabled {
    background: gray !important;
    cursor: not-allowed;
  }
`

const Close = styled(Link)`
  font-weight: 600;
  display: inline-block;
  margin: 0 0 1rem 0;
  align-self: flex-end;
  transition: 0.3s;
  &:hover {
    opacity: 0.75;
  }
  @media (hover: none) {
    opacity: 1 !important;
  }
`

const Success = styled(Link)`
  display: ${props => (props.show ? 'block' : 'none')};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, calc(-50% - 0.5px));
  text-align: center;
  z-index: -1;
  background: white;
  border-radius: 2px;
  border: 1px solid ${props => props.theme.colors.tertiary};
  text-decoration: none;
  h2 {
    font-weight: 600;
    padding: 1rem;
    font-size: 1.25em;
    background: ${props => props.theme.colors.highlight};
    color: white;
    width: 100%;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
    @media screen and (min-width: ${props => props.theme.responsive.medium}) {
      font-size: 1.75em;
    }
  }
  h3 {
    font-size: 1.1em;
    font-weight: 600;
    margin: 2rem 1rem;
    text-decoration: underline;
  }
`

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      portfolio: '',
      experience: '',
      questions: '',
      dogs: '',
      success: false,
      disabledSubmit: true,
    }
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

  handleRecaptcha = value => {
    this.setState({
      'g-recaptcha-response': value,
      disabledSubmit: false,
    })
  }

  handleSubmit = event => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'register', ...this.state }),
    })
      .then(this.handleSuccess)
      .catch(error => alert(error))
    event.preventDefault()
  }

  handleSuccess = () => {
    // eslint-disable-next-line
    grecaptcha.reset()
    this.setState({
      name: '',
      email: '',
      portfolio: '',
      experience: '',
      questions: '',
      dogs: '',
      success: true,
      disabledSubmit: true,
    })
  }

  render() {
    const RECAPTCHA_KEY =
      process.env.SITE_RECAPTCHA_KEY ||
      '6Ld7KFwUAAAAAGD3p0lGYNeVgq7jpA3PT2xib8LI'
    return (
      <Wrapper>
        <Slide bottom duration={750}>
          <Slide bottom when={!this.state.success} collapse duration={750}>
            <ContactForm
              name="register"
              onSubmit={this.handleSubmit}
              data-netlify="true"
              data-netlify-recaptcha="true"
              data-netlify-honeypot="bot"
            >
              <Close to="/">Go Back</Close>
              <Preface>
                We want to ensure you’re the right fit for this workshop, so we
                have a few questions for you!
              </Preface>
              <input type="hidden" name="form-name" value="register" />
              <p hidden>
                <label>
                  Don’t fill this out:{' '}
                  <input name="bot" onChange={this.handleInputChange} />
                </label>
              </p>
              <Name
                name="name"
                type="text"
                placeholder="Full Name"
                value={this.state.name}
                onChange={this.handleInputChange}
                required
              />
              <Email
                name="email"
                type="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleInputChange}
                required
              />
              <Portfolio
                name="portfolio"
                type="text"
                placeholder="Portfolio or @Instgaram"
                value={this.state.portfolio}
                onChange={this.handleInputChange}
                required
              />
              <Experience
                name="experience"
                type="text"
                placeholder="How long have you been shooting?"
                value={this.state.experience}
                onChange={this.handleInputChange}
                required
              />
              <Learning
                name="learning"
                type="text"
                placeholder="What do you hope to learn?"
                value={this.state.learning}
                onChange={this.handleInputChange}
                required
              />
              <Questions
                name="questions"
                type="text"
                placeholder="Questions, dietary restrictions or comments? (optional)"
                value={this.state.questions}
                onChange={this.handleInputChange}
              />
              <Dogs>
                <span>Do you like dogs?</span>
                <label>
                  Yes{' '}
                  <input
                    name="dogs"
                    type="radio"
                    value="yes"
                    checked={this.state.dogs === 'yes'}
                    onChange={this.handleInputChange}
                    required
                  />
                </label>
                <label>
                  No{' '}
                  <input
                    name="dogs"
                    type="radio"
                    value="no"
                    checked={this.state.dogs === 'no'}
                    onChange={this.handleInputChange}
                    required
                  />
                </label>
              </Dogs>
              <StyledRecaptcha
                sitekey={RECAPTCHA_KEY}
                onChange={this.handleRecaptcha}
              />
              <Submit
                disabled={this.state.disabledSubmit}
                name="submit"
                type="submit"
                value="Send"
              />
            </ContactForm>
          </Slide>
        </Slide>

        <Success show={this.state.success ? true : undefined} to="/">
          <h2>Message Received</h2>
          <h3>Return Home</h3>
        </Success>
      </Wrapper>
    )
  }
}

export default Form
