import React from 'react'

export default function Spot() {
  return (
    <div className="market-spot-main">
        <div className="market-spot-main-container">
            <div className="header">
                <div className="header-container">
                    <div className="content">
                        <h4>Name</h4>
                    </div>
                    <div className="content">
                        <h4>Last Price / Volume</h4>
                    </div>
                    <div className="percent">
                        <h4>24H change%</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
