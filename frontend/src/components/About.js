import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaQuoteRight } from "react-icons/fa";
import { setAlertAction } from '../redux/actions';
import { useDispatch } from 'react-redux';

const About = ({ isDarkMode }) => {
const [aboutText, setAboutText]=useState("")
const dispatch = useDispatch()
    const fetchAbout = async (e) => {
        try {
            const res = await axios.get('https://portfolio-website-three-beryl.vercel.app/api/v1/about')
            if (res.data) {
                setAboutText(res.data.about[0].aboutDesc)
            }
        } catch (error) {
            dispatch(setAlertAction({
                success: false,
                message: "Something went wrong"
            }))
        }
    }
    useEffect(()=>{
        fetchAbout()
    }, [])
    return (
        <div className={`about_container hidden  ${isDarkMode ? "darkblack darkbgtext" : ""}`} id='about'>
            <div className="about_underlay"><FaQuoteRight /></div>
            <p className="about_heading">
                ABOUT ME
            </p>
            <div className="about_desc">
                <p className="about_desc_inner">
                    {aboutText}
                </p>
            </div>
        </div>
    )
}

export default About
