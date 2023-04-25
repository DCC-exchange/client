import React, {useState} from 'react'
import { TbSquareRotated } from "react-icons/tb";

export default function BuyLimit() {

    const [ marketPrice, setMarketPrice ] = useState(46.78)
    const [ TradeAmount, setTradeAmount ] = useState("")

    const [TotalAmount, setTotalAmount] = useState('')

    const [ percentActive1, setPercentActive1 ] = useState("percentage-boxEl")
    const [ percentActive2, setPercentActive2 ] = useState("percentage-boxEl")
    const [ percentActive3, setPercentActive3 ] = useState("percentage-boxEl")
    const [ percentActive4, setPercentActive4 ] = useState("percentage-boxEl")

    const SetPercentageActive = ((e)=>{
        if(e === 25){
            setPercentActive1("percentage-box-buy")
            setPercentActive2('percentage-boxEl')
            setPercentActive3('percentage-boxEl')
            setPercentActive4('percentage-boxEl')
        }else if( e === 50){
            setPercentActive1("percentage-box-buy")
            setPercentActive2('percentage-box-buy')
            setPercentActive3('percentage-boxEl')
            setPercentActive4('percentage-boxEl')
        }
        else if( e === 75){
            setPercentActive1("percentage-box-buy")
            setPercentActive2('percentage-box-buy')
            setPercentActive3('percentage-box-buy')
            setPercentActive4('percentage-boxEl')
        }else{
            setPercentActive1("percentage-box-buy")
            setPercentActive2('percentage-box-buy')
            setPercentActive3('percentage-box-buy')
            setPercentActive4('percentage-box-buy')
        }
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
        <div className="market-limit-btn-container">
            <div className="icon" onClick={()=> setTradeAmount(TradeAmount + 0.1)}>
                <h4>-</h4>
            </div>
            <div className="input">
                <input type="number" value={TradeAmount} onChange={(e)=> setTradeAmount(e.target.value)} placeholder='Amount(ETH)'  />
            </div>
            <div className="icon" onClick={()=>setTradeAmount(TradeAmount - 0.1)}>
                <h4>+</h4>
            </div>
        </div>

        <div className="futures-percent">
            <div className="futures-percent-container">
                <div onClick={()=>SetPercentageActive(0)} className="future-percent-content">
                    <h3><TbSquareRotated /></h3>
                </div>
                <div onClick={()=>SetPercentageActive(25)} className="future-percent-content">
                    <div className="connection"></div>
                    <h3><TbSquareRotated /></h3>
                </div>
                <div onClick={()=>SetPercentageActive(50)} className="future-percent-content">
                    <div className="connection"></div>
                    <h3><TbSquareRotated /></h3>
                </div>
                <div onClick={()=>SetPercentageActive(75)} className="future-percent-content">
                    <div className="connection"></div>
                    <h3><TbSquareRotated /></h3>
                </div>
                <div onClick={()=>SetPercentageActive(100)} className="future-percent-content">
                    <div className="connection"></div>
                    <h3><TbSquareRotated /></h3>
                </div>
            </div>
        </div>

        <div className="market-limit-btn-container">
            <div className="icon" onClick={()=> setTradeAmount(TotalAmount + 0.1)}>
                <h4>-</h4>
            </div>
            <div className="input">
                <input type="number" value={TotalAmount} onChange={(e)=> setTotalAmount(e.target.value)} placeholder='Total(USDT)'  />
            </div>
            <div className="icon" onClick={()=>setTotalAmount(TotalAmount - 0.1)}>
                <h4>+</h4>
            </div>
        </div>
        <div className="amount-availability">
            <div className="amount-availability-container">
                <div className="amount-availability">
                <h4>Overview</h4>
                </div>
                <div className="coin-availbility">
                <h4>0 USDT</h4>
                </div>
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
