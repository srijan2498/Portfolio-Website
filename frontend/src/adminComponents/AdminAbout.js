import React, { useEffect } from 'react'

const AdminAbout = ({ setNavStatus, isDarkMode }) => {
    useEffect(() => {
        setNavStatus(2)
    }, [setNavStatus])
  return (
    <div className={`adin_about_container  ${isDarkMode ? "pureBlack" : ""}`}>
      
    </div>
  )
}

export default AdminAbout
