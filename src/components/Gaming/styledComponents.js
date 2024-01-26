import styled from 'styled-components'

export const GamingContainer = styled.div`
  background-color: #f9f9f9;
`

export const MainBody = styled.div`
  display: flex;
  // border: 1px red solid;
`
export const SideBarContainer = styled.div`
  width: 16%;
  margin-top: 0px;
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`

export const TrendingVideoContainer = styled.div`
  height: 100%;
  width: 100%;
  padding-top: 80px;
`
export const TrendingMenuContainer = styled.div`
  display: flex;
  align-items: center;
  height: 130px;
  width: 120%;
  padding-left: 40px;
  // border: 1px black solid;
  background-color: #f4f4f4;
`
export const IconContainer = styled.div`
  padding: 23px;
  border-radius: 40px;
  margin-right: 20px;
  margin-left: 40px;
  background-color: #e2e8f0;
`

export const MenuHeading = styled.h1`
  color: #0f0f0f;
  font-family: 'Roboto';
`
export const GamesContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 0px;
  width: 110%;
  //border: 1px red solid;
  margin-left: 40px;
  @media screen and (max-width: 576px) {
    margin-left: 20px;
  }
`
export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const FailureImage = styled.img`
  height: 330px;
  width: 400px;
`
export const FailureHeading = styled.h1`
  color: #000000;
  font-size: 23px;
  font-family: 'roboto';
  font-weight: 600;
`

export const FailureDescription = styled.p`
  color: #475569;
  font-size: 16px;
  font-family: 'roboto';
  font-weight: 400;
`

export const RetryButton = styled.button`
  color: #ffffff;
  font-size: 12px;
  font-family: 'roboto';
  font-weight: 400;
  background-color: #4f46e5;
  border: none;
  outline: none;
  cursor: pointer;
  height: 30px;
  width: 90px;
  border-radius: 6px;
`

export const LoaderContainer = styled.div`
  text-align: center;
`
