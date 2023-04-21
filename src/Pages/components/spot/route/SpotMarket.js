import React,{ useState} from 'react'
import { BiTransfer } from "react-icons/bi";
import { BsBarChart, BsStarHalf } from "react-icons/bs";
import buyActive from "../images/buyActive1.svg"
import buyInActive from "../images/sellBtn.svg"
import sellActive from "../images/ActiveSell.svg"
import sellInActive from "../images/inactiveSell.svg"
import Buy from '../trade/buy/Buy';
import Sell from '../trade/sell/Sell';

export default function SpotMarket() {

  const [ buyState, setBuyState ] = useState(true)

  const handleTradeSwitch = ((e)=>{
      if(e === "buy"){
        setBuyState(true)
      }else{
        setBuyState(false)
      }
  })

  return (
    <div className="spot-market">
        <div className="spot-market-container">
            <div className="coin-title">
              <div className="coin-title-container">
                <div className="slide-icon-container">
                  <div className="slide-icon">
                        <h4><BiTransfer /></h4>
                    </div>
                    <div className="content-coin-name">
                        <h3>ETH /USDT</h3>
                    </div>
                    <div className="coin-percent">
                      <h4>5.73%</h4>
                    </div>
                </div>
                  <div className="market-chart-container">
                    <div className="market-chart-icon">
                        <h3><BsBarChart /> </h3>
                    </div>
                    <div className="market-star">
                        <h3><BsStarHalf /></h3>
                    </div>
                  </div>
              </div>
            </div>
            <div className="spot-trading-contaent">
                <div className="spot-buy-contents">
                { buyState ?  
                    <div className="spot-buy-btn">
                      <div className="buy-active-btn" onClick={()=> handleTradeSwitch("buy")} >
                          {/* Buy btn */}
                          <img src={buyActive} alt="o" />
                      </div>
                      <div className="buy-inactive-btn" onClick={()=> handleTradeSwitch("sell")} >
                          {/* Buy btn */}
                          <img src={buyInActive} alt="o" />
                      </div>
                    </div> : 
                    <div className="spot-buy-btn">
                      <div className="buy-active-btn" onClick={()=> handleTradeSwitch("buy")} >
                          {/* Buy btn */}
                          <img src={sellInActive} alt="o" />
                      </div>
                      <div className="buy-inactive-btn" onClick={()=> handleTradeSwitch("sell")}>
                          {/* Buy btn */}
                          <img src={sellActive} alt="o" />
                      </div>
                  </div> }
                  <div className="amount-availability">
                      <div className="amount-availability-container">
                          <div className="amount-availability">
                            <h4>Available</h4>
                          </div>
                          <div className="coin-availbility">
                            <h4>0 USDT</h4>
                          </div>
                      </div>
                  </div>
                  <div className="spot-buy-limit">
                      { buyState ? <Buy /> : <Sell /> }
                  </div>
                </div>
                <div className="spot-display-market-price">
                  <div className="spot-display-market-price-contaniner">
                      <p>Market Price</p>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}
