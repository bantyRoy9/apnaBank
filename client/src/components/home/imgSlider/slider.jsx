import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import './slider.css'

const ImgSlider = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToScroll: 1,
        autoplay: true
    };
    return (
        <>
            <Carousel {...settings}>
                <Container>
                    <Wraps>
                        <NavLink to={'/'}>
                            <img src="/images/a-slider.jpg" alt="" />
                        </NavLink>
                        <NavLink to={'/'}>
                            <img src="https://www.icicibank.com/managed-assets/images/personal/home-page-banners/Mobile/iwish-a-single-account-new-guidline-m.jpg" alt="" className='slider-img-res' />

                        </NavLink>
                    </Wraps>

                </Container>
                <Container>
                    <Wraps>
                        <NavLink to={'/'}> <img src="/images/b-slider.jpg" alt="" /></NavLink>
                        <NavLink to={'/'}>
                            <img src="https://www.icicibank.com/managed-assets/images/personal/home-page-banners/Mobile/dream-about-it-own-m.jpg" alt="" className='slider-img-res' />

                        </NavLink>
                    </Wraps>

                </Container>
                <Container>
                    <Wraps>
                        <NavLink to={'/'}> <img src="/images/c-slider.gif" alt="" /></NavLink>
                        <NavLink to={'/'}>
                            <img src="https://www.icicibank.com/managed-assets/images/personal/home-page-banners/Mobile/summer-bonanza-best-offers-m2.jpg" alt="" className='slider-img-res' />

                        </NavLink>
                    </Wraps>

                </Container>
            </Carousel>
            <div className="card-container">
                <div className='card'>
                    <p>Offer for you</p>
                    <div className="cardItem">
                        <div className="cardItem1">
                            <div className="cardIcon">
                                <i className='fa-solid fa-credit-card'></i>
                            </div>
                            <div className="cardTitle">
                                <h6>Saving Account</h6>
                                <span>Open Insta Save Account in 4 Minutes.</span>
                                <NavLink to={'/openAcc'}><p>OPEN NOW <i className='fa-solid fa-angle-right'></i></p></NavLink>
                            </div>
                        </div>
                        <div className="cardItem1">
                            <div className="cardIcon">
                                <i className='fa-solid fa-house'></i>
                            </div>
                            <div className="cardTitle">
                                <h6>Home Loan</h6>
                                <span>Digital sanction with benifit of special processing fee.</span>
                                <NavLink to={'/open'}><p>AVAIL HOME LOAN NOW <i className='fa-solid fa-angle-right'></i></p></NavLink>
                            </div>
                        </div>
                        <div className="cardItem1">
                            <div className="cardIcon">
                                <i className='fa-solid fa-credit-card'></i>
                            </div>
                            <div className="cardTitle">
                                <h6>Credit Card</h6>
                                <span>Get the right card for you.</span>
                                <NavLink to={'/credit'}><p>GET CREDIT CARD, INSTANTLY <i className='fa-solid fa-angle-right'></i></p></NavLink>
                            </div>
                        </div>
                        
                        <div className="cardItem1">
                            <div className="cardIcon">
                                <i className='fa-solid fa-hand-holding-dollar'></i>
                            </div>
                            <div className="cardTitle">
                                <h6>Personal Lone</h6>
                                <span>For all your needs, up to &#x20B9; 50 lakh</span>
                                <NavLink to={'/open'}><p>AVAIL PERSONAL LOAN NOW <i className='fa-solid fa-angle-right'></i></p></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card1'>
                    <p>Grow your Investment</p>
                    <div className="cardItem">
                        <div className="cardItem2">
                            <NavLink to={'/fix'}>
                                <div className="cardIcona">
                                    <i className='fa-solid fa-credit-card'></i>
                                </div>
                                <div className='cardTitle'>
                                    <h6>Fixed Deposit</h6>
                                </div>
                            </NavLink>
                        </div>
                        <div className="cardItem2">
                            <NavLink to={'/mutual'}>
                                <div className="cardIcona">
                                    <i className='fa-solid fa-hand-holding-dollar'></i>
                                </div>
                                <div className='cardTitle'>
                                    <h6>Mutual Funds </h6>
                                </div>
                            </NavLink>
                        </div>
                        <div className="cardItem2">
                            <NavLink to={'/share'}>
                                <div className="cardIcona">
                                    <i className='fa-solid fa-chart-simple'></i>
                                </div>
                                <div className='cardTitle'>
                                    <h6>Invest in Stock<i className='fa-solid fa-angle'></i></h6>
                                </div>
                            </NavLink>

                        </div>
                        <div className="cardItem2">
                            <NavLink to={'/open'}>
                                <div className="cardIcona">
                                    <i className='fa-solid fa-credit-card'></i>
                                </div>
                                <div className='cardTitle'>
                                    <h6>Retiarment plan<i className='fa-solid fa-angle'></i></h6>
                                </div>
                            </NavLink>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImgSlider

const Carousel = styled(Slider)`
ul li button{
     position:absolute;
     top:-300px;
     left:-450px;
    &:before{
        color: white;
        display:block;
        font-size:10px;
    }
}
li.slick-active button::before{
    color: var(--color-primary);
}
.slick-list{
   overflow: hidden;
}
.slick-arrow{
    opacity:0;
   background: transparent;
   z-index:1;
   margin:-60px 40px 0px 0px;
}
&:hover{
   button{
       opacity:1;

   }
}

`
const Container = styled.div`
    // border:2px solid black;
`
const Wraps = styled.div`
a{
    &:last-child{
        display:none
    }
    img{
        // border: 3px solid black;
        width:100%;
        height:80vh;
        object-fit: cover;
    }
}
@media only screen and (max-width:600px){
    background-color:white;
    a{
        &:first-child{
            display:none
        }
        &:last-child{
            display:block;
            // margin-top:30px;
        }
        .slider-img-res{
                width:100%;
                height:100%;
        object-fit: cover;
                
        }
    }
}   
    
`