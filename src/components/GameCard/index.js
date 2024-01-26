/* eslint-disable import/extensions */
import ThemeContext from '../../context/ThemeContext'

import {
  Game,
  GameContent,
  GameImage,
  GameTitle,
  GameViews,
  NavLink,
} from './styledComponents'

const GameCard = props => {
  const {gameDetails} = props
  const {id, thumbnailUrl, title, viewCount} = gameDetails

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

        return (
          <NavLink to={`/videos/${id}`}>
            <Game>
              <GameContent>
                <GameImage src={thumbnailUrl} alt="name" />
                <GameTitle color={textColor}> {title} </GameTitle>
                <GameViews> {viewCount} Watching Worldwide </GameViews>
              </GameContent>
            </Game>
          </NavLink>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default GameCard
