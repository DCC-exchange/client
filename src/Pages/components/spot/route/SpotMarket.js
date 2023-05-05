import React,{ useState, useEffect} from 'react'
import { BiTransfer } from "react-icons/bi";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { BsBarChart} from "react-icons/bs";
import buyActive from "../images/buyActive1.svg"
import buyInActive from "../images/sellBtn.svg"
import sellActive from "../images/ActiveSell.svg"
import sellInActive from "../images/inactiveSell.svg"
import Buy from '../trade/buy/Buy';
import Sell from '../trade/sell/Sell';
import { IoAddCircleOutline } from "react-icons/io5";
import MarketPrice from '../trade/marketPrice/MarketPrice';
import CoinRoute from '../coins/CoinRoute';
import Index from '../trade/position/Index';
import { useCryptoCoins } from "../../../config/Coins"

export default function SpotMarket() {

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

  const [ showCoinRoute, setShowCoinRoute ] = useState(false)
  const handleShowCoinSlide = ((e)=>{
    if(e === 1){
      setShowCoinRoute(true)
    }else{
      setShowCoinRoute(false)
    }
  })


  const  { CryptoCoins, Coins, isLoading, error } = useCryptoCoins()

  useEffect(()=>{
    CryptoCoins()
  },[])


  const handleCoinUpdate = ((e)=>{
      console.log(e)
  })

  return (
    <div className="spot-market">
      { showCoinRoute && <CoinRoute UpdateCoin={handleCoinUpdate} Coins={Coins} isLoading={isLoading} error={error} handleShowCoinSlide={()=>handleShowCoinSlide(2)} /> }
        <div className="spot-market-container">
            <div className="coin-title">
              <div className="coin-title-container">
                <div className="slide-icon-container">
                  <div className="slide-icon" onClick={()=>handleShowCoinSlide(1)}>
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

            <Index />
        </div>
    </div>
  )
}
