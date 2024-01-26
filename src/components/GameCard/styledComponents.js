import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Game = styled.li`
  list-style-type: none;
  width: 30%;
  margin: 5px;
  @media screen and (max-width: 576px) {
    width: 40%;
    margin-left: 0px;
    margin: 20px;
  }
  @media screen and (min-width: 576px) {
    width: 30%;
    margin-left: 30px;
    margin: 5px;
  }
`
export const GameContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const GameImage = styled.img`
  height: 310px;
  width: 226px;
  border-radius: 13px;
  @media screen and (max-width: 576px) {
    width: 200px;
    height: 280px;
  }
`

export const GameTitle = styled.h1`
  color: #000000;
  font-size: 15px;
  font-family: 'Roboto';
  margin-bottom: 0px;
`

export const GameViews = styled.p`
  color: #616e7c;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 450;
  margin-top: 3px;
  @media screen and (max-width: 576px) {
    font-size: 16px;
    width: 60%;
  }
`

export const NavLink = styled(Link)`
  text-decoration: none;
`
