import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import "./style/futures.css"

export default function Futures() {
  return (
    <div className="spot-trade">
        <div className="spot-trade-container">
            <div className="spot-trade-navigation">
                <NavLink to="usdt-m">
                    <p>USDT-M</p>
                </NavLink>
                <NavLink to="coin-m">
                    <p>COIN-M</p>
                </NavLink>
            </div>
            <Outlet />
        </div>
    </div>
  )
}
