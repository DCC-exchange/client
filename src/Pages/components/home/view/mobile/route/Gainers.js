import React from 'react'
import { useCryptoCoins } from '../../../../../config/Coins'
import { useEffect } from 'react'

export default function Gainers() {

  const { CryptoCoins, Coins, isLoading, error } = useCryptoCoins()

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
      Coins.filter(newEl => newEl.price_change_percentage_24h > 8).map((coin) => (
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
  )
}
