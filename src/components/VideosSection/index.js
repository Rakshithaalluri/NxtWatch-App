/* eslint-disable import/named */

import {formatDistanceToNow} from 'date-fns'

import ThemeContext from '../../context/ThemeContext'

import {
  SingleVideoContent,
  VideoImage,
  VideoDescriptionContainer,
  VideoDescription,
  ChannelLogo,
  VideoTitle,
  ChannelName,
  PublishedContainer,
  ViewCount,
  PublishedDate,
  VideoTimerContent,
  NavLink,
} from './styledComponents'

const VideosSection = props => {
  const {videoDetails} = props

  const formattedDistance = formatDistanceToNow(
    new Date(videoDetails.publishedAt),
    {
      addSuffix: false,
    },
  )

  const cleanedFormattedDistance = formattedDistance.replace(
    /(?:almost|over|about)\s+/i,
    '',
  )

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        //  const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

        return (
          <NavLink to={`/videos/${videoDetails.id}`}>
            <SingleVideoContent darkMode={isDarkTheme}>
              <VideoImage
                src={videoDetails.thumbnailUrl}
                alt="video thumbnail"
              />
              <VideoDescriptionContainer>
                <ChannelLogo
                  src={videoDetails.profileImageUrl}
                  alt="channel logo"
                />
                <VideoDescription>
                  <VideoTitle darkMode={isDarkTheme}>
                    {' '}
                    {videoDetails.title}{' '}
                  </VideoTitle>
                  <VideoTimerContent>
                    <ChannelName darkMode={isDarkTheme}>
                      {' '}
                      {videoDetails.name}{' '}
                    </ChannelName>
                    <PublishedContainer>
                      <ViewCount> {videoDetails.viewCount} views </ViewCount>
                      <PublishedDate>
                        {' '}
                        {cleanedFormattedDistance}{' '}
                      </PublishedDate>
                    </PublishedContainer>
                  </VideoTimerContent>
                </VideoDescription>
              </VideoDescriptionContainer>
            </SingleVideoContent>
          </NavLink>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default VideosSection
