import React, { useState } from 'react'

import { IoSearch } from "react-icons/io5";
import Spot from './routes/Spot';
import Favourite from './routes/Favourite';
import Perpetual from './routes/Perpetual';

export default function IndexD() {
  const coinCard = [{
    id:1,
    image:"https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
    pairs: "BTC/USDT",
    price: "23,3748.00",
    percent: '-2.53%',
    usdPrice: "34,268.00",
    volume: "234,378.00"
  },
  {
    id:2,
    image:"https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
    pairs: "BTC/USDT",
    price: "23,3748.00",
    percent: '-2.53%',
    usdPrice: "34,268.00",
    volume: "234,378.00"
  },
  {
    id:3,
    image:"https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
    pairs: "BTC/USDT",
    price: "23,3748.00",
    percent: '-2.53%',
    usdPrice: "34,268.00",
    volume: "234,378.00"
  },
  {
    id:4,
    image:"https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
    pairs: "BTC/USDT",
    price: "23,3748.00",
    percent: '-2.53',
    usdPrice: "34,268.00",
    volume: "234,378.00"
  }]

    const [ defaultRoute, setDefaultRoute ] = useState(<Spot />)



  const handleRouteControl = ((e)=>{
      if(e === 1){
        setDefaultRoute(<Favourite />)
      }else if(e === 2){
        setDefaultRoute(<Spot />)
      }else{
        setDefaultRoute(<Perpetual />)
      }
  })

  return (
    <div className="market-desktop">
        <div className="market-desktop-container">
            <div className="market-coin-cards">
              { coinCard.map((detail)=>(
                  <div key={detail.id} className="market-card-container">
                    <div className="market-card-content">
                        <div className="market-card-imgae">
                          <img src={detail.image} alt="" />
                        </div>
                        <div className="market-card-details">
                          <div className="coin-pair">
                            <h3>{detail.pairs}</h3>
                            <h2>{detail.price} <span>= USD{detail.usdPrice}</span></h2>
                          </div>
                            <div className="volume">
                                <h4><span>{detail.percent}% </span> Volume {detail.volume}</h4>
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
                          <div onClick={()=>handleRouteControl(1)} className="favourite-route">
                              <h4>Favourite</h4>
                          </div>
                          <div onClick={()=>handleRouteControl(2)} className="favourite-route">
                            <h4>Spot</h4>
                          </div>
                          <div onClick={()=>handleRouteControl(3)} className="active">
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
