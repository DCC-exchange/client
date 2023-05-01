import React from 'react'
import Navbar from './component/Navbar'
import homeImg from "./image/homeImg.png"

import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/swiper.min.css";

import "swiper/swiper-bundle.css";
import SwiperCore, { Autoplay } from "swiper";


SwiperCore.use([Autoplay]);
export default function HomeD() {
  return (
    <div className="home-page">
        <div className="design-circle"></div>
        <Navbar />
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
                <Swiper  slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    speed={1000}
                    direction='vertical'
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false, 
                    }}
                        className="mySwiper" >
                    <SwiperSlide>
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
                    </SwiperSlide>
                    <SwiperSlide>
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
                    </SwiperSlide>
                    <SwiperSlide>
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
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </div>
  )
}
