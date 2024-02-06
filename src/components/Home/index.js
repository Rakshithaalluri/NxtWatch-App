/* eslint-disable import/named */
import {Component} from 'react'
import Cookies from 'js-cookie'
import {AiOutlineClose} from 'react-icons/ai'
import Loader from 'react-loader-spinner'
import {BsSearch} from 'react-icons/bs'

import VideosSection from '../VideosSection'
import Header from '../Header'
import SideBar from '../SideBar'

import {
  HomeContainer,
  Rendering,
  VideosContainer,
  BackGroundContainer,
  NxtWatchPremium,
  NxtWatchImage,
  PremiumText,
  GetItNowButton,
  RemoveButton,
  SearchInputContainer,
  SearchInput,
  VideosListContainer,
  FailureSearchContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  RetryButton,
  SearchButton,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    videosList: [],
    apiStatus: apiStatusConstants.initial,
    searchInput: '',
    showBanner: true,
  }

  componentDidMount = () => {
    this.getAllVideos()
  }

  getAllVideos = async () => {
    const {searchInput} = this.state
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')

    const homeVideosApiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(homeVideosApiUrl, options)
    // console.log(response)
    if (response.ok) {
      const data = await response.json()
      // console.log(data)
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

  closeBanner = () => {
    this.setState({showBanner: false})
  }

  renderBannerContainer = () => {
    const {showBanner} = this.state

    return showBanner ? (
      <BackGroundContainer data-testid="banner">
        <NxtWatchPremium>
          <NxtWatchImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="nxt watch logo"
          />
          <PremiumText>
            {' '}
            Buy Nxt Watch Premium prepaid plans with UPI{' '}
          </PremiumText>
          <GetItNowButton type="button"> GET IT NOW </GetItNowButton>
        </NxtWatchPremium>
        <RemoveButton
          type="button"
          data-testid="close"
          onClick={this.closeBanner}
        >
          {' '}
          <AiOutlineClose size="15" />
        </RemoveButton>
      </BackGroundContainer>
    ) : null
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onEnterKeyDown = event => {
    if (event.key === 'Enter') {
      this.getAllVideos()
    }
  }

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  renderSearchInput = () => {
    const {searchInput} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <SearchInputContainer darkMode={isDarkTheme}>
              <SearchInput
                value={searchInput}
                type="search"
                className="search-input"
                placeholder="Search"
                onChange={this.onChangeSearchInput}
                onKeyDown={this.onEnterKeyDown}
                darkMode={isDarkTheme}
              />
              <SearchButton
                type="button"
                data-testid="searchButton"
                darkMode={isDarkTheme}
                onClick={this.onSearchInput}
              >
                <BsSearch size="14" />
              </SearchButton>
            </SearchInputContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderSearchBannerView = () => (
    <>
      {this.renderBannerContainer()}
      {this.renderSearchInput()}
    </>
  )

  renderEmptySearchResults = () => (
    <FailureSearchContainer>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <FailureHeading> No Search Results Found </FailureHeading>
      <FailureDescription>
        Try different key words or remove search filter
      </FailureDescription>
      <RetryButton type="button" onClick={this.getAllVideos}>
        {' '}
        Retry{' '}
      </RetryButton>
    </FailureSearchContainer>
  )

  renderFailureView = () => (
    <FailureSearchContainer>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <FailureHeading> Oops! Something Went Wrong </FailureHeading>
      <FailureDescription>
        {' '}
        We are having some trouble to complete your request. Please try again.{' '}
      </FailureDescription>
      <RetryButton type="button" onClick={this.getAllVideos}>
        {' '}
        Retry{' '}
      </RetryButton>
    </FailureSearchContainer>
  )

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderVideosContainer = () => {
    const {videosList} = this.state
    if (videosList.length === 0) {
      return this.renderEmptySearchResults()
    }
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <VideosContainer darkMode={isDarkTheme}>
              <VideosListContainer>
                {videosList.map(eachVideo => (
                  <VideosSection key={eachVideo.id} videoDetails={eachVideo} />
                ))}
              </VideosListContainer>
            </VideosContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderVideos = () => {
    const {apiStatus} = this.state
    // console.log(('apiStatus:', apiStatus))
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideosContainer()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    // const {videosList} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <>
              <Header />
              <HomeContainer darkMode={isDarkTheme} data-testid="home">
                <SideBar />
                <Rendering>
                  {this.renderSearchBannerView()}
                  {this.renderVideos()}
                </Rendering>
              </HomeContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
