import React from 'react'
import './blog.css'
import { Link } from 'react-router-dom'
const Blog = () => {
  return (
    <>
    <div className="blogs ">
                <div className="trendingDeal-title">
                    <hr />
                    <strong>blogs</strong>
                    <p>manage your finance<span> better</span></p>
                </div>
                <div className="trending-offers blog">
                <div className="trending-offer" style={{display:'flex', gap:'20px'}}>
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
                        <Link to='/'> view all blogs</Link>
                </div>
            </div>
            </div>
    </>
  )
}

export default Blog