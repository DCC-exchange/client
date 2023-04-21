import React, { useState} from 'react'
import BuyLimit from '../trade/BuyLimit'

export default function Buy() {

    const [ defaultTrade, setDefaultTrade ] = useState(true)
    const [ displayLimit, setDisplayLimit ] = useState(false)

    const [ defaultState, setDefaultState ] = useState("Limit")

    const [ active1, setActive1 ] = useState('active')
    const [ active2, setActive2] = useState("")

    const handleTradeLimit = ((e)=>{
        setDisplayLimit(false)
        if(e === "limit"){
            setDefaultTrade(true)
            setActive1("active")
            setDefaultState("Limit")
            setActive2("")
        }else{
            setDefaultTrade(false)
            setActive2("active")
            setActive1("")
            setDefaultState("Market")
        }
    })
    const handleDisplayTradeLimit = (()=>{
        if(displayLimit){
            setDisplayLimit(false)
        }else{
            setDisplayLimit(true)
        }
    })

  return (
    <div className="buy-limit">
        <div className="buy-limit-container">
            <div className="market-limit-btn">
                <div className="market-limit-btn-container">
                    <div className="icon"></div>
                    <div className="btn-container">
                        <div className="btn" onClick={handleDisplayTradeLimit}>
                            <button>{defaultState}</button>
                        </div>
                    </div>
                    <div className="icon"></div>
                    { displayLimit && <div className="select-market-trade">
                            <div className="select-market-trade-container">
                                <div className="btn" onClick={()=>handleTradeLimit("limit")}>
                                    <p className={active1}>Limit</p>
                                </div>
                                <div className="btn" onClick={()=>handleTradeLimit("market")}>
                                    <p className={active2}>Market</p>
                                </div>
                            </div>
                        </div> }
                </div>
                { defaultTrade && <BuyLimit /> }
            </div>
        </div>
    </div>
  )
}
