/* eslint-disable no-unused-vars */
import {formatDistanceToNow} from 'date-fns'
import ThemeContext from '../../context/ThemeContext'

import {
  TrendingCard,
  TrendsCard,
  TrendingImage,
  TrendDescription,
  Heading,
  ChannelName,
  PublishedContainer,
  ViewCount,
  VideoTimerContent,
  PublishedDate,
  LogoContainer,
  SmLogoImg,
  NavLink,
} from './styledComponents'

const TrendingVideoCard = props => {
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
    '.',
  )

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

        return (
          <NavLink to={`/videos/${id}`}>
            <TrendingCard>
              <TrendsCard>
                <TrendingImage src={thumbnailUrl} alt="video thumbnail" />
                <LogoContainer>
                  <SmLogoImg src={profileImageUrl} alt="channel logo" />
                  <TrendDescription>
                    <Heading darkMode={isDarkTheme}>{title}</Heading>
                    <VideoTimerContent>
                      <ChannelName> {name} </ChannelName>
                      <PublishedContainer>
                        <ViewCount> {viewCount} views </ViewCount>
                        <PublishedDate>
                          {' '}
                          {cleanedFormattedDistance}{' '}
                        </PublishedDate>
                      </PublishedContainer>
                    </VideoTimerContent>
                  </TrendDescription>
                </LogoContainer>
              </TrendsCard>
            </TrendingCard>
          </NavLink>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default TrendingVideoCard
