import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import "./style/futures.css"
import "./style/all.css"

export default function Futures() {
  return (
    <div className="futures-trade">
        <div className="futures-trade-container">
            <div className="futures-trade-navigation">
                <div className="futures-trade-navigation-container">
                    <NavLink to="usdt-m">
                        <p>USDT-M</p>
                    </NavLink>
                    <NavLink to="coin-m">
                        <p>COIN-M</p>
                    </NavLink>
                </div>
            </div>
            <Outlet />
        </div>
    </div>
  )
}
