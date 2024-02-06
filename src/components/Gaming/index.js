/* eslint-disable import/extensions */
import {Component} from 'react'
import {SiYoutubegaming} from 'react-icons/si'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import SideBar from '../SideBar'
import ThemeContext from '../../context/ThemeContext'

import GameCard from '../GameCard'

import {
  GamingContainer,
  MainBody,
  SideBarContainer,
  TrendingVideoContainer,
  TrendingMenuContainer,
  IconContainer,
  MenuHeading,
  GamesContainer,
  FailureContainer,
  FailureHeading,
  FailureDescription,
  FailureImage,
  RetryButton,
  LoaderContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {
    gamesList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getGamingList()
  }

  getGamingList = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    console.log(response)
    if (response.ok) {
      const data = await response.json()
      // console.log(data)
      const updatedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        gamesList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderGameFailureView = () => (
    <FailureContainer>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <FailureHeading> Oops! Something Went Wrong </FailureHeading>
      <FailureDescription>
        {' '}
        We are having trouble to complete your request. Please try again.{' '}
      </FailureDescription>
      <RetryButton type="button" onClick={this.getGamingList}>
        {' '}
        Retry{' '}
      </RetryButton>
    </FailureContainer>
  )

  renderLoadingView = () => (
    <LoaderContainer className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </LoaderContainer>
  )

  renderGames = () => {
    const {gamesList} = this.state
    return (
      <GamesContainer>
        {gamesList.map(eachGame => (
          <GameCard key={eachGame.id} gameDetails={eachGame} />
        ))}
      </GamesContainer>
    )
  }

  renderGamesList = () => {
    const {apiStatus} = this.state
    // console.log(('apiStatus:', apiStatus))
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderGames()
      case apiStatusConstants.failure:
        return this.renderGameFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          // const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
          //   const textColor = isDarkTheme ? '#f9f9f9' : ''

          return (
            <GamingContainer>
              <MainBody>
                <Header />
                <SideBarContainer>
                  <SideBar />
                </SideBarContainer>
                <TrendingVideoContainer
                  data-testid="gaming"
                  darkMode={isDarkTheme}
                >
                  <TrendingMenuContainer darkMode={isDarkTheme}>
                    <IconContainer>
                      <SiYoutubegaming size={34} color="#ff0b37" />
                    </IconContainer>
                    <MenuHeading darkMode={isDarkTheme}>Gaming</MenuHeading>
                  </TrendingMenuContainer>
                  {this.renderGamesList()}
                </TrendingVideoContainer>
              </MainBody>
            </GamingContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Gaming
