import React from 'react'

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
                            <div className="favourite-route">
                                <h4>Favourite</h4>
                            </div>
                            <div className="spot-route">
                              <h4>Spot</h4>
                            </div>
                            <div className="perpetual">
                                <h4>Perpetual</h4>
                            </div>
                            <div className="search">
                              <div className="search-container">
                                  <div className="search-icon">

                                  </div>
                                    <div className="input">
                                      <input type="text" placeholder='Search' />
                                    </div>
                              </div>
                            </div>
                        </div>
                  </div>
              </div>
            </div>
        </div>
    </div>
  )
}
