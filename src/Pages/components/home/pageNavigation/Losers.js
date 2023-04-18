import React from 'react'
import "./style/index.css"
import { useCryptoCoins } from '../../../config/Coins'
import { useEffect } from 'react'

export default function Gainers() {

  const { CryptoCoins, Coins, isLoading, error } = useCryptoCoins()

  useEffect(()=>{
    CryptoCoins()
  },[])


  return (
    <div className="Hot-coins">
      <div className="hot-coins-container">
        { isLoading && <div className="isloading-coin">
            <h1>Loading...</h1>
        </div> }
        { error && <div className="isloading-coin">
            <h1>Network Error</h1>
        </div> }

    {Coins &&
       Coins.filter(newEl => newEl.price_change_percentage_24h <= -5).map((coin) => (
        <div className="coin-inner" key={coin.id}>
            <div className="coin-transform">
              {coin.symbol} <span>/usdt</span>
            </div>
            <div className='coin-price'>
              <h3> {coin.current_price}</h3>
             </div>
            <div className="coin-name">
              {coin.price_change_percentage_24h >= 0 && (
                <button className="positive">
                  +{coin.price_change_percentage_24h}%{" "}
                </button>
              )}
              {coin.price_change_percentage_24h < 0 && (
                <button className="negative">
                    {coin.price_change_percentage_24h}%
                </button>
              )}
            </div>
          </div>
          ))}
      </div>
  </div>
  )
}
