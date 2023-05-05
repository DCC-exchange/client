import React, { useEffect  } from 'react'
import { useCryptoCoins } from "../../../../../config/Coins"

export default function Coin() {

    const { CryptoCoins, Coins, error, isLoading } = useCryptoCoins()

    let filtCoin = [ "btc","eth", "dot",  "xrp", "doge", ]

    useEffect(()=>{
      CryptoCoins()
    },[])

  return (
    <div className='homeCoindrop'>
    { isLoading && <div className="isloading-coin">
       <h1>Loading...</h1>
   </div> }
   { error && <div className="isloading-coin">
       <h1>Network Error</h1>
   </div> }

   {Coins &&
          Coins.filter(newEl => filtCoin.includes(newEl.symbol)).map((coin) => (
        <div key={coin.id} className="homeCoindrop-container">
       <div className="coin-pair">
           <div className="coin-pair-container">
               <div className="imgae">
                   <img src={coin.image} alt="" />
               </div>
               <div className="pair">
                   <h3>{coin.symbol}USD</h3>
               </div>
           </div>
       </div>
       <div className="coin-container">
           <div className="coin-content">
               <h4>{coin.current_price}</h4>
           </div>
       </div>
       <div className="coin-percent">
         <div className="coin-percent-container">
             {coin.price_change_percentage_24h >= 0 && (
          <p className="positive">
               +{parseFloat(coin.price_change_percentage_24h).toFixed(2)}%{" "}
           </p>
           )}
           {coin.price_change_percentage_24h < 0 && (
               <p className="negative">
                   {parseFloat(coin.price_change_percentage_24h).toFixed(2)}%
               </p>
           )}
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
))}
</div>
  )
}
