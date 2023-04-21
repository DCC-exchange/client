import React from 'react'

export default function BuyLimit() {
  return (
    <div className="market-limit">
        <div className="market-limit-btn-container">
            <div className="icon"></div>
            <div className="input">
                <input type="number" placeholder='Market Price'  />
            </div>
            <div className="icon"></div>
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
