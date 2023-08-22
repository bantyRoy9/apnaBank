import React from 'react'
import ImgSlider from './imgSlider/slider'
import Nav from './header/nav'
import Section from './section-a/section'
import Rate from './rate-section/Rate'
import Digital from './digitalBanking/Digital'
import TrendingDeal from './trendinDeal/TrendingDeal'
import Blog from './blog/Blog'
import Footer from './footer/Footer'



const Home = () => {
  return (
    <>
    <Nav/>
    <ImgSlider/>
    <Section/>
    <Rate />
    <Digital/>
    {/* <TrendingDeal/> */}
    <Blog />
    <Footer />
    </>
  )
}

export default Home