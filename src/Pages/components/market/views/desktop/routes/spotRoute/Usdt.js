import React, { useState, useEffect } from 'react'
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

import { useCryptoCoins } from '../../../../../../config/Coins' 

export default function Usdt() {

    const [ starred, setStarred ] = useState(false)

    const handleStarred = (()=>{
      if(starred){
        setStarred(false)
      }else{
        setStarred(true)
      }
    })

const { CryptoCoins, Coins, isLoading, error } = useCryptoCoins()

useEffect(()=>{
    CryptoCoins()
},[])
  
console.log(Coins)

  return (
    <div className='desktop-market-coins'>

        { isLoading && <div className="isloading-coin">
                <h1>Loading...</h1>
            </div> }
            { error && <div className="isloading-coin">
                <h1>Network Error</h1>
            </div> }

     {Coins &&
            Coins.filter(newEl => newEl.symbol !== "usdt").map((coin) => (
        <div key={coin.id} className="desktop-market-coins-container">
            <div className="logo-pairs">
                <div className="star">
                    <h3 onClick={handleStarred}> { starred ? <AiFillStar /> : <AiOutlineStar /> } </h3>
                </div>
                <div className="logo">
                    <img src={coin.image} alt="" />
                </div>
                <div className="pair">
                    <h4>{coin.symbol}<span>/USDT</span></h4>
                </div>
            </div>
            <div className="price">
                <h4>{coin.current_price}</h4>
            </div>
            <div className="change-percent">
                {coin.price_change_percentage_24h >= 0 && (
                      <h4 className="positive">
                        +{parseFloat(coin.price_change_percentage_24h).toFixed(2)}%{" "}
                      </h4>
                    )}
                    {coin.price_change_percentage_24h < 0 && (
                      <h4 className="negative">
                          {parseFloat(coin.price_change_percentage_24h).toFixed(2)}%
                      </h4>
                    )}
            </div>
            <div className="high">
                <h4>{coin.high_24h}</h4> 
            </div>
            <div className="high">
                <h4>{coin.low_24h}</h4>
            </div>
            <div className="high">
                <h4>{coin.total_volume}</h4>
            </div>
            <div className="trade">
                <h4>Trade</h4>
            </div>
        </div>
        ))}
    </div>
  )
}
