import React from 'react'
import { TfiShine } from "react-icons/tfi";

export default function Chart() {
  return (
    <div className="classic-chart">
        <div className="classic-chart-container">
            <div className="classic-chart-header">
                <div className="classic-chart-header-container">
                    <div className="header-name">
                        <div className="header-name-pair">
                            <h4>BTC/USDT</h4>
                        </div>
                        <div className="header-fullname">
                            <h4>BTC <span>(Bitcoin)</span> </h4>
                        </div>
                    </div>
                    <div className="current-price">
                        <h4>23,365.9</h4>
                    </div>
                    <div className="hours-change">
                        <span>24H change</span>
                        <h4>-1,622.8</h4>
                    </div>
                    <div className="hours-change">
                        <span>24H change%</span>
                        <h4>-3.67%</h4>
                    </div>
                    <div className="high">
                        <span>24H High</span>
                        <h4>29,268.90</h4>
                    </div>
                    <div className="high">
                        <span>24H Low</span>
                        <h4>29,268.90</h4>
                    </div>
                    <div className="high">
                        <span>24H Volume BTC</span>
                        <h4>29,268.90</h4>
                    </div>
                    <div className="shine-mode">
                        <h4><TfiShine /> </h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
