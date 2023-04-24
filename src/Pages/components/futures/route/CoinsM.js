import React,{ useState} from 'react'
import { BiTransfer } from "react-icons/bi";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { BsBarChart} from "react-icons/bs";
import buyActive from "../images/buyActive1.svg"
import buyInActive from "../images/sellBtn.svg"
import sellActive from "../images/ActiveSell.svg"
import sellInActive from "../images/inactiveSell.svg"
import { IoAddCircleOutline } from "react-icons/io5";
import Buy from '../trade/buy/Buy';
import Sell from '../trade/sell/Sell';
import MarketPrice from '../trade/market/MarketPrice';
import CoinRoute from '../coins/CoinRoute';

import { RxTriangleDown } from "react-icons/rx";

export default function CoinsM() {

  const [ buyState, setBuyState ] = useState(true)

  const handleTradeSwitch = ((e)=>{
      if(e === "buy"){
        setBuyState(true)
      }else{
        setBuyState(false)
      }
  })

  const [ favouritePair, setFavouritePair] = useState(false)

  const Addfavourite = (()=>{
    if(favouritePair){
      setFavouritePair(false)
    }else{
      setFavouritePair(true)
    }
  })

  const [coinSlide, setCoinSlide] = useState(false)

  const handleShowCoinSlide = (()=>{
    if(coinSlide){
      setCoinSlide(false)
    }else{
      setCoinSlide(true)
    }
  })

  return (
    <div className="spot-market">
      { coinSlide && <CoinRoute handleShowCoinSlide={handleShowCoinSlide} /> }
    <div className="spot-market-container">
        <div className="coin-title">
          <div className="coin-title-container">
            <div className="slide-icon-container">
              <div className="slide-icon" onClick={handleShowCoinSlide}>
                    <h4><BiTransfer /></h4>
                </div>
                <div className="content-coin-name">
                    <h3>ETH /USD</h3>
                </div>
                <div className="coin-percent">
                  <h4>5.73%</h4>
                </div>
            </div>
              <div className="market-chart-container">
                <div className="market-chart-icon">
                    <h3><BsBarChart /> </h3>
                </div>
                <div className="market-star-container" onClick={Addfavourite}>
                    { favouritePair ? <div className="filled-market-star">
                        <h3><AiFillStar /></h3>
                    </div> : <div className="market-star">
                        <h3><AiOutlineStar /></h3>
                    </div> }
                </div>    
              </div>
          </div>
        </div>

        <div className="cross-margin">
            <div className="cross-margin-container">
                <div className="leverage-container">
                    <div className="cross-content">
                        <h3>Cross</h3>
                        <h2><RxTriangleDown /></h2>
                    </div>
                    <div className="cross-content">
                        <h3>5X</h3>
                        <h2><RxTriangleDown /></h2>
                    </div>
                </div>
                <div className="funding-container">
                    <div className="funding-content">
                        <h4>Funding/Countdown</h4>
                        <h4>------------------</h4>
                        <h4><span>0.000045%/ 03:05:56</span></h4>
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
                      <div className="amount-availability-content">
                        <h4>Available</h4>
                        <h3><BiTransfer /></h3>
                      </div>
                      <div className="coin-availbility">
                        <h4>0 USDT</h4>
                        <h3><IoAddCircleOutline /></h3>
                      </div>
                  </div>
              </div>
              <div className="spot-buy-limit">
                  { buyState ? <Buy /> : <Sell /> }
              </div>
            </div>
              <MarketPrice />
        </div>
    </div>
</div>
  )
}
