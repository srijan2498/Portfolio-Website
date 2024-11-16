import React from 'react'

const Loading = ({ isDarkMode }) => {
  return (
      <div className={`loading_container ${isDarkMode ? "pureBlack" : ""}`}>
      <div className="loading"></div>
    </div>
  )
}

export default Loading
