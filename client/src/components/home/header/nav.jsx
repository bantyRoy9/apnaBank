import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './nav.css'
import img from './logo.png'
import hero from './hero.png'

const Nav = (props) => {
  // console.log(props.data);
  return (
    <>
      <div className="header">
        <nav className="nav">
          <img src={img} alt="apnaBank logo" className="nav__logo" />
          <ul className="nav__links">
            <li className="nav__item">
              <a to="/" className="nav__link">Home</a>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link" to="/oprations">Operations</NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link" to="/Testimonials">Testimonials</NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link" to="/dashBoard"
              >account DashBoard</NavLink>
            </li>
          </ul>
        </nav>
        <div className="nav__item">
          <div className="nav_navigation">
            {!props.data ?

              <div className="btn-signin">
                <NavLink to="/personal" className="nav__link-btn">PERSONIAL<i className='fa-solid fa-angle-down'></i></NavLink>
                <NavLink to="/login" className="nav__link--btn" >LOGIN</NavLink>
                <NavLink to="/signup" className="nav__link--btns">NEW USER</NavLink>
              </div> : <>
                <div className='signOut'>
                  <div className="userSignOut">
                    <i className='fa-solid fa-user'></i>
                  </div>
                  <div className="toggleSignOut">
                    <i className='fa-solid fa-caret-down'></i>
                  </div>
                </div></>
            }
          </div>
        </div>
        {/* <div className="header__title">
      <h1>
        When
        <span className="highlight">banking</span>
        meets<br />
        <span className="highlight">minimalist</span>
      </h1>
      <h4>A simpler banking experience for a simpler life.</h4>
      <button className="btn--text btn--scroll-to">Learn more &DownArrow;</button>
      <img
        src={hero}
        className="header__img"
        alt="Minimalist bank items"
      />
    </div> */}
      </div>

      <div className="header header2">
        <nav className="nav nav">
          <ul className='nav-2'>
            <li>
              <i className='fa-solid fa-bank'></i>  ACCOUNTS <i className='fa-solid fa-caret-down'></i>
            </li>
            <li>
              <i className='fa-solid fa-credit-card'></i>CARDS <i className='fa-solid fa-caret-down'></i>
            </li>
            <li>
              <i className='fa-solid fa-hand-holding-dollar'></i>LOANS <i className='fa-solid fa-caret-down'></i>
            </li>
            <li>
              <i className='fa-solid fa-chart-column'></i>INVEST <i className='fa-solid fa-caret-down'></i>
            </li>
            <li>
              <i className='fa-solid fa-umbrella'></i>INSURE <i className='fa-solid fa-caret-down'></i>
            </li>
            <li>
              <i className='fa-solid fa-umbrella'></i>PAY <i className='fa-solid fa-caret-down'></i>
            </li>
            <li>
              <i className='fa-solid fa-umbrella'></i>OFFER <i className='fa-solid fa-caret-down'></i>
            </li>
          </ul>
        </nav>
      </div>

    </>
  )
}

export default Nav