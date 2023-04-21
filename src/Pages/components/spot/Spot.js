import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import "./styles/spot.css"
import "./styles/limit.css"
export default function Spot() {
  return (
    <div className="spot-trade">
        <div className="spot-trade-container">
            <div className="spot-trade-navigation">
                <NavLink to="convert">
                    <p>Convert</p>
                </NavLink>
                <NavLink to="spot-market">
                    <p>Spot</p>
                </NavLink>
            </div>
            <Outlet />
        </div>
    </div>
  )
}
