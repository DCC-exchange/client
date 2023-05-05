import React from 'react'
import { useCryptoCoins } from '../../../../../../../config/Coins' 
import { useEffect } from 'react'

export default function Usdt() {

  const { CryptoCoins, Coins, isLoading, error } = useCryptoCoins()

  useEffect(()=>{
    CryptoCoins()
  },[])

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
            { isLoading && <div className="isloading-coin">
                <h1>Loading...</h1>
            </div> }
            { error && <div className="isloading-coin">
                <h1>Network Error</h1>
            </div> }

            {Coins &&
              Coins.filter(newEl => newEl.symbol !== "usdt").map((coin) => (
              <div className="body-container">
                  <div className="coin-pair">
                      <h4>{coin.symbol}<span>/USDT</span> </h4>
                      <span>Spot</span>
                  </div>
                  <div className="price">
                    {coin.current_price}
                    <p>Vol {coin.total_volume}</p>
                  </div>
                  <div className="percent">
                  {coin.price_change_percentage_24h >= 0 && (
                      <button className="positive">
                        +{parseFloat(coin.price_change_percentage_24h).toFixed(2)}%{" "}
                      </button>
                    )}
                    {coin.price_change_percentage_24h < 0 && (
                      <button className="negative">
                          {parseFloat(coin.price_change_percentage_24h).toFixed(2)}%
                      </button>
                    )}
                  </div>
              </div>
            ))}
            </div>
        </div>
    </div>
  )
}
