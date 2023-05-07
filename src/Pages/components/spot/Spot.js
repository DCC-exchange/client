import React from 'react'
import IndexM from './views/mobile/IndexM'
import Classic from './views/desktop/Classic'

// Mobile css link
import "./styles/mobile/spot.css"
import "./styles/mobile/limit.css"
import "./styles/mobile/marketPrice.css"

// Desktop css link
import "./styles/desktop/spot.css"

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
