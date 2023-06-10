import { NavLink } from 'react-router-dom'
import React from 'react'
import './section.css'
import { useRef } from 'react'
import SelectPicker from '../../SelectPicker/SelectPicker'

const selectOpt = [{ value: 'chocolate', label: 'Chocolate' },
{ value: 'strawberry', label: 'Strawberry' },
{ value: 'vanilla', label: 'Vanilla' }]

const Section = () => {

    const navRef = useRef(null);
    // navRef.current
    return (
        <>
            <div className='interest'>
                <div className="nav-a">
                    <ul className="nav__links nav-links-res">
                        {/* <img src='/assests/active-left.png' alt="" /> */}
                        <li className="nav__items">
                            <NavLink to="/" className="nav__link active">FIND THE RIGHT PRODUCT FOR YOU</NavLink>
                        </li>
                        <li className="nav__items">
                            <NavLink className="nav__link" to="/oprations" style={{ color: '#3d3d3d', background: '#ebe7e7' }}>LIFE STAGE SOLUTION</NavLink>
                        </li>
                        {/* <img src="assests/normal-left.png" alt="" style={{ marginLeft: '-11px', transform: 'scaleX(-1)' }} /> */}
                    </ul>
                </div>
                <div className="interest-In">
                    <div className="col-md-8 row">
                        <div className="col-md-5 ">
                            <span className=''>I am interested in:</span>
                            <SelectPicker options={selectOpt} label=''/>
                        </div>
                        <div className="col-md-5">
                            <span className=''>I am interested in:</span>
                            <SelectPicker options={selectOpt} label=''/>
                        </div>
                        {/* <label htmlFor="" className=''></label> */}
                    </div>
                    {/* <i className='fa-solid fa-caret-down down1'></i>
                    <select className='selectOption' >
                        <option value="card">Card</option>
                        <option value="card">for</option>
                        <option value="card">you</option>
                    </select> <span> for</span>
                    <i className='fa-solid fa-caret-down down'></i>

                    <select className='selectOption'>
                        <option value="Benifits">Benifits and Rewards</option>
                        <option value="Benifits">Benifits and Rewards</option>
                        <option value="Benifits">Benifits and Rewards</option>
                    </select> */}

                </div>

                <div className="interest-in_data">
                    <img src="assests/cc-1.jpg" alt="" />
                    <div className="option-data">
                        <div className="option-data_nav">

                            <ul className="nav__links">
                                <img src="https://www.icicibank.com/assets/images/icons/active-left.png" alt="" />
                                <li className="nav__item">
                                    <NavLink to="/" className="nav__link">LIFE STYLE</NavLink>
                                </li>
                                <img src="assests/active-left.png" alt="" style={{ marginLeft: '-15px', transform: 'scaleX(-1)' }} />

                                <li className="nav__item">
                                    <NavLink className="nav__link" to="/oprations" style={{ marginLeft: '-25px', color: '#3d3d3d', background: '#ebe7e7' }}>TRAVEL</NavLink>
                                </li>
                                <img src="assests/normal-left.png" alt="" style={{ marginLeft: '-11px', transform: 'scaleX(-1)' }} />

                                <li className="nav__item">
                                    <NavLink className="nav__link" to="/oprations" style={{ marginLeft: '-28px', color: '#3d3d3d', background: '#ebe1d3' }}>SPORTS</NavLink>
                                </li>

                            </ul>
                        </div>
                        <div className="option-income">
                            <span>Your net anual income</span>
                            <div className="grid-income">
                                <button >2.5</button>
                                <button className='actives'>5</button>
                                <button>7.5</button>
                                <button>10</button>
                            </div>
                        </div>
                        <div className="option-detail">
                            <p>Coral Credit card</p>
                            <ul>
                                <li>Join fee 500 + Gst</li>
                                <li>Earn up to 10,000 additional reward points.</li>
                                <li>Buy 1, get 1 movie ticket free at BookMyShow</li>
                                <li>One complimentary railway lounge visit per quarter</li>
                            </ul>
                        </div>
                        <div className="option-btn">
                            <button className='btn-apply'>apply now</button>
                            <button className='btn-know'>know more &rarr;</button>
                        </div>
                        <div className="option-para">
                            <p>Get a call back to know best offer on credit cards</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Section