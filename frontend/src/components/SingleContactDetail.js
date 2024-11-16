import React from 'react'

const SingleContactDetail = ({ item, isDarkMode }) => {
    return (
        <div >
            <a className={`single_contact_detail ${isDarkMode ? "pureBlackHover" : ""}`} href={item.link} target='blank'>
                <div className="icon">{item.icon}</div>
                <div className="single_detail">
                    <div className="detail_name">{item.name}</div>
                    <div className="detail_detail">{item.detail}</div>
                </div>
            </a>
        </div>
    )
}

export default SingleContactDetail
