/* eslint-disable import/named */
import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {HiFire} from 'react-icons/hi'
import Header from '../Header'
import ThemeContext from '../../context/ThemeContext'
import TrendingVideoCard from '../TrendingVideoCard'
import SideBar from '../SideBar'

import {
  TrendingContainer,
  MainBody,
  SideBarContainer,
  TrendingVideoContainer,
  TrendingMenuContainer,
  IconContainer,
  MenuHeading,
  TrendingVideos,
  FailureDescription,
  FailureHeading,
  FailureImage,
  FailureSearchContainer,
  RetryButton,
  LoaderContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {
    videosList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount = () => {
    this.getAllVideos()
  }

  getAllVideos = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')

    const url = `https://apis.ccbp.in/videos/trending`
    const options = {
      headers: {
        authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)
    console.log(response)
    if (response.ok) {
      const data = await response.json()
      console.log(data)
      const updatedData = data.videos.map(eachVideo => ({
        channel: {
          name: eachVideo.channel.name,
          profileImageUrl: eachVideo.channel.profile_image_url,
        },
        id: eachVideo.id,
        publishedAt: eachVideo.published_at,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        videosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    }
    if (response.status === 401) {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderFailureView = () => (
    <FailureSearchContainer>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <FailureHeading> Oops! Something Went Wrong </FailureHeading>
      <FailureDescription>
        {' '}
        We are having trouble to complete your request. Please try again.{' '}
      </FailureDescription>
      <RetryButton type="button" onClick={this.getAllVideos}>
        {' '}
        Retry{' '}
      </RetryButton>
    </FailureSearchContainer>
  )

  renderLoadingView = () => (
    <LoaderContainer className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderContainer>
  )

  renderSuccessView = () => {
    const {videosList} = this.state

    return (
      <TrendingVideos>
        {videosList.map(eachVideo => (
          <TrendingVideoCard key={eachVideo.id} videoDetails={eachVideo} />
        ))}
      </TrendingVideos>
    )
  }

  renderVideos = () => {
    const {apiStatus} = this.state
    console.log(('apiStatus:', apiStatus))
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
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

          const bgColor = isDarkTheme ? '#0f0f0f' : '#f4f4f4'
          //  const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
          return (
            <TrendingContainer>
              <MainBody>
                <Header />
                <SideBarContainer>
                  <SideBar />
                </SideBarContainer>
                <TrendingVideoContainer
                  data-testid="trending"
                  bgColor={bgColor}
                >
                  <TrendingMenuContainer darkMode={isDarkTheme}>
                    <IconContainer>
                      <HiFire size={34} color="#ff0b37" />
                    </IconContainer>
                    <MenuHeading darkMode={isDarkTheme}>Trending</MenuHeading>
                  </TrendingMenuContainer>
                  {this.renderVideos()}
                </TrendingVideoContainer>
              </MainBody>
            </TrendingContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
