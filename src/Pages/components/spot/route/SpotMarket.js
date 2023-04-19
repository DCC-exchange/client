import React from 'react'
import { BiTransfer } from "react-icons/bi";
import { BsBarChart, BsStarHalf } from "react-icons/bs";

export default function SpotMarket() {
  return (
    <div className="spot-market">
        <div className="spot-market-container">
            <div className="coin-title">
              <div className="coin-title-container">
                <div className="slide-icon-container">
                  <div className="slide-icon">
                        <h4><BiTransfer /></h4>
                    </div>
                    <div className="coin-name">
                        <h3>Eth /Usdt</h3>
                    </div>
                    <div className="coin-percent">
                      <h4>53%</h4>
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
        </div>
    </div>
  )
}
