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
        speed:1000,
        slidesToScroll:1,
        autoplay:true
    };
  return (
    <>
        <Carousel {...settings}>
            <Container>
                <Wraps>
                   <NavLink to={'/'}><img src="/images/a-slider.jpg" alt="" /></NavLink>
                </Wraps>

            </Container>
            <Container>
                <Wraps>
                <NavLink to={'/'}> <img src="/images/b-slider.jpg" alt="" /></NavLink>
                </Wraps>

            </Container>
            <Container>
                <Wraps>
                <NavLink to={'/'}> <img src="/images/c-slider.gif" alt="" /></NavLink>
                </Wraps>

            </Container>
        </Carousel>
        <CardContainer >
            <div className='card'>
                <p>Offer for you</p>
                <div className="cardItem">
                    <div className="cardItem1">
                        <div className="cardIcon">
                            <i className='fa-solid fa-credit-card'></i>
                        </div>
                        <div className="cardTitle">
                            <p>Saving Account</p>
                            <span>Open Insta Save Account in 4 Minutes.</span>
                            <NavLink to={'/open'}><p>Open Now <i className='fa-solid fa-angle-right'></i></p></NavLink>
                        </div>
                    </div>
                    <div className="cardItem1">
                        <div className="cardIcon">
                            <i className='fa-solid fa-credit-card'></i>
                        </div>
                        <div className="cardTitle">
                            <p>Saving Account</p>
                            <span>Open Insta Save Account in 4 Minutes.</span>
                            <NavLink to={'/open'}><p>Open Now<i className='fa-solid fa-angle'></i></p></NavLink>
                        </div>
                    </div>
                    <div className="cardItem1">
                        <div className="cardIcon">
                            <i className='fa-solid fa-credit-card'></i>
                        </div>
                        <div className="cardTitle">
                            <p>saving Account</p>
                            <span>Open Insta Save Account in 4 Minutes.</span>
                            <NavLink to={'/open'}><p>Open Now<i className='fa-solid fa-angle'></i></p></NavLink>
                        </div>
                    </div>
                    <div className="cardItem1">
                        <div className="cardIcon">
                            <i className='fa-solid fa-credit-card'></i>
                        </div>
                        <div className="cardTitle">
                            <p>Saving Account</p>
                            <span>Open Insta Save Account in 4 Minutes.</span>
                            <NavLink to={'/open'}><p>Open Now<i className='fa-solid fa-angle'></i></p></NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className='card1'>
                <p>Grow your Investment</p>
                <div className="cardItem">
                    <div className="cardItem2">
                        <div className="cardIcon1">
                            <i className='fa-solid fa-credit-card'></i>
                            <NavLink to={'/fix'}><p>Fixed Deposit</p></NavLink>
                        </div>
        
                    </div>
                    <div className="cardItem2">
                        <div className="cardIcon2">
                            <i className='fa-solid fa-hand-holding-dollar'></i>
                            <NavLink to={'/mutual'}><p>Mutual Fund</p></NavLink>
                        </div>
                       
                    </div>
                    <div className="cardItem2">
                        <div className="cardIcon3">
                            <i className='fa-solid fa-credit-card'></i>
                        <NavLink to={'/share'}><p>Share Market<i className='fa-solid fa-angle'></i></p></NavLink>
                        </div>
                        
                    </div>
                    <div className="cardItem2">
                        <div className="cardIcon4">
                            <i className='fa-solid fa-credit-card'></i>
                        <NavLink to={'/open'}><p>Open Now<i className='fa-solid fa-angle'></i></p></NavLink>
                        </div>
                        
                    </div>
                </div>
            </div>
        </CardContainer>
        </>
    )
}

export default ImgSlider

const Carousel = styled(Slider)`
// width:100%;

ul li button{
     position:absolute;
     top:-300px;
     left:-450px;
    // margin-top:120px;
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

`
const Wraps = styled.div`
    img{
        width:100%;
        height:84vh;
        background-image:cover;
    }
`
const CardContainer = styled.div`
positon:absolute;
top:0;

`