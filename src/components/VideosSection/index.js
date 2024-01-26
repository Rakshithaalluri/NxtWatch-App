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
  const {
    channel: {name, profileImageUrl},
    id,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
  } = videoDetails

  const formattedDistance = formatDistanceToNow(new Date(publishedAt), {
    addSuffix: false,
  })

  const cleanedFormattedDistance = formattedDistance.replace(
    /(?:almost|over|about)\s+/i,
    '',
  )

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

        return (
          <NavLink to={`/videos/${id}`}>
            <SingleVideoContent>
              <VideoImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoDescriptionContainer>
                <ChannelLogo src={profileImageUrl} alt="channel logo" />
                <VideoDescription>
                  <VideoTitle color={textColor}> {title} </VideoTitle>
                  <VideoTimerContent>
                    <ChannelName color={textColor}> {name} </ChannelName>
                    <PublishedContainer>
                      <ViewCount color={textColor}>
                        {' '}
                        {viewCount} views{' '}
                      </ViewCount>
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
