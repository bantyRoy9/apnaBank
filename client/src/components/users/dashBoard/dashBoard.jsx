import React from 'react'
import Nav from '../../home/header/nav'
import './dashstyle.css'
import Dashwel from './right-section/dashwel'
import Wallet from './right-section/wallet'
import Transection from './right-section/transection'
import Req from './right-section/req'
import Profile from './right-section/profile'
import { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import axios from 'axios'
import { transferAlert, showAlert, loader } from '../../alert/Alert'

const URL = 'https://apnabank-uv68.onrender.com'
// const URL = '';


let timer;
const DashBoard = () => {
  const navigate = useNavigate()
  const [count, setcount] = useState(1,'active');
  const [blur, setblur] = useState('')
  const [data, setData] = useState({});
  const [transferData, setTransferData] = useState({});
  const [min, setmin] = useState();
  const [sec, setsec] = useState();
  const [transrferToggle, setTransferToggle] = useState(false)
  const [user, setuser] = useState()


  const transferDataHandler = (e) => {
    setTransferData({ ...transferData, [e.target.name]: e.target.value });
  }

  const findAcc = async () => {
    const { AccountNo } = transferData
    await axios.post(`${URL}/bank/v1/user/${AccountNo}`).then(res => {
      setuser(res.data.data.user)
      // console.log(res.data.data.user);
    }).catch(err => {
      // console.log(err.response.data.message);
      setuser(false)
    })
  }
  const transferSubmit = async (e) => {
    e.preventDefault();
    let { AccountNo,movements } = transferData
    await axios.post(`${URL}/bank/v1/user/${AccountNo}`, transferData).then(res => {
      let account = res.data.data.user
      setData(account)
      setTransferToggle(false);

      transferAlert('success','transfer successful',movements)
      setblur('')
      
      // setuser(res.data.data.user)
      // console.log(res.data);
    }).catch(err => {
      const error = err.response.data.message;
      showAlert('error',error)
      loader();
      // setuser(false)
    })
    // console.log(transferData);
  }
  const updateUI = () => {
    setTransferToggle(true);
    setblur('containerBlur');
    setuser(false)
    // console.log(transferData);
  }

  let time = 30;
  let mint, second
  const startLogOutTimer = () => {
    const tick = function () {
      mint = String(Math.trunc(time / 60)).padStart(2, 0);
      second = String(time % 60).padStart(2, 0);

      if (time === 0) {
        clearInterval(timer);
        navigate('/login')

      }
      time--
      setmin(mint);
      setsec(second);
    }
    tick();
    const timer = setInterval(tick, 1000)
    return timer
  }
  useEffect(async () => {
    await axios.get(`${URL}/bank/v1/user`).then(response => {
      let account = response.data.data.accounts
      setData(account);
    }).catch(err => {
      console.log(err.response);
      setData(false)
      navigate('/login')
    })
    if (!data) {
      navigate('/login')
    }
    // timer = startLogOutTimer()

  }, []);


  function signout() {
    navigate('/')
  }
  return (
    <>
      {transrferToggle && <div className='transfer'>
        <div className='transferContainer'>
          <div className='transferData'>
            <i onClick={() => { setTransferToggle(false); setblur('') }} className='fa-solid fa-multiply close'></i>
            <h3>Balance Available : <span>{data.totalAmt}</span></h3>

            <form onSubmit={transferSubmit} className="transferForm">
              <div className="formData">
                <label htmlFor="">Account No</label>
                <input type="number" name="AccountNo" onChange={transferDataHandler} autoFocus maxLength="10" /><hr />
                {user && <div style={{ color: 'green', fontSize: '12px', marginLeft: '-100px' }}><i className='fa-solid fa-user-check'></i>{user.name}</div>}
              </div>
              <div className="formData">
                <label htmlFor="">Amount</label>
                <input type="number" name="movements" onClick={findAcc} onChange={transferDataHandler} maxLength="10" /><hr />
              </div>

              <input type='submit' className='btn transferbtns' />
            </form>
          </div>

        </div>
      </div>
      }
      {data &&
        <>
          <div className={blur}>
            <Nav data={data} />
            <div className="container">
              <div className="btn transferbtn" onClick={updateUI}>Transfer</div>
              <aside>
                <div className="top">
                  <div className="logo">
                    <h2>Apna <span>Bank</span></h2>
                  </div>
                  <div className="close">
                    <i className='fa-solid fa-multiply'></i>
                  </div>
                </div>
                <div className="sidebar">
                  <NavLink to={' '} onClick={() => setcount(1)} className="active"><i class="fa-solid fa-list-ul"></i><h3>DashBoard</h3></NavLink>


                  <NavLink to={' '} onClick={() => setcount(2)} className="activ"><i class="fa-solid fa-wallet"></i><h3>Wallet</h3></NavLink>


                  <NavLink to={' '} onClick={() => setcount(3)}><i class="fa-solid fa-money-bill-transfer"></i><h3>Transection</h3></NavLink>
                  <NavLink to={' '} onClick={() => setcount(3)}><i class="fa-solid fa-money-bill-transfer"></i><h3>Message</h3> <span className="message-count">12</span></NavLink>


                  <NavLink to={' '} onClick={() => setcount(4)}><i class="fa-solid fa-hand-holding-dollar"></i><h3>Request Loan</h3></NavLink>


                  <NavLink to={' '} onClick={() => setcount(5)}><i class="fa-solid fa-user"></i><h3>Profile</h3></NavLink>




                  <NavLink to={'/login'} onClick={signout} className='logout'><i class="fa-solid fa-arrow-right-from-bracket"></i> <h3> LogOut</h3> </NavLink>


                </div>
              </aside>
              <div className="dash_container-right">
                {count === 1 && <Dashwel userData={data} />}
                {count === 2 && <Wallet />}
                {count === 3 && <Transection />}
                {count === 4 && <Req />}
                {count === 5 && <Profile />}

              </div>
            </div>
          </div>
        </>
      }
    </>
  )
}

export default DashBoard