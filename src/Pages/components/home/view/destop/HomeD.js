import React, { useState,useEffect } from 'react'
import homeImg from "./image/homeImg.png"
import merry from "../../images/merry dcc.svg";
import laptop from "../../images/laptop dcc.svg";
import bitcoin from "../../images/bitcoin dcc.svg";
import trade from "../../images/trade exchange.svg";

import { Swiper, SwiperSlide } from "swiper/react";

import { useCryptoCoins } from "../../../../config/Coins"

import "swiper/swiper.min.css";

import "swiper/swiper-bundle.css";
import SwiperCore, { Autoplay } from "swiper";
import Spot from './routes/Spot';
import Usdt from './routes/Usdt';
import Coin from './routes/Coin';

SwiperCore.use([Autoplay]);
export default function HomeD() {

    

    const { CryptoCoins, Coins } = useCryptoCoins()

    let firstSlide = ["btc", "eth",  "link", "ltc", ]
    // let secondSlide = ["sol", "doge", "xrp", "matic"]

    useEffect(()=>{
        CryptoCoins()
    },[])

    const [ spotActive, setSpotActive ] = useState(true)
    const [ usdtActive, setUsdtActive ] = useState(false)
    const [ coinActive, setCoinActive ] = useState(false)

    const [ defaultRoute, setDefaultRoute ] = useState(<Spot />)

    const handleSelectRoute = ((e)=>{
        if(e === 1){
            setSpotActive(true)
            setUsdtActive(false)
            setCoinActive(false)
            setDefaultRoute(<Spot />)
        }else if (e === 2){
            setSpotActive(false)
            setUsdtActive(true)
            setCoinActive(false)
            setDefaultRoute(<Usdt />)
        }else{
            setSpotActive(false)
            setUsdtActive(false)
            setCoinActive(true)
            setDefaultRoute(<Coin />)
        }
    })

  return (
    <div className="home-page">
        <div className="design-circle"></div>
        <div className="home-page-container">
            <div className="home-text-container">
              <div className="home-text-content">
                  <div className="heading-text">
                      <div className="heading-text-container">
                          <h1><span>D</span>CC <br /> <span>Y</span>our <span>Ex</span>change</h1>
                      </div>
                  </div>
                  <div className="detailed-text">
                      <div className="detailed-text-container">
                          <h4>Buy And Sell BTC, ETH, LTC, DOGE and other altcoin</h4>
                      </div>
                  </div>
                  <div className="home-email-search">
                      <div className="home-email-search-container">
                          <div className="email-container">
                              <input type="text" placeholder='Email' />
                          </div>
                          <div className="button-container">
                              <button>Get started</button>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="home-img-content">
                  <div className="home-img-container">
                      <img src={homeImg} alt="" />
                  </div>
              </div>
            </div>

            {/* ======================== Swiping coins ================================== */}

            <div className="coin-price-container">
                <Swiper 
                    slidesPerView={1}
                    spaceBetween={0}
                    speed={2500}
                    loop={true}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false, 
                    }}
                        className="mySwiper" >
                    <SwiperSlide>
                        <div  className="coin-price">
                            {Coins &&
                                Coins.filter(newEl => firstSlide.includes(newEl.symbol)).map((coin) => (
                                <div key={coin.id} className="coin-price-content">
                                    <div className="coin-price-details">
                                        <h3>{coin.symbol}/USDT <span>+{parseFloat(coin.price_change_percentage_24h).toFixed(2)}%</span></h3>
                                        <h2>{coin.current_price}</h2>
                                        <p>24H Volume {coin.total_volume}</p>
                                    </div>
                            </div>
                            ))}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="coin-price">
                            <div className="coin-price-content">
                                <div className="coin-price-details">
                                    <h3>ETH/USDT <span>-2.8%</span></h3>
                                    <h2>2.3628</h2>
                                    <p>24H Volume 265,234</p>
                                </div>
                            </div>
                            <div className="coin-price-content">
                                <div className="coin-price-details">
                                    <h3>ETH/USDT <span>-2.8%</span></h3>
                                    <h2>2.3628</h2>
                                    <p>24H Volume 265,234</p>
                                </div>
                            </div>
                            <div className="coin-price-content">
                                <div className="coin-price-details">
                                    <h3>ETH/USDT <span>-2.8%</span></h3>
                                    <h2>2.3628</h2>
                                    <p>24H Volume 265,234</p>
                                </div>
                            </div>
                            <div className="coin-price-content">
                                <div className="coin-price-details">
                                    <h3>ETH/USDT <span>-2.8%</span></h3>
                                    <h2>2.3628</h2>
                                    <p>24H Volume 265,234</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className="home-market">
                <div className="home-market-container">
                    <div className="sliding-images">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        speed={2000}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        className="mySwiper"
                        >
                        <SwiperSlide>
                            <div className="sliding-container">
                                <div className="sliding-content">
                                    <img src={trade} alt="" />
                                </div>
                                <div className="sliding-content">
                                    <img src={bitcoin} alt="" />
                                </div>
                                <div className="sliding-content">
                                    <img src={merry} alt="" />
                                </div>
                                <div className="sliding-content">
                                    <img src={laptop} alt="" />
                                </div>
                            </div>
                        </SwiperSlide>  
                        <SwiperSlide>
                            <div className="sliding-container">
                                <div className="sliding-content">
                                    <img src={trade} alt="" />
                                </div>
                                <div className="sliding-content">
                                    <img src={bitcoin} alt="" />
                                </div>
                                <div className="sliding-content">
                                    <img src={merry} alt="" />
                                </div>
                                <div className="sliding-content">
                                    <img src={laptop} alt="" />
                                </div>
                            </div>
                        </SwiperSlide>  
                        </Swiper>
                    </div>
                    {/* ===================== market routes ========================== */}
                    <div className="market-home-route">
                        <div className="market-home-route-conatiner">
                            <div className="market-route-contents">
                                <div onClick={()=>handleSelectRoute(1)} className={ spotActive ? "active" : "market-route-details" }>
                                    <h4>SPOT</h4>
                                </div>
                                <div onClick={()=>handleSelectRoute(2)} className={ usdtActive ? "active" : "market-route-details" }>
                                    <h4>USDT-M</h4>
                                </div>
                                <div onClick={()=>handleSelectRoute(3)} className={ coinActive ? "active" : "market-route-details"}>
                                    <h4>COIN-M</h4>
                                </div>
                            </div>

                            <div className="home-coin-dropdown">
                                <div className="home-coin-dropdown-container">
                                    <div className="home-coin-heading">
                                        <div className="home-coin-heading-container">
                                            <div className="pair-container">
                                                <div className="pair-content">
                                                    <h4>Pair</h4>
                                                </div>
                                            </div>
                                            <div className="price-container">
                                                <div className="price-content">
                                                    <h4>Price</h4>
                                                </div>
                                            </div>
                                            <div className="price-container">
                                                <div className="price-content">
                                                    <h4>24H Change%</h4>
                                                </div>
                                            </div>
                                            <div className="price-container">
                                                <div className="price-content">
                                                  
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {defaultRoute}
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
