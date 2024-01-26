import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SingleVideoContent = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  // border: 1px black solid;
  width: 315px;
  margin: 8px;
  padding: 0px;
  @media screen and (max-width: 576px) {
    width: 100%;
    margin: 0px;
    margin-bottom: 8px;
  }
`

export const VideoImage = styled.img`
  height: 170px;
  width: 315px;
  // margin-bottom: 0px;
  @media screen and (max-width: 576px) {
    height: 220px;
    width: 100%;
  }
`
export const VideoDescriptionContainer = styled.div`
  display: flex;
  width: 95%;
`

export const ChannelLogo = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50px;
  margin: 15px;
  @media screen and (max-width: 576px) {
    margin-top: 15px;
    height: 50px;
    width: 50px;
  }
`

export const VideoDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 5px;
`
export const VideoTitle = styled.p`
  color: #212121;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  @media screen and (max-width: 576px) {
    font-size: 20px;
    margin-bottom: 0px;
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
`

export const VideoTimerContent = styled.div`
  @media screen and (max-width: 576px) {
    display: flex;
    align-items: center;
    width: 80%;
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
  font-size: 13px;
  font-weight: 500;
  padding-right: 10px;
  @media screen and (max-width: 576px) {
    font-size: 16px;
    padding-right: 16px;
  }
`
export const PublishedDate = styled.p`
  color: #64748b;
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 500;
  @media screen and (max-width: 576px) {
    font-size: 16px;
  }
`
export const NavLink = styled(Link)`
  text-decoration: none;
`
