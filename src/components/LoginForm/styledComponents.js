import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  border-radius: 10px;
  box-shadow: 1px 1px 2px grey;
  @media screen and (max-width: 576px) {
    width: 85%;
  }
`
export const LoginDetailsContainer = styled.div`
  width: 80%;
  //border: 1px red solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 80px;
`

export const LoginImage = styled.img`
  height: 40px;
  width: 180px;
`
export const FormElement = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  // border: 1px solid red;
  margin-top: 60px;
`

export const UsernameElement = styled.div`
  display: flex;
  flex-direction: column;
`

export const PasswordElement = styled.div`
  display: flex;
  flex-direction: column;
`

export const ButtonElement = styled.button`
  color: #ffffff;
  height: 35px;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: bold;
  background-color: #3b82f6;
  border: none;
  outline: none;
  border-radius: 7px;
  cursor: pointer;
`

export const LabelElement = styled.label`
  color: #7e858e;
  font-size: 13px;
  font-family: 'Roboto';
  font-weight: bold;
  margin-bottom: 7px;
`

export const InputElement = styled.input`
  border: 1px #cccccc solid;
  outline: none;
  border-radius: 4px;
  color: #000000;
  width: 100%;
  height: 35px;
  margin-bottom: 20px;
`

export const CheckBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`

export const InputCheckbox = styled.input`
  border: grey;
  height: 18px;
  width: 18px;
`
export const InputLabelText = styled.label`
  color: #181818;
  font-family: 'roboto';
  font-size: 14px;
  font-weight: 450;
  margin-left: 6px;
`
export const ErrorMsg = styled.p`
  color: #ff0000;
  font-family: 'Roboto';
  font-size: 11px;
  font-weight: 500;
`
