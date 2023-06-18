import React ,{ useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { createAcc } from './../../sevices/api'
import './auth.css'

const initialize = {
  name:'',
  email:'',
  password:'',
  confirmPass:'',
  phone:''
}

const Signup = () => {
  const [ state , setState ] = useState(initialize)
  const [ load , setLoad ] = useState(true)

  useEffect(() =>{
    setTimeout(()=>{
      setLoad(false)
    },1000)
  },[])
  const changeHandler =(e)=>{
      setState({ ...state, [e.target.name]: e.target.value})
  }
  const submitHandler = async(e)=>{
      e.preventDefault()
      try{
         await createAcc(state);

      }catch(err){
        console.log(err);
      }
  }
  return (
    <>
      { load && <div className='loading-container'><img className='loader' src='/assests/328.gif' alt="loading" /></div>}

      {<div>
      <nav className="auth-nav">
        <img src='/assests/logo.png' alt="Bankist logo" className="nav__logo" />
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
            ><i className="fa-light fa-mobile-notch"></i>Mobile Banking</NavLink>
          </li>
        </ul>
      </nav>
      <div className="auth_header">
        <div className="form-container signup-form">
          <h2 className="log-title"><i className='fa-solid fa-user-plus'></i> Create Your Own Account with in Minutes
          </h2>
          <form onSubmit={submitHandler} className='form signup-form-input'>
            <label htmlFor="name">Name</label>
            <input type="text" onChange={changeHandler} name="name" required />
            <label htmlFor="">Email</label>
            <input type="email" onChange={changeHandler} name="email" required />
            <label htmlFor="">password</label>
            <input type="password" onChange={changeHandler} name="password" required/>
            <label htmlFor="">Confirm Password</label>
            <input type="password" onChange={changeHandler} name="confirmPass" required/>
            <label htmlFor="">Contact No</label>
            <input type="number" onChange={changeHandler} name="phone" required/>
            
            <input type="submit"  className='btn'/>
          </form>
        </div>
        </div>
        </div>}  


    </>
  )
}

export default Signup