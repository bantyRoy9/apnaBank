import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './digital.css'
const Digital = () => {
    const [active, setActive] = useState({ display: 'none' });
    setInterval(() => {
        setActive({ display: 'block' })
    }, 10000)
    return (
        <>
            <div className="digital-container">
                <div className="digital-head">
                    <div className="digital-titles">
                        <h1 className="digital-title">DIGITAL BANKING</h1>
                        <span className="digital-subtitle">Advance. Innovative. Instant</span>
                    </div>
                    <div >
                        <ul className="digital-techs" >
                            <li className='digital-tech'>
                                <span className="dot dot-active"></span>
                                <span className="circle-active" style={active}>
                                    <svg>
                                        <circle class="fill"></circle>
                                        <circle class="progress"></circle>
                                    </svg>
                                </span>
                                Mobile Bannking
                            </li>
                            <li className='digital-tech'>
                                <span className="dot dot-active"></span>
                                <span className="circle-active">
                                    <svg>
                                        <circle class="fill"></circle>
                                        <circle class="progress"></circle>
                                    </svg>
                                </span>
                                Net Bannking
                            </li>
                            <li className='digital-tech'>
                                <span className="dot dot-active"></span>
                                <span className="circle-active">
                                    <svg>
                                        <circle class="fill"></circle>
                                        <circle class="progress"></circle>
                                    </svg>
                                </span>
                                WhatsApp Bannking
                            </li>
                        </ul>


                    </div>

                    <div className="digital-btn">
                        <Link to='/'>Explore digital banking</Link>
                    </div>

                </div>
                <div className="digital-img"></div>
            </div>
            <div className="offers">
                <img src="https://www.icicibank.com/assets/images/summer-bonanza-Digital-banking.jpg" alt="" />
                <div className="offer-link">
                    <article>Save more, this summer</article>
                    <Link to='/'>CHECK OFFERS NOW <i className='fa-solid fa-angle-right'></i></Link>
                </div>
            </div>

            <div className="security">
                <div className="security-head">
                    <strong>WE TAKE YOUR SECURITY</strong>
                    <br />  SERIOUSLY 
                </div>
                <div className="security-subhead">
                    <div className="subhead1">
                        <p>Peace of mind for you as we have the most advanced technology & protection</p>
                    </div>
                    <div className="subhead2">
                        <img src="https://www.icicibank.com/assets/images/icons/two_factor_icon.png" alt="" />
                        <p>2 Factor i-safe authentication</p>
                    </div>
                    <div className="subhead3">
                        <img src="https://www.icicibank.com/assets/images/icons/e_to_e_en.png" alt="" />
                        <p>End-to-end 256 bit Encryption</p>
                    </div>
                    <div className="subhead4">
                        <img src="https://www.icicibank.com/assets/images/icons/secure_contact.png" alt="" />
                        <p>We make you feel special</p>
                    </div>
                </div>
            </div>
            <div className="covid-notice">
                <Link to={'/'}> <strong>Important Notice:</strong> Resolution Freamwork 2.0 as per RBI Guidence for COVID-19 related stress </Link>
            </div>
        </>
    )
}

export default Digital