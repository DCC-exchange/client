import React from 'react'

export default function Derivative() {
  return (
    <div className="nav-derivative">
        <div className="nav-derivative-container">
            <div className="nav-coinSelect">
                <div className="nav-coinSelect-content">
                    <div className="heading">
                        <h3>USDT-M</h3>
                    </div>
                    <div className="detailed">
                        <h4>Perpetual contracts settled in USDT </h4>
                    </div>
                </div>
                <div className="nav-coinSelect-content">
                    <div className="heading">
                        <h3>COIN-M</h3>
                    </div>
                    <div className="detailed">
                        <h4>Perpetual contracts settled in Crypto Currency </h4>
                    </div>
                </div>
            </div>
            <div className="nav-coinDisplay">
                <div className="nav-coinDisplay-container">
                    <div className="image-section">
                        <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" alt="" />
                    </div>
                    <div className="text-section">
                        <div className="heading">
                            <h3>USDT-M</h3>
                        </div>
                        <div className="detailed">
                            <h4>Perpetual contracts settled in USDT </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
