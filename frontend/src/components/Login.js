import React, { useEffect, useRef } from 'react'
import { MdArrowOutward } from "react-icons/md";
import axios from 'axios'
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import {setAlertAction, setLoadingAction, unsetAlertAction, unsetLoadingAction} from '../redux/actions'

const Login = ({ isDarkMode, setNavStatus }) => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const securityRef = useRef();
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(setLoadingAction())
        setTimeout(() => {
            dispatch(unsetLoadingAction())
        }, 2000);
    }, [])
    const handleSubmit = async(e) => {
        try {
            e.preventDefault()
            dispatch(setLoadingAction())
            const data = {
                emailId: emailRef.current.value,
                password: passwordRef.current.value,
                securityKey: securityRef.current.value
            }
            const res = await axios.post('http://localhost:8080/api/v1/getAdmin', data)
            if (res.data) {
                setTimeout(() => {
                    dispatch(unsetLoadingAction())
                }, 2000);
                dispatch(setAlertAction({
                    success: res.data.success,
                    message: res.data.message
                }))
                localStorage.setItem("portfolio_token", res.data.token)
                navigate('/about')
            }
            setTimeout(() => {
                dispatch(unsetAlertAction())
            }, 10000);
        } catch (error) {
            dispatch(setAlertAction({
                success: false,
                message: "Something went wrong"
            }))
            setTimeout(() => {
                dispatch(unsetAlertAction())
            }, 10000);
        }
    }
    useEffect(()=>{
        setNavStatus(1)
    }, [setNavStatus])

    useEffect(()=>{
        if (localStorage.getItem("portfolio_token")){
            navigate("/about")
        }
    })
    return (
        <div className='login_outer'>
            <form className={`form ${isDarkMode ? "pureBlack" : ""}`} onSubmit={(e) => handleSubmit(e)}>
                <div className="form_header">Login</div>
                <div className="row">
                    <div className="item">
                        <label htmlFor="emailId">Email *</label>
                        <input type="email" ref={emailRef} name="emailId" id="emailId" placeholder='john@gmail.com' required />
                    </div>
                </div>
                <div className="row">
                    <div className="item">
                        <label htmlFor="password">Password *</label>
                        <input ref={passwordRef} type="password" placeholder='*****' name="password" id="password" required />
                    </div>
                </div>
                <div className="row">
                    <div className="item">
                        <label htmlFor="securityKey">Security Key *</label>
                        <input ref={securityRef} type="text" placeholder='Your secret key' name="securityKey" id="securityKey" required />
                    </div>
                </div>
                <div className="contact_row">
                    <button type="submit" className='submit_btn'>Login <div className="send_icon"><MdArrowOutward /></div></button>
                </div>
            </form>
        </div>
    )
}

export default Login
