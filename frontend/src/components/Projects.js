import React, { useEffect, useState } from 'react'
import taxi1 from "../assets/taxibooking1.png"
import SingleProject from './SingleProject'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setAlertAction } from '../redux/actions'

const Projects = ({ isDarkMode }) => {

    const [projects, setprojects] = useState([])
    const dispatch = useDispatch()
    const fetchProjects = async() => {
        try {
            const res = await axios.get('http://localhost:8080/api/v1/project/allProjects')
            if(res.data){
                setprojects(res.data.projects)
            }
        } catch (error) {
            dispatch(setAlertAction({
                success: false,
                message: "Something went wrong"
            }))
        }
    }

    useEffect(()=>{
        fetchProjects()
    }, [])

    return (
        <div className='projects_container' id='project'>
            <div className="anime_between_skill_project"></div>
            <div className="project_heading">My Latest Works</div>
            <div className="project_subheading">I am dedicated to honing my skills through hard work and daily learning, striving to grow and achieve my career aspirations.</div>
            <div className="my_project_container">
                {projects.map((item, index) => {
                    return <SingleProject key={index} item={item} isDarkMode={isDarkMode} />
                })}
            </div>
        </div>
    )
}

export default Projects
