import React from 'react'

const Footer = ({ isDarkMode }) => {
  const year = new Date().getFullYear()
  return (
    <div className={`footer_container ${isDarkMode ? "pureBlack" : ""}`}>
      Srijan © {year}
    </div>
  )
}

export default Footer
