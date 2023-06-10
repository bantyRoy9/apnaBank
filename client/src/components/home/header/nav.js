import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './nav.css'

const Nav = (props) => {
  const [sticky, setSticky] = useState(false)
  const [navToggle, setNavToggle] = useState('')
  const [navToggle1, setNavToggle1] = useState('')
  window.onscroll = function () {
    if (window.pageYOffset > 450) {
      setSticky('sticky')
    } else {
      setSticky('');
    }
  }
  const navhandler = () => {
    setNavToggle('header-hide')
  }

  return (
    <>
      <div className={`${sticky} sticky-res`}>
        <div className='headers'>
          <div className='left-icon-res'>
            {!navToggle && !navToggle1 ?
              <><i className='fa-solid fa-bars' onClick={() => setNavToggle1('nav-2-view')}></i>
                <img src='/assests/logo1.png' alt="apnaBank logo" className="nav__logo" />
              </> : <><img src='/assests/logo1.png' alt="apnaBank logo" className="nav__logo" /></>
            }
          </div>
          <div className='right-icon-res'>
            {!navToggle && !navToggle1 ?
              <>
                <i class="fa-solid fa-bell"></i>
                <i class="fa-solid fa-user" onClick={navhandler}></i>
              </> : <>
                <i className='fa-solid fa-multiply' onClick={() => { setNavToggle(''); setNavToggle1('') }}></i>
              </>
            }

          </div>
        </div>
        <div className={`header ${navToggle}`}>
          <nav className="nav">
            <img src='/assests/logo1.png' alt="apnaBank logo" className="nav__logo" />
            <ul className="nav__links">
              {/* <img src="https://www.icicibank.com/assets/images/icons/active-left.png" alt="" /> */}

              <li className="header__nav-item"><NavLink to="/" className="nav__link">Home</NavLink></li>
              {/* <img src="assests/active-left.png" alt="" style={{ marginLeft: '-17px', transform: 'scaleX(-1)' }} /> */}

              <li className="header__nav-item"><NavLink className="nav__link non_active" to="/oprations">Operations</NavLink></li>
              {/* <img src="assests/normal-left.png" alt="" style={{ marginLeft: '-17px', transform: 'scaleX(-1)' }} /> */}

              <li className="header__nav-item"><NavLink className="nav__link non_active" to="/Testimonials">Testimonials</NavLink></li>
              {/* <img src="assests/normal-left.png" alt="" style={{ marginLeft: '-17px', transform: 'scaleX(-1)' }} /> */}

              <li className="header__nav-item"><NavLink className="nav__link non_active" to="/dashBoard">account DashBoard</NavLink></li>
              {/* <img src="assests/normal-left.png" alt="" style={{ marginLeft: '-17px', transform: 'scaleX(-1)' }} /> */}

            </ul>
          </nav>
          <div className="header__nav-item">
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
        </div>

        <div className={`header2`}>
          <nav className="nav_secondary">
            <ul className={`nav-2 ${navToggle1}`}>
              <li>
                <i className='fa-solid fa-bank'></i>  ACCOUNTS <i className='fa-solid fa-caret-down'></i>
                <div className="nav-2-drop nav-2-animate">
                  <div className="drop-container">
                    <div>
                      <ul>
                        <li>deposite
                          {/* <div className="deposit-card card nav-2--card">
                            <ul>
                              <strong>
                                <img src="https://www.icicibank.com/assets/images/icons/header-icon/invest/grow/icon-wealth-creation.svg" alt="" />
                                Wealth creation
                              </strong>
                              <li>mutual fund</li>
                              <li>sip</li>
                              <li>demat account</li>
                            </ul>
                            <Link to='/'>Learn More</Link>
                          </div> */}
                        </li>
                        <li>grow wealth</li>
                      </ul>
                    </div>

                  </div>
                </div>

              </li>
              <li>
                <i className='fa-solid fa-credit-card'></i>CARDS <i className='fa-solid fa-caret-down'></i>
                <div className="nav-2-drop nav-2-animate">
                  <div className="drop-container">
                    <div>
                      <ul>
                        <li>deposite
                          <div className="deposit-card card nav-2--card">
                            <ul>
                              <strong>
                                <img src="https://www.icicibank.com/assets/images/icons/header-icon/invest/grow/icon-wealth-creation.svg" alt="" />
                                Wealth creation
                              </strong>
                              <li>mutual fund</li>
                              <li>sip</li>
                              <li>demat account</li>
                            </ul>
                            <Link to='/'>Learn More</Link>
                          </div>
                        </li>
                        <li>grow wealth</li>
                      </ul>
                    </div>

                  </div>
                </div>
              </li>
              <li>
                <i className='fa-solid fa-hand-holding-dollar'></i>LOANS <i className='fa-solid fa-caret-down'></i>
                <div className="nav-2-drop nav-2-animate">
                  <div className="drop-container">
                    <div>
                      <ul>
                        <li>deposite
                          <div className="deposit-card card nav-2--card">
                            <ul>
                              <strong>
                                <img src="https://www.icicibank.com/assets/images/icons/header-icon/invest/grow/icon-wealth-creation.svg" alt="" />
                                Wealth creation
                              </strong>
                              <li>mutual fund</li>
                              <li>sip</li>
                              <li>demat account</li>
                            </ul>
                            <Link to='/'>Learn More</Link>
                          </div>
                        </li>
                        <li>grow wealth</li>
                      </ul>
                    </div>

                  </div>
                </div>
              </li>
              <li>
                <i className='fa-solid fa-chart-column'></i>INVEST <i className='fa-solid fa-caret-down'></i>
                <div className="nav-2-drop nav-2-animate">
                  <div className="drop-container">
                    <div>
                      <ul>
                        <li>deposite
                          <div className="deposit-card card nav-2--card">
                            <ul>
                              <strong>
                                <img src="https://www.icicibank.com/assets/images/icons/header-icon/invest/grow/icon-wealth-creation.svg" alt="" />
                                Wealth creation
                              </strong>
                              <li>mutual fund</li>
                              <li>sip</li>
                              <li>demat account</li>
                            </ul>
                            <Link to='/'>Learn More</Link>
                          </div>
                        </li>
                        <li>grow wealth</li>
                      </ul>
                    </div>

                  </div>
                </div>
              </li>
              <li>
                <i className='fa-solid fa-umbrella'></i>INSURE <i className='fa-solid fa-caret-down'></i>
                <div className="nav-2-drop nav-2-animate">
                  <div className="drop-container">

                  </div>
                </div>
              </li>
              <li>
                <i className='fa-solid fa-umbrella'></i>PAY <i className='fa-solid fa-caret-down'></i>
                <div className="nav-2-drop nav-2-animate">
                  <div className="drop-container">

                  </div>
                </div>
              </li>
              <li>
                <i className='fa-solid fa-umbrella'></i>OFFER <i className='fa-solid fa-caret-down'></i>
                <div className="nav-2-drop nav-2-animate">
                  <div className="drop-container">

                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </div>

      </div>
        
    </>

  )
}

export default Nav