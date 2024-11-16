import React, { useEffect } from 'react'
import { RiDownloadLine } from "react-icons/ri";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import heroimg from '../assets/heroimg.png'

const Hero = ({ isDarkMode, setNavStatus }) => {
    const openContact = () => {
        const elementPosition = document.getElementById('contact').getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
            top: elementPosition - 60,
            behavior: 'smooth',
        });
    }

    const handleDownload = () => {
        const cvUrl = '/Srijan Resume.pdf';
        const link = document.createElement('a');
        link.href = cvUrl;
        link.download = 'Srijan_Resume.pdf';
        link.click();
    };
    useEffect(() => {
        setNavStatus(0)
    }, [setNavStatus])

    return (
        <div className={`hero_container ${isDarkMode ? "heroDark" : ""}`} id='home'>
            <div className="hero_container_left">
                <span className="hero_greet">👋 Hi there, I'm Srijan</span>
                <span className="hero_head_black">Crafting Intuitive</span>
                <span className="hero_head_purple"> Digital Experiences</span>
                <div className="hero_buttons">
                    <div className={`hero_button download_btn ${isDarkMode ? "darkblack" : ""}`} onClick={handleDownload}>Download CV <div className="btn_icon"><RiDownloadLine /></div></div>
                    <div className={`hero_button hire_btn ${isDarkMode ? "darkblackborder" : ""}`} onClick={openContact}>Hire me <div className="btn_icon"><MdKeyboardDoubleArrowRight /></div></div>
                </div>
            </div>
            <div className="hero_container_right">
                <img src={heroimg} alt="" />
                <div className={`hero_underlay ${isDarkMode ? "darkblack" : ""}`}></div>
            </div>
        </div>
    )
}
export default Hero
