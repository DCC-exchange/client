import React, { useState } from 'react'
import './styles/assetsrec.css'
import { FiEye, FiEyeOff  } from "react-icons/fi";

// import cal from '../images/cal.svg'
import TotalAssets from './TotalAssets';
// import Deposit from '../overview/Deposit'
// import Withdraw from '../overview/Withdraw'
// import Transfer from '../overview/Transfer'

export default function Overview() {
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
    <div className='assets-rec'>
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
        <div className="portfolio-asset">
            <TotalAssets />
        </div>
    </div>
  )
}

