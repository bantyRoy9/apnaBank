import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './auth.css'
import logo from './../home/header/logo.png'
import loader from './328.gif'
import { userLogin } from './../../sevices/api'

import axios from 'axios'

const URL = 'http://localhost:8000'


const Auth = () => {
  const navigate = useNavigate()
  const [show, setShow] = useState(false);
  const [showMob, setShowMob] = useState(false);
  const [load, setLoad] = useState(true);
  const [preload, setPrelod] = useState(false)
  const [error, setError] = useState(false)
  const [errors, setErrors] = useState([])
  const [user, setUser] = useState({})

  const changehandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    // console.log(user);
  }
  useEffect(() => {
    setTimeout(() => {
      setLoad(false)
    }, 1000)
  }, []);

  const submithandler = async (e) => {
    e.preventDefault();
      const userData = await userLogin(user);
      
      if(userData.status === 'success'){
        navigate('/dashBoard')
        // console.log(userData);
      }else{
        let errorMessages = userData.message
        let statuss = userData.status;
        setErrors([errorMessages, statuss])
        setError(true)
        setTimeout(() => {
          setError(false)
        },3000);
      }
    // await axios.post(`${URL}/bank/v1/user/signIn`, user)
    //   .then(response => {
    //     let token = response.data.token;
    //     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    //     navigate('/dashBoard')
    //   }).catch(err => {
    //     let errorMessages = err.response.data.message;
    //     let statuss = err.response.status;
    //     setErrors([errorMessages, statuss])
    //     setError(true)
    //   })
  }

  return (
    <>
      {load && <div className='loading-container'><img className='loader' src={loader} alt="loading" /></div>}
      {preload && <div className='preloading'><img className='loader' src={loader} alt="loading" /></div>}
      


      <div>
        <nav className="auth-nav">
          <img src={logo} alt="Bankist logo" className="nav__logo" />
          <ul className="nav__links">
            <li className="nav__item">
              <NavLink className="auth__nav-link" to="/">APNABANK HOME</NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="auth__nav-link" to="#section--2">About Us</NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="auth__nav-link" to="#section--3">Customer Care</NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="auth__nav-link" to="/"
              >Find Branch</NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="auth__nav-link-last" to="/"
              ><i className='fa-solid fa-mobile'></i>Mobile Banking</NavLink>
            </li>
          </ul>
        </nav>
        <nav className='nav2'>
          <ul className="nav2__links">
            <li className="nav2__item">
              <NavLink className="auth__nav2-link" to="#section--1">APNABANK HOME</NavLink>
            </li>
            <li className="nav2__item">
              <NavLink className="auth__nav2-link" to="#section--2">About Us</NavLink>
            </li>
            <li className="nav2__item">
              <NavLink className="auth__nav2-link" to="#section--3">Customer Care</NavLink>
            </li>
            <li className="nav2__item">
              <NavLink className="auth__nav2-link" to="/"
              >Find Branch</NavLink>
            </li>
            <li className="nav2__item">
              <NavLink className="auth__nav2-link-last" to="/"
              ><i class="fa-light fa-mobile-notch"></i>Mobile Banking</NavLink>
            </li>
          </ul>
        </nav>
        <div className="auth_header">
        <div className="form-container">
        {error && <div className='errorLoading'>
          <div className='errorData'>
              <i class="fa-solid fa-circle-exclamation"></i> <span>{errors[0]}</span>
          </div>
      </div>}
            <h2 className="log-title"><i className='fa-solid fa-user-lock'></i> Login to Internet Banking</h2>
            <form onSubmit={submithandler} className='form'>
              {!showMob &&
                <>
                  <label htmlFor="">UserId</label>
                  <input type="email" name='email'
                    onChange={changehandler}
                    onClick={() => setShow(true)}
                    required />  <i className='fa-solid fa-arrow-right'></i>
                  <NavLink to={'/get'} className='forget-link'>Get User Id</NavLink>
                </>}

              {!showMob && show &&
                <>
                  <label htmlFor="">Password</label>
                  <input type="password" name='password' 
                  onChange={changehandler} 
                  required />  <i className='fa-solid fa-arrow-right'></i>
                  <NavLink to={'/get'} className='forget-link'>Get User Id</NavLink>

                  <input type="submit" style={{ color: 'white', backgroundColor: '#f37e20', marginTop: '20px', marginLeft: '10px', width: '80%',cursor:'pointer' }} />
                  <button className='loginbymobile' onClick={() => { setShowMob(false); setShow(false); setUser({}); }} > Back</button>
                </>}

              {!showMob && !show && <> <hr /><p hidden className="or">OR</p></>}

              {!show && <><label htmlFor="" className='mobile'>Mobile No.</label>
                <input type="number" name='phone' onChange={changehandler} onClick={() => setShowMob(true)} required /><i className='fa-solid fa-arrow-right'></i>
                <NavLink to={'/get'} className='forget-link'>Find Mobile No.</NavLink>

              </>}
              {showMob && !show && <> <label htmlFor="">Password</label>
                <input type="password" name='password' onChange={changehandler} required /><i className='fa-solid fa-arrow-right'></i>
                <NavLink to={'/get'} className='forget-link'>Forget User Password</NavLink>

                <input type="submit" style={{ color: 'white', backgroundColor: '#f37e20', marginTop: '20px', marginLeft: '10px', width: '80%' }} />
                <button className='loginbymobile' onClick={() => { setShowMob(false); setShow(false); setUser({}) }} > Back </button>
              </>}

            </form>
          </div>
        </div>
      </div>


    </>
  )
}

export default Auth