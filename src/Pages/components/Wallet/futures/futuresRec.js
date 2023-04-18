import React, { useState} from 'react'
import '../futures/futures.css'
import cal from '../images/cal.svg'
import middle from '../images/middleimg.svg'
import { FiEye, FiEyeOff  } from "react-icons/fi";

export default function FuturesRec() {

  const [ShowAmount, setShowAmount] = useState(true)

  const handleShowAmount = (()=>{
    if(ShowAmount){
      setShowAmount(false)
    }else{
      setShowAmount(true)
    }
  })

  return (
    <div className='futures-rec assets-rec'>
      <div className='futures-rec-first'>
        <div className='usd-m'>USDT-M</div>
        <div className='coin-m'>COIN-M</div>
        <div className='lite'>Lite Contracts</div>
        <img src={cal} alt='' width={'20pc'} />
      </div>

      <div className='futures-secnd'>
        <div className='ineer'>
            <h2>Wallet Balance [USDT]</h2>
            <div className="display-amount" onClick={handleShowAmount}>
              { ShowAmount ? <FiEye /> : <FiEyeOff />}
            </div>
        </div>
        <div className='transfer'>Transfer</div>
      </div>

      <div className='assets-secnd'>
        <h1>0:00 </h1>
        <h3> = $ 00:00</h3>
      </div>

      <div className='furures-last'>
        <div className='futures-right'>
            <h1>Margin Balance</h1>
            <h2>0.00</h2>
            <h3>= $ 0.00</h3>
        </div>
        <div className='futures-right left-left'>
            <h1>PNL [USDT]</h1>
            <h2>0.00</h2>
            <h3>= $ 0.00</h3>
        </div>
      </div>

      <div className='img-middle-'>
        <img src={middle} alt=''/>
      </div>

      <div className='options-'>
        <div className='options--'>Positions[0]</div>
        <div>Orders[0]</div>
        <div>All Assets</div>
      </div>

    </div>
  )
}
