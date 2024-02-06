import React from 'react'

const ThemeAndVideoContext = React.createContext({
  isDarkTheme: false,
  savedVideosList: [],
  toggleTheme: () => {},
  savedVideoButton: () => {},
})

export default ThemeAndVideoContext
