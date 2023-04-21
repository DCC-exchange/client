import React, { useState} from 'react'
import BuyLimit from '../trade/BuyLimit'

export default function Buy() {

    const handleTradeLimit = (()=>{
        
    })

  return (
    <div className="buy-limit">
        <div className="buy-limit-container">
            <div className="market-limit-btn">
                <div className="market-limit-btn-container">
                    <div className="icon"></div>
                    <div className="btn" onClick={handleTradeLimit}>
                        <button>Market</button>
                    </div>
                    <div className="icon"></div>
                </div>
                <BuyLimit />
            </div>
        </div>
    </div>
  )
}
