import React, { useState } from 'react'
import middle from '../images/middleimg.svg'
import aave from '../images/aave.svg'
import sol from '../images/sol.svg'
import inch from '../images/inch.svg'
import { FiEye, FiEyeOff  } from "react-icons/fi";

export default function SpotWallet() {
  const [ShowAmount, setShowAmount] = useState(true)

  const handleShowAmount = (()=>{
    if(ShowAmount){
      setShowAmount(false)
    }else{
      setShowAmount(true)
    }
  })


  function handleButton(e){
    // if(e === 0){
    //   setSwitchButton(<Deposit clear={clear} />)
    // }else if (e === 1){
    //   setSwitchButton(<Withdraw clear={clear} />)
    // }else{
    //   setSwitchButton(<Transfer clear={clear} />)
    // }
  }

  return (
    <div className="spot-wallet">
        <div className="assets-rec-container">
          <div className="assets-rec-contents">
          <div className='assets-first'>
            <h2>Total Assets(USDT)</h2>
          </div>
          <div className='assets-secnd'>
            <h1>0:00 </h1>
            <h3> = $ 00:00</h3>
            <div className="display-amount" onClick={handleShowAmount}>
              { ShowAmount ? <FiEye /> : <FiEyeOff />}
            </div>
          </div>
            <div className='select-div'>
              <button className='btn-first' onClick={() => handleButton(0)}>Deposit</button>
              <button className='btn-secnd' onClick={() => handleButton(1)}>Withdraw</button>
              <button className='btn-third' onClick={() => handleButton(2)}>Transfer</button>
            </div>
          </div>
        </div>
      <div className='total-assets'>
          <div className='t-assets-img'>
          <img src={middle} alt='' />
        </div>
        <div className='portfolio-c'>
          <div className='portfolio-c-list'>
            <div className='list-img'>
            <img src={inch} alt='' width={'20px'} /> 
            <h2>1INCH</h2>
            </div>
            <div className='list-digit'>
              <h3>0.00 </h3>
              {/* <h4> = $ 0.00</h4> */}
            </div>
          </div>
          <div className='portfolio-c-list'>
            <div className='list-img'>
            <img src={inch} alt='' width={'20px'} /> 
            <h2>1INCH3L</h2>
            </div>
            <div className='list-digit'>
              <h3>0.00 </h3>
              {/* <h4> = $ 0.00</h4> */}
            </div>
          </div>
          <div className='portfolio-c-list'>
            <div className='list-img'>
            <img src={inch} alt='' width={'20px'} /> 
            <h2>1INCH3s</h2>
            </div>
            <div className='list-digit'>
              <h3>0.00 </h3>
              {/* <h4> = $ 0.00</h4> */}
            </div>
          </div>
          <div className='portfolio-c-list'>
            <div className='list-img'>
            <img src={sol} alt='' width={'20px'} /> 
            <h2>1SOL</h2>
            </div>
            <div className='list-digit'>
              <h3>0.00 </h3>
              {/* <h4> = $ 0.00</h4> */}
            </div>
          </div>
          <div className='portfolio-c-list'>
            <div className='list-img'>
            <img src={aave} alt='' width={'20px'} /> 
            <h2>AAVE</h2>
            </div>
            <div className='list-digit'>
              <h3>0.006 </h3>
              {/* <h4> = $ 0.00</h4> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
