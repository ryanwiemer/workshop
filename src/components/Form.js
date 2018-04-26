import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import 'whatwg-fetch' // Fetch Polyfill
import Slide from 'react-reveal/Slide';
import Link from 'gatsby-link'
import topography from '../images/topography.png'

const Wrapper = styled.div`
  background: ${props => props.theme.colors.secondary};
  background: url(${topography});
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 2rem;
  min-height: 100vh;
`

const ContactForm = styled.form`
  background: white;
  border-radius: 2px;
  padding: 2rem;
  max-width: 800px;
  border: 1px solid ${props => props.theme.colors.tertiary};
  font-size: 1.1em;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  z-index: 99;
  position: relative;
  input, textarea {
    font-family: inherit;
    font-size: inherit;
   	background: none;
   	border: none;
   	outline: none;
   	-webkit-appearance: none;
   	-moz-appearance: none;
    background: white;
    border: 1px solid ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.base};
    border-radius: 2px;
    padding: 1em;
   	&:focus {outline: none;}
    &:required {box-shadow: none;}
    &::-webkit-input-placeholder {color: gray;}
    &::-moz-placeholder {color: gray;}
    &:-ms-input-placeholder {color: gray;}
    &:-moz-placeholder {color: gray;}
  }
`

const Preface = styled.p`
  line-height: 1.5;
  margin: 0 0 2rem 0;
`

const Name = styled.input`
  margin: 0 0 1rem 0;
  width: 100%;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: 0 1 49%;
  }
`

const Email = styled.input`
  margin: 0 0 1rem 0;
  width: 100%;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: 0 1 49%;
  }
`

const Message = styled.textarea`
  width: 100%;
  margin: 0 0 1em 0;
  line-height: 1.6;
  min-height: 250px;
  resize: vertical;
`

const Submit = styled.input`
  background: ${props => props.theme.colors.base} !important;
  border: none !important;
  color: white !important;
  cursor: pointer;
`

const Close = styled(Link)`
  font-weight: 600;
  display: inline-block;
  margin: 0 0 1rem 0;
  align-self: flex-end;
`

const encode = (data) => {
  return Object.keys(data)
   .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
   .join("&");
}

class Form extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message:'',
      showModal: false
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "register", ...this.state })
      })
      .then(this.handleSuccess)
      .catch(error => alert(error));
      event.preventDefault();
    };

  handleSuccess = () =>  {
    this.setState({
      name: '',
      email: '',
      message:'',
      showModal: false
    });
  }

  closeModal = () => {
    this.setState({ showModal: false });
  }

  showModal = () => {
    this.setState({ showModal: true });
  }

  render() {

    return (
      <Wrapper>
        <Slide bottom>
          <ContactForm name="register" onSubmit={this.handleSubmit} data-netlify="true" data-netlify-honeypot="bot">
            <Close to="/">Go Back</Close>
            <Preface>In pharetra fermentum dolor a dapibus. Maecenas posuere tincidunt nulla non volutpat. Aenean non quam magna. Nam eget mollis nulla. Interdum et malesuada.</Preface>
            <input type="hidden" name="form-name" value="register" />
            <p hidden><label>Don’t fill this out: <input name="bot" onChange={this.handleInputChange} /></label></p>

            <Name name="name" type="text" placeholder="Full Name" value={this.state.name} onChange={this.handleInputChange} required/>
            <Email name="email" type="email" placeholder="Email" value={this.state.email} onChange={this.handleInputChange} required/>
            <Message name="message" type="text" placeholder="Message" value={this.state.message} onChange={this.handleInputChange} required/>
            <Submit name="submit" type="submit" value="Send" />
          </ContactForm>
        </Slide>
      </Wrapper>
    )
  }
}

export default Form
