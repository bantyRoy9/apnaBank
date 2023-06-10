import React from 'react'
import { NavLink } from 'react-router-dom';

const Dashwel = (props) => {
    const data = props.userData
    let transection = data.movements;
    let transactionDate = data.movementsDates;
    let withdraw = 0;
    let deposit = 0;
    let fulldate;
    if (transection) {
        let length = transection.length;

        for (var i = 0; i <= length - 1; i++) {
            if (transection[i] < 0) {
                withdraw += transection[i]
            } else {
                deposit += transection[i]
            }

        }
        const now = new Date;
        const options = {
            hour: 'numeric',
            minute: 'numeric',
            day: 'numeric',
            month: 'numeric',
            year: 'numeric'
        }

        fulldate = new Intl.DateTimeFormat(
            data.locale, options
        ).format(now);
        // const date = new Date().getDate(),
        // month = new Date().getMonth(),
        // year = new Date().getFullYear(),
        // hour = new Date().getHours(),
        // min = new Date().getMinutes()
        // fulldate = `${date}/${month}/${year} ${hour}:${min}`

    }
    return (
        <> <main>
            <h1>Dashboard</h1>
            <div className="date">
                <span>Welcome , {data.name}</span>
                <p>Account No : {data.accountNo}</p>
                <p>Current Balance : {data.totalAmt}</p>
                <span>As / {fulldate}</span>

            </div>
            <div className="insights">
                <div className="salses">
                    <i class="fa-solid fa-chart-simple"></i>
                    <div className="middle">
                        <div className="left">
                            <h3>Total Transaction</h3>
                            <h3>{deposit}</h3>
                        </div>
                        {/* <div className="progress">
                            <svg>
                                <circle cx='38' cy="38" r="36"></circle>
                            </svg>
                            <div className="number">
                                <p>81%</p>
                            </div>
                        </div> */}
                    </div>
                    <small className='text-muted'>Last 24 Hours </small>
                </div>

                <div className="expenses">
                    <i class="fa-solid fa-square-poll-vertical"></i>

                    <div className="middle">
                        <div className="left">
                            <h3>Total withdraw</h3>
                            <h3>{withdraw}</h3>

                        </div>
                        {/* <div className="progress">
                            <svg>
                                <circle cx='38' cy="38" r="36"></circle>
                            </svg>
                            <div className="number">
                                <p>81%</p>
                            </div>
                        </div> */}
                    </div>
                    <small className='text-muted'>Last 24 Hours </small>
                </div>

                <div className="income">
                    <i class="fa-solid fa-arrow-trend-up"></i>
                    <div className="middle">
                        <div className="left">
                            <h3>Total Deposit</h3>
                            <h3>{deposit}</h3>
                        </div>
                        {/* <div className="progress">
                            <svg>
                                <circle cx='38' cy="38" r="36"></circle>
                            </svg>
                            <div className="number">
                                <p>81%</p>
                            </div>
                        </div> */}
                    </div>
                    <small className='text-muted'>Last 24 Hours </small>
                </div>
            </div>
            <div className="recent-transaction">
                <h2>Recent Transaction</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Serial No</th>
                            <th>Transection Id</th>
                            <th>Date/Time</th>
                            <th>Amount</th>
                            <th>status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(!transection) ? <></> : transection.map((_, i, amt) => (

                            <tr>
                                <td>{amt.length - 1 - i}</td>
                                <td className="trans">1234567890</td>
                                <td>{transactionDate[amt.length - 1 - i]}</td>
                                <td>{transection[amt.length - 1 - i]}</td>
                                <td>{transection[amt.length - 1 - i] > 0 ? 'Deposit' : "Transfer"}</td>
                            </tr>

                        ))
                        }
                    </tbody>
                </table>
                <NavLink to={' '}>See All</NavLink>
            </div>

        </main>
        </>

    )
}

export default Dashwel