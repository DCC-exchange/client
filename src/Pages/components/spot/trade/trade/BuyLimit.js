import React, {useState} from 'react'

export default function BuyLimit() {

    const [ marketPrice, setMarketPrice ] = useState(46.78)

    const AddPrice = ((e)=>{
        if(e === "add"){
            let newPrice = marketPrice + 0.1
            setMarketPrice(newPrice)
        }else{
            let newPrice = marketPrice - 0.1
            setMarketPrice(newPrice)
        }
    })

  return (
    <div className="market-limit">
        <div className="market-limit-btn-container">
            <div className="icon" onClick={()=>AddPrice("add")}>
                <h4>-</h4>
            </div>
            <div className="input">
                <input type="number" value={marketPrice} onChange={(e)=> setMarketPrice(e.target.value)} placeholder='Market Price'  />
            </div>
            <div className="icon" onClick={()=>AddPrice("asub")}>
                <h4>+</h4>
            </div>
        </div>
        <div className="market-limit-btn-container">
        <div className="icon"></div>
            <div className="btn">
                <button>Market</button>
            </div>
            <div className="icon"></div>
        </div>
        <div className="submit-btn-container">
            <div className="submit-btn">
                <button type='submit'>Buy(ETH)</button>
            </div>
        </div>
    </div>
  )
}
