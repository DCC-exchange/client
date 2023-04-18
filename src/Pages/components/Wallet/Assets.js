import React from 'react'
import './overview/styles/assets.css'
import { FaAngleLeft } from "react-icons/fa";
import { Outlet , NavLink, useNavigate } from 'react-router-dom'

export default function Assets() {
  const navigate = useNavigate()
  const handleClose = (()=>{
      navigate("/hot")
  })

  return (
    <div className='asset-main-page'>
        <div className="navigate-back"  onClick={handleClose}>
          <h3><FaAngleLeft /></h3>
        </div>
        <div className='asset-page-select'>
            <div className='over-view'>
              <NavLink to='over-view'>
                  Overview
              </NavLink>
            </div>
            <div className='spott'>
            <NavLink to='spot'>
                  Spot
              </NavLink>
            </div>
            <div className='futures'>
            <NavLink to='futures'>
                  Futures
              </NavLink>
            </div>
        </div>
        
        <Outlet />
    </div>
  )
}