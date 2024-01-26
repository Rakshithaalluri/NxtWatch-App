import styled from 'styled-components'

export const TrendingContainer = styled.div`
  background-color: '#f4f4f4';
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
  width: 200%;
  padding-top: 60px;
  background-color: #f4f4f4;
`
export const TrendingMenuContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  height: 120px;
  padding-left: 80px;
  background-color: #ebebeb;
  @media screen and (max-width: 576px) {
    padding-left: 0px;
  }
`
export const IconContainer = styled.div`
  padding: 23px;
  border-radius: 40px;
  margin-right: 20px;
  margin-left: 40px;
  background-color: #e2e8f0;
  @media screen and (max-width: 576px) {
    margin-left: 20px;
  }
`

export const MenuHeading = styled.h1`
  color: #0f0f0f;
  font-family: 'Roboto';
`
export const TrendingVideos = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  margin-top: 0px;
  padding: 0px;
  @media screen and (max-width: 576px) {
    margin-left: 0px;
  }
`
export const FailureSearchContainer = styled.div`
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
