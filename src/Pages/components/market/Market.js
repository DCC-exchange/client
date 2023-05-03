import React from 'react'
import "./style/market.css";
import "./style/desktop/market.css"

import IndexD from './views/desktop/IndexD';
import IndexM from './views/mobile/IndexM';

export default function Market() {
  return (
    <div className="market-page">
      <div className="mobile-view">
          <IndexM />
      </div>
      <div className="destop-view">
         <IndexD />
      </div>
    </div>
  )
}
