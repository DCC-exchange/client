import React from 'react'

export default function MarketPrice() {

    const sellPrice = [{
        price : 12.34,
        amount : 345.45
    },
    {
        price : 12.35,
        amount : 345.45
    },
    {
        price : 12.36,
        amount : 645.45
    },
    {
        price : 12.37,
        amount : 55.45
    },
    {
        price : 12.37,
        amount : 55.45
    }, 
    {
        price : 12.37,
        amount : 55.45
    },
    {
        price : 12.37,
        amount : 55.45
    }]
   
  return (
    <div className="spot-display-market-price">
    <div className="spot-display-market-price-contaniner">
        <div className="market-price-header">
            <div className="price">
                <h4>Price</h4>
            </div>
            <div className="amount">
                <h4>Amount</h4>
            </div>
        </div>
        <div className="sell-market-price">
            { sellPrice.map((sell)=>(
                <div className="sell-market-price-container">
                    <div className="price-content">
                        <h4>{sell.price}</h4>
                    </div>
                    <div className="amount-content">
                        <h4>{sell.amount}</h4>
                    </div>
                </div>
            ))}
        </div>

        <div className="middle-price">
            <div className="middle-price-container">
                <div className="cont">
                    <h2>2.357</h2>
                    <h5>=$2.34</h5>
                </div>
            </div>
        </div>

        <div className="buy-market-price">
            { sellPrice.map((sell)=>(
                <div className="buy-market-price-container">
                    <div className="price-content">
                        <h4>{sell.price}</h4>
                    </div>
                    <div className="amount-content">
                        <h4>{sell.amount}</h4>
                    </div>
                </div>
            ))}
        </div>
    </div>
  </div>
  )
}
