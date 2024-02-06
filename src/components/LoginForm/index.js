import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  BgContainer,
  LoginContainer,
  LoginDetailsContainer,
  LoginImage,
  LabelElement,
  FormElement,
  UsernameElement,
  PasswordElement,
  ButtonElement,
  InputElement,
  InputCheckbox,
  CheckBox,
  InputLabelText,
  ErrorMsg,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showErrorMsg: false,
    errorMsg: '',
    showPassword: false,
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  onFailure = errorMsg => {
    this.setState({showErrorMsg: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onFailure(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  renderPasswordField = () => {
    const {password, showPassword} = this.state
    return (
      <>
        <LabelElement htmlFor="password"> PASSWORD </LabelElement>
        <InputElement
          id="password"
          value={password}
          type={showPassword ? 'text' : 'password'}
          onChange={this.onChangePassword}
        />
        <CheckBox>
          <InputCheckbox type="checkbox" onChange={this.onShowPassword} />
          <InputLabelText> Show Password </InputLabelText>
        </CheckBox>
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <LabelElement htmlFor="username"> USERNAME </LabelElement>
        <InputElement
          type="text"
          value={username}
          id="username"
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  render() {
    const {showErrorMsg, errorMsg} = this.state

    const jwtToken = Cookies.get('jwt_Token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <BgContainer>
        <LoginContainer>
          <LoginDetailsContainer>
            <LoginImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="website logo"
            />
            <FormElement onSubmit={this.submitForm}>
              <UsernameElement> {this.renderUsernameField()}</UsernameElement>
              <PasswordElement> {this.renderPasswordField()} </PasswordElement>
              <ButtonElement type="submit"> Login </ButtonElement>
              {showErrorMsg && <ErrorMsg> *{errorMsg} </ErrorMsg>}
            </FormElement>
          </LoginDetailsContainer>
        </LoginContainer>
      </BgContainer>
    )
  }
}

export default LoginForm
