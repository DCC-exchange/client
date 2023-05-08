import React from 'react'
import IndexM from './views/mobile/IndexM'
import Classic from './views/desktop/Classic'

// Mobile css link
import "./styles/mobile/spot.css"
import "./styles/mobile/limit.css"
import "./styles/mobile/marketPrice.css"
import "./styles/mobile/convert.css"
import "./styles/mobile/coinRoute.css"
// Desktop css link
import "./styles/desktop/spot.css"
import "./styles/desktop/chart.css"

export default function Spot() {
  return (
    <div className="market-page">
      <div className="mobile-view">
          <IndexM />
      </div>
      <div className="destop-view">
         <Classic />
      </div>
    </div>
  )
}
