import { NavLink } from 'react-router-dom'
import React, { useState } from 'react'
import './section.css'
import { useRef } from 'react'
import SelectPicker from '../../SelectPicker/SelectPicker'

const selectOpt = [
    { value: 'Select', label: 'Select' },
    { value: 'Cards', label: 'Cards' },
    { value: 'Deposits', label: 'Deposits' }
]
const selectOptFor =[
    {value:'Benifits and Rewards',label:'Benifits and Rewards'}
]

const Section = () => {
    const [defaultValue,setDefaultValue] = useState({ value: 'Cards', label: 'Cards' })
    const [defaultValueFor,setDefaultValueFor] = useState({value:'Benifits and Rewards',label:'Benifits and Rewards'})

    const navRef = useRef(null);
    // navRef.current
    return (
        <>
            <div className='interest'>
                <div className="nav-a">
                    <ul className="nav-links-res nav-tabs ">
                        <li className='active'>
                            <NavLink to="" className="nav__link">FIND THE RIGHT PRODUCT FOR YOU</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav__link" to="/oprations" style={{ color: '#3d3d3d', background: '#ebe7e7' }}>LIFE STAGE SOLUTION</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="interest-In">
                    <div className="row col-md-7">
                        <div className="col-md-6 row align-items-center">
                            <div className='col-md-6'>
                                <span className='spanText'>I am interested in:</span>
                            </div>
                            <div className='col-md-6'>
                                <SelectPicker options={selectOpt} label=''  
                                defaultValue={defaultValue} 
                                />
                            </div>
                        </div>
                        <div className="col-md-6 row align-items-center">
                            <div className="col-md-2 text-center">
                             <span className='spanText'>For</span>
                            </div>
                            <div className="col-md-8">
                            <SelectPicker
                                defaultValue={defaultValueFor} 
                                options={selectOptFor} 
                                label=''
                            />
                            </div>
                        </div>
                    </div>
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