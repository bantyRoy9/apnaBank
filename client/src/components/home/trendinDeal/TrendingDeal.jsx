import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './trending.css'

const TrendingDeal = () => {
    return (
        <>
            <div className="trendingDeal">
                <div className="trendingDeal-title">
                    <hr />
                    <strong>trending deal</strong>
                    <p>greate offer for <span>greate experiences</span></p>
                </div>
            </div>
            <div className="trending-offers">
                <div className="trending-nav">
                    <div className="option-data_nav">

                        <ul className="nav__links">
                            <img src="https://www.icicibank.com/assets/images/icons/active-left.png" alt="" />
                            <li className="nav__item">
                                <NavLink to="/" className="nav__link">NEAR BY OFFER</NavLink>
                            </li>
                            <img src="assests/active-left.png" alt="" style={{ marginLeft: '-17px', transform: 'scaleX(-1)' }} />

                            <li className="nav__item">
                                <NavLink className="nav__link" to="/oprations" style={{ marginLeft: '-25px', color: '#3d3d3d', background: '#ebe7e7' }}>COMPARE & BUY</NavLink>
                            </li>
                            <img src="assests/normal-left.png" alt="" style={{ marginLeft: '-17px', transform: 'scaleX(-1)' }} />

                        </ul>
                    </div>
                </div>
                <div className="trending-offer">
                    <div className="trending-offer-card">
                        <img src="https://www.icicibank.com/managed-assets/images/nearby-offers/logos/99_Panckes.png" alt="" />
                        <div className="offer-per">
                            <strong>15% off</strong>
                            <span>on total bill</span>
                        </div>
                        <div className="offer-address">
                            <p>
                                2nd floor ford court inorbit mall, malad web, mumbai
                            </p>
                        </div>
                        <div className="digital-btn">
                            <Link to='/'> get direction</Link>
                        </div>
                    </div>
                </div>
                <div className="digital-btn offer">
                        <Link to='/'> view all offer</Link>
                </div>
            </div>
        </>
    )
}

export default TrendingDeal