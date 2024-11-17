import React, { useEffect, useState } from 'react'
import SingleResume from './SingleResume'
import { IoSchool } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { setAlertAction } from '../redux/actions';
import axios from 'axios'

const Resume = ({ isDarkMode }) => {

    const [resume, setResume] = useState([])
    const dispatch = useDispatch()
    const fetchExp = async () => {
        try {
            const res = await axios.get('https://portfolio-website-api-psi.vercel.app/api/v1/experience/allExperiences')
            if (res.data) {
                setResume(res.data.experiences)
            }
        } catch (error) {
            dispatch(setAlertAction({
                success: false,
                message: "Something went wrong"
            }))
        }
    }

    useEffect(() => {
        fetchExp()
    }, [])

    return ( 
        <div className='resume_container' id='resume'>
            <div className={`resume_container_heading ${isDarkMode ? "darkstroke" : ""}`}>My Resume</div>
            <div className="resume_container_desc">I believe that consistent hard work and a commitment to continuous learning are key to self-improvement and achieving my career goals.</div>
            <div className="resume hidden" id='resume_in'>
                <div className={`resume_inner_container ${isDarkMode ? "darkblack darkbgtext" : ""}`}>
                    <div className={`resume_head ${isDarkMode ? "darkblack darkbgtext" : ""}`} ><div className="resume_icon"><IoSchool /></div>Education</div>
                    <div className="resume_items">
                        {resume.length > 0 && resume.filter((edu) => edu.expType=="School").map((item, index) => {
                            return <SingleResume item={item} key={index} isDarkMode={isDarkMode} />
                        })}
                    </div>
                </div>
                <div className={`resume_inner_container ${isDarkMode ? "darkblack darkbgtext" : ""}`}>
                    <div className={`resume_head ${isDarkMode ? "darkblack darkbgtext" : ""}`} ><div className="resume_icon"><FaLaptopCode /></div>Experience</div>
                    <div className="resume_items">
                        {resume.length > 0 && resume.filter((edu) => edu.expType == "Company").map((item, index) => {
                            return <SingleResume item={item} key={index} />
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume
