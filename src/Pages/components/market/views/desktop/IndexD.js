import React, { useState, useEffect } from 'react'

import { useCryptoCoins } from '../../../../config/Coins'

import { IoSearch } from "react-icons/io5";
import Spot from './routes/Spot';
import Favourite from './routes/Favourite';
import Perpetual from './routes/Perpetual';

export default function IndexD() {

  const { CryptoCoins, Coins, isLoading, error } = useCryptoCoins()
  let filtCoin = [ "btc","eth",  "xrp", "doge", ]
  useEffect(()=>{
    CryptoCoins()
  },[])


    const [ defaultRoute, setDefaultRoute ] = useState(<Spot />)
    const [ spotActive, setSpotActive ] = useState(true)
    const [ favActive, setFavActive ] = useState(false)
    const [ PerpetualActive, setPerpetualActive ] = useState(false)

  const handleRouteControl = ((e)=>{
      if(e === 1){
        setFavActive(true)
        setPerpetualActive(false)
        setSpotActive(false)
        setDefaultRoute(<Favourite />)
      }else if(e === 2){
        setDefaultRoute(<Spot />)
        setFavActive(false)
        setPerpetualActive(false)
        setSpotActive(true)
      }else{
        setFavActive(false)
        setPerpetualActive(true)
        setSpotActive(false)
        setDefaultRoute(<Perpetual />)
      }
  })

  return (
    <div className="market-desktop">
        <div className="market-desktop-container">
         
            <div className="market-coin-cards">

                { isLoading && <div className="isloading-coin">
                    <h1>Loading...</h1>
                </div> }
                { error && <div className="isloading-coin">
                    <h1>Network Error</h1>
                </div> }

               { Coins && Coins.filter(newEl => filtCoin.includes(newEl.symbol)).map((detail) => (
                  <div key={detail.id} className="market-card-container">
                    <div className="market-card-content">
                        <div className="market-card-imgae">
                          <img src={detail.image} alt="" />
                        </div>
                        <div className="market-card-details">
                          <div className="coin-pair">
                            <h3>{detail.symbol}</h3>
                            <h2>{detail.current_price} <span>= USD{detail.current_price}</span></h2>
                          </div>
                            <div className="volume">
                                <h4>
                                {detail.price_change_percentage_24h >= 0 && (
                                    <span className="positive">
                                      +{parseFloat(detail.price_change_percentage_24h).toFixed(2)}%{" "}
                                    </span>
                                  )}
                                  {detail.price_change_percentage_24h < 0 && (
                                    <span className="negative">
                                        {parseFloat(detail.price_change_percentage_24h).toFixed(2)}%
                                    </span>
                                  )}
                                   Volume {detail.total_volume}</h4>
                            </div>  
                        </div>
                    </div>
                </div>
              )) }
            </div>



            <div className="market-dashboard">
              <div className="market-dashboard-container">
                  <div className="market-dashboard-route">
                      <div className="market-dashboute-route-content">
                          <div onClick={()=>handleRouteControl(1)} className={favActive ? "active" :"favourite-route" }>
                              <h4>Favourite</h4>
                          </div>
                          <div onClick={()=>handleRouteControl(2)} className={spotActive ? "active" :"favourite-route" }>
                            <h4>Spot</h4>
                          </div>
                          <div onClick={()=>handleRouteControl(3)} className={PerpetualActive ? "active" :"favourite-route" }>
                              <h4>Perpetual</h4>
                          </div>
                          <div className="search">
                            <div className="search-container">
                                <div className="search-icon" >
                                  <h3><IoSearch /></h3>
                                </div>
                                <div className="input">
                                  <input type="text" placeholder='Search' />
                                </div>
                            </div>
                          </div>
                      </div>
                  </div>
                  
                  {defaultRoute}
              </div>
            </div>
        </div>
    </div>
  )
}
