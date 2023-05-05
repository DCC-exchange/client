import React from 'react'

export default function Spot() {
  return (
    <div className="market-spot-main">
        <div className="market-spot-main-container">
            <div className="header">
                <div className="header-container">
                    <div className="content">
                        <h4>Name</h4>
                    </div>
                    <div className="content">
                        <h4>Last Price / Volume</h4>
                    </div>
                    <div className="percent">
                        <h4>24H change%</h4>
                    </div>
                </div>
            </div>
            <div className="body">
              <div className="body-container">
                  <div className="coin-pair">
                      <h4>BTC <span>/USDT</span> </h4>
                      <span>Spot</span>
                  </div>
                  <div className="price">
                    <h4>29,000.7</h4>
                    <span>Vol 1.3M</span>
                  </div>
                  <div className="percent">
                      <button className='negative'>-2.34%</button>
                  </div>
              </div>
            </div>
        </div>
    </div>
  )
}
