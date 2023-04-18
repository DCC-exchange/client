import React from 'react'
import { NavLink } from 'react-router-dom'
import "./styles/spot.css"
export default function Spot() {
  return (
    <div className="spot-trade">
        <div className="spot-trade-container">
            <div className="spot-trade-navigation">
                <NavLink to="convert">
                    <p>Convert</p>
                </NavLink>
                <NavLink to="spot">
                    <p>Spot</p>
                </NavLink>
            </div>

        </div>
    </div>
  )
}
