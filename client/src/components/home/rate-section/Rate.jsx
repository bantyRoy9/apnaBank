import React from 'react'
import './rate.css'

const Rate = () => {
    return (
        <>
            <div className="rate-container">
                <div className="rate-head">
                    <div className="rate-items">
                    <div className="rate-title">
                        <strong>Rates</strong>&<strong>Charges</strong>
                    </div>
                    <div className="rate-element">
                        <div className="rate-item">
                            <p>Starting from</p>
                            <h1>3%</h1>
                            <p>Savings</p>
                        </div>
                        <div className="rate-item">
                            <p>Upto</p>
                            <h1>5.3%</h1>
                            <p>Fixed deposit</p>
                        </div>
                        <div className="rate-item">
                            <p>Starting from</p>
                            <h1>13.50%</h1>
                            <p>person loan</p>
                        </div>
                        <div className="rate-item">
                            <p>Starting from</p>
                            <h1>3%</h1>
                            <p>home loan</p>
                        </div>
                    </div>
                    </div>
                </div>

            </div>
        </>
    )

}

export default Rate