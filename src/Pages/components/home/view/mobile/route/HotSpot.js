import React from 'react'
import { useCryptoCoins } from '../../../../../config/Coins'
import { useEffect } from 'react'

export default function HotSpot() {

  const { CryptoCoins, Coins, isLoading, error } = useCryptoCoins()

  let filtCoin = ["btc", "doge","eth", "gala", "link", "ltc", "trx", "xrp", "matic", "sol"]

  useEffect(()=>{
    CryptoCoins()
  },[])

  return (


    <div className="home-coin-section-body">
          { isLoading && <div className="isloading-coin">
            <h1>Loading...</h1>
        </div> }
        { error && <div className="isloading-coin">
            <h1>Network Error</h1>
        </div> }

     {Coins &&
      Coins.filter(newEl => filtCoin.includes(newEl.symbol)).map((coin) => (
    <div key={coin.id} className="home-coin-section-body-container">
        <div className="pairs">
            <h4>{coin.symbol}USDT</h4>
        </div>
        <div className="price">
            <h4>{coin.current_price}</h4>
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
  )
}
