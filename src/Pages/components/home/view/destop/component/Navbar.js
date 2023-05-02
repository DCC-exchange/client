import React, { useState } from 'react'
import logo from "../../../images/dcc logo.svg"
import { RiArrowDropDownLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import Spot from './spot/Spot';

export default function Navbar() {

  const [ spotDrop, setSpotDrop ] = useState(false)
  // const [ derivativeDrop, setDerivativeDrop ] = useState(false)

  const handleShowSpot = ((e)=>{
    if(e === 1){
      setSpotDrop(true)
    }else{
      setSpotDrop(false)
    }
  })

  return (
    <div className="navbar-destop">
        <div className="navbar-destop-container">
            <div className="logo-container">
                <div className="logo-content">
                    <div className="logo-img">
                      <img src={logo} alt="" />
                    </div>
                    <div className="logo-name">
                      <h3>DCC</h3>
                    </div>
                </div>
            </div>
          <div className="navigation-routes">
            <div className="market-container">
              <div className="market-content">
                  <h4>Market</h4>
              </div>
            </div>
            <div onMouseEnter={()=>handleShowSpot(1)} onMouseLeave={handleShowSpot(2)} className="spot-container">
              <div className="spot-content">
                  <div className="spot-text">
                    <h4>Spot</h4>
                  </div>
                  <div className="spot-arrow">
                      <h4><RiArrowDropDownLine /></h4>
                  </div>
              </div>
              { spotDrop &&  <Spot /> }
               
            </div>
            <div className="spot-container">
              <div className="spot-content">
                  <div className="spot-text">
                    <h4>Derivatives</h4>
                  </div>
                  <div className="spot-arrow">
                      <h4><RiArrowDropDownLine /></h4>
                  </div>
              </div>
            </div>
  
            <div className="market-container">
              <div className="market-content">
                  <h4>Copy Trading</h4>
              </div>
            </div>
            <div className="market-container">
              <div className="market-content">
                  <h4>Affiliate</h4>
              </div>
            </div>
        </div>   

            <div className="login-container">
                <div className="login-content">
                    <div className="login-text">
                        <NavLink to="/sign/login"> Login </NavLink>
                    </div>
                    <div className="signup-button">
                        <NavLink to="/sign/signup"> Get started </NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
