import React, { useEffect, useState } from 'react'
import SingleSkill from './SingleSkill'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { setAlertAction } from '../redux/actions'

const Skills = ({ isDarkMode }) => {

    const [mySkillsArr, setMySkillsArr] = useState([])
    const dispatch = useDispatch()
    const fetchSkills = async () => {
        try {
            const res = await axios.get('https://portfolio-website-api-psi.vercel.app/api/v1/skill/allSkills')
            if (res.data) {
                setMySkillsArr(res.data.skills)
            }
        } catch (error) {
            dispatch(setAlertAction({
                success: false,
                message: "Something went wrong"
            }))
        }
    }

    useEffect(() => {
        fetchSkills()
    }, [])
    
    return (
        <div className={`skills_container ${isDarkMode ? "pureBlack" : ""}`} id='skill'>
            <div className="skills_left">
                <div className="skills_heading">My Skills</div>
                <div className="skills_subheading">You Can Imagine I Can Do</div>
            </div>
            <div className="skills_right">
                {mySkillsArr.map((item, index) => {
                    return <SingleSkill item={item} key={index} />
                })}
            </div>
        </div>
    )
}

export default Skills
