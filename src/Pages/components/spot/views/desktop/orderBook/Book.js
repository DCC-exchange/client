import React, { useState} from 'react'

export default function Book() {

    const [ MarkeyPrice ] = useState(0.367)

    const DisplayPrice = [
        {
        id: 1,
        price: 0.45783,
        amount: 960, 
        total: "567,996"
    },
    {
        id: 2,
        price: 0.45783,
        amount: 960, 
        total: "567,996"
    },
    {
        id: 3,
        price: 0.45783,
        amount: 960, 
        total: "567,996"
    },
    {
        id: 4,
        price: 0.45783,
        amount: 960, 
        total: "567,996"
    },
    {
        id: 5,
        price: 0.45783,
        amount: 960, 
        total: "567,996"
    },
    {
        id: 6,
        price: 0.45783,
        amount: 960, 
        total: "567,996"
    },
    {
        id: 7,
        price: 0.45783,
        amount: 960, 
        total: "567,996"
    }
]


const RecentTrades = [{
    id: 1,
    time: "13:23:51",
    price: "12,724.55",
    amount: 0.699937
},{
    id: 2,
    time: "13:23:51",
    price: "12,724.55",
    amount: 0.699937
},{
    id: 3,
    time: "13:23:51",
    price: "12,724.55",
    amount: 0.699937
},{
    id: 4,
    time: "13:23:51",
    price: "12,724.55",
    amount: 0.699937
},{
    id: 5,
    time: "13:23:51",
    price: "12,724.55",
    amount: 0.699937
},{
    id: 6,
    time: "13:23:51",
    price: "12,724.55",
    amount: 0.699937
},{
    id: 7,
    time: "13:23:51",
    price: "12,724.55",
    amount: 0.699937
},{
    id: 8,
    time: "13:23:51",
    price: "12,724.55",
    amount: 0.699937
},{
    id: 9,
    time: "13:23:51",
    price: "12,724.55",
    amount: 0.699937
},{
    id: 10,
    time: "13:23:51",
    price: "12,724.55",
    amount: 0.699937
},{
    id: 11,
    time: "13:23:51",
    price: "12,724.55",
    amount: 0.699937
},{
    id: 12,
    time: "13:23:51",
    price: "12,724.55",
    amount: 0.699937
},{
    id: 13,
    time: "13:23:51",
    price: "12,724.55",
    amount: 0.699937
},{
    id: 14,
    time: "13:23:51",
    price: "12,724.55",
    amount: 0.699937
},{
    id: 15,
    time: "13:23:51",
    price: "12,724.55",
    amount: 0.699937
},{
    id: 16,
    time: "13:23:51",
    price: "12,724.55",
    amount: 0.699937
},{
    id: 17,
    time: "13:23:51",
    price: "12,724.55",
    amount: 0.699937
},{
    id: 18,
    time: "13:23:51",
    price: "12,724.55",
    amount: 0.699937
},{
    id: 19,
    time: "13:23:51",
    price: "12,724.55",
    amount: 0.699937
}]

  return (
    <div className="spot-classic-orderbook">
        <div className="spot-classic-orderbook-container">
            <div className="spot-classic-orderbook-header">
                <h3>Order Book</h3>
            </div>
            <div className="spot-classic-orderbook-display-route">
                <div className="spot-classic-orderbook-display-route-img">
                    <div className="content">
                        <img src="https://www.bydfi.com/static/media/00c8c016e577.png" alt="" />
                    </div>
                    <div className="content">
                        <img src="https://www.bydfi.com/static/media/77a7063e35b9.png" alt="" />
                    </div>
                    <div className="content">
                        <img src="https://www.bydfi.com/static/media/5c808be11829.png" alt="" />
                    </div>
                </div>
            </div>

            <div className="spot-classic-orderbook-display-content-header">
                <div className="spot-classic-orderbook-display-content-header-container">
                    <div className="name">
                        <h4>Price(USDT)</h4>
                    </div>
                    <div className="name">
                        <h4>Amount</h4>
                    </div>
                    <div className="name">
                        <h4>Total</h4>
                    </div>
                </div>
                <div className="spot-classic-orderbook-display-content-body">
                    { DisplayPrice && DisplayPrice.map((price)=>(
                        <div key={price.id} className="container">
                            <div className="sell-price">
                                <h4>{price.price}</h4>
                            </div>
                            <div className="content">
                                <h4>{price.amount}</h4>
                            </div>
                            <div className="content">
                                <h4>{price.total}</h4>
                            </div>
                        </div>
                    )) }
                </div>
                <div className="spot-classic-orderbook-display-content-price">
                    <div className="content">
                        <h3>{MarkeyPrice}= ${MarkeyPrice.toFixed(2)}</h3>
                    </div>
                </div>
                <div className="spot-classic-orderbook-display-content-body">
                    { DisplayPrice && DisplayPrice.map((price)=>(
                        <div key={price.id} className="container">
                            <div className="content">
                                <h4>{price.price}</h4>
                            </div>
                            <div className="content">
                                <h4>{price.amount}</h4>
                            </div>
                            <div className="content">
                                <h4>{price.total}</h4>
                            </div>
                        </div>
                    )) }
                </div>
            </div>

            <div className="recent-trades">
                <div className="recent-trades-container">
                    <div className="recent-trades-header">
                        <div className="recent-trades-header-container">
                            <h4>Recent Trades</h4>
                        </div>
                    </div>
                    <div className="recent-trades-title">
                        <div className="recent-trades-title-container">
                            <div className="content">
                                <h4>Time</h4>
                            </div>
                              <div className="content">
                                <h4>Price(USDT)</h4>
                            </div>
                            <div className="content">
                                <h4>Amount</h4>
                            </div>
                        </div>
                    </div>
                    <div className="recent-trades-body">
                        <div className="recent-trades-body-container">
                            {RecentTrades.map((recent)=>(
                                <div key={recent.id} className="recent-trades-body-content">
                                    <div className="content">
                                        <h4>{recent.time}</h4>
                                    </div>
                                    <div className="price">
                                        <h4>{recent.price}</h4>
                                    </div>
                                    <div className="content">
                                        <h4>{recent.amount}</h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </div>
  )
}
