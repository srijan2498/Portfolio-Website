import React from 'react'

const SingleResume = ({ item, isDarkMode }) => {
  return (
    <div className='outter_single_resume_container'>
      <div className={`single_resume_container ${isDarkMode ? "lightGray" : ""}`}>
        <div className="duration">{`${item.startDate} - ${item.endDate}`}</div>
        <div className="degree">{item.designation}</div>
        <div className="organization">{item.company}</div>
      </div>
    </div>
  )
}

export default SingleResume
