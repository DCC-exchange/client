import React from 'react'

export default function Coin() {
  return (
    <div className='homeCoindrop'>
    <div className="homeCoindrop-container">
        <div className="coin-pair">
            <div className="coin-pair-container">
                <div className="imgae">
                  <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" alt="" />
                </div>
                <div className="pair">
                    <h3>BTC/<span>USD</span></h3>
                </div>
            </div>
        </div>
        <div className="coin-container">
            <div className="coin-content">
                <h4>23573.35</h4>
            </div>
        </div>
        <div className="coin-percent">
          <div className="coin-percent-container">
              <p>-2.45%</p>
          </div>
        </div>
        <div className="trade-section">
            <div className="trade-btn-container">
                <div className="trade-btn-content">
                    <button>Buy</button>
                </div>
                <div className="trade-btn-content">
                    <button>Trade</button>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
