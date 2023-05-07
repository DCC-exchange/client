import React, { useState, useEffect } from 'react'
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { useCryptoCoins } from '../../../../../../config/Coins'; 


export default function Usdt() {

    const { CryptoCoins, Coins, isLoading, error } = useCryptoCoins()

    useEffect(()=>{
      CryptoCoins()
    },[])



    const [ starred, setStarred ] = useState(false)
    const handleStarred = (()=>{
        if(starred){
          setStarred(false)
        }else{
          setStarred(true)
        }
      })

  return (
    <div className="classic-spot-coins">
        <div className="classic-spot-coins-container">
            <div className="classic-spot-coins-header">
                <div className="classic-spot-coins-header-container">
                    <div className="content">
                        <h4>Name</h4>
                    </div>
                    <div className="content">
                        <h4>Last Price</h4>
                    </div>
                    <div className="content">
                        <h4>24H Change%</h4>
                    </div>
                </div>
            </div>
            <div className="classic-spot-coins-body">
                { isLoading && <div className="isloading-coin">
                        <h1>Loading...</h1>
                    </div> }
                    { error && <div className="isloading-coin">
                        <h1>Network Error</h1>
                    </div> }

                {Coins && Coins.map((coin) => (
                    <div key={coin.id} className="classic-spot-coins-body-container">
                        <div className="pair">
                            <h4>{coin.symbol}/USDT</h4>
                        </div>
                        <div className="price">
                            <h4>{coin.current_price}</h4>
                        </div>
                        <div className="percent">
                            <div className="percent-container">
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
                            <div className="star">
                                <h3 onClick={handleStarred}> { starred ? <AiFillStar /> : <AiOutlineStar /> } </h3>
                            </div>
                        </div>
                    </div>
                 ))}
            </div>
        </div>
    </div>
  )
}
