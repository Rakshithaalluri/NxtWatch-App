import styled from 'styled-components'

export const HomeContainer = styled.div`
  color: #000000;
  display: flex;
  width: 100%;
  @media screen and (max-width: 576px) {
    justify-content: center;
  }
`
export const Rendering = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 200px;
  margin-top: 83px;
  width: 100%;
  @media screen and (max-width: 576px) {
    margin-left: 0px;
  }
`

export const BannerVideosContainer = styled.div`
  display: flex;
  //flex-direction: column;
  width: 100%;
  @media screen and (max-width: 576px) {
    width: 100%;
  }
`

export const BackGroundContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  height: 40%;
  //border: 1px red solid;
`

export const NxtWatchPremium = styled.div`
  display: flex;
  flex-direction: column;
  padding: 18px;
  width: 40%;
  // border: 1px red solid;
  @media screen and (max-width: 576px) {
    width: 60%;
  }
`
export const NxtWatchImage = styled.img`
  height: 30px;
  width: 130px;
`

export const PremiumText = styled.p`
  color: #000000;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 400;
`
export const GetItNowButton = styled.button`
  height: 40px;
  width: 120px;
  border: 1.5px #000000 solid;
  color: #000000;
  font-family: 'Roboto';
  font-size: 17px;
  font-weight: 500;
  background-color: transparent;
`
export const RemoveButton = styled.button`
  height: 5px;
  width: 5px;
  margin: 15px;
  outline: none;
  border: none;
  background-color: transparent;
`

export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f8fafc;
  border-radius: 0px;
  padding-left: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-right: 16px;
`

export const SearchInput = styled.input`
  background-color: #f1f5f9;
  color: #0f172a;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  border: 1px #cccccc solid;
  flex-grow: 1;
  height: 33px;
  width: 80px;
  max-width: 380px;
  background-color: #ffffff;
  padding-left: 15px;
  border-radius: 2px;
`
export const VideosContainer = styled.div`
  display: flex;
  padding-top: 0px;
  //padding-left: 18px;
  // border: 1px black solid;
  background-color: #f8fafc;
  color: #000000;
  @media screen and (max-width: 576px) {
    width: 100%;
  }
`

export const VideosListContainer = styled.ul`
  display: flex;
  justify-content: center;
  width: 100%;
  //border: 1px red solid;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0px;
  padding-top: 0px;
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

export const SearchButton = styled.button`
  height: 32px;
  width: 55px;
  background-color: #f1f5f9;
  border: 1px #cbd5e1 solid;
`
