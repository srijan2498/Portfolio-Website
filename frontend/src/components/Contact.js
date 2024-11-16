import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaHackerrank } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import SingleContactDetail from './SingleContactDetail';
import { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = ({ isDarkMode }) => {
    useEffect(() => emailjs.init("8-YWEmm9A7Q9PqD7T"), []);
    const emailRef = useRef();
    const nameRef = useRef();
    const phoneRef = useRef();
    const messageRef = useRef();
    const subRef = useRef();
    const [loading, setLoading] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const serviceId = "service_un5vwu8";
        const templateId = "template_0dm1uie";
        try {
            setLoading(true);
            await emailjs.send(serviceId, templateId, {
                from_name: nameRef.current.value,
                user_email: emailRef.current.value,
                message: messageRef.current.value,
                user_phone: phoneRef.current.value,
                subject: subRef.current.value,
            });
            alert("Email sent!");
            nameRef.current.value=""
            emailRef.current.value=""
            messageRef.current.value=""
            phoneRef.current.value=""
            subRef.current.value=""
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };
    const contact_details = [
        {
            name: "Phone Number",
            icon: <FaPhoneAlt />,
            detail: "+91-8210924128",
            link: "tel:+918210924128"
        },
        {
            name: "Email",
            icon: <MdEmail />,
            detail: "srijan.tripathi241998@gmail.com",
            link: "mailto:srijan.tripathi241998@gmail.com"
        },
        {
            name: "LinkedIn",
            icon: <FaLinkedin />,
            detail: "Srijantripathi",
            link: "https://www.linkedin.com/in/srijantripathi/"
        },
        {
            name: "Github",
            icon: <FaSquareGithub />,
            detail: "Srijan2498",
            link: "https://github.com/srijan2498"
        },
        {
            name: "HackerRank",
            icon: <FaHackerrank />,
            detail: "Srijan_tripathi2",
            link: "https://www.hackerrank.com/profile/srijan_tripathi2"
        }
    ]
    return (
        <div className={`contact_container ${isDarkMode ? "pureBlack" : ""}`} id='contact'>
            <div className="contact_header">Get in touch</div>
            <div className="contact_desc">
                I am always eager to embrace new challenges and collaborate with creative thinkers to bring impactful ideas to life. Whether you have a project in mind, need fresh perspectives, or simply want to discuss innovative concepts, I’m here to connect and contribute. Let’s work together to transform ideas into reality feel free to reach out!
            </div>
            <div className="contact_section">
                <div className="contact_details">
                    {contact_details.map((item, index) => {
                        return <SingleContactDetail item={item} key={index} isDarkMode={isDarkMode} />
                    })}
                </div>
                <form className="contact_form" onSubmit={handleSubmit}>
                    <div className="contact_form_header">Leave a messge</div>
                    <div className="contact_row">
                        <div className="contact_item contact_item_left">
                            <label htmlFor="your_name">Your name *</label>
                            <input ref={nameRef} id='your_name' type="text" placeholder='John Doe' required />
                        </div>
                        <div className="contact_item">
                            <label htmlFor="your_email">Email address *</label>
                            <input ref={emailRef} id='your_email' type="email" placeholder='john@gmail.com' required />
                        </div>
                    </div>
                    <div className="contact_row">
                        <div className="contact_item contact_item_left">
                            <label htmlFor="your_phone">Your phone *</label>
                            <input ref={phoneRef} id='your_phone' type="tel" placeholder='+91 1234567890' required />
                        </div>
                        <div className="contact_item">
                            <label htmlFor="your_subject">Subject *</label>
                            <input ref={subRef} id='your_subject' type="text" placeholder='I want to contact for...' required />
                        </div>
                    </div>
                    <div className="contact_row">
                        <div className="contact_item">
                            <label htmlFor="your_message">Message *</label>
                            <textarea required ref={messageRef} id='your_message' type="text" placeholder='Your message here...' />
                        </div>
                    </div>
                    <div className="contact_row">
                        <button type="submit" className='submit_btn' disabled={loading}>Send Message <div className="send_icon"><MdArrowOutward /></div></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
