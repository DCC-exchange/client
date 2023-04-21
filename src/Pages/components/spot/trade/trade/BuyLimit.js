import React, {useState} from 'react'

export default function BuyLimit() {

    const [ marketPrice, setMarketPrice ] = useState(46.78)
    const [ TradeAmount, setTradeAmount ] = useState("")

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
        <div className="submit-btn-container">
            <div className="submit-btn">
                <button type='submit'>Buy(ETH)</button>
            </div>
        </div>
    </div>
  )
}
