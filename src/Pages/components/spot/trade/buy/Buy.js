import React, { useState} from 'react'
import BuyLimit from '../trade/BuyLimit'

export default function Buy() {

    const [ defaultTrade, setDefaultTrade ] = useState(true)

    const handleTradeLimit = ((e)=>{
        if(e === "limit"){
            setDefaultTrade(true)
        }else{
            setDefaultTrade(false)
        }
    })

  return (
    <div className="buy-limit">
        <div className="buy-limit-container">
            <div className="market-limit-btn">
                <div className="market-limit-btn-container">
                    <div className="icon"></div>
                    <div className="btn-container">
                        <div className="btn" onClick={handleTradeLimit}>
                            <button>Limit</button>
                        </div>
                        <div className="select-market-trade">
                            <div className="select-market-trade-container">
                                <div className="btn" onClick={handleTradeLimit}>
                                    <button>Market</button>
                                </div>
                                <div className="btn" onClick={handleTradeLimit}>
                                    <button>Market</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="icon"></div>
                </div>
                { defaultTrade && <BuyLimit /> }
            </div>
        </div>
    </div>
  )
}
