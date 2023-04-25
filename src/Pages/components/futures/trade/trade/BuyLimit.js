import React, {useState} from 'react'
import { TbSquareRotated } from "react-icons/tb";
import { HiCheckBadge } from "react-icons/hi2";

export default function BuyLimit() {

    const [ marketPrice, setMarketPrice ] = useState(46.78)
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

    const handleStopLost = (()=>{
        
    })

  return (
    <div className="market-limit">
        <div className="market-limit-btn-container">
            <div className="icon" onClick={()=>setMarketPrice(marketPrice + 0.1)}>
                <h4>-</h4>
            </div>
            <div className="input">
                <input type="number" value={marketPrice} onChange={(e)=> setMarketPrice(e.target.value)} placeholder='Market Price'  />
            </div>
            <div className="icon" onClick={()=>setMarketPrice(marketPrice - 0.1)}>
                <h4>+</h4>
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
                <div className="set-stoplost-container">
                    <h3 onClick={()=>handleStopLost("tp")} ><HiCheckBadge /></h3>
                    <h4>TP/SL</h4>
                </div>
            </div>
            <div className="stop-lose">
                <div className="stop-lose-container">
                    <div className="tp-content">
                        <input type="text" placeholder='TP' />
                    </div>
                    <div className="tp-content">
                        <input type="text" placeholder='SL' />
                    </div>
                </div>
            </div>

            <div className="set-stoplost">
                <div className="set-stoplost-container">
                    <h3 onClick={()=>handleStopLost("reduce")} ><HiCheckBadge /></h3>
                    <h4>Reduce only</h4>
                </div>
            </div>

        <div className="submit-btn-container">
            <div className="submit-btn">
                <button type='submit'>Buy(ETH)</button>
            </div>
        </div>
    </div>
  )
}
