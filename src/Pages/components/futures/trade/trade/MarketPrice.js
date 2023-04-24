import React, {useState} from 'react'

export default function MarketPrice() {

    const [ TradeAmount, setTradeAmount ] = useState("")

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
    <div className="market-limit-btn-container">
        <div className="icon" onClick={()=> setTradeAmount(TradeAmount + 0.1)}>
            <h4>-</h4>
        </div>
        <div className="input">
            <input type="number" value={TradeAmount} onChange={(e)=> setTradeAmount(e.target.value)} placeholder='Total(ETH)'  />
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
