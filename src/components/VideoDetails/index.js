import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {formatDistanceToNow} from 'date-fns'
import {BiLike, BiDislike} from 'react-icons/bi'
import {RiMenuAddLine} from 'react-icons/ri'
import ReactPlayer from 'react-player'
import ThemeContext from '../../context/ThemeContext'
import SavedVideosContext from '../../context/SavedVideosContext'
import Header from '../Header'
import SideBar from '../SideBar'

import {
  TrendingContainer,
  MainBody,
  SideBarContainer,
  LoaderContainer,
  FailureContainer,
  FailureImg,
  FailureText,
  RetryButton,
  VideoItemDetailsContainer,
  PlayerContainer,
  VideoDetailsContainer,
  VideoTextContainer,
  VideoTitle,
  ViewsPostedContainer,
  LikesViewsContainer,
  ViewsText,
  Button,
  ChannelLogo,
  ChannelDetails,
  ChannelDetailsText,
  ChannelDetailsText2,
  VideoDescriptionText,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoDetails extends Component {
  state = {
    videoDetails: {},
    apiStatus: apiStatusConstants.initial,
    like: false,
    dislike: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)

    const jwtToken = Cookies.get('jwt_token')

    const videoUrl = `https://apis.ccbp.in/videos/${id}`
    console.log(videoUrl)
    const options = {
      headers: {
        authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(videoUrl, options)
    const data = await response.json()
    console.log(response)
    if (response.ok === true) {
      const updatedData = {
        videoDetails: data.video_details,
      }
      const {videoDetails} = updatedData
      const updated = {
        id: videoDetails.id,
        description: videoDetails.description,
        publishedAt: videoDetails.published_at,
        thumbnailUrl: videoDetails.thumbnail_url,
        title: videoDetails.title,
        videoUrl: videoDetails.video_url,
        viewCount: videoDetails.view_count,
        channel: {
          name: videoDetails.channel.name,
          profileImageUrl: videoDetails.channel.profile_image_url,
          subscriberCount: videoDetails.channel.subscriber_count,
        },
      }
      this.setState({
        videoDetails: updated,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  loader = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <LoaderContainer className="loader-container" data-testid="loader">
            <Loader
              type="ThreeDots"
              color={isDarkTheme ? '#ffffff' : '#000000'}
              height="50"
              width="50"
            />
          </LoaderContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  failureView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const theme = isDarkTheme ? 'dark' : 'light'
        const imgUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <FailureContainer>
            <FailureImg src={imgUrl} alt="failure view" />

            <FailureText theme={theme}>Oops! Something Went Wrong</FailureText>
            <FailureText as="p" theme={theme}>
              We are having some trouble to complete your request. Please try
              again.
            </FailureText>
            <RetryButton type="button" onClick={this.getVideoDetails}>
              Retry
            </RetryButton>
          </FailureContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  updateLikeState = () => {
    this.setState(prevState => ({like: !prevState.like, dislike: false}))
  }

  updateDislikeState = () => {
    this.setState(prevState => ({dislike: !prevState.dislike, like: false}))
  }

  successView = () => {
    const {videoDetails, like, dislike} = this.state

    const {
      publishedAt,
      description,
      title,
      videoUrl,
      id,
      viewCount,
      channel,
    } = videoDetails

    const {profileImageUrl, name, subscriberCount} = channel

    let postedAt = formatDistanceToNow(new Date(publishedAt))
    const postedAtList = postedAt.split(' ')

    if (postedAtList.length === 3) {
      postedAtList.shift()
      postedAt = postedAtList.join(' ')
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const theme = isDarkTheme ? 'dark' : 'light'

          const likeIsActive = like ? 'active' : 'not-active'
          const dislikeIsActive = dislike ? 'active' : 'not-active'

          return (
            <VideoDetailsContainer>
              <PlayerContainer>
                <ReactPlayer
                  url={videoUrl}
                  controls
                  width="100%"
                  height="100%"
                />
              </PlayerContainer>
              <VideoTextContainer>
                <VideoTitle theme={theme}>{title}</VideoTitle>
                <LikesViewsContainer>
                  <ViewsPostedContainer>
                    <ViewsText>{viewCount} views</ViewsText>
                    <ViewsText> {postedAt} </ViewsText>
                  </ViewsPostedContainer>
                  <div>
                    <Button
                      type="button"
                      theme={likeIsActive}
                      onClick={this.updateLikeState}
                    >
                      <BiLike size={20} style={{paddingTop: '6px'}} />
                      Like
                    </Button>
                    <Button
                      type="button"
                      theme={dislikeIsActive}
                      onClick={this.updateDislikeState}
                    >
                      <BiDislike size={20} style={{paddingTop: '6px'}} />
                      Dislike
                    </Button>
                    <SavedVideosContext.Consumer>
                      {val => {
                        const {updateSave, savedVideosList} = val

                        const present = savedVideosList.find(
                          each => each.id === id,
                        )
                        const saveIsActive =
                          present !== undefined ? 'active' : 'not-active'
                        const saveText =
                          present !== undefined ? 'Saved' : 'Save'
                        return (
                          <Button
                            type="button"
                            theme={saveIsActive}
                            onClick={() => updateSave(videoDetails)}
                          >
                            <RiMenuAddLine
                              size={20}
                              style={{paddingTop: '6px'}}
                            />
                            {saveText}
                          </Button>
                        )
                      }}
                    </SavedVideosContext.Consumer>
                  </div>
                </LikesViewsContainer>
                <hr />
                <ChannelDetails>
                  <ChannelLogo src={profileImageUrl} alt="channel logo" />
                  <div>
                    <ChannelDetailsText theme={theme}>
                      {name}
                    </ChannelDetailsText>
                    <ChannelDetailsText2>{subscriberCount}</ChannelDetailsText2>
                  </div>
                </ChannelDetails>
                <VideoDescriptionText theme={theme}>
                  {description}
                </VideoDescriptionText>
              </VideoTextContainer>
            </VideoDetailsContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  checkApiStatus = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.successView()
      case apiStatusConstants.failure:
        return this.failureView()
      case apiStatusConstants.inProgress:
        return this.loader()

      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const theme = isDarkTheme ? 'dark' : 'light'
          return (
            <TrendingContainer>
              <MainBody>
                <Header />
                <SideBarContainer>
                  <SideBar />
                </SideBarContainer>
                <VideoItemDetailsContainer
                  data-testid="videoItemDetails"
                  theme={theme}
                >
                  {this.checkApiStatus()}
                </VideoItemDetailsContainer>
              </MainBody>
            </TrendingContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoDetails
