import React, { useState } from 'react'
import { MdOutlineWbSunny } from "react-icons/md";
import { GoMoon } from "react-icons/go";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Navbar = ({ isDarkMode, toggleDarkMode, navStatus }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const openHome = () => {
        const elementPosition = document.getElementById('home').getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
            top: elementPosition - 60,
            behavior: 'smooth',
        });
    }
    const openAbout = () => {
        const elementPosition = document.getElementById('about').getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
            top: elementPosition - 140,
            behavior: 'smooth',
        });
    }
    const openSkill = () => {
        const elementPosition = document.getElementById('skill').getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
            top: elementPosition - 60,
            behavior: 'smooth',
        });
    }
    const openProject = () => {
        const elementPosition = document.getElementById('project').getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
            top: elementPosition - 60,
            behavior: 'smooth',
        });
    }
    const openResume = () => {
        const elementPosition = document.getElementById('resume').getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
            top: elementPosition - 60,
            behavior: 'smooth',
        });
    }
    const openContact = () => {
        const elementPosition = document.getElementById('contact').getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
            top: elementPosition - 60,
            behavior: 'smooth',
        });
    }

    function updateInfo() {
        const viewportHeight = window.innerHeight;
        const scrollPosition = window.scrollY || window.pageYOffset;

        let aboutHeight = document.getElementById('about')?.getBoundingClientRect().top + window.pageYOffset;

        if (aboutHeight <= scrollPosition * 1.75) {
            document.getElementById("about").classList.add('visible');
        }

        let resumeHeight = document.getElementById('resume')?.getBoundingClientRect().top + window.pageYOffset;

        if (resumeHeight <= scrollPosition * 1.2) {
            document.getElementById("resume_in").classList.add('visible');
        }

    }
    window.addEventListener('scroll', updateInfo);
    window.addEventListener('resize', updateInfo);

    const [isSideBarOpen, setIsSideBarOpen] = useState(true)

    const toggleSideBar = () => {
        setIsSideBarOpen(!isSideBarOpen)
    }
    const logoutUser=()=>{
        localStorage.removeItem("portfolio_token")
        navigate('/')
    }
    return (
        <div className={`navbar_container ${isDarkMode ? "darkblack" : ""}`}>
            <span className="logo" onClick={() => navigate('/')}>Srijan.</span>
            {navStatus == 0 ? <ul className="nav_items">
                <li className="nav_item" onClick={openHome}>Home</li>
                <li className="nav_item" onClick={openAbout}>About</li>
                <li className="nav_item" onClick={openSkill}>Skills</li>
                <li className="nav_item" onClick={openProject}>Project</li>
                <li className="nav_item" onClick={openResume}>Resume</li>
                <li className="nav_item" onClick={openContact}>Contact</li>
                </ul> : navStatus == 2 ? <ul className="nav_items">
                <li className="nav_item" onClick={openAbout}>About</li>
                <li className="nav_item" onClick={openSkill}>Skills</li>
                <li className="nav_item" onClick={openProject}>Projects</li>
                <li className="nav_item" onClick={openResume}>Education</li>
                <li className="nav_item" onClick={openContact}>Experience</li>
                <li className="nav_item" onClick={logoutUser}>Logout</li>
                </ul> : ""
            }

            <span className={`color_change_button ${isDarkMode ? "lightblack" : ""}`} onClick={toggleDarkMode}>{isDarkMode ? <MdOutlineWbSunny /> : <GoMoon />}</span>

            <div className={`ham_icon  ${isDarkMode ? "lightblack" : ""}`} onClick={toggleSideBar}><GiHamburgerMenu /></div>

            <div className={`sidenav  ${isDarkMode ? "darkblack" : ""}`} style={{ width: `${isSideBarOpen ? "0px" : "300px"}` }}>
                <ul className="side_nav_items" onClick={toggleSideBar}>
                    <li className="side_nav_item" onClick={openHome}>Home</li>
                    <li className="side_nav_item" onClick={openAbout}>About</li>
                    <li className="side_nav_item" onClick={openSkill}>Skills</li>
                    <li className="side_nav_item" onClick={openProject}>Project</li>
                    <li className="side_nav_item" onClick={openResume}>Resume</li>
                    <li className="side_nav_item" onClick={openContact}>Contact</li>
                    <li className={`side_nav_item_btn   ${isDarkMode ? "lightblack" : ""}`}><span className={` ${isDarkMode ? "lightblack" : ""}`} onClick={toggleDarkMode}>{isDarkMode ? <MdOutlineWbSunny /> : <GoMoon />}</span></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
