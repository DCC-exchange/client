import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function IndexM() {
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

