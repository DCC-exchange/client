import React from 'react'

export default function IndexD() {
  const coinCard = [{
    id:1,
    image: `<img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" alt="" />`,
    pairs: "BTC/USDT",
    price: "23,3748.00",
    percent: '-2.53%',
    usdPrice: "34,268.00"
  },
  {
    id:2,
    image: `<img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" alt="" />`,
    pairs: "BTC/USDT",
    price: "23,3748.00",
    percent: '-2.53%',
    usdPrice: "34,268.00"
  },
  {
    id:3,
    image: `<img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" alt="" />`,
    pairs: "BTC/USDT",
    price: "23,3748.00",
    percent: '-2.53%',
    usdPrice: "34,268.00"
  },
  {
    id:4,
    image: `<img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" alt="" />`,
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
                                <h4><span>{detail.percent}%</span>Volume {detail.volume}</h4>
                            </div>  
                        </div>
                    </div>
                </div>
              )) }
            </div>
        </div>
    </div>
  )
}
