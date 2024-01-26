import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const TrendingCard = styled.li`
  width: 85%;
  margin: 30px;
  margin-left: 120px;

  @media screen and (max-width: 576px) {
    margin-left: 0px;
    margin: 0px;
    width: 100%;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 768px) {
    margin-left: 5px;
  }
`

export const TrendsCard = styled.div`
  display: flex;
  width: 90%;

  @media screen and (max-width: 576px) {
    width: 100%;
    flex-direction: column;
  }
`

export const TrendingImage = styled.img`
  width: 40%;
  height: 200px;
  @media screen and (max-width: 576px) {
    width: 100%;
    height: 240px;
  }
  @media screen and (min-width: 576px) {
    width: 65%;
  }
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`
export const TrendDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  @media screen and (min-width: 576px) {
    width: 130%;
  }
  @media screen and (min-width: 768px) {
    width: 80%;
  }
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  color: #000000;
  font-size: 20px;
  @media screen and (max-width: 576px) {
    margin-bottom: 0px;
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`
export const ChannelName = styled.p`
  color: #64748b;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 400;
  margin-top: 0px;
  margin-bottom: 0px;
  @media screen and (max-width: 576px) {
    width: 40%;
    font-size: 16px;
    font-weight: 500;
  }
  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`

export const VideoTimerContent = styled.div`
  @media screen and (max-width: 576px) {
    display: flex;
    align-items: center;
    width: 90%;
    margin-top: 0px;
  }
`

export const PublishedContainer = styled.div`
  display: flex;
  align-items: center;
  // border: 1px red solid;
  width: 80%;
`

export const ViewCount = styled.p`
  color: #64748b;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 400;
  padding-right: 10px;
  @media screen and (max-width: 576px) {
    font-size: 16px;
    padding-right: 16px;
  }
  @media screen and (max-width: 768px) {
    font-size: 17px;
  }
`
export const PublishedDate = styled.p`
  color: #64748b;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 400;
  @media screen and (max-width: 576px) {
    font-size: 16px;
  }
  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`
export const LogoContainer = styled.div`
  @media screen and (max-width: 576px) {
    display: flex;
    align-items: center;
  }
`
export const SmLogoImg = styled.img`
  @media screen and (max-width: 576px) {
    height: 65px;
    width: 65px;
    margin-left: 10px;
  }
  @media screen and (min-width: 576px) {
    display: none;
  }
`
export const NavLink = styled(Link)`
  text-decoration: none;
`
