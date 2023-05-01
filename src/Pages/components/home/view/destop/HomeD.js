import React from 'react'
import Navbar from './component/Navbar'
import homeImg from "./image/homeImg.png"

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
                          <h1><span>D</span>DCC <span>Y</span>our <span>Ex</span>change</h1>
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
        </div>
    </div>
  )
}
