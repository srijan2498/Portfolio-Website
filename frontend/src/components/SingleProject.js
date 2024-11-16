import React from 'react'
import { MdArrowOutward } from "react-icons/md";

const SingleProject = ({ item, isDarkMode }) => {

  const handleOnClickUrl = (url, projectTitle) => {
    if (url.length > 0) {
      window.open(url, '_Blank')
    }
    else if (projectTitle === "Portfolio Website") {
      alert("This website only.")
    }
    else {
      alert("Project not live yet.")
    }
  }
  return (
    <div className={`outter_single_project_container ${isDarkMode ? "darkblack" : ""}`}>
      <div className={`single_project_container ${isDarkMode ? "darkblack darkbgtext" : ""}`}>
        <div className="single_project_img_container">
          <div className="single_project_img" style={{ backgroundImage: `url(${item.image})` }}></div>
        </div>
        <div className="single_project_title">{item.projectTitle}</div>
        <div className="skills_in_proj" style={{display: "flex", gap:"3px"}}>
          {item.technologyUsed.map((tech, i) => {
            return <div className="tech_skill" key={i} style={{ backgroundColor: "#7209b7", padding: "5px", borderRadius: "5px",  color: "#fff", fontSize: "12px"}}>{tech}</div>
          })}
        </div>
        <div onClick={() => handleOnClickUrl(item.liveLink, item.projectTitle)} className={`project_more_info_btn ${isDarkMode ? " lightGray blacktext" : ""}`}><MdArrowOutward /></div>
      </div>
    </div>
  )
}

export default SingleProject
