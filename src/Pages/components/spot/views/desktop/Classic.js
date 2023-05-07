import React from 'react'
import Index from './orderBook'

export default function Classic() {
  return (
    <div className='spot-classic'>
        <div className="spot-classic-container">
            <div className="spot-classic-route">
                <div className="spot-classic-route-conatiner">
                    <h3>Route</h3>
                </div>
            </div>
            <div className="spot-classic-chart">
              <div className="spot-classic-chart-container">
                  <h3>Candle chart</h3>
              </div>
            </div>
            <Index />
        </div>
    </div>
  )
}
