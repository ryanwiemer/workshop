import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import 'whatwg-fetch' // Fetch Polyfill

const Wrapper = styled.div`
  position: relative;
  padding: 0 0 4rem 0;
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 40%;
    top: 0;
    background: linear-gradient(0deg,rgba(255, 255, 255, 0) 0,rgba(255, 255, 255, 1));
  }
`

const Form = styled.form`
  max-width: 850px;
  margin: 0 auto 0;
  padding: 2em;
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
  &:before {
    content: '';
    background: black;
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    transition: .2s all;
    opacity: ${props => props.overlay ? '.8' : '0'};
    visibility: ${props => props.overlay ? 'visible' : 'hidden'};
  }
`

const Name = styled.input`
  margin: 0 0 1em 0;
  width: 100%;
  @media (min-width: ${props => props.theme.responsive.small}) {
    width: 49%;
  }
`

const Email = styled.input`
  margin: 0 0 1em 0;
  width: 100%;
  @media (min-width: ${props => props.theme.responsive.small}) {
    width: 49%;
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
  transition: .2s;
  &:hover {
    background: ${props => props.theme.colors.highlight} !important;
  }
`

const Modal = styled.div`
  background: white;
  padding: 2em;
  border-radius: 2px;
  position: fixed;
  min-width: 75%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  z-index: 99;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  transition: .2s all;
  opacity: ${props => props.visible ? '1' : '0'};
  visibility: ${props => props.visible ? 'visible' : 'hidden'};
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    min-width: inherit;
    max-width: 400px;
  }
  p {
    line-height: 1.6;
    margin: 0 0 2em 0;
  }
`

const Button = styled.div`
  background: ${props => props.theme.colors.base};
  font-size: 1em;
  display: inline-block;
  margin: 0 auto;
  border: none;
 	outline: none;
  cursor: pointer;
  color: white;
  padding: 1em;
  border-radius: 2px;
  text-decoration: none;
  transition: .2s;
  z-index: 99;
  &:focus {
    outline: none;
  }
  &:hover {
    background: ${props => props.theme.colors.highlight};
  }
`

const encode = (data) => {
  return Object.keys(data)
   .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
   .join("&");
}

class SignUp extends React.Component {

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
        body: encode({ "form-name": "signup", ...this.state })
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
      showModal: true
    });
  }

  closeModal = () => {
    this.setState({ showModal: false });
  }

  render() {

    return (
      <Wrapper>
        <Form name="signup" onSubmit={this.handleSubmit} data-netlify="true" data-netlify-honeypot="bot" overlay={this.state.showModal} onClick={this.closeModal}>
          <input type="hidden" name="form-name" value="contact" />
          <p hidden><label>Don’t fill this out: <input name="bot" onChange={this.handleInputChange} /></label></p>

          <Name name="name" type="text" placeholder="Full Name" value={this.state.name} onChange={this.handleInputChange} required/>
          <Email name="email" type="email" placeholder="Email" value={this.state.email} onChange={this.handleInputChange} required/>
          <Message name="message" type="text" placeholder="Message" value={this.state.message} onChange={this.handleInputChange} required/>
          <Submit name="submit" type="submit" value="Send" />

          <Modal visible={this.state.showModal}>
            <p>Thank you for reaching out. We will get back to you as soon as possible.</p>
            <Button onClick={this.closeModal}>Okay</Button>
          </Modal>
        </Form>
      </Wrapper>
    )
  }
}

SignUp.propTypes = {
  data: PropTypes.object,
}

export default SignUp
