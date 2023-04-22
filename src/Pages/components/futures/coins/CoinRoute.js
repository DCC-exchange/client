import React from 'react'
import { RiCloseLine } from "react-icons/ri";
import "../style/coinRoute.css"

export default function CoinRoute() {
  return (
    <div className='coin-route'>
        <div className="coin-route-container">
            <div className="close">
                <div className="close-container">
                    <h3><RiCloseLine /></h3>
                </div>
            </div>
            <div className="coin-route-content">
                <h1>Futures</h1>
            </div>
        </div>
    </div>
  )
}
