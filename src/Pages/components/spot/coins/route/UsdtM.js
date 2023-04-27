import React, { useState, useEffect } from 'react'
import { MdOutlineContentPasteSearch} from "react-icons/md";
import { useCryptoCoins } from '../../../../config/Coins'; 


export default function UsdtM() {

    const  { CryptoCoins, Coins, isLoading, error } = useCryptoCoins()

    useEffect(()=>{
      CryptoCoins()
    },[])

    console.log(Coins)

  return (
    <div className='coin-drop-list'>
        <div className="coin-drop-list-container">
        { isLoading && <div className="isloading-coin">
            <h1>Loading...</h1>
        </div> }
        { error && <div className="isloading-coin">
            <h1>Network Error</h1>
        </div> }

            { Coins &&  Coins.map((coin)=>(
                <div className="coin-drop-list-content">
                <div className="image-name-container">
                    <div className="image">
                        <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" alt="" />
                    </div>
                    <div className="pair">
                        <h4>{coin.symbol} <span>/USDT</span> </h4>
                    </div>
                </div>
                <div className="lastprice-container">
                    <div className="price">
                        <h4>{coin.current_price}</h4>
                    </div>
                    <div className="percent">
                        <h4>+{coin.price_change_percentage_24h.toFixed(2)}% </h4>
                    </div>
                </div>
            </div>
            ))}
            { !Coins && <div className="no-data">
                <div className="no-data-container">
                    <div className="no-data-content">
                        <h4>No data</h4>
                        <h3><MdOutlineContentPasteSearch /></h3>
                    </div>
                </div>
            </div> }
        </div>
    </div>
  )
}