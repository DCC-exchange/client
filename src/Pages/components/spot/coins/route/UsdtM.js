import React from 'react'
import { MdOutlineContentPasteSearch} from "react-icons/md";

export default function UsdtM({isLoading, error, Coins}) {

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
                <div key={coin.id} className="coin-drop-list-content">
                <div className="image-name-container">
                    <div className="image">
                        <img src={coin.image} alt="" />
                    </div>
                    <div className="pair">
                        <h4>{coin.symbol} <span>/USDT</span> </h4>
                    </div>
                </div>
                <div className="lastprice-container">
                    <div className="lastprice-content">
                        <div className="price">
                            <h4>{coin.current_price}</h4>
                        </div>
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