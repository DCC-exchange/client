import React, {useState} from 'react'
import { TbSquareRotated } from "react-icons/tb";
import { HiCheckBadge } from "react-icons/hi2";

export default function SellMarket() {

    const [ TradeAmount, setTradeAmount ] = useState("")

    const [ switchFirst, setSwitchFirst ] = useState("amount-display-content")
    const [ switchSecond, setSwitchSecond ] = useState("amount-display-contents")

    const [ percentActive, setPercentActive ] = useState("future-percent-content")
    const [ percentActive1, setPercentActive1 ] = useState("future-percent-content")
    const [ percentActive2, setPercentActive2 ] = useState("future-percent-content")
    const [ percentActive3, setPercentActive3 ] = useState("future-percent-content")
    const [ percentActive4, setPercentActive4 ] = useState("future-percent-content")

    const SetPercentageActive = ((e)=>{
        if(e === 0){
            setPercentActive("future-percent-contents")
            setPercentActive1('future-percent-content')
            setPercentActive2('future-percent-content')
            setPercentActive3('future-percent-content')
            setPercentActive4('future-percent-content')
        }
        else if(e === 25){
            setPercentActive("future-percent-contents")
            setPercentActive1("future-percent-contents")
            setPercentActive2('future-percent-content')
            setPercentActive3('future-percent-content')
            setPercentActive4('future-percent-content')
        }else if( e === 50){
            setPercentActive("future-percent-contents")
            setPercentActive1("future-percent-contents")
            setPercentActive2('future-percent-contents')
            setPercentActive3('future-percent-content')
            setPercentActive4('future-percent-content')
        }
        else if( e === 75){
            setPercentActive("future-percent-contents")
            setPercentActive1("future-percent-contents")
            setPercentActive2('future-percent-contents')
            setPercentActive3('future-percent-contents')
            setPercentActive4('future-percent-content')
        }else{
            setPercentActive("future-percent-contents")
            setPercentActive1("future-percent-contents")
            setPercentActive2('future-percent-contents')
            setPercentActive3('future-percent-contents')
            setPercentActive4('future-percent-contents')
        }
    })

    const SwitchAmount = ((e)=>{
        if(e === 1){
            setSwitchFirst('amount-display-content')
            setSwitchSecond("amount-display-contents")
        }else{
            setSwitchSecond("amount-display-content")
            setSwitchFirst("amount-display-contents")
        }
    })

    const [ StopLost, setStopLost ] = useState(false)

    const handleStopLost = ((e)=>{
        if(e === "tp"){
            if(StopLost){
                setStopLost(false)
            }else{
                setStopLost(true)
            }
        }
    })

  return (
    <div className="market-limit">
        <div className="market-limit-btn-container">
        <div className="icon">
        </div>
            <div className="btn">
            <button>Market Price</button>
            </div>
        <div className="icon">
        </div>
    </div>
        <div className="amount-display">
            <div className="amount-display-container">
                <div onClick={()=>SwitchAmount(1)} className={switchFirst}>
                    <h4>Matic</h4>
                </div>
                <div onClick={()=>SwitchAmount(2)} className={switchSecond}>
                    <h4>USDT</h4>
                </div>
            </div>
        </div>
        <div className="market-limit-btn-container">
            <div className="icon" onClick={()=> setTradeAmount(TradeAmount + 0.1)}>
                <h4>-</h4>
            </div>
            <div className="input">
                <input type="number" value={TradeAmount} onChange={(e)=> setTradeAmount(e.target.value)} placeholder={"Amount"}  />
            </div>
            <div className="icon" onClick={()=>setTradeAmount(TradeAmount - 0.1)}>
                <h4>+</h4>
            </div>
        </div>
        <div className="futures-percent">
            <div className="futures-percent-container">
                <div onClick={()=>SetPercentageActive(0)} className={percentActive}>
                    <h3><TbSquareRotated /></h3>
                </div>
                <div onClick={()=>SetPercentageActive(25)} className={percentActive1}>
                    <div className="connection"></div>
                    <h3><TbSquareRotated /></h3>
                </div>
                <div onClick={()=>SetPercentageActive(50)} className={percentActive2}>
                    <div className="connection"></div>
                    <h3><TbSquareRotated /></h3>
                </div>
                <div onClick={()=>SetPercentageActive(75)} className={percentActive3}>
                    <div className="connection"></div>
                    <h3><TbSquareRotated /></h3>
                </div>
                <div onClick={()=>SetPercentageActive(100)} className={percentActive4}>
                    <div className="connection"></div>
                    <h3><TbSquareRotated /></h3>
                </div>
            </div>
        </div>

            <div className="set-stoplost">
                <div className={ StopLost ? "active" : "set-stoplost-container" }>
                    <h3 onClick={()=>handleStopLost("tp")} ><HiCheckBadge /></h3>
                    <h4>TP/SL</h4>
                </div>
            </div>

            { StopLost &&  <div className="stop-lose">
                <div className="stop-lose-container">
                    <div className="tp-content">
                        <input type="text" placeholder='TP' />
                    </div>
                    <div className="tp-content">
                        <input type="text" placeholder='SL' />
                    </div>
                </div>
            </div> }
          
            <div className="set-stoplost">
                <div className="set-stoplost-container">
                    <h3 onClick={()=>handleStopLost("reduce")} ><HiCheckBadge /></h3>
                    <h4>Reduce only</h4>
                </div>
            </div>

            <div className="max-margin">
                <div className="max-magin-container">
                    <div className="max-margin-content">
                        <div className="name-tag">
                            <h3>Max</h3>
                        </div>
                        <div className="coin-price-tag">
                            <h3> 0 USDT</h3>
                        </div>
                    </div>
                    <div className="max-margin-content">
                        <div className="name-tag">
                            <h3>Max</h3>
                        </div>
                        <div className="coin-price-tag">
                            <h3> 0 USDT</h3>
                        </div>
                    </div>
                </div>
            </div>


        <div className="submit-btn-container">
            <div className="submit-btn">
                <button type='submit'>Sell/Short</button>
            </div>
        </div>
        <div className="time-in-force">
            <div className="time-in-force-container">
                <div className="time-in-force-content">
                    <div className="topic">
                        <h4>Time In Force (TIF) </h4>
                    </div>
                    <div className="btn">
                        <h4>GTC</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}